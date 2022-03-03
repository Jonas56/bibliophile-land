"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, UserBooks }) {
      // define association here
      this.belongsToMany(Book, {
        through: UserBooks,
        foreignKey: "user_id",
        as: "books",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      hashed_password: {
        type: DataTypes.STRING(64),
        validate: {
          is: /^[0-9a-f]{64}$/i,
        },
      },
      age: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: "User",
    }
  );
  return User;
};
