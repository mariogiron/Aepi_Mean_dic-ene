const express = require('express');
const router = express.Router();

const Student = require('../models/student');
const Teacher = require('../models/teacher');

router.get('/insert', (req, res) => {
    // Recupero los estudiantes no aprobados
    Student.noAprobados((err, students) => {
        // Creo un profesor y le asigno el primer estudiante
        let profesor = new Teacher();
        profesor.nombre = 'Pedro';
        profesor.apellidos = 'López';
        profesor.students = students;
        profesor.save(err => {
            if (err) return res.json(err)
            res.json(profesor);
        });
    });
});

module.exports = router;