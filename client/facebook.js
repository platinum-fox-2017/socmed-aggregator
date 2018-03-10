function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected' && localStorage.getItem('fbToken')) {
    localStorage.setItem('fbToken', response.authResponse.accessToken)
    testAPI();
  } else {
    // $('#statusLogin').empty()
    window.location.href='./login.html'
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '420535945053857',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    // console.log('Successful login for: ' + response.name);
    // window.location.href='./index.html'
    // let template =`
    //               <th>Thanks for logging in, ${response.name}!</th>
    //               <th><button onclick="logout()">Logout</button></th>   
    //               `
    // $('#statusLogin').append(template);
    // $('#statusLogout').empty()
  });
}

function logout() {
  FB.logout(function (response) {
    console.log('logout')
    window.location.href='login.html'
  })
}