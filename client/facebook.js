window.fbAsyncInit = function() {
    FB.init({
      appId      : '201452943945327',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12' //version of graph api
    });
    // FB.AppEvents.logPageView();
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


   function statusChangeCallback(response) {
       console.log(response);
       if (response.status === 'connected') {
           FB.api('/me', {fields:['name','email']} , function(response) {
               $.ajax({
                   method:"POST",
                   url:"http://localhost:3000/twatt/login",
                   data: {
                       idFB: response.id,
                       email: response.email,
                       fbToken: sCCResponse.authResponse.accessToken
                   }
               })
                  .then(function (response_login) {
                    console.log(sCCResponse)
                    localStorage.setItem('token', response_login.data.token);
                    window.location.href = 'index.html'
                  })
                  .catch(function (error) {

                  });
              }
          })
      }

   //
   //
   //       const token = response.authResponse.accessToken;
   //       $.post('http://localhost:3000/api/facebook/request-token',{token: token },(data,status) => {
   //         if (status == 'success') {
   //           $('#text-login-as').text(`Welcome, ${data.name}`);
   //           $('#fb-btn-login').hide();
   //         }
   //       }
   // }
