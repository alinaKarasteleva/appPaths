'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {

    static associate(models) {

    }
  }
  Day.init({
    id_day: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_path: {
      references: {
        model: 'Path',
        key: 'id_path'
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    number_day: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    time_day: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};