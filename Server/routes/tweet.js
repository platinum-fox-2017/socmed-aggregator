const express = require('express')
const router = express.Router()

const { home, timelineUser, search, postTweet } = require('../controllers/tweet')

router.get('/', home)
router.get('/timelineUser', timelineUser)
router.get('/search', search)
router.post('/postTweet', postTweet)

module.exports = router