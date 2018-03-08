var express = require('express');
var router = express.Router();
const TokenController = require('../controllers/token.js')
const getJWT = require('../middleware/jwt.js');
const getFbData = require('../middleware/fb.js');

router.post('/token',getFbData, getJWT, TokenController.tokenToClient, );


module.exports = router;
