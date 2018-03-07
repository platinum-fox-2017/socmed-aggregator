const OAuth = require('oauth');

const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

module.exports = {
    home_TimeLine(req, res) {
        let url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
        oauth.get(url, process.env.USER_TOKEN, process.env.USER_SECRET, (err, data) => {
                res.status(200).json(JSON.parse(data));
            });
    },

    search(req, res) {
        let url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.keyword;
        oauth.get(url, process.env.USER_TOKEN, process.env.USER_SECRET, (err, data) => {
            res.status(200).json(JSON.parse(data));
        });
    },

    post_tweet(req, res) {
        let url = 'https://api.twitter.com/1.1/statuses/update.json';
        oauth.post(url, process.env.USER_TOKEN, process.env.USER_SECRET, {status: req.body.status}, (err, data) => {
            res.status(200).json(JSON.parse(data));
        });
    },
};