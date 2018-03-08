const FB = require('fb');

function getFbData(req, res, next){
  const token = req.body.token;

  FB.api('me', { fields: ['id', 'name', 'email', 'gender', 'age_range'],
    access_token: token,}, function(response){
      console.log(response);
      req.response = response;
      // res.status(200).send(response);
      next()
    })

}

module.exports = getFbData;
