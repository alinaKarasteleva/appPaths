'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      hash_password: 'akejemapmaeneapjfnaefe9j',
      user_name: 'Valentina',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hash_password: 'akejfvghu8y7ghpjfnaefe9j',
      user_name: 'Marcus',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
