"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book }) {
      // define association here
      this.belongsToMany(Book, {
        through: "AuthorBooks",
        foreignKey: "author_id",
        as: "authors",
      });
      // TODO: Super Many-To-Many Relationship
      // From https://sequelize.org/master/manual/advanced-many-to-many.html#through-tables-versus-normal-tables-and-the--quot-super-many-to-many-association-quot-
      // this.hasMany(AuthorBooks);
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
