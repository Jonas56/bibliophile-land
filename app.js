/* eslint-disable no-undef */
const express = require("express");
require("express-async-errors");
const app = express();
const compression = require("compression");
const middleware = require("./utils/middleware");
const path = require("path");
const cors = require("cors");
const api = require("./routes/api");

const shouldCompress = (req, res) => {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
};

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(
  compression({
    filter: shouldCompress,
    level: 7,
  })
);
app.use(middleware.requestLogger);

app.use("/v1", api);

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
