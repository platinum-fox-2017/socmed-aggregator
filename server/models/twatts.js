const oauth = require('oauth').OAuth

var Twitter = new oauth(
  'https://twitter.com/oauth/request_token', 'https://twitter.com/oauth/access_token',
  process.env.TOKEN_APPKEY, process.env.TOKEN_APPSECRET, '1.0A',
  null, 'HMAC-SHA1'
)

module.exports = Twitter
