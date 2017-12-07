const express = require('express');
const router = express.Router();
const Model = require('../models')
const bcrypt = require('bcrypt');


  router.get('/', function(req, res){
    res.render('login', {error: false})
  })
  router.post('/', function(req, res){
    Model.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user){
      if(user){
        bcrypt.compare(req.body.password, user.password).then(function(result) {
          if (result) {
            req.session.loggedIn = true
            req.session.username = user.username
            res.redirect('/index')
          } else{
            res.render('login', {error: true})
          }
        })
      } else{
        res.render('login', {error: true})
      }
    })
  })

module.exports = router
