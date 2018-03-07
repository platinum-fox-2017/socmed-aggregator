const express = require('express');
const router = express.Router();
const twatt = require('../controllers/twatt.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond from api');
});

router.get('/timeline', twatt.home_TimeLine);
router.get('/search/:keyword', twatt.search);
router.post('/tweet', twatt.post_tweet);

module.exports = router;
