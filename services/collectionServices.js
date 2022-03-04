const { Book, User } = require("../models");

const httpGetAllUserBooks = async (req, res) => {
  const id = Number(req.params.userid);
  const userBooks = await User.findByPk(id, {
    include: {
      model: Book,
      as: "books",
      through: {
        attributes: [],
      },
    },
  });
  if (userBooks) {
    return res.status(200).json(userBooks);
  } else {
    return res.status(400).json({ message: "Cannot find this user" });
  }
};

module.exports = { httpGetAllUserBooks };
