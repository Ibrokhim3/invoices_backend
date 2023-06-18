require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./src/routers/post-router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);

const PORT = process.env.PORT || 1201;

app.listen(PORT, () => {
  console.log(`${PORT} is running`);
});
