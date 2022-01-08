const { sequelize } = require("../models");

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected");
  } catch (err) {
    console.log("connecting database failed");
    // eslint-disable-next-line no-undef
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
