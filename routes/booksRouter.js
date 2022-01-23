const booksRouter = require("express").Router();
const httpRequests = require("../services/booksServices");

booksRouter.get("/", httpRequests.httpGetAllBooks);

booksRouter.get("/:id", httpRequests.httpGetBookById);

booksRouter.post("/", httpRequests.httpAddnewBook);

booksRouter.put("/:id", httpRequests.httpUpdateBook);

booksRouter.delete("/:id", httpRequests.httpDeleteBook);

module.exports = booksRouter;
