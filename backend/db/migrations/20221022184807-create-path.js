'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Paths', {
      id_path: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_skill: {
        references: {
          model: 'Skills',
          key: 'id_skill'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_user: {
        references: {
          model: 'Users',
          key: 'id_user'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name_path: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      necessary_skills: {
        type: Sequelize.STRING
      },
      necessary_stuff: {
        type: Sequelize.STRING
      },
      total_time_in_min: {
        type: Sequelize.INTEGER
      },
      total_days: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Paths');
  }
};