const { Book, User, UserBooks } = require("../models");

const httpGetAllUserBooks = async (req, res) => {
  // TODO: Extract id from req middleware
  const id = 1;
  const userBooks = await User.findByPk(id, {
    include: {
      model: Book,
      as: "books",
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

const httpAddBookToCollection = async (req, res) => {
  // TODO: Extract id from middleware
  const userId = 1;
  const bookId = Number(req.params.bookid);

  const user = await User.findByPk(userId);

  const book = await Book.findByPk(bookId);

  if (!(user && book)) {
    return res.status(400).json({ message: "Cannot find the provided book!" });
  }

  const associate = await user.addBooks(book, { through: { UserBooks } });

  if (associate[0]) {
    return res.status(200).json({ message: "Book added succesfully!" });
  } else {
    return res.status(400).json({ error: "Book already added!" });
  }
};

const httpRemoveFromCollection = async (req, res) => {
  // TODO: Extract id from middleware
  const userId = 1;
  const bookId = Number(req.params.bookid);

  const user = await User.findByPk(userId);

  const book = await Book.findByPk(bookId);

  if (!(user && book)) {
    return res.status(400).json({ message: "Cannot find the provided book" });
  }

  const associate = await user.removeBooks(book, { through: { UserBooks } });

  console.log("Association", associate);
  if (associate) {
    return res.status(200).json({ message: "Book removed succesfully!" });
  } else {
    return res.status(400).json({ error: "Book already removed!" });
  }
};

module.exports = {
  httpGetAllUserBooks,
  httpAddBookToCollection,
  httpRemoveFromCollection,
};
