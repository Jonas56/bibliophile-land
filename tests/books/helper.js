const { book, author, category, validBook, nonValidBook } = require("./data");
const { Book, Author, Category } = require("../../models");

const clearDB = async () => {
  await Book.destroy({ where: {}, truncate: { cascade: true } });
  await Author.destroy({ where: {}, truncate: { cascade: true } });
  await Category.destroy({ where: {}, truncate: { cascade: true } });
};
const loadDataToDb = async () => {
  const createdBook = await Book.create(book);
  const createdAuthor = await Author.create(author);
  const createdCategory = await Category.create(category);

  await createdBook.addAuthors(createdAuthor, { through: "AuthorBooks" });
  await createdBook.addCategories(createdCategory, {
    through: "CategoryBooks",
  });
};

module.exports = { loadDataToDb, clearDB, validBook, nonValidBook };
