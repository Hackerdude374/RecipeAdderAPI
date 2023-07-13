'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipe_applications', [{
        title: "cardboard brix",
        description: "tasty cement",
        ingredients: "bricks and cement",
        instructions: "mix it together",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
{
  title: "lego brix",
  description: "tasty plastic",
  ingredients: "legos",
  instructions: "mix it together!!!",
  createdAt: new Date(),
  updatedAt: new Date(),
}], {});


   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipe_applications', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
