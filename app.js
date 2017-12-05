const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const index    = require('./routes/index');
const User = require('./routes/user');

// app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/',index)


app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/users', User);

app.listen(3000, () => console.log('lanjutttt!!!!'))
