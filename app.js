const express = require("express");
require("express-async-errors");
const app = express();
const middleware = require("./utils/middleware");
const api = require("./routes/api");
const path = require("path");

app.use(express.json());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "dist")));
app.use(middleware.requestLogger);

app.use("/v1", api);

app.use("/*", (req, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
