const FB = require('fb');
const jwt = require('jsonwebtoken');


module.exports = {
    signInFB : function(req,res) {
        console.log("jalan")
        FB.api('/me', {fields: ['id', 'name','email'], access_token:req.headers.fbtoken}, function(userData) {
            if(userData){
                let token = jwt.sign(userData, 'secret');
                console.log(userData)
                res.status(200).json({
                  message: "Get JWT Token",
                  token: token,
                  email: userData.email
                });
            }
            else{
                console.log("gagal")
            }
        });
    }
}
