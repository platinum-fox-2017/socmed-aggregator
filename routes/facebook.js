const router = require('express').Router();
const {requestToken} = require('../controllers/FacebookController');

router.post('/request-token', requestToken);
module.exports = router;
