const {v4: UUID} = require("uuid");
const configs = require("../../configs");

const {
  uploadFileS3Service,
  logFileDataService,
} = require("../../services/file-upload-service");

const { s3 } = configs.services.aws;
const { bucketName, fileFolderPath } = s3;

const generateKey = ({ fileName, fileFolderPath }) => {
  return `${fileFolderPath}/${Date.now().toString()}_${fileName}`;
};
const uploadFileController = async ({ file }) => {
  try {
    if (file) {
      const fileData = file.data;
      const fileName = file.name || "default";
      const mimeType = file.mimeType || "model/gltf-binary";
      const url = generateKey({ fileName, fileFolderPath });
      const uploadFileS3Response = await uploadFileS3Service({
        file: fileData,
        bucketName,
        url,
        mimeType,
      });
      if (uploadFileS3Response.error) {
        console.log(uploadFileS3Response.error);
        return {
          error: uploadFileS3Response.error,
          payload: {},
        };
      }

      const { fileUrl } = uploadFileS3Response.payload;
      const fileId = `FID_${UUID()}`.substring(0,12);
      const currDate = new Date();
      const uploadedTime = `${currDate.getDate()}/${
        currDate.getMonth() + 1
      }/${currDate.getFullYear()} ${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}}`;
      const fileDataResponse = await logFileDataService({
        fileId,
        fileName,
        fileType: mimeType,
        fileUrl,
        uploadedTime
      });
      if(fileDataResponse.error){
        return{
          error: fileDataResponse.error,
          payload: {}
        }
      }
      return {
        error: false,
        payload: fileDataResponse.payload,
      };
    } else {
      console.log("FILE_NOT_FOUND_ERROR");
      return {
        error: "FILE_NOT_FOUND_ERROR",
        payload: {},
      };
    }
  } catch (error) {
    console.log("UPLOAD_FILE_CONTROLLER_ERROR", error);
    return {
      error: "UPLOAD_FILE_CONTROLLER_ERROR",
      payload: {},
    };
  }
};

module.exports = uploadFileController;
