const { User } = require("../models");

const httpHanldeRegister = async (req, res) => {
  const body = req.body;
  const createdUser = await User.create({
    name: body.name,
    email: body.email,
    username: body.username,
    hashed_password: body.password,
    age: body.age,
  });

  return res.status(201).json({
    name: createdUser.name, email: createdUser.email, username: createdUser.username,
    mesagge: "You have succesfully signup!",
  });
};

module.exports = { httpHanldeRegister };
