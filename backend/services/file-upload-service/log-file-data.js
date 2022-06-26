const AWSMySQLConnector = require("../../configs/db");
const configs = require("../../configs");

const { LOG_FILE_DATA_TABLE } = configs.services.aws.rds.tables;


const logFileDataService = async ({
  fileId,
  fileName,
  fileType,
  fileUrl,
  uploadedTime,
}) => {
  console.log("inside logFileDataService");
  const logFileDataPromise = new Promise((resolve) => {
    try {
      AWSMySQLConnector.getConnection((connectionError, connection) => {
        if (connectionError) {
          console.log(
            "LOG_FILE_DATA_SERVICE_DB_CONNECTION_ERROR",
            connectionError
          );
          resolve({
            error: "LOG_FILE_DATA_SERVICE_DB_CONNECTION_ERROR",
            payload: {},
          });
        }
        connection.query(
          `INSERT INTO ${LOG_FILE_DATA_TABLE} (file_id, file_name, file_type, file_url, uploaded_time) VALUES ?`,
          [[[fileId, fileName, fileType, fileUrl, uploadedTime]]],
          (logFileDataServiceError) => {
            connection.release();
            if (logFileDataServiceError) {
              console.log(
                "LOG_FILE_DATA_SERVICE_ERROR",
                logFileDataServiceError
              );
              resolve({ error: "LOG_FILE_DATA_SERVICE_ERROR", payload: {} });
            } else {
              resolve({
                error: false,
                payload: {
                  fileId,
                  fileName,
                  fileType,
                  fileUrl,
                  uploadedTime,
                },
              });
            }
          }
        );
      });
    } catch (error) {
      console.log("LOG_FILE_DATA_SERVICE_ERROR", error);
      resolve({ error: "LOG_FILE_DATA_SERVICE_ERROR", payload: {} });
    }
  });
  const logFileDataServiceResponse = await logFileDataPromise;
  return logFileDataServiceResponse;
};

module.exports = logFileDataService;
