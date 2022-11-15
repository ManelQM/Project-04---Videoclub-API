'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [{
      name: "Chiquito",
      email: "jarenauer@gmail.com",
      password: bcrypt.hashSync("fistro", Number.parseInt(authConfig.rounds)),
      rol: "admin"  
       },
      {
      name:"Russell",
      email: "principiamathematica@gmail.com",
      password: bcrypt.hashSync("logicalatomism", Number.parseInt(authConfig.rounds)),
      rol: "user"  
      },
      {
      name: "Putin",
      email: "dontpressthebutton@gmail.com",
      password:  bcrypt.hashSync("holydaysinsiberia", Number.parseInt(authConfig.rounds)),
      rol: "user"  
      },
      {
      name: "Schopenhauer",
      email: "worldofwill@gmail.com",
      password:  bcrypt.hashSync("mahabharata", Number.parseInt(authConfig.rounds)),
      rol: "user"  
      }, 
      {
      name: "Freud",
      email: "pulsions@gmail.com",
      password: bcrypt.hashSync("dreamsarereal", Number.parseInt(authConfig.rounds)),
      rol: "user"  
      },
      {
      name: "Mrajoy",
      email: "aguantaluis@gmail.com",
      password:  bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
      rol: "user"  
      },
      {
      name: "Newton",
      email: "atoms@gmail.com",
      password:  bcrypt.hashSync("apple", Number.parseInt(authConfig.rounds)),
      rol: "user"  
      },
      {
      name: "Dostoyevsky",
      email: "crimeandpunishment@gmail.com",
      password: bcrypt.hashSync("brainfever", Number.parseInt(authConfig.rounds)),
      rol: "user"  
      }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    

    await queryInterface.bulkDelete('People', null, {});
     
  }
};
