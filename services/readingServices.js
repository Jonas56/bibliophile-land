const { Book, User, Reading } = require("../models");

const httpGetAllReadedBooks = async (req, res) => {
  // TODO: Extract id from req middleware
  const id = 1;
  const userBooks = await User.findByPk(id, {
    include: {
      model: Book,
      as: "reading",
      attributes: ["id", "title", "image_link", "isbn"],
      through: {
        attributes: [],
      },
    },
    attributes: ["id", "username", "name"],
  });
  if (userBooks) {
    return res.status(200).json(userBooks);
  } else {
    return res.status(400).json({ message: "Cannot find this user" });
  }
};

const httpAddBookToReadingList = async (req, res) => {
  // TODO: Extract id from middleware
  const userId = 1;
  const bookId = Number(req.params.bookid);

  const user = await User.findByPk(userId);

  const book = await Book.findByPk(bookId);

  if (!(user && book)) {
    return res.status(400).json({ message: "Cannot find this book!" });
  }

  const associate = await user.addReading(book, {
    through: { Reading },
  });

  if (associate[0]) {
    return res.status(200).json({ message: "Book added succesfully!" });
  } else {
    return res.status(400).json({ error: "Book already added!" });
  }
};

const httpRemoveFromReadingList = async (req, res) => {
  // TODO: Extract id from middleware
  const userId = 1;
  const bookId = Number(req.params.bookid);

  const user = await User.findByPk(userId);

  const book = await Book.findByPk(bookId);

  if (!(user && book)) {
    return res.status(400).json({ message: "Cannot find the provided book" });
  }

  const associate = await user.removeReading(book, {
    through: { Reading },
  });

  if (associate) {
    return res.status(200).json({ message: "Book removed succesfully!" });
  } else {
    return res.status(400).json({ error: "Book not found in the collection!" });
  }
};

const httpUpdateRank = async (req, res) => {
  // TODO: Extract id from middleware
  const userId = 1;
  const bookId = Number(req.params.bookid);

  const user = await User.findByPk(userId);

  const book = await Book.findByPk(bookId);

  if (!(user && book)) {
    return res.status(400).json({ message: "Cannot find the provided book" });
  }
};

module.exports = {
  httpGetAllReadedBooks,
  httpAddBookToReadingList,
  httpRemoveFromReadingList,
  httpUpdateRank,
};
