"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Airbus A380",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 787 Dreamliner",
          capacity: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 777",
          capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 767",
          capacity: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 747-8",
          capacity: 320,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
