'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Orders', [
      {
      date: "11-11-22",
      filmId: 1,
      userId: 3,
      rented: true
      },
      {
      date: "10-11-22",
      filmId: 2,
      userId: 1,
      rented: false
      },
      {
      date: "09-11-22",
      filmId: 1,
      userId: 1,
      rented: true
      },
      {
      date: "08-11-22",
      filmId: 5,
      userId: 2,
      rented: true
      },
      {
      date: "07-11-22",
      filmId: 4,
      userId: 4,
      rented: true
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Orders', null, {});
     
  }
};
