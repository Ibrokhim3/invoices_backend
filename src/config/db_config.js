const pg = require("pg");

const { Pool } = pg;

// module.exports = pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   keepAlive: true,
//   ssl: true,
// });

module.exports = pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "invoices",
  password: "2626",
  port: process.env.PORT_POSTGRES,
});
