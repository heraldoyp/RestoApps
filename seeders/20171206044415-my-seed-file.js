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
    // return queryInterface.bulkInsert('Menus', [{
    //   food_name: "Rendang",
    //   drink_name: "Teh Tawar",
    //   price: "20000",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   food_name: "Nasi Rames",
    //   drink_name: "Teh Tawar",
    //   price: "18000",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   food_name: "Ayam Pop",
    //   drink_name: "Teh Tawar",
    //   price: "22000",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   food_name: "Telor Dadar",
    //   drink_name: "Teh Tawar",
    //   price: "10000",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   food_name: "French Fries",
    //   drink_name: "Coke",
    //   price: "15000",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },{
    //   food_name: "Hamburger",
    //   drink_name: "Coke",
    //   price: "24000",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    // return queryInterface.bulkDelete('Menus', null, {});
  }
};
