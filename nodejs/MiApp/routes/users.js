var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('RUTA USERS');
  next();
})

/* GET users listing. */
// http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', (req, res) => {
  console.log(req.currentDate);
  res.send('User new');
});

router.get('/:userId', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send('FIN');
});

router.post('/', (req, res) => {
  console.log(req.body.nombre);
  res.send('FIN');
})

module.exports = router;
