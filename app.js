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
router.get('/menus', (req, res)=>{
    models.Menu.findAll({include: [models.Resto]})
    .then(data =>{
        // res.send(data);
        res.render('menu', {menus: data});
    })
    .catch(error =>{
        console.log(error);
        res.send(error)
    })
})
//                                         --- addRating
// router.get('/viewRating')
// router.post('/viewRating')
//                                         ---- Create
router.get('/menus/add', (req, res)=>{
    res.render('menuForm')
})
router.post('/menus/add', (req, res)=>{
    let obj = {
        food_name: req.body.food_name,
        price: req.body.price,
        RestoId: req.body.RestoId,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    models.Menu.create(obj)
    .then(data=>{
        // console.log(obj)
        res.redirect('/menus');
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
})
//                                      --- Edit
router.get('/menus/edit/:id', (req, res)=>{
    models.Menu.findById(req.params.id)
    .then(data=>{
        // res.send(data);
        res.render('menuEdit', {data: data})
    })
    .catch(error=>{
        console.log(error)
        res.send(error)
    })
})
router.post('/menus/edit/:id', (req, res)=>{
    let obj = {
        food_name: req.body.food_name,
        price: req.body.price,
        RestoId: req.body.RestoId,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    models.Menu.update(obj, {where:{id:req.params.id}})
    .then(data=>{
        res.redirect('/menus');
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
})
//                              --- Delete
router.get('/menus/delete/:id', (req, res)=>{
    models.Menu.destroy({where:{id: req.params.id}})
    .then(data=>{
        res.redirect('/menus');
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
})
router.listen(3000);