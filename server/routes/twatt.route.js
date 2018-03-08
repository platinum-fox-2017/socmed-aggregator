const express = require('express');
const router = express.Router();
const { user_timeline, tweet, home_timeline, search  } = require('../controllers/twatt.controller.js')

router
.get('/', home_timeline)
.get('/search', search )
.get('/user',user_timeline)
.post('/', tweet)


module.exports = router