const express = require('express');
const router = express.Router();
const Model = require('../models')


router.get('/', function(req, res) {
    res.render('registerAdmin')
})
  router.post('/',(req,res)=>{
  let obj = {
    username : req.body.username,
    password : req.body.password
  }
  Model.Admin.create(obj)
  .then(()=>{
    res.redirect('/loginAdmin')
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router
