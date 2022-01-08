"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Author.init(
    {
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
