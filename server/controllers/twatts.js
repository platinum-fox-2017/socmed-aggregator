const Twitter = require('../models/twatts')

module.exports = {
  twattProfile: (req, res) => {
    Twitter.get(
      'https://api.twitter.com/1.1/account/verify_credentials.json',
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET,
      (err, data, result) => {
        console.log('twattProfile ====', err);
        if (err) { res.status(400).send(JSON.parse(err.data.errors)) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  },

  twattTimeHome: (req, res) => {
    Twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET,
      (err, data, result) => {
        console.log('twattTimeHome ====', err);
        if (err) { res.status(400).send(JSON.parse(err.data.errors)) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  },

  twattTimeUser: (req, res) => {
    Twitter.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET,
      (err, data, result) => {
        if (err) { res.status(400).send(JSON.parse(err.message)) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  },

  twattSearch: (req, res) => {
    Twitter.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.q,
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET,
      (err, data, result) => {
        if (err) { res.status(400).send(JSON.parse(err.message)) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  },

  twattNewPost: (req, res) => {
    Twitter.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET, { 'status' : req.body.status },
      (err, data, result) => {
        if (err) { res.status(400).send(JSON.parse(err.message)) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  }
}
