// require needed modules.

require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Controllers & Routes
app.use('/places', require('./controllers/places'))

// INDEX PAGE
app.get('/', (req, res) => {
    res.render('home')
})

// 404 PAGE
app.get('*', (req,res) => {
    res.render('error404')
})

// listen for connections

app.listen(process.env.PORT, function() { 
    console.log('Powered UP!!')
})