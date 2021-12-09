'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Game.init({
    DevID: DataTypes.INTEGER,
    Url: DataTypes.STRING,
    DemoUrl: DataTypes.STRING,
    Title: DataTypes.STRING,
    Avatar: DataTypes.STRING,
    Category: DataTypes.STRING,
    GamePlayImage: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Played: DataTypes.INTEGER,
    Rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};