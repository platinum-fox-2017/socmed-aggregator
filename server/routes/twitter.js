'use strict'

const router = require('express').Router();
const twitter = require('../controllers/twitter.controller')

router.get('/', twitter.recentTweet);
router.get('/search', twitter.seacrhTweet);
router.post('/', twitter.postTweet)

module.exports = router;