const express = require('express');

const app = express();

app.get('/contacto', (req, res) => {
    res.end('Estoy en CONTACTO');
});

app.post('/about', (req, res) => {
    res.end('POST Estoy en about');
});

app.get('/persona', (req, res) => {
    const pers = {
        nombre: 'Mario',
        apellidos: 'Girón',
        edad: 26
    };
    res.json(pers);
});

app.listen(3000, () => {
    console.log('Servidor escuchando sobre el puerto 3000...');
});