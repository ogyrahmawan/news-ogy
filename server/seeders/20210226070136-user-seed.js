'use strict';
const {hash} = require('../helper/bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Users', [
     {
       name: "ogy",
       email: 'ogy@mail.com',
       password: hash('asdasd'),
       role: 'writer',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: "ina",
      email: 'ina@mail.com',
      password: hash('asdasd'),
      role: 'writer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "editor1",
      email: 'editor1@mail.com',
      password: hash('asdasd'),
      role: 'editor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "editor2",
      email: 'editor2@mail.com',
      password: hash('asdasd'),
      role: 'editor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "writer1",
      email: 'writer1@mail.com',
      password: hash('asdasd'),
      role: 'writer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null)
  }
};
