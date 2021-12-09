'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_record.init({
    UserID: DataTypes.INTEGER,
    GameID: DataTypes.INTEGER,
    HighScore: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'User_record',
  });
  return User_record;
};