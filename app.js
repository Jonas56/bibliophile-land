const express = require("express");
require("express-async-errors");
const app = express();
const middleware = require("./utils/middleware");
const api = require("./routes/api");

app.use(express.json());
app.use(middleware.requestLogger);

app.use("/v1", api);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
