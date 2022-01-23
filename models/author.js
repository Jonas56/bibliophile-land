"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, AuthorBooks }) {
      // define association here
      this.belongsToMany(Book, {
        through: AuthorBooks,
        foreignKey: "author_id",
        as: "books",
      });
    }
  }
  Author.init(
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
      biography: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: "Author",
    }
  );
  return Author;
};
