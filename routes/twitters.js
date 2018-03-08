const router = require('express').Router();
const {search, timeline,tweet, requestToken} = require('../controllers/TwitterController.js');

router.get('/search', search);
router.get('/twitter-callback', (req,res) => {
  res.send('twitter callback');
});
router.post('/tweet', tweet);
router.post('/request-token', requestToken);
module.exports = router;
