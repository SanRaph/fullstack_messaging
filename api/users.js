let express = require('express');
let services = require('../services/index');
var router = express.Router();

/* GET users listing. */
router.get('/user-test', function(req, res, next) {
  res.status(200).send('🎂');
});

router.post('/register', services.registerUser);
router.post('/login', services.loginUser);
router.post('/change-password', );
module.exports = router;
