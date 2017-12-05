const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const index         = require('./routes/index');
const user          = require('./routes/user');
const menu          = require('./routes/menu');
const resto          = require('./routes/resto');

// app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',index)
app.use('/menu',menu)
app.use('/resto',resto)
app.use('/user',user)

app.set('views', './views')
app.set('view engine', 'ejs')



app.listen(3000, () => console.log('lanjutttt!!!!'))
