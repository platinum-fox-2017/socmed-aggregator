const jwt = require('jsonwebtoken')

function getJWT (req, res, next) {
  const data = req.response;
  const token = jwt.sign(data, 'secret')
  req.token = token;
  next()
}

module.exports = getJWT
