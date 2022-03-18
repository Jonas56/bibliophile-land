const { Author } = require("../models");
const { getPagination } = require("../utils/query");

const httpGetAllAuthors = async (req, res) => {
  const { offset, limit } = getPagination(req.query);
  const authors = await Author.findAndCountAll({
    attributes: ["id", "name", "image_link"],
    limit,
    offset,
  });
  return res.status(200).json(authors);
};

const httpGetAuthorById = async (req, res) => {
  const authorid = Number(req.params.id);
  const author = await Author.findByPk(authorid, {
    attributes: ["id", "name", "image_link", "biography"],
  });
  return res.status(200).json(author);
};

const httpAddNewAuthor = async (req, res) => {
  const author = req.body;
  const created = await Author.create(author);
  return res.status(201).json({
    id: created.id,
    name: created.name,
    image_link: created.image_link,
    biography: created.biography,
  });
};

module.exports = { httpGetAllAuthors, httpGetAuthorById, httpAddNewAuthor };
