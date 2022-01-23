"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, CategoryBooks }) {
      // define association here
      this.belongsToMany(Book, {
        through: CategoryBooks,
        foreignKey: "category_id",
        as: "books",
      });
    }
  }
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: "Category",
    }
  );
  return Category;
};
