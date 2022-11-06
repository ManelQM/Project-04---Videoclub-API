'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Orders', [
      {
      date: "11-11-22",
      filmid: 1,
      userid: 3,
      rented: true
      },
      {
      date: "11-11-22",
      filmid: 1,
      userid: 3,
      rented: true
      },
      {
      date: "11-11-22",
      filmid: 1,
      userid: 3,
      rented: true
      },
      {
      date: "11-11-22",
      filmid: 1,
      userid: 3,
      rented: true
      },
      {
      date: "11-11-22",
      filmid: 1,
      userid: 3,
      rented: true
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('People', null, {});
     
  }
};
