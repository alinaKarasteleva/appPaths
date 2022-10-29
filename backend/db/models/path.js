'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Path extends Model {

    static associate(models) {

    }
  }
  Path.init({
    id_path: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_skill: {
      references: {
        model: 'Skill',
        key: 'id_skill'
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_user: {
      references: {
        model: 'User',
        key: 'id_user'
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name_path: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: DataTypes.STRING,
    necessary_skills: DataTypes.STRING,
    necessary_stuff: DataTypes.STRING,
    total_time_in_min: INTEGER,
    total_days: INTEGER,
  }, {
    sequelize,
    modelName: 'Path',
  });
  return Path;
};