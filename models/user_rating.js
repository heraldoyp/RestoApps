'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_rating = sequelize.define('user_rating', {
    UserId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER
  });  
  user_ratings.associate = (models)=>{
    user_ratings.belongsTo(models.User)
  }
  return user_rating;
};
