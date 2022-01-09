"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  UserBooks.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Book",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "UserBooks",
    }
  );
  return UserBooks;
};
