'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // return queryInterface.bulkInsert('Restos', [{
    //   name: "Sederhana",
    //   category: "Traditional",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   name: "McGobers",
    //   category: "Fast Food",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    // return queryInterface.bulkDelete('Restos', null, {});
  }
};
