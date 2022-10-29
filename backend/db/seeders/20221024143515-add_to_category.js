'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      id_category: 1,
      name_category: 'Спорт',
      link_name_category: 'sport',
      color: '#9bf4ff',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_category: 2,
      name_category: 'IT',
      link_name_category: 'it',
      color: '#9bffb9',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_category: 3,
      name_category: 'Рисование',
      link_name_category: 'art',
      color: '#dbff9b',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_category: 4,
      name_category: 'Рукоделение',
      link_name_category: 'needlework',
      color: '#ffeb86',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_category: 5,
      name_category: 'Языки',
      link_name_category: 'languages',
      color: '#ffc885',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_category: 6,
      name_category: 'Музыка',
      link_name_category: 'music',
      color: '#ffa89a',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_category: 7,
      name_category: 'Дизайн',
      link_name_category: 'design',
      color: '#caacff',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_category: 8,
      name_category: 'Разное',
      link_name_category: 'different',
      color: '#9baaff',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
