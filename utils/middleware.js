const logger = require("./logger");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  let errors = {};
  console.log(error.name);
  if (error.name === "SequelizeValidationError") {
    error.errors.forEach((e) => {
      errors[e.path] = e.message;
    });
    return response.status(400).json(errors);
  } else if (error.name === "SequelizeUniqueConstraintError") {
    error.errors.forEach((e) => {
      errors[e.path] = e.message;
    });
    return response.status(400).json(errors);
  }
  response.status(400).json({ message: error.message });
  next();
};

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

const userAuthentication = async (req, res, next) => {
  const token = getTokenFrom(req);
  // eslint-disable-next-line no-undef
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findOne({ where: { id: decodedToken.id } });
  if (user) {
    req.body.userId = decodedToken.id;
  } else {
    throw new Error("Token missing or invalid");
  }
  next();
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  userAuthentication,
};
