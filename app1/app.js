// app.js
const express = require('express')
const bodyParser = require('body-parser')
const producto = require('./rutas/producto'); // Imports routes for the products
const mongoose = require('mongoose')



// initialize our express app
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/productos', producto)

//conexión a la BD
let dev_db_url = 'mongodb://172.17.0.2:27017/ejemplo'
const mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



let port = 1234

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port)
})