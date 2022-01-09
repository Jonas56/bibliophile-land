"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  CategoryBooks.init(
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
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Category",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CategoryBooks",
    }
  );
  return CategoryBooks;
};
