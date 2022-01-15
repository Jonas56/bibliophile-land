const booksList = require("./books.json");
const {
  Book,
  Category,
  Author,
  AuthorBooks,
  CategoryBooks,
} = require("../models");

console.log(booksList.length);

async function loadDataTodb() {
  booksList.map(async (b) => {
    const newBook = {
      title: b.title,
      isbn: b.isbn,
      page_count: b.page_count,
      published_date: b.published_date.$date,
      image_link: b.image_link,
      description: b.description,
      status: "",
      authors: b.authors,
      categories: b.categories,
    };
    try {
      const book = await Book.create({ ...newBook });
      newBook.authors.forEach(async (a) => {
        let author = await Author.findOne({ where: { name: a } });
        if (!author) {
          author = await Author.create({ name: a });
        }
        try {
          // await book.addAuthors(author, { through: "AuthorBooks" });
          await AuthorBooks.create({
            book_id: book.id,
            author_id: author.id,
          });
        } catch (err) {
          console.log(err.message);
        }
      });

      newBook.categories.forEach(async (c) => {
        let category = await Category.findOne({ where: { name: c } });
        if (!category) {
          category = await Category.create({ name: c });
        }
        try {
          // await book.addCategories(category, { through: "CategoryBooks" });
          await CategoryBooks.create({
            book_id: book.id,
            category_id: category.id,
          });
        } catch (err) {
          console.log(err.message);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  });
}

module.exports = { loadDataTodb };
