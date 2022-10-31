'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {

    static associate(models) {

    }
  }
  Skill.init({
    id_skill: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_subcategory: {
      references: {
        model: 'Subcategory',
        key: 'id_subcategory'
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name_skill: {
      allowNull: false,
      type: DataTypes.STRING
    },
    link_name_skill: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};