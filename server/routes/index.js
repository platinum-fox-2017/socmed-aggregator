const express = require('express');
const router = express.Router();
const {getHomeTimeline, searchTweet, postTweet, getUserTimeline, loginFacebook} = require('../controllers/twatt.controller');
const {signInFB}= require('../controllers/facebook.controller');
const checkAuth = require('../middleware/checkAuth');

router.post('/signin', signInFB);
router.get('/home',checkAuth.checkAuth, getHomeTimeline);
router.get('/fadhilmch',checkAuth.checkAuth, getUserTimeline);
router.get('/search',checkAuth.checkAuth, searchTweet);
router.post('/post',checkAuth.checkAuth, postTweet);
// router.post('/login', loginFacebook);

module.exports = router;
