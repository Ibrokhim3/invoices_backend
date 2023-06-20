require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./src/routers/invoices-router");
const usersRouter = require("./src/routers/auth-router");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("/", usersRouter);

const PORT = process.env.PORT || 1201;

app.listen(PORT, () => {
  console.log(`${PORT} is running`);
});
