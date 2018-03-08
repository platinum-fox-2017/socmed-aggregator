const OAuth = require('oauth');

const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    '18NyWHYBWtghWPO3fqv9a7y22',
    'brQ3aeigIo2kXaUVLyObNRNhCe9xczYm6uRMAVFd87i94TIMOp',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

class Tweet {

    static viewTwit(req,res){
          oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            '2551956858-AHVEyIxFstML0lfX3Wr8GGazBnhDG8jlxIkp1VI', //test user token 
            'IcSCnECEfN7pcrN6o8gGsKtR2VLoeuVVbZurQ4WEUsbwC', //test user secret             
            function (error, data){
                if (error){
                    res.status(500).json({
                        error
                    })
                } else {
                    res.status(200).send(JSON.parse(data))
                }         
            });    
    }
    static searchTwit(req,res){
        oauth.get(
          'https://api.twitter.com/1.1/search/tweets.json?q=' + req.body.search,
          '2551956858-AHVEyIxFstML0lfX3Wr8GGazBnhDG8jlxIkp1VI', //test user token 
          'IcSCnECEfN7pcrN6o8gGsKtR2VLoeuVVbZurQ4WEUsbwC', //test user secret
          function (error, data){
            if (error) {
              res.status(500).send(error)
            } else {
              res.send(JSON.parse(data))
            }
        });
      }
 
      static postTwit(req,res){
        oauth.post(
          'https://api.twitter.com/1.1/statuses/update.json',
          '2551956858-AHVEyIxFstML0lfX3Wr8GGazBnhDG8jlxIkp1VI', //test user token 
          'IcSCnECEfN7pcrN6o8gGsKtR2VLoeuVVbZurQ4WEUsbwC', //test user secret
          {status:req.body.post},
          function (error, data){
            if (error) {
              res.status(500).send(error)
            } else {
              res.send(JSON.parse(data))
            }
        });
      }
}

module.exports = Tweet