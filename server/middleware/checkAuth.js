const jwt = require('jsonwebtoken');

module.exports = {
  checkAuth(req,res,next){
    if(req.headers.token !== null){
      console.log(req.headers.token);
      let decode = jwt.verify(req.headers.token, 'secret');
      console.log(`Hasil Decode: ${JSON.stringify(decode)}`)
      next();
    }
    else
      throw new Error('cannot verify user')
  }
}
