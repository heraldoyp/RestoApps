const Model  = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    Model.Menu.findAll().then((dataMenu) => {
      console.log(dataMenu);
        res.render('menu', {
          dataMenu: dataMenu,
          pageTitle: "Menu" })
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router;
