const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let ProductoSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true, max: 500, min : 1}, 
},  {versionKey : false})


// Export the model
module.exports = mongoose.model('Producto', ProductoSchema)