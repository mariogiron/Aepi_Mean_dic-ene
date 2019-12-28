const jwt = require('jwt-simple');
const moment = require('moment');

exports.checkToken = (req, res, next) => {
    // Comprobar si el user-token existe
    if (!req.headers['user-token']) {
        return res.json({ error: 'Falta la cabecera user-token' });
    }

    // Comprobar si el user-token es correcto
    const token = req.headers['user-token'];

    let obj = {};
    try {
        obj = jwt.decode(token, process.env.SECRET_KEY);
    } catch (err) {
        return res.json({ error: 'El token es incorrecto' });
    }

    // Comprobar si está caducado
    if (moment().unix() > obj.fechaExpiracion) {
        return res.json({ error: 'El token está caducado' });
    }

    next();
};