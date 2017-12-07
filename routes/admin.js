const express = require('express');
const router = express.Router();
const Model = require('../models')
const bcrypt = require('bcrypt');


  router.get('/', function(req, res){
    res.render('loginAdmin', {error: false})
  })
  router.post('/', function(req, res){
    Model.Admin.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(admin){
      if(admin){
        bcrypt.compare(req.body.password, admin.password).then(function(result) {
          if (result) {
            req.session.loggedIn = true
            req.session.username = admin.username
            res.redirect('/index')
          } else{
            res.render('loginAdmin', {error: true})
          }
        })
      } else{
        res.render('loginAdmin', {error: true})
      }
    })
  })

module.exports = router
