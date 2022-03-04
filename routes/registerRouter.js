const registerRouter = require("express").Router();
const registerServices = require("../services/registerServices");

registerRouter.post("/", registerServices.httpHanldeRegister);

module.exports = registerRouter;
