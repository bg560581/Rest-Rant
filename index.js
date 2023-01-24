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

// PLACES PAGE
app.get('/places', (req, res) => {
    res.send('Hello World!')
})

// 404 PAGE
app.get('*', (req,res) => {
    res.send('404 page')
})











app.get('*', (req, res) => {
    res.status(404).send('<h1>Im sorry, you have reached a 404 :(</h1>')
})

// listen for connections

app.listen(process.env.PORT, function() { 
    console.log('Powered UP!!')
})