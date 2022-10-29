'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {

    static associate(models) {

    }
  }
  Plan.init({
    id_plan: {
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
      text_plan: {
        allowNull: false,
        type: DataTypes.STRING
      }
    }, {
    sequelize,
    modelName: 'Plan',
  });
  return Plan;
};