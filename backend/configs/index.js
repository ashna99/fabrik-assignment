require("dotenv").config();

const configs = {
  services: {
    aws: {
      region: process.env.AWS_REGION,
      s3: {
        bucketName: process.env.AWS_BUCKET,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        fileFolderPath:
          process.env.NODE_ENV === "production"
            ? "file-uploads/production"
            : "file-uploads/staging",
      },
      rds: {
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT, 10),
        connectionLimit: parseInt(process.env.MYSQL_CONNECTION_LIMIT, 10),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        connectTimeout: parseInt(process.env.MYSQL_CONNECTION_TIMEOUT, 10),

        tables: {
          LOG_FILE_DATA_TABLE: "LOG_FILE_DATA"
        }
      }
    },
  },
};

module.exports = configs;
