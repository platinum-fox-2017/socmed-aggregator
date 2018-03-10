const oauth = require('oauth')

const Tweets = new oauth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    '18NyWHYBWtghWPO3fqv9a7y22',
    'brQ3aeigIo2kXaUVLyObNRNhCe9xczYm6uRMAVFd87i94TIMOp',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

module.exports = Tweets