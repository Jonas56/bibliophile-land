const pingRouter = require("express").Router();
const httpGetPing = require("../controllers/ping");

pingRouter.get("/", (req, res) => {
  return httpGetPing.getAll(req, res);
});

module.exports = pingRouter;
