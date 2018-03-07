const router = require('express').Router()
const {
    getHomeTimeline,
    searchTweets,
    postNewTweet
} = require('../controllers/twatts.controllers')

router.get('/', getHomeTimeline)
router.post('/search', searchTweets)
router.post('/post', postNewTweet)

module.exports = router