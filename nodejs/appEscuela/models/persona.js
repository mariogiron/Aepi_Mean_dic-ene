const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    edad: Number
});

module.exports = mongoose.model('persona', personaSchema);