const express = require('express');
const router = express();
const models = require('../models');

//apus
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.set('views', './views');
router.set('view engine', 'ejs');

router.get('/users', (req, res)=>{
    console.log("di 3000");
    res.send("ini user");
})

router.listen(3000);
