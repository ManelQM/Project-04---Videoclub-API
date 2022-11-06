'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Series', [
     {
      title: "Twin Peaks",
      genre: "Comedy",
      toprated: true 
     },
     {
      title: "The Soprano",
      genre: "Documentary",
      toprated: true
     },
     {
      title: "True Detective",
      genre: "Thriller",
      toprated: false
     },
     {
      title: "Verano Azul",
      genre: "Horror",
      toprated: false
     },
     {
      title: "Lleno por favor",
      genre: "Documentary",
      toprated: true 
     },
     {
      title: "Manos a la obra",
      genre: "Surrealism",
      toprated: false
     },
     {
      title: "Tales from the crypt",
      genre: "Horror",
      toprated: true
     }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Series', null, {});
     
  }
};
