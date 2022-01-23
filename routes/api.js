const api = require("express").Router();
const booksRouter = require("./booksRouter");
const authorsRouter = require("./authorsRouter");

api.use("/api/books", booksRouter);
api.use("/api/authors", authorsRouter);

module.exports = api;
