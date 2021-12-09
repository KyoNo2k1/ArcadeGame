'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upload_game_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Upload_game_request.init({
    UserID: DataTypes.INTEGER,
    Url: DataTypes.STRING,
    GameTitle: DataTypes.STRING,
    Category: DataTypes.STRING,
    GameAvatar: DataTypes.STRING,
    GamePlayImage: DataTypes.STRING,
    Description: DataTypes.STRING,
    AdminID: DataTypes.INTEGER,
    RequestStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Upload_game_request',
  });
  return Upload_game_request;
};