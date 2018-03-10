const FB = require('fb');

module.exports = {
  requestToken: (req,res) => {
    const token = req.body.token;
    FB.api('me', { fields: ['id', 'name','email'], access_token: token }, function (response) {
      res.status(200).json(response);
    });
  }
};
