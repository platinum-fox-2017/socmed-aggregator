const oauth = require('../helpers/oauth');

module.exports = {
  search: (req,res) => {
    let query = req.query.q;
     oauth.get(
       'https://api.twitter.com/1.1/search/tweets.json?q='+ query,
       '2852541540-o75dBjVPTrt2dPiMzNIfSoe9H0LRG5suS3d7YbC', //test user token
       'UMth6G3nr072bGMXxQtJ50l6uU89SqZQjqlkso4M53lxu', //test user secret
       function (e, data){
         if (e) {
           res.status(500).json({
             message: "something went wrong",
             error: e
           });
         }
         res.status(200).send(data)
       }
     );
  },
  timeline: (req,res) => {
     oauth.get(
       'https://api.twitter.com/1.1/statuses/home_timeline.json',
       '2852541540-o75dBjVPTrt2dPiMzNIfSoe9H0LRG5suS3d7YbC', //test user token
       'UMth6G3nr072bGMXxQtJ50l6uU89SqZQjqlkso4M53lxu', //test user secret
       function (e, data){
         if (e) {
           res.status(500).json({
             message: "something went wrong",
             error: e
           });
         }
         res.status(200).send(data)
       }
     );
  },
  tweet: (req,res) => {
     oauth.post(
       'https://api.twitter.com/1.1/statuses/update.json',
       '2852541540-o75dBjVPTrt2dPiMzNIfSoe9H0LRG5suS3d7YbC', //test user token
       'UMth6G3nr072bGMXxQtJ50l6uU89SqZQjqlkso4M53lxu', //test user secret
       {status: req.body.status},
       function (e, data){
         if (e) {
           res.status(500).json({
             message: "something went wrong",
             error: e
           });
         }
         res.status(200).send(data)
       }
     );
  },
  requestToken: (req,res) => {
     oauth.post(
       'https://api.twitter.com/oauth/request_token',
       '2852541540-o75dBjVPTrt2dPiMzNIfSoe9H0LRG5suS3d7YbC', //test user token
       'UMth6G3nr072bGMXxQtJ50l6uU89SqZQjqlkso4M53lxu', //test user secret
       {oauth_callback: 'http://localhost/api/twitter-callback'},
       function (e, data){
         if (e) {
           res.status(500).json({
             message: "something went wrong",
             error: e
           });
         }
         res.status(200).send(data)
       }
     );
  }
};
