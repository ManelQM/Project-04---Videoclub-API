'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [{
      name: "Chiquito",
      email: "jarenauer@gmail.com",
      password: "fistro",
      rol: "admin"  
       },
      {
      name:"Russell",
      email: "principiamathematica@gmail.com",
      password: "logicalatomism",
      rol: "user"  
      },
      {
      name: "Putin",
      email: "dontpressthebutton@gmail.com",
      password: "holidaysinsiberia",
      rol: "user"  
      },
      {
      name: "Schopenhauer",
      email: "worldofwill@gmail.com",
      password: "mahabharata",
      rol: "user"  
      }, 
      {
      name: "Freud",
      email: "pulsions@gmail.com",
      password: "dreamsarereal",
      rol: "user"  
      },
      {
      name: "Mrajoy",
      email: "aguantaluis@gmail.com",
      password: "1234",
      rol: "user"  
      },
      {
      name: "Newton",
      email: "atoms@gmail.com",
      password: "apple",
      rol: "user"  
      },
      {
      name: "Dostoyevsky",
      email: "crimeandpunishment@gmail.com",
      password: "brainfever",
      rol: "user"  
      }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    

    await queryInterface.bulkDelete('People', null, {});
     
  }
};
