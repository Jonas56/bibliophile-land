const { User } = require("../../models");

const user = {
  name: "Jonas",
  email: "jonas@laous.com",
  username: "Jonas56",
  hashed_password: "Jonas@123",
  age: 45,
};

const clearDB = async () => {
  await User.sync({ force: true });
};

const loadDataToDb = async () => {
  await User.create(user);
};

module.exports = { loadDataToDb, clearDB };
