const express = require('express');
const router = express.Router();

const Student = require('../../models/student');
const middlewares = require('../middlewares');

// router.use(middlewares.checkToken)

// http://localhost:3000/api/students
router.get('/', (req, res) => {
    Student.find((err, students) => {
        if (err) return res.status(500).json({ error: err });
        res.json(students);
    });
});

router.post('/', (req, res) => {
    Student.create(req.body, (err, student) => {
        if (err) return res.status(500).json({ error: err });
        res.json(student);
    });
});

router.put('/:studentId', (req, res) => {
    Student.findByIdAndUpdate(req.params.studentId, req.body, { new: true }, (err, student) => {
        if (err) return res.status(500).json({ error: err });
        // if (!student) return res.status(422).json({ error: 'El estudiante no existe' });
        res.json(student);
    });
});

router.delete('/:studentId', (req, res) => {
    Student.findByIdAndDelete(req.params.studentId, (err, student) => {
        if (err) return res.status(500).json({ error: err });
        res.json(student);
    });
});

module.exports = router;