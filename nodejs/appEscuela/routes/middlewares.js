exports.checkToken = (req, res, next) => {
    if (!req.headers['user-token']) {
        return res.json({ error: 'Falta la cabecera user-token' });
    }

    next();
};