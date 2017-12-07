'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    food_name: DataTypes.STRING,
    drink_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    RestoId: DataTypes.INTEGER
  });
  Menu.associate = (model)=>{
    Menu.belongsTo(model.Resto, {foreignKey:"RestoId"})
  }

  return Menu;
};