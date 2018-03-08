const User = require('../models/users.js');
const FB = require('fb');

class TokenController {

  // static getFbData(req, res, next){
  //   const token = req.body.token;
  //
  //   FB.api('me', { fields: ['id', 'name', 'email', 'gender', 'age_range'],
  //     access_token: token,}, function(response){
  //       console.log(response);
  //       req.response = response;
  //       // res.status(200).send(response);
  //       next()
  //     })
  //
  // }

  static tokenToClient(req, res){
    let data = {
      token:req.token,
      fbData: req.response,
      message:'jwt login succesful'
    }
    res.status(200).send(data)
  }

}

module.exports = TokenController;
