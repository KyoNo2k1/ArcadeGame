'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Upload_game_requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      GameTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      GameAvatar: {
        type: Sequelize.STRING
      },
      GamePlayImage: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      AdminID: {
        type: Sequelize.INTEGER
      },
      RequestStatus: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Upload_game_requests');
  }
};