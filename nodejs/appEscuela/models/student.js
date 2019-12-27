const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    course: String,
    average_grade: Number
});

studentSchema.virtual('nombre_completo').get(function () {
    return this.name + ' ' + this.surname;
});

studentSchema.virtual('nombre_completo').set(function (newValue) {
    const split = newValue.split(' ');
    this.name = split[0];
    this.surname = split[1];
});

studentSchema.methods.mismoCurso = function (callback) {
    this.model('student').find({ course: this.course }, callback);
}

studentSchema.statics.noAprobados = function (callback) {
    this.model('student').find({ average_grade: { $lt: 5 } }, callback);
}

module.exports = mongoose.model('student', studentSchema);

// function mismoCurso(callback) {
//     this.model('Student').find({ course: this.course }, callback)
// }

// let stu = new Student();
// stu.course = 'MEAN Stack';
// stu.mismoCurso((err, students) => {
//     console.log(students);
// });


// SELECT * FROM students WHERE average_grade < 5