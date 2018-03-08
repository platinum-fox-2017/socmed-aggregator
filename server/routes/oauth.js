var express = require('express');
var router = express.Router();
const oauthController = require('../controllers/oauth.js')
const JWT = require('../controllers/token.js')

// console.log('=================');
// console.log(oauthController);
/* GET users listing. */
router.get('/', oauthController.searchHacktivTweet);
router.get('/timeline', oauthController.ownTimeline);
router.get('/search', oauthController.searchTwitter);
router.post('/post', oauthController.postTweet);
// router.post('/signIn', JWT.getToken, )

module.exports = router;
