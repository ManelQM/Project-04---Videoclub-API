'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Seriesorders', [
        {
          date: "11-11-22",
          serieid: 1,
          userid: 3,
          rented: true
          },
          {
          date: "10-11-22",
          serieid: 2,
          userid: 1,
          rented: false
          },
          {
          date: "8-11-22",
          serieid: 1,
          userid: 5,
          rented: true
          },
          {
          date: "1-11-22",
          serieid: 5,
          userid: 2,
          rented: true
          },
          {
          date: "4-11-22",
          serieid: 4,
          userid: 4,
          rented: true
          }
      ], 
      {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Seriesorders', null, {});
  }
};
