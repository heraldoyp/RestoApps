'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    food_name: DataTypes.STRING,
    drink_name: DataTypes.STRING,
    price: DataTypes.INTEGER
  })
    Menu.associate = (models)=>{
      Menu.belongsTo(models.Resto);
      Menu.hasMany(models.user_rating);
    }
  return Menu;
};
