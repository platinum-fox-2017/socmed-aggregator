const Model = require('../models/tweet')

module.exports = {
	home: function(req, res, next) {
		console.log('masuk');
		Model.get(
			'https://api.twitter.com/1.1/statuses/home_timeline.json',
			process.env.AccessToken,
			process.env.AccessTokenSecret,
			function (err, data, result) {
				if(err) { next(err) }
				else { res.status(200).send(JSON.parse(data)) }
			}
		)
	},

	timelineUser: function(req, res, next) {
		Model.get(
			'https://api.twitter.com/1.1/statuses/user_timeline.json',
			process.env.AccessToken,
			process.env.AccessTokenSecret,
			function (err, data, result) {
				if(err) { next(err) }
				else { res.status(200).send(JSON.parse(data)) }
			}
		)
	},

	search: function(req, res, next) {
		Model.get(
			'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.search,
			process.env.AccessToken,
			process.env.AccessTokenSecret,
			function (err, data, result) {
				if(err) { next(err) }
				else { res.status(200).send(JSON.parse(data)) }
			}
		)
	},

	postTweet: function(req, res, next) {
		Model.post(
			'https://api.twitter.com/1.1/statuses/update.json',
			process.env.AccessToken,
			process.env.AccessTokenSecret,
			{status : req.body.status },
			function (err, data, result) {
				if(err) { next(err) }
				else { res.status(200).send(JSON.parse(data)) }
			}
		)
	}

}