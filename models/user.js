"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

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
        unique: { msg: "email already in use!" },
        validate: {
          notEmpty: true,
          isEmail: { msg: "email field must be a valid one!" },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: "That username is taken." },
        validate: {
          notEmpty: true,
        },
      },
      hashed_password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {},
      },
      age: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: "User",
    }
  );

  User.addHook("beforeCreate", async (user) => {
    if (user.hashed_password) {
      const saltRounds = 10;
      user.hashed_password = await bcrypt.hash(
        user.hashed_password,
        saltRounds
      );
    }
  });
  return User;
};
