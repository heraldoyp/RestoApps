'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    food_name: DataTypes.STRING,
    drink_name: DataTypes.STRING,
    price: DataTypes.INTEGER
  });
   Menu.belongsTo(models.Resto, {foreignKey: 'restoId'});
  return Menu;
};
