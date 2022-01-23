const api = require("express").Router();
const booksRouter = require("./booksRouter");

api.use("/api/books", booksRouter);

module.exports = api;
