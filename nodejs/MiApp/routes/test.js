const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('test', {
        nombre: 'Mario',
        apellidos: 'Girón',
        title: 'Título de la página TEST',
        animales: ['perro', 'gato', 'loro', 'nutria']
    });
});

module.exports = router;