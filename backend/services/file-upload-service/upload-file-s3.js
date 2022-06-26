const AWS = require("aws-sdk");
const configs = require("../../configs");

const awsConfig = configs.services.aws;
const { accessKeyId, secretAccessKey } = awsConfig.s3;
const { region } = awsConfig;

const config = {
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
};
const s3 = new AWS.S3(config);

const uploadFileS3Service = async ({ file, bucketName, url, mimeType }) => {
  const uploadFileToS3Promise = new Promise((resolve) => {
    try {
      if (file && bucketName && url) {
        const params = { 
            Bucket: bucketName, 
            Key: url, 
            Body: file,
            ContentType: mimeType,
            ACL: "public-read" 
        };
        const uploadResp = s3.upload(params).promise();
        uploadResp
          .then((data) => {
            console.log(data.Location);
            resolve({ error: false, payload: { fileUrl: data.Location } });
          })
          .catch((error) => {
            console.log("UPLOAD_FILE_TO_S3_SERVICE_ERROR", error);
            resolve({
              error: "UPLOAD_FILE_TO_S3_SERVICE_ERROR",
              payload: {},
            });
          });
      } else {
        resolve({
          error: "UPLOAD_FILE_TO_S3_SERVICE_FILE_NOT_FOUND_ERROR",
          payload: {},
        });
      }
    } catch (error) {
      console.log("UPLOAD_FILE_TO_S3_SERVICE_ERROR", error);
      resolve({
        error: "UPLOAD_FILE_TO_S3_SERVICE_ERROR",
        payload: {},
      });
    }
  });

  const uploadFileToS3Response = await uploadFileToS3Promise;
  return uploadFileToS3Response;
};

module.exports = uploadFileS3Service;
