const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    dni: String,
    age: Number
});

module.exports = mongoose.model('user', userSchema);