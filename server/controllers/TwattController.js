const OAuth = require('oauth')

module.exports = {
    getUserTimeline : (req,res) => {
        var oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.CONSUMER_KEY,
            process.env.CONSUMER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
        );

        oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            process.env.ACCESS_TOKEN, 
            process.env.ACCESS_TOKEN_SECRET,             

            function (e, data) {
              if (e) console.error(e);        
              
              res.send(data)
            }
        );    
    },
    
    getHomeTimeline : (req,res) => {
        var oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.CONSUMER_KEY,
            process.env.CONSUMER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
        );

        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.ACCESS_TOKEN, 
            process.env.ACCESS_TOKEN_SECRET,             

            function (e, data) {
              if (e) console.error(e);        
              res.send(data)
            }
        );        
    },

    searchTweets : (req,res) => {
        var oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.CONSUMER_KEY,
            process.env.CONSUMER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
        );

        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.keyword}`,
            process.env.ACCESS_TOKEN, 
            process.env.ACCESS_TOKEN_SECRET,             

            function (e, data) {
              if (e) console.error(e);        
              res.send(data)
            }
        );         
    },

    updateStatus : (req,res) => {
        var oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.CONSUMER_KEY,
            process.env.CONSUMER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
        );

        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`,
            process.env.ACCESS_TOKEN, 
            process.env.ACCESS_TOKEN_SECRET,             
            req.body.status,
            'status',
            function (e, data) {
              if (e) console.error(e);        
              res.send(data)
            }
        );        
    },

    test : (req,res) => {
        res.send(req.body.status);
        // console.log(req.body.status);
        
    }
}