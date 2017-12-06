'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  })

  User.associate = (models)=>{
    User.hasMany(models.user_rating)
    User.belongsToMany(models.Menu, {through: 'user_rating'})
  }
  return User;
};