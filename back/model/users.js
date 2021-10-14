const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    "code"  : Number,
    "nombre_usuario" : String,
    "apellidos" : String,
    "correo" : String,
    "password" : String,
    "confirm_password" : String, 
    "active"  : String,



});

module.exports =  mongoose.model("users", productSchema);