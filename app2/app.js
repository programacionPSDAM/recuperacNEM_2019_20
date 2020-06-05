// app.js
const express = require('express')
const bodyParser = require('body-parser')
const producto = require('./rutas/producto'); // Imports routes for the products
const usuario = require('./rutas/usuario'); // Imports routes for the products
const mongoose = require('mongoose')
const logger = require('morgan')
const jwt = require('jsonwebtoken')


// initialize our express app
const app = express()
app.set('secretKey', 'nodeRestApi')

//middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/productos',validateUser, producto)
app.use('/usuarios', usuario);

//validar token
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id
        next();
      }
    })
    
  }

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