// require needed modules.

require('dotenv').config()
const express = require('express')

// initialize the app object.
const app = express()

// creates homepage route.
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 404 wildcard

app.get('*', (req, res) => {
    res.status(404)("<h1>I'm sorry, you have reached a 404 :(</h1>")
})

// listen for connections

app.listen(process.env.PORT, function() { 
    console.log('Powered UP!!')
})