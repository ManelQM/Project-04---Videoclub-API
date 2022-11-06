'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      
      await queryInterface.bulkInsert("Films", [
      {
      title:"The Exorcist",
      genre:"Horror",
      toprated : false
      },
      {
      title: "The good, the bad and the ugly",
      genre: "Western",
      toprated: true 
      },
      {
      title: "Ran",
      genre: "Kurosawa",
      toprated: true 
      },
      {
      title: "Nosferatu",
      genre: "Horror",
      toprated: false  
      },
      {
      title: "Seven Samurai",
      genre: "Kurosawa",
      toprated: false  
      },
      {
      title: "The Thing",
      genre: "Horror",
      toprated: true
      } 

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Films', null, {});
     
  }
};
