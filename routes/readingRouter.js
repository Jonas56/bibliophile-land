const readingRouter = require("express").Router();
const httpRequests = require("../services/readingServices");

readingRouter.get("/", httpRequests.httpGetAllReadedBooks);

readingRouter.post("/:bookid", httpRequests.httpAddBookToReadingList);

readingRouter.put("/:bookid", httpRequests.httpUpdateRank);

readingRouter.delete("/:bookid", httpRequests.httpRemoveFromReadingList);

module.exports = readingRouter;
