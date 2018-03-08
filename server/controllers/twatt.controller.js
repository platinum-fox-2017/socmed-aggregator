const OAuth = require('oauth');

module.exports = {
    user_timeline: (req,res) => {
      const oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.CUSTOMER_KEY,
        process.env.CUSTOMER_SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        process.env.USER_TOKEN,
        process.env.USER_SECTOKEN,          
        function (err, data){
          res.status(200).json({
            timeline: JSON.parse(data)
          })   
        });    
    },

    home_timeline: (req,res) => {
      const oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.CUSTOMER_KEY,
        process.env.CUSTOMER_SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.USER_TOKEN,
        process.env.USER_SECTOKEN,         
        function (err, data){
          res.status(200).json({
            timeline: JSON.parse(data)
          })   
        });    
    },

    tweet: (req,res) => {
        const oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.CUSTOMER_KEY,
            process.env.CUSTOMER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
          );
          oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.tweet}`,
            process.env.USER_TOKEN,
            process.env.USER_SECTOKEN,
            req.body.tweet,
            'tweet',         
            function (err,data){
              if(err) {
                res.status(500).json({
                  err
                })
              } res.status(200).json({
                tweet: JSON.parse(data)
              })  
            }); 
    },

    search: (req,res) => {
      const oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.CUSTOMER_KEY,
        process.env.CUSTOMER_SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
        process.env.USER_TOKEN,
        process.env.USER_SECTOKEN,    
        function (err,data){
          if(err) {
            res.status(500).json({
              err
            })
          } res.status(200).json({
            tweet: JSON.parse(data)
          })  
        }); 
    }


}
