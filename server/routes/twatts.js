var express = require('express');
var router = express.Router();
var { twattProfile, twattTimeHome, twattTimeUser, twattSearch, twattNewPost } = require('../controllers/twatts')

router.get('/profile', twattProfile)
router.get('/timelinehome', twattTimeHome)
router.get('/timelineuser', twattTimeUser)
router.get('/search', twattSearch)
router.post('/newpost', twattNewPost)

module.exports = router;
