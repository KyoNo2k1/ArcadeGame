'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Error_feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Error_feedback.init({
    UserID: DataTypes.INTEGER,
    GameID: DataTypes.INTEGER,
    ErrorType: DataTypes.STRING,
    ErrorInfo: DataTypes.STRING,
    AdminID: DataTypes.INTEGER,
    ProcessStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Error_feedback',
  });
  return Error_feedback;
};