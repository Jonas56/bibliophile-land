const api = require("express").Router();
const pingRouter = require("./pingRouter");

api.use("/api/ping", pingRouter);

module.exports = api;
