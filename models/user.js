'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  
   User.associate = (models)=>{
    User.hasMany(models.user_rating)
    User.belongsToMany(models.Menu, {through: 'user_rating'})
  }

  User.beforeCreate((user, options) => {
  const saltRounds = 10;
  const myPlaintextPassword = user.password;
  return  bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    user.password = hash
  });
});
 
  return User;
};
