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
    static associate({ Book, UserCollection, Reading }) {
      // define association here
      this.belongsToMany(Book, {
        through: UserCollection,
        foreignKey: "user_id",
        as: "collection",
      });

      this.belongsToMany(Book, {
        through: Reading,
        foreignKey: "user_id",
        as: "reading",
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
          notNull: { msg: "Please enter your name" },
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "email already in use! Please login or reset your password",
        },
        validate: {
          notNull: { msg: "Please enter your email" },
          notEmpty: true,
          isEmail: { msg: "email field must be a valid one!" },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Please enter your username" },
          notEmpty: true,
          len: {
            args: [5, 10],
            msg: "Username length must be between 5 and 10 characters",
          },
        },
      },
      hashed_password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notNull: { msg: "Please enter your password" },
          isPassword: (value) => {
            const validPassword =
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if (!validPassword.test(value)) {
              throw new Error(
                "Password must contain minimum eight characters, at least one letter, one number and one special character"
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: "User",
    }
  );

  User.addHook("afterValidate", async (user) => {
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
