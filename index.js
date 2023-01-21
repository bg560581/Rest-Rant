// require needed modules.

require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// PLACES INDEX PAGE
app.get('/places', (req, res) => {
    res.send('Hello World!')
})

// CREATE NEW PLACE











app.get('*', (req, res) => {
    res.status(404).send('<h1>Im sorry, you have reached a 404 :(</h1>')
})

// listen for connections

app.listen(process.env.PORT, function() { 
    console.log('Powered UP!!')
})