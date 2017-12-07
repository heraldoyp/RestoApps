'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_rating = sequelize.define('user_rating', {
    UserId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER
  })
  user_rating.associate = (models)=>{
    user_rating.belongsTo(models.User)
    user_rating.belongsTo(models.Menu)
  }

  return user_rating;
};