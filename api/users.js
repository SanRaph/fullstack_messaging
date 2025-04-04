let express = require('express');
let services = require('../services/index');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send('🎂');
});

router.post('/register', services.registerUser);

module.exports = router;
