'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var Admin = sequelize.define('Admin', {
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, callback) {
          console.log(value);
          Admin.find({
            where: {username: value}
          }).then((result) =>{
            if(result && this.id != result.id) {
              callback('Username sudah terpakai', value)
            }
            else {
              callback()
            }
          })
        }
      }
    },
    password: DataTypes.STRING
  });

  Admin.beforeCreate((admin, options) => {
  const saltRounds = 10;
  const myPlaintextPassword = admin.password;
  return  bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    admin.password = hash
  });
});

  return Admin;
};
