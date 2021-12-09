'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pending_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pending_user.init({
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Full_name: DataTypes.STRING,
    Gender: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pending_user',
  });
  return Pending_user;
};