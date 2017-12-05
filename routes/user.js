const express = require('express');
const router = express(); // Tambah Route
const models = require('../models'); 

//apus
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.set('views', '../views');
router.set('view engine', 'ejs');


// router.get('/users', (req, res)=>{
//     console.log("di 3000");
//     res.send("ini user");
// })

//                                         ---- Display
router.get('/users', (req, res)=>{
    models.User.findAll()
    .then(users =>{
        // res.send(users);
        res.render('user', {users: users});
    })
    .catch(error =>{
        console.log(error);
        res,send(error)
    })
})
//                                         ---- Create
router.get('/users/add', (req, res)=>{
    let obj = {
        
    }
})
//                                         ---- Edit
//                                         ---- Delete
router.listen(3000);
