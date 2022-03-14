const collectionRouter = require("express").Router();
const httpRequests = require("../services/collectionServices");

collectionRouter.get("/", httpRequests.httpGetAllUserBooks);

collectionRouter.post("/:bookid", httpRequests.httpAddBookToCollection);

collectionRouter.delete("/:bookid", httpRequests.httpRemoveFromCollection);

module.exports = collectionRouter;
