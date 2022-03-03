const { Book, User } = require("../models");

const httpGetAllUserBooks = async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Book,
      as: "books",
      through: {
        attributes: [],
      },
    },
  });
  return res.status(200).json(users);
};

module.exports = { httpGetAllUserBooks };
