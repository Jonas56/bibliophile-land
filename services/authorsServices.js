const { Author } = require("../models");
const { getPagination } = require("../utils/query");

const httpGetAllAuthors = async (req, res) => {
  const { offset, limit } = getPagination(req.query);
  const authors = await Author.findAll({
    attributes: ["name"],
    limit,
    offset,
  });
  return res.status(201).json(authors);
};

module.exports = { httpGetAllAuthors };
