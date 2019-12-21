const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/', async (req, res) => {
    const students = await Student.find();
    res.render('students/list', { arrStudents: students });
});

router.get('/aprobados', (req, res) => {
    Student.find({
        $or: [
            { average_grade: { $gte: 5, $lt: 7 } },
            { name: 'Manuel' }
        ]
    }, (err, students) => {
        console.log(students);
        res.render('students/list', { arrStudents: students });
    })
});

router.get('/mismos', (req, res) => {
    let stu = new Student();
    stu.course = 'HTML CSS';
    stu.mismoCurso((err, students) => {
        res.render('students/list', { arrStudents: students });
    });
});

router.get('/new', (req, res) => {
    res.render('students/formulario');
});

router.get('/edit/:studentId', (req, res) => {
    res.render('students/formEdit');
});

router.get('/:studentId', (req, res) => {
    Student.findById(req.params.studentId)
        .then(student => {
            res.render('students/detail', { student: student });
        })
});

router.post('/create', (req, res) => {
    Student.create(req.body)
        .then(student => res.redirect('/students'));
});

router.post('/update', (req, res) => {

    res.redirect('/students');
});

module.exports = router;