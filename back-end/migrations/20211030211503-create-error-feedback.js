'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Error_feedbacks', {
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
      GameID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ErrorType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ErrorInfo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      AdminID: {
        type: Sequelize.INTEGER
      },
      ProcessStatus: {
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
    await queryInterface.dropTable('Error_feedbacks');
  }
};