const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const moment = require('moment');

const User = require('../../models/user');

router.post('/register', [
    check('username', 'El campo username es obligatorio').exists().notEmpty(),
    check('password', 'El campo password es obligatorio').exists(),
    check('email', 'El email debe estar correcto').isEmail(),
    check('age', 'Debe ser mayor de edad').custom((value) => {
        return value >= 18;
    }),
    check('dni', 'El dni debe estar correcto').custom(nifValidator)
], (req, res) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(422).json(errores.array());
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    User.create(req.body, (err, user) => {
        res.json(user);
    });
});

router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (!user) {
            return res.json({ error: 'Error en usuario y/o password' })
        }
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ success: createToken(user) });
        } else {
            res.json({ error: 'Error en usuario y/o password' })
        }
    });
});

function nifValidator(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function createToken(user) {
    const obj = {
        userId: user._id,
        fechaCreacion: moment().unix(),
        fechaExpiracion: moment().add(10, 'minutes').unix()
    }
    return jwt.encode(obj, process.env.SECRET_KEY);
}

module.exports = router;