'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DevID: {
        type: Sequelize.INTEGER
      },
      Url: {
        type: Sequelize.STRING
      },
      DemoUrl: {
        type: Sequelize.STRING
      },
      Title: {
        type: Sequelize.STRING
      },
      Avatar: {
        type: Sequelize.STRING
      },
      Category: {
        type: Sequelize.STRING
      },
      GamePlayImage: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      },
      Played: {
        type: Sequelize.INTEGER
      },
      Rate: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Games');
  }
};