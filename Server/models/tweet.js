const OAuth = require('oauth').OAuth

const tweet = new OAuth(
    'https://api.tweet.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.ConsumerKey,
    process.env.ConsumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
)

module.exports = tweet;