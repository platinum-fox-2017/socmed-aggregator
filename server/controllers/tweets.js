const Tweets = require('../models/Tweets')



class Tweet {
    static viewProfile(req,res){
        Tweets.get(
            'https://api.twitter.com/1.1/account/verify_credentials.json',
            '2551956858-AHVEyIxFstML0lfX3Wr8GGazBnhDG8jlxIkp1VI', //test user token 
            'IcSCnECEfN7pcrN6o8gGsKtR2VLoeuVVbZurQ4WEUsbwC', //test user secret
            function(error,data){
                if(error){
                    // res.status(500).json({
                    //     error
                    // })
                    console.log(error);
                } else {
                    res.status(200).send(JSON.parse(data))
                }
            } 
        )
    }
    static viewTwit(req,res){
          Tweets.get(
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
        Tweets.get(
          'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.qry,
          '2551956858-AHVEyIxFstML0lfX3Wr8GGazBnhDG8jlxIkp1VI', //test user token 
          'IcSCnECEfN7pcrN6o8gGsKtR2VLoeuVVbZurQ4noWEUsbwC', //test user secret
          function (error, data){
            console.log('INI ERROR',data)
            if (error) {
              res.status(500).send(error)
            } else {
              res.send(JSON.parse(data))
            }
        });
      }
 
      static postTwit(req,res){
        Tweets.post(
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