//Model Resto
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Resto = sequelize.define('Resto', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
  });
  Resto.associate = (model) => {
    Resto.hasMany(model.Menu);
  }
  return Resto;
};
