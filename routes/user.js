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

//                                        ---- Display
router.get('/users', (req, res)=>{
    models.User.findAll()
    .then(users =>{
        // res.send(users);
        res.render('user', {users: users});
    })
    .catch(error =>{
        console.log(error);
        res.send(error)
    })
})
//                                         ---- Create
router.get('/users/add', (req, res)=>{
    res.render('userForm')
})
router.post('/users/add', (req, res)=>{
    let obj = {
        username: req.body.username,
        password: req.body.password,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    models.User.create(obj)
    .then(data=>{
        // console.log(obj)
        res.redirect('/users');
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
})
//                                        ---- Edit
router.get('/users/edit/:id', (req, res) =>{
    models.User.findById(req.params.id)
    .then(data=>{
        res.render('userEdit', {data: data})
    })
    .catch(error=>{
        console.log(error)
        res.send(error);
    })
})
router.post('/users/edit/:id', (req, res)=>{
    let obj = {
        username: req.body.username,
        password: req.body.password,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    models.User.update(obj, {where: {id: req.params.id}})
    .then(data=>{
        res.redirect('/users')
    })
    .catch(error=>{
        console.log(error)
        res.send(error)
    })
})
//                                        ---- Delete
router.get('/users/delete/:id', (req, res)=>{
    models.User.destroy({where: {id:req.params.id}})
    .then(data=>{
        res.redirect('/users');
    })
    .catch(error=>{
        console.log(error)
        res.send(error);
    })
})

router.listen(3000);
