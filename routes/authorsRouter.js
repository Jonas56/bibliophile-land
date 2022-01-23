const authorsRouter = require("express").Router();
const httpRequests = require("../services/authorsServices");

authorsRouter.get("/", httpRequests.httpGetAllAuthors);

// authorsRouter.get("/:id", );

// authorsRouter.post("/");

// authorsRouter.put("/:id");

// authorsRouter.delete("/:id");

module.exports = authorsRouter;
