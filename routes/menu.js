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


// router.get('/add', function (req, res) {
//     res.render('addStudent', { pageTitle: "addStudent", message: '' })
// })
//
// router.post('/add', function (req, res) {
//     Model.Student.create({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email
//     }).then(() => {
//         res.redirect('../students')
//     }).catch((err) => {
//         res.render('addStudent', {
//           pageTitle: "addStudent",
//            message: err.errors[0].type + ' : ' + err.errors[0].message })
//     })
// })
//
//
// router.get('/edit/:id', function (req, res) {
//     Model.Student.findById(req.params.id).then((dataStudent) => {
//         res.render('editStudent', {
//           dataStudent: dataStudent,
//            pageTitle: 'Edit Student',
//            message: '' })
//     }).catch((err) => {
//         res.send(err)
//     })
// })
//
//
// router.post('/edit/:id', function (req, res) {
//     Model.Student.update({
//         id: req.params.id,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email
//     }, {
//             where: {
//                 id: req.params.id
//             }
//         }).then(() => {
//             res.redirect('/students')
//         }).catch((err) => {
//             Model.Student.findById(req.params.id).then((dataStudent) => {
//                 res.render('editStudent', {
//                   dataStudent: dataStudent,
//                   pageTitle: 'Edit Student',
//                   message: err.errors[0].type + ' : ' + err.errors[0].message })
//             })
//         })
// })
//
// router.get('/:id/addsubject', function (req, res) {
//     Promise.all([
//         Model.Student.findById(req.params.id),
//         Model.Subject.findAll()
//     ]).then((result) => {
//         res.render('studentSubject', {
//            dataStudent: result[0],
//            dataSubject: result[1],
//            pageTitle: "Add Data Subject" })
//     })
// })
//
// router.post('/:id/addsubject', function (req, res) {
//     Model.StudentSubject.create({
//         studentId: req.params.id,
//         subjectId: req.body.subjectId
//     }).then((result) => {
//         res.redirect('/students')
//     })
// })
//
//
// router.get('/delete/:id', function(req, res) {
//   let hapusRecord = req.params.id
//   Model.Student.destroy({where:{id:hapusRecord}}).then(function(){
//     res.redirect('/students')
//   })
// })
//
//
module.exports = router;
