const express = require('express');
const router = express(); // Tambah Route
const models = require('../models'); 

//apus
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.set('views', '../views');
router.set('view engine', 'ejs');

router.get('/', (req, res) => {
  res.render('index')
})

router.listen(3000);

module.exports = router;
