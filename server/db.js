const { Sequelize } = require("sequelize");
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = require("./config");

module.exports = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
  }
);
