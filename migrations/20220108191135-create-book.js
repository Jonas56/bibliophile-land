"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("books");
  },
};
