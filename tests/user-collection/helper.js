const { book, book2, author, category, user } = require("./data");
const { Book, Author, Category, User, UserBooks } = require("../../models");

const clearDB = async () => {
  await Book.sync({ force: true });
  await Author.sync({ force: true });
  await Category.sync({ force: true });
  await User.sync({ force: true });
  await UserBooks.sync({ force: true });
};
const loadDataToDb = async () => {
  const createdBook = await Book.create(book);
  const createdBook2 = await Book.create(book2);
  const createdAuthor = await Author.create(author);
  const createdCategory = await Category.create(category);
  const createdUser = await User.create(user);

  await createdBook.addAuthors(createdAuthor, { through: "AuthorBooks" });
  await createdBook.addCategories(createdCategory, {
    through: "CategoryBooks",
  });
  await createdBook2.addAuthors(createdAuthor, { through: "AuthorBooks" });
  await createdBook2.addCategories(createdCategory, {
    through: "CategoryBooks",
  });
  await createdUser.addBooks(createdBook, { through: "UserBooks" });
};

module.exports = { loadDataToDb, clearDB };
