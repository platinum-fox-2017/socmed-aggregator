const express = require('express');
const router  = express.Router();
const twatt   = require('./twatt')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/twatt',twatt)

module.exports = router;