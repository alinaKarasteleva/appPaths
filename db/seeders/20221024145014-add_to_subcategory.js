'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Subcategories', [{
      id_subcategory: 1,
      id_category: 1,
      name_subcategory: 'Кардио',
      link_name_subcategory: 'cardio',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_subcategory: 2,
      id_category: 1,
      name_subcategory: 'Силовые',
      link_name_subcategory: 'power',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 3,
      id_category: 2,
      name_subcategory: 'Разработка сайтов',
      link_name_subcategory: 'website_development',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_subcategory: 4,
      id_category: 2,
      name_subcategory: 'Компьютерная грамотность',
      link_name_subcategory: 'computer_literacy',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 5,
      id_category: 3,
      name_subcategory: 'Живопись',
      link_name_subcategory: 'painting',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 6,
      id_category: 3,
      name_subcategory: 'Графика',
      link_name_subcategory: 'graphic_arts',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 7,
      id_category: 3,
      name_subcategory: 'Скульптура',
      link_name_subcategory: 'sculpture',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 8,
      id_category: 4,
      name_subcategory: 'Вязание',
      link_name_subcategory: 'knitting',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 9,
      id_category: 4,
      name_subcategory: 'Ткачество',
      link_name_subcategory: 'weaving',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 10,
      id_category: 5,
      name_subcategory: 'Английский',
      link_name_subcategory: 'english',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 11,
      id_category: 5,
      name_subcategory: 'Китайский',
      link_name_subcategory: 'chinese',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 12,
      id_category: 5,
      name_subcategory: 'Турецкий',
      link_name_subcategory: 'turkish',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 13,
      id_category: 6,
      name_subcategory: 'Гитара',
      link_name_subcategory: 'guitar',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 14,
      id_category: 6,
      name_subcategory: 'Скрипка',
      link_name_subcategory: 'violin',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 15,
      id_category: 6,
      name_subcategory: 'Арфа',
      link_name_subcategory: 'harp',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 16,
      id_category: 7,
      name_subcategory: 'Веб-дизайн',
      link_name_subcategory: 'web_design',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 17,
      id_category: 7,
      name_subcategory: 'Диджитал дизайн',
      link_name_subcategory: 'digital_design',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 18,
      id_category: 7,
      name_subcategory: 'Полиграфия',
      link_name_subcategory: 'polygraphy',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 19,
      id_category: 8,
      name_subcategory: 'Гадание',
      link_name_subcategory: 'divination',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_subcategory: 20,
      id_category: 8,
      name_subcategory: 'Сверхспособности',
      link_name_subcategory: 'superpower',
      createdAt: new Date(),
      updatedAt: new Date()

    }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Subcategories', null, {});

  }
};
