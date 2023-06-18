import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "invoices",
  password: "2626",
  port: process.env.PORT_POSTGRES,
});
