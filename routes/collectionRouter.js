const collectionRouter = require("express").Router();
const httpRequests = require("../services/collectionServices");

collectionRouter.get("/books", httpRequests.httpGetAllUserBooks);

collectionRouter.post("/books/:bookid", httpRequests.httpAddBookToCollection);

collectionRouter.delete(
  "/books/:bookid",
  httpRequests.httpRemoveFromCollection
);

module.exports = collectionRouter;
