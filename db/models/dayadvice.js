'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DayAdvice extends Model {

    static associate(models) {
    }
  }
  DayAdvice.init({
    id_advice: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_day: {
      references: {
        model: 'Day',
        key: 'id_day'
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    text_advice: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DayAdvice',
  });
  return DayAdvice;
};