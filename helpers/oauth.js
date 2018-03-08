const OAuth = require('oauth');

const oauth = new OAuth.OAuth(
   'https://api.twitter.com/oauth/request_token',
   'https://api.twitter.com/oauth/access_token',
   'vXoU3ZNuZOEwPMekrCjBdlsSV',
   'muN9nIoEDDLNljdni3N0fVm3932LGIQMXiiR4Eczo7gdqdbjkz',
   '1.0A',
   null,
   'HMAC-SHA1'
 );

 module.exports = oauth;
