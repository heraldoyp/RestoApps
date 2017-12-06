'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_rating = sequelize.define('user_rating', {
    MenuId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  });
  return user_rating;
};
