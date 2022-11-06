'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filmId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Films',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
      model: 'Users',
      key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      rented: {
      type: Sequelize.BOOLEAN,
      allowNull: false
      },
      date: {
      type: Sequelize.STRING, 
      allowNull: false  
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};