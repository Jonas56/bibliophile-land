const api = require("express").Router();
const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");
const booksRouter = require("./booksRouter");
const authorsRouter = require("./authorsRouter");
const collectionRouter = require("./collectionRouter");
const readingRouter = require("./readingRouter");

api.use("/api/login", loginRouter);
api.use("/api/register", registerRouter);
api.use("/api/books", booksRouter);
api.use("/api/authors", authorsRouter);
api.use("/api/collection", collectionRouter);
api.use("/api/reading", readingRouter);

module.exports = api;
