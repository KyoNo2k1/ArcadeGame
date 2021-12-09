'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Role: DataTypes.BOOLEAN,
    Full_name: DataTypes.STRING,
    Gender: DataTypes.BOOLEAN,
    DayOfBirth: DataTypes.DATE,
    Avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};