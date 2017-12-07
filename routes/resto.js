const express = require('express');
const router = express(); // Tambah Route
const models = require('../models');

//apus
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.set('views', '../views');
router.set('view engine', 'ejs');

//                             --- Display
router.get('/restos', (req, res)=>{
    models.Resto.findAll({include: models.Menu})
    .then(data=>{
        // res.send(data[0].Menus);
        res.render('resto', {data: data});
    })
    .catch(error=>{
        console.log(error)
        res.send(error);
    })
})
//                            --- Add
// router.get('resto/add', (req, res)=>{
    
// })
router.listen(3000);
