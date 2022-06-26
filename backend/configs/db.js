const MYSQL = require('mysql');
const configs = require('./index');

const { rds } = configs.services.aws;
const AWSMySQLConnector = MYSQL.createPool({
  host: rds.host,
  port: rds.port,
  connectionLimit: rds.connectionLimit,
  user: rds.user,
  password: rds.password,
  database: rds.database,
  connectTimeout: rds.connectTimeout
});

module.exports = AWSMySQLConnector;