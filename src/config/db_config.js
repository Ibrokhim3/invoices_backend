const pg = require("pg");

const { Pool } = pg;

module.exports = pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  keepAlive: true,
  ssl: true,
  min: 0,
  max: 7,
  acquireTimeoutMillis: 300000,
  createTimeoutMillis: 300000,
  destroyTimeoutMillis: 50000,
  idleTimeoutMillis: 300000,
  reapIntervalMillis: 10000,
  createRetryIntervalMillis: 2000,
  propagateCreateError: false,
});

// module.exports = pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "invoices",
//   password: "2626",
//   port: process.env.PORT_POSTGRES,
// });
