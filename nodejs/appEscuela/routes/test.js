const express = require('express');
const router = express.Router();

const Persona = require('../models/persona');

router.get('/insert_v1', (req, res) => {
    let pers = new Persona();
    pers.nombre = 'Rodrigo';
    pers.apellidos = 'Martínez';
    pers.email = 'rodri@hotmail.com';
    pers.edad = 33;
    pers.save((err) => {
        if (err) return console.log(err);
        res.send('Se ha insertado!!');
    });
});

router.get('/insert_v2', (req, res) => {
    Persona.create({
        nombre: 'Ricardo',
        apellidos: 'García',
        email: 'ricky@gmail.com',
        edad: 28
    })
        .then(persona => res.json(persona))
        .catch(err => res.json(err));
});

router.get('/insert_v3', async (req, res) => {
    let persona = await Persona.create({
        nombre: 'Ana',
        apellidos: 'Gutierrez',
        email: 'anusqui@gmail.com',
        edad: 43
    });
    res.json(persona);
});

router.get('/find', (req, res) => {
    // Persona.find((err, personas) => {
    //     if (err) return res.json(err);
    //     res.json(personas);
    // });
    Persona.find()
        .then(filtrarPersonas)
        .then(persFiltrado => res.json(persFiltrado))
        .catch(err => res.json(err));
});



const filtrarPersonas = personas => {
    return personas.map(item => {
        return { nombre: item.nombre, email: item.email }
    })
}

module.exports = router;