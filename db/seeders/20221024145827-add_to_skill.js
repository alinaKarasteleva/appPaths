'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Skills', [{
      id_skill: 1,
      id_subcategory: 1,
      name_skill: 'Марафон',
      link_name_skill: 'marathon',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 2,
      id_subcategory: 1,
      name_skill: 'Плавание',
      link_name_skill: 'swimming',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 3,
      id_subcategory: 2,
      name_skill: 'Отжимания',
      link_name_skill: 'push-ups',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 4,
      id_subcategory: 2,
      name_skill: 'Подтягивания',
      link_name_skill: 'pull-ups',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 5,
      id_subcategory: 3,
      name_skill: 'HTML/CSS',
      link_name_skill: 'HTML/CSS',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 6,
      id_subcategory: 3,
      name_skill: 'React',
      link_name_skill: 'React',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 7,
      id_subcategory: 3,
      name_skill: 'JavaScript',
      link_name_skill: 'JavaScript',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 8,
      id_subcategory: 4,
      name_skill: 'Слепая печать',
      link_name_skill: 'blind_printing',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 9,
      id_subcategory: 5,
      name_skill: 'Колористика',
      link_name_skill: 'coloring',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 10,
      id_subcategory: 5,
      name_skill: 'Масло',
      link_name_skill: 'oil',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 11,
      id_subcategory: 5,
      name_skill: 'Акварель',
      link_name_skill: 'watercolor',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 12,
      id_subcategory: 6,
      name_skill: 'Сангина и соусы',
      link_name_skill: 'sanguina_sauces',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 13,
      id_subcategory: 6,
      name_skill: 'Портрет',
      link_name_skill: 'portrait',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 14,
      id_subcategory: 7,
      name_skill: 'Глина',
      link_name_skill: 'clay',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 15,
      id_subcategory: 7,
      name_skill: 'Картон',
      link_name_skill: 'cardboard',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 16,
      id_subcategory: 8,
      name_skill: 'Спицы',
      link_name_skill: 'knitting_needles',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 17,
      id_subcategory: 8,
      name_skill: 'Крючок',
      link_name_skill: 'hook',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 18,
      id_subcategory: 9,
      name_skill: 'Ручное ткачество',
      link_name_skill: 'hand_weaving',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 19,
      id_subcategory: 9,
      name_skill: 'Станковое ткачество',
      link_name_skill: 'easel_weaving',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 20,
      id_subcategory: 9,
      name_skill: 'Ковроткачество',
      link_name_skill: 'carpet_weaving',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 21,
      id_subcategory: 10,
      name_skill: 'Речь на слух',
      link_name_skill: 'speaking_by_ear',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 22,
      id_subcategory: 10,
      name_skill: 'Грамматика',
      link_name_skill: 'grammar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 23,
      id_subcategory: 10,
      name_skill: 'Говорение',
      link_name_skill: 'speaking',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 24,
      id_subcategory: 11,
      name_skill: 'Речь на слух',
      link_name_skill: 'speaking_by_ear',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 25,
      id_subcategory: 11,
      name_skill: 'Грамматика',
      link_name_skill: 'grammar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 26,
      id_subcategory: 11,
      name_skill: 'Говорение',
      link_name_skill: 'speaking',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 27,
      id_subcategory: 12,
      name_skill: 'Речь на слух',
      link_name_skill: 'speaking_by_ear',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 28,
      id_subcategory: 12,
      name_skill: 'Грамматика',
      link_name_skill: 'grammar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 29,
      id_subcategory: 12,
      name_skill: 'Говорение',
      link_name_skill: 'speaking',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 30,
      id_subcategory: 13,
      name_skill: 'Аккорды',
      link_name_skill: 'chords',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 31,
      id_subcategory: 13,
      name_skill: 'Одна песня',
      link_name_skill: 'one_song',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 32,
      id_subcategory: 14,
      name_skill: 'Аккорды',
      link_name_skill: 'chords',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 33,
      id_subcategory: 14,
      name_skill: 'Одна песня',
      link_name_skill: 'one_song',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 34,
      id_subcategory: 15,
      name_skill: 'Техника',
      link_name_skill: 'technique',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 35,
      id_subcategory: 15,
      name_skill: 'Мелодия',
      link_name_skill: 'melody',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 36,
      id_subcategory: 16,
      name_skill: 'Figma',
      link_name_skill: 'figma',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 37,
      id_subcategory: 16,
      name_skill: 'Photoshop',
      link_name_skill: 'photoshop',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 38,
      id_subcategory: 16,
      name_skill: 'Основы',
      link_name_skill: 'basics',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 39,
      id_subcategory: 17,
      name_skill: 'After Effects',
      link_name_skill: 'after_effects',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 40,
      id_subcategory: 18,
      name_skill: 'Photoshop',
      link_name_skill: 'photoshop',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 41,
      id_subcategory: 18,
      name_skill: 'Lightroom',
      link_name_skill: 'lightroom',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 42,
      id_subcategory: 18,
      name_skill: 'InDesign',
      link_name_skill: 'InDesign',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 43,
      id_subcategory: 19,
      name_skill: 'Хиромантия',
      link_name_skill: 'palmistry',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 44,
      id_subcategory: 19,
      name_skill: 'Карты таро',
      link_name_skill: 'tarot_cards',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 45,
      id_subcategory: 19,
      name_skill: 'Гороскопы',
      link_name_skill: 'harascopes',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 46,
      id_subcategory: 20,
      name_skill: 'Осознанные сноведения',
      link_name_skill: 'lucid_dreaming',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      id_skill: 47,
      id_subcategory: 20,
      name_skill: 'Мнемоника',
      link_name_skill: 'mnemonics',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_skill: 48,
      id_subcategory: 20, 
      name_skill: 'Скорочтение',
      link_name_skill: 'speed_reading',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Skills', null, {});

  }
};
