const pg = require("pg");

const { Pool } = pg;

module.exports = pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "invoices",
  password: "2626",
  port: process.env.PORT_POSTGRES,
});
