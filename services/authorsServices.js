const { Author } = require("../models");
const { getPagination } = require("../utils/query");

const httpGetAllAuthors = async (req, res) => {
  const { offset, limit } = getPagination(req.query);
  const authors = await Author.findAndCountAll({
    attributes: ["name"],
    limit,
    offset,
  });
  return res.status(200).json(authors);
};

module.exports = { httpGetAllAuthors };
