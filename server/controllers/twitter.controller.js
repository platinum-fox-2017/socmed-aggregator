'use strict'
const oauth = require('oauth');
const myOauth = new oauth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
)



module.exports = {
    recentTweet: (req, res) => {
        myOauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret
            function(err, data) {
                if(err) res.status(500).send(err);
                else res.status(200).send(data);
            }
        );
    },

    seacrhTweet: (req, res) => {
        myOauth.get(
            'https://api.twitter.com/1.1/search/tweets.json?q=' + req.body.keyword,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret
            // {q: req.body.keyword},
            function(err, data) {
                if(err) res.status(500).send(err);
                else res.status(200).send(data);
            }
        );
    },

    postTweet: (req, res) => {
        myOauth.post(
            `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.tweet}`,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret
            // {status: req.body.status},
            req.body.tweet,
            'tweet',            
            function(err, data) {
                if(err) res.status(500).send(err);
                else res.status(200).send(data);
            }
        );
    },
}