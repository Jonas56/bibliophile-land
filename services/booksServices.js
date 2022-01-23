const { Book, Author, Category } = require("../models");
const { getPagination } = require("../utils/query");

const httpGetAllBooks = async (req, res) => {
  const { offset, limit } = getPagination(req.query);
  const books = await Book.findAll({
    include: [
      {
        model: Author,
        as: "authors",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Category,
        as: "categories",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
    attributes: ["title"],
    limit,
    offset,
    order: [["title", "ASC"]],
  });
  res.status(200).json(books);
};

const httpGetBookById = async (req, res) => {
  const id = Number(req.params.id);

  const book = await Book.findByPk(id, {
    include: [
      {
        model: Author,
        as: "authors",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Category,
        as: "categories",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  if (book) {
    return res.status(201).json(book);
  } else {
    return res.status(400).json({ message: "Book not found!" });
  }
};

const httpAddnewBook = async (req, res) => {
  const body = req.body;

  const newBook = await Book.create(body);

  // Add authors + M:N
  body.authors.map(async (a) => {
    let author = await Author.findOne(a);
    if (!author) author = await Author.create(a);
    await newBook.addAuthors(author, { through: "AuthorBooks" });
  });

  // Add categories + M:N
  body.categories.map(async (c) => {
    let category = await Category.findOne(c);
    if (!category) category = await Category.create(c);
    await newBook.addCategories(category, { through: "CategoryBooks" });
  });

  return res.status(201).json(newBook);
};

const httpUpdateBook = async (req, res) => {
  // TODO: Http update book by id req.params.id
  return res.status(201).json({ message: "Route not yet set" });
};

const httpDeleteBook = async (req, res) => {
  const id = Number(req.params.id);
  const book = await Book.findByPK(id);
  book.destroy();
  return res.status(200).json({ message: "Book deleted succesfully" });
};

module.exports = {
  httpGetAllBooks,
  httpGetBookById,
  httpAddnewBook,
  httpDeleteBook,
  httpUpdateBook,
};
