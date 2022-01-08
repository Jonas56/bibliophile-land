"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AuthorBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  AuthorBooks.init(
    {
      book_id: DataTypes.INTEGER,
      author_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AuthorBooks",
    }
  );
  return AuthorBooks;
};
