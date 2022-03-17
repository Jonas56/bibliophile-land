const authorsRouter = require("express").Router();
const httpRequests = require("../services/authorsServices");

authorsRouter.get("/", httpRequests.httpGetAllAuthors);

authorsRouter.get("/:id", httpRequests.httpGetAuthorById);

authorsRouter.post("/", httpRequests.httpAddNewAuthor);

// authorsRouter.put("/:id");

// authorsRouter.delete("/:id");

module.exports = authorsRouter;
