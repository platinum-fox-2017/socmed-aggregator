const OAuth = require('oauth')

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      `${process.env.APPCONSKEY}`,
      `${process.env.APPCONSSECRET}`,
      '1.0A',
      null,
      'HMAC-SHA1'
    );


module.exports = {
  searchHacktivTweet(req, res){
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8',
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret
      function (e, data, response){
        if (e) {
          res.status(500).json({
            message: 'error retreiving api',
            err: e
          })
        } else {
          let dataJSON = JSON.parse(data)
          // res.status(200).json({
          //   message: 'Twitter api call successful',
          //   data: dataJSON
          // })
          res.status(200).send(dataJSON)
        }

      });

  },

  ownTimeline(req, res){
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Werkbau&count=10',
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret
      function (e, data, response){
        if (e) {
          res.status(500).json({
            message: 'error retreiving api',
            err: e
          })
        } else {
          let dataJSON = JSON.parse(data)
          // res.status(200).json({
          //   message: 'Twitter api call successful',
          //   data: dataJSON
          // })
          res.status(200).send(dataJSON)
        }

      });
  },

  searchTwitter(req, res){
    let query = req.body.q
    oauth.get(
      `https://api.twitter.com//1.1/search/tweets.json?q=`+ query + '&count=10',
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret
      function (e, data, response){
        if (e) {
          res.status(500).json({
            message: 'error retreiving api',
            err: e
          })
        } else {
          let dataJSON = JSON.parse(data)
          // res.status(200).json({
          //   message: 'Twitter api call successful',
          //   data: dataJSON
          // })
          console.log(dataJSON);
          res.status(200).send(dataJSON)
        }

      });
  },

  postTweet(req, res){
    let tweet = req.body.status
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=`+ tweet,
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret]
      req.body.tweet,
      'tweet',
      function (e, data, response){
        if (e) {
          res.status(500).json({
            message: 'error retreiving api',
            err: e
          })
        } else {
          let dataJSON = JSON.parse(data)
          // res.status(200).json({
          //   message: 'Twitter api call successful',
          //   data: dataJSON
          // })
          res.status(200).send(dataJSON)
        }

      });
  }



}
