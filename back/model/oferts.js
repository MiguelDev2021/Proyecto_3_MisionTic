const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    "code"  : Number,
    "nombre_oferta" : String,
    "cantidad" : Number, 
    "fecha"  : String,
    "informacion" : String,
    "Categoria" : String,


});

module.exports =  mongoose.model("oferts", productSchema);