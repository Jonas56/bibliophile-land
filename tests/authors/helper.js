const authors = [
  {
    name: "Stephen Hawking",
    biography:
      "Stephen Hawking was a British scientist, professor and author who performed groundbreaking work in physics and cosmology, and whose books helped to make science accessible to everyone. At age 21, while studying cosmology at the University of Cambridge, he was diagnosed with amyotrophic lateral sclerosis (ALS).",
  },
  {
    name: "Christian Bauer",
  },
  {
    name: "Gavin King",
  },
  {
    name: "Clinton Begin",
  },
  {
    name: "Brandon Goodin",
  },
  {
    name: "Emmanuel Bernard",
  },
  {
    name: "Larry Meadors",
  },
  {
    name: "John Griffin",
  },
  {
    name: "Bear Bibeault",
  },
  {
    name: "Yehuda Katz",
  },
];

const { Author } = require("../../models");

const clearDB = async () => {
  await Author.destroy({ where: {}, truncate: { cascade: true } });
};
const loadDataToDb = async () => {
  await Author.bulkCreate(authors);
};

module.exports = { loadDataToDb, clearDB };
