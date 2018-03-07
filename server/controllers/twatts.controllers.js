const OAuth = require('oauth');

const newTwatts = () => {
    var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.APP_CONSUMER_KEY,
        process.env.APP_SECRET_KEY,
        '1.0A',
        null,
        'HMAC-SHA1'
    )
    return oauth
}

const getHomeTimeline = (req, res) => {
    const oauth = newTwatts()
    oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.USER_TOKEN, //test user token
        process.env.USER_SECRET, //test user secret
        function (e, data, response) {
            if (e) console.error(e);
            // console.log(result)
            res.status(200).send(data)
        });
}

const searchTweets = (req, res) => {
    const oauth = newTwatts()
    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=' + req.body.keyword,
        process.env.USER_TOKEN, //test user token
        process.env.USER_SECRET, //test user secret
        function (e, data, response) {
            if (e) console.error(e);
            // console.log(result)
            res.status(200).send(data)
        });
}

const postNewTweet = (req, res) => {
    const oauth = newTwatts()
    oauth.post(
        'https://api.twitter.com/1.1/statuses/update.json?status=' + req.body.stat,
        process.env.USER_TOKEN, //test user token
        process.env.USER_SECRET, //test user secret
        req.body.stat,
        'twit',
        function (e, data, response) {
            if (e) console.error(e);
            // console.log(result)
            res.status(201).send(data)
        });
}

module.exports = {
    getHomeTimeline,
    searchTweets,
    postNewTweet
}