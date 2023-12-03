'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false
      },
      AirplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      departureTime: {
        type: Sequelize.TIME,
        allowNull:false
      },
      arrivalTime: {
        type: Sequelize.TIME,
        allowNull:false
      },
      seats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boardingNumber: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};