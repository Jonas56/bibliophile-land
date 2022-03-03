const collectionRouter = require("express").Router();
const httpRequests = require("../services/collectionServices");

collectionRouter.get("/:userid/books", httpRequests.httpGetAllUserBooks);

// collectionRouter.get("/:id", (req, res) => {
//   return res.json({ message: "Hello World" });
// });

// collectionRouter.post("/", (req, res) => {
//   return res.json({ message: "Hello World" });
// });

// collectionRouter.put("/:id", (req, res) => {
//   return res.json({ message: "Hello World" });
// });

// collectionRouter.delete("/:id", (req, res) => {
//   return res.json({ message: "Hello World" });
// });

module.exports = collectionRouter;
