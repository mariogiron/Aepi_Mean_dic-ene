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

module.exports = router;
