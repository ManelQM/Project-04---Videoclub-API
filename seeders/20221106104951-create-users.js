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
      name: "Putin",
      email: "dontpressthebutton@gmail.com",
      password: "holidaysinsiberia"  
      },
      {
      name: "Schopenhauer",
      email: "worldofwill@gmail.com",
      password: "mahabharata"  
      }, 
      {
      name: "God",
      email: "ilostmyson@gmail.com",
      password: "idontlikepeoplesomuch"  
      },
      {
      name: "Mrajoy",
      email: "aguantaluis@gmail.com",
      password: "1234"  
      },
      {
      name: "Newton",
      email: "atoms@gmail.com",
      password: "apple"  
      },
      {
      name: "Satan",
      email: "ishothere@gmail.com",
      password: "imissmyfather"  
      }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    

    await queryInterface.bulkDelete('People', null, {});
     
  }
};
