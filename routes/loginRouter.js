const loginRouter = require("express").Router();
const loginServices = require("../services/loginServices");

loginRouter.post("/", loginServices.httpHandleLogin);

module.exports = loginRouter;
