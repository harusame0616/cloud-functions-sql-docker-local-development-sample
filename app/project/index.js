const mysql = require("mysql2/promise");

const { connectionName, dbUser, dbPassword, dbPort, dbName } = process.env;
const mysqlConfig = {
  connectionLimit: 1,
  user: dbUser,
  password: dbPassword,
  database: dbName,
};

if (process.env.NODE_ENV === "production") {
  mysqlConfig.socketPath = `/cloudsql/${connectionName}`;
} else {
  mysqlConfig.host = "cloud_sql_proxy";
  mysqlConfig.port = dbPort;
}

let mySqlPool;
exports.main = async (_req, res) => {
  if (!mySqlPool) {
    mySqlPool = mysql.createPool(mysqlConfig);
  }

  const [row] = await mySqlPool.query("SELECT now()");

  res.status(200).send(row[0]);
};
