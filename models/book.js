"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Author,
      AuthorBooks,
      Category,
      CategoryBooks,
      User,
      UserCollection,
      Reading,
    }) {
      // define association here
      this.belongsToMany(Author, {
        through: AuthorBooks,
        foreignKey: "book_id",
        as: "authors",
      });

      this.belongsToMany(Category, {
        through: CategoryBooks,
        foreignKey: "book_id",
        as: "categories",
      });

      this.belongsToMany(User, {
        through: UserCollection,
        foreignKey: "book_id",
        as: "users",
      });

      this.belongsToMany(User, {
        through: Reading,
        foreignKey: "book_id",
        as: "users_read",
      });
    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      page_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      published_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      image_link: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: "Book",
    }
  );
  return Book;
};
