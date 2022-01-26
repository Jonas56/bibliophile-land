/* eslint-disable no-undef */
const express = require("express");
require("express-async-errors");
const app = express();
const middleware = require("./utils/middleware");
const path = require("path");
const cors = require("cors");
const api = require("./routes/api");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(middleware.requestLogger);

app.use("/v1", api);

// app.use("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
