const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
    nombre: String,
    apellidos: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'student' }]
});

module.exports = mongoose.model('teacher', teacherSchema);