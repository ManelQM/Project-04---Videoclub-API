'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [{
      name: "Chiquito",
      email: "unoquevaborrachoperdioydicequietorl@gmail.com",
      password: "fistro"
       },
      {
      name:"Russell",
      email: "principiamathematica@gmail.com",
      password: "signandmeaning"  
      },
      {
      name: "Stalin",
      email: "oftogulag@gmail.com",
      password: "holidaysinsiberia"  
      },
      {
      name: "Schopenchauer",
      email: "worldofwill@gmail.com",
      password: "mahabharata"  
      }, 
      {
      name: "God",
      email: "ilostmyson@gmail.com",
      password: "idontlikepeople"  
      },
      {
      name: "Mrajoy",
      email: "aguantaluis@gmail.com",
      password: "vivaelvino"  
      },
      {
      name: "Newton",
      email: "ihateeinstein@gmail.com",
      password: "apple"  
      },
      {
      name: "Satan",
      email: "isnthothere@gmail.com",
      password: "imissmyfather"  
      }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
