var express = require('express');
var router = express.Router();
const Tweets = require('../controllers/tweets')

/* GET users listing. */
router.get('/profile', Tweets.viewProfile)
router.get('/timelineuser', Tweets.viewTwit)
router.get('/search', Tweets.searchTwit)
router.post('/post', Tweets.postTwit)

module.exports = router;
