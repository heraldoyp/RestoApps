const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt');
app.use(session({
    secret: 'success'
  }))

const index         = require('./routes/index');
const menu          = require('./routes/menu');
const register      = require('./routes/register')
const login         = require('./routes/login')
const loginAdmin    = require('./routes/admin')
const registerAdmin    = require('./routes/registerAdmin')

// app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')


app.use('/login',login)
app.use('/register',register)
app.use('/registerAdmin',registerAdmin)
app.use('/index', index)
app.use('/menus', menu)
app.use('/loginAdmin', loginAdmin)


app.listen(3000, () => console.log('lanjutttt!!!'))
