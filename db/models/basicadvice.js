'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasicAdvice extends Model {

    static associate(models) {

    }
  }
  BasicAdvice.init({
    id_basic_advice: {
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
    text_basic_advice: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BasicAdvice',
  });
  return BasicAdvice;
};