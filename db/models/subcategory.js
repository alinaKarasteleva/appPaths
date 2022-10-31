'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {

    static associate(models) {

    }
  }
  Subcategory.init({
    id_subcategory: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_category: {
      references: {
        model: 'Category',
        key: 'id_category'
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name_subcategory: {
      allowNull: false,
      type: DataTypes.STRING
    },
    link_name_subcategory: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};