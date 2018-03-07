const OAuth = require('oauth')
const twatt = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'NV1fa3P25cEb1HYuNdvR5WAEP',
  'nlQMWyqpmMuaRJxjfFrmJcejDDuaTrxlDMcEPIRETMhiipnB53',
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {
  home (req, res) {
    twatt.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      '90120636-IIh21DpksJqJdKyPQzXwOqisJjaRqIrj4fauYomOq', //test user token 
      'Hkx0b3q40ZstDnQ4QIdK6XfUf6bQJ0bUzNjuXPJ9UnMiK', //test user secret             
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      }); 
  },

  update (req, res) {
    twatt.post(
      'https://api.twitter.com/1.1/statuses/update.json?',
      process.env.ACCESSTOKEN, //test user token 
      process.env.TOKENSECRET, //test user secret            
      {status: req.body.status},
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      }); 
  },

  profile (req, res) {
    twatt.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cimacim&count=10',
      process.env.ACCESSTOKEN, //test user token 
      process.env.TOKENSECRET, //test user secret                
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      }); 
  },

  search (req, res) {
    twatt.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.q}&result_type=mixed&count=4`,
      process.env.ACCESSTOKEN, //test user token 
      process.env.TOKENSECRET, //test user secret       
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      }); 
  }
}