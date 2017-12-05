'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_rating = sequelize.define('user_rating', {
    MenuId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_rating;
};