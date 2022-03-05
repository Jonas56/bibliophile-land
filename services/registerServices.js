const { User } = require("../models");

const vlaidatePassword = (value) => {
  const validPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return validPassword.test(value);
};

const httpHanldeRegister = async (req, res) => {
  const body = req.body;

  if (!body.password || !vlaidatePassword(body.password)) {
    return res.status(400).json({
      error:
        "Password must contain minimum eight characters, at least one letter, one number and one special character",
    });
  }
  const createdUser = await User.create({
    name: body.name,
    email: body.email,
    username: body.username,
    hashed_password: body.password,
    age: body.age,
  });

  return res.status(201).json(createdUser);
};

module.exports = { httpHanldeRegister };
