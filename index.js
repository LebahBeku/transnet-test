const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

app.get('/', function(req, res){
    res.json({
        message: 'Hello World'
    })
})

app.listen('3000')
console.log('Listening on port 3000')