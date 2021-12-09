'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        CategoryName: 'Arcade'
      },
      {
        CategoryName: 'Shooting'
      },
      {
        CategoryName: 'Racing'
      },
      {
        CategoryName: 'Fighting'
      },
      {
        CategoryName: 'Puzzle'
      },
      {
        CategoryName: 'Sport'
      },
      {
        CategoryName: 'Chess'
      },
      {
        CategoryName: 'Obstacle'
      },
      {
        CategoryName: 'Role-playing'
      },
      {
        CategoryName: '2-players'
      },
      {
        CategoryName: 'Block'
      },
      {
        CategoryName: 'Ball'
      },
      {
        CategoryName: 'Bounce'
      },
      {
        CategoryName: 'Snake'
      },
      {
        CategoryName: 'Building'
      },
      {
        CategoryName: 'Reflex'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', {}, null)
  }
};
