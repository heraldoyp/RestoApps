'use strict';
module.exports = (sequelize, DataTypes) => {
  var Resto = sequelize.define('Resto', {
    name: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Resto;
};