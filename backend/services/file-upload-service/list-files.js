const AWSMySQLConnector = require("../../configs/db");
const configs = require("../../configs");

const { LOG_FILE_DATA_TABLE } = configs.services.aws.rds.tables;

const listFilesService = async () => {
  console.log("inside listFilesService");
  const listFilesPromise = new Promise((resolve) => {
    try {
      AWSMySQLConnector.getConnection((connectionError, connection) => {
        if (connectionError) {
          console.log(
            "LIST_FILES_SERVICE_DB_CONNECTION_ERROR",
            connectionError
          );
          resolve({
            error: "LIST_FILES_SERVICE_DB_CONNECTION_ERROR",
            payload: {},
          });
        }
        connection.query(
          `SELECT file_id AS fileId, file_name AS fileName, file_type AS fileType,
          file_url AS fileUrl,uploaded_time AS uploadedTime FROM ${LOG_FILE_DATA_TABLE}`,
          [],
          (listFilesServiceError, files) => {
            connection.release();
            if (listFilesServiceError) {
              console.log("LIST_FILES_SERVICE_ERROR", listFilesServiceError);
              resolve({ error: "LIST_FILES_SERVICE_ERROR", payload: {} });
            } else {
              resolve({
                error: false,
                payload: files,
              });
            }
          }
        );
      });
    } catch (error) {
      console.log("LIST_FILES_SERVICE_ERROR", error);
      resolve({ error: "LIST_FILES_SERVICE_ERROR", payload: {} });
    }
  });
  const listFilesServiceResponse = await listFilesPromise;
  return listFilesServiceResponse;
};

module.exports = listFilesService;
