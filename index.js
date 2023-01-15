// require needed modules.

require('dotenv').config()
const express = require('express')

// initialize the app object.
const app = express()

// creates homepage route.
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// listen for connections

app.listen(process.env.PORT, function() { 
    console.log('Powered UP!!')
})