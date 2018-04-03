loadTweets();

// window.location.href = 'login.html'


function loadTweets() {
    $('#tweet').empty();
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/twatt/home",
        dataType: "JSON",
        headers: {
          token:localStorage.token
        },
        error: function() {
          window.location.href = 'login.html';
        }
    })
    .done(function(data) {
        console.log(data);
        let tweets = data.data
        tweets.forEach(value => {
            $('#tweet').append(`
                <div class="row grey lighten-4">
                <div class="col s12">
                <div class="inside_tweet">
                    <div class="col s2">
                    <img class="profile circle responsive-img" src=${value.user.profile_image_url}>
                    </div>
                    <div class="col s10">
                        <p><strong>${value.user.name}</strong>  @${value.user.screen_name}<br>
                         ${value.text}<br>
                         <span class='right small'>${value.created_at}</span>
                         </p>
                    </div>

                </div>
                </div>
                </div>

            `)
        })
    })
}

$(document).ready(function(){
    $('#status').keypress(function(e){
      if(e.keyCode==13)
        postTweet();
    });
});

$(document).ready(function(){
    $('#search').keypress(function(e){
      if(e.keyCode==13)
        searchTweet();
    });
});

function searchTweet(){
    $('#tweet').empty();
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/twatt/search?q=${$('#search').val()}`,
        dataType: "JSON",
        headers: {
          token:localStorage.token
        },
        error: function() {
          window.location.href = 'login.html';
        }
    })
    .done(function(data) {
        console.log(data);
        let tweets = data.data.statuses
        tweets.forEach(value => {
            $('#tweet').append(`
                <div class="row grey lighten-4">
                <div class="col s12">
                <div class="inside_tweet">
                    <div class="col s2">
                    <img class="profile circle responsive-img" src=${value.user.profile_image_url}>
                    </div>
                    <div class="col s10">
                        <p><strong>${value.user.name}</strong>  @${value.user.screen_name}<br>
                         ${value.text}<br>
                         <span class='right small'>${value.created_at}</span>
                         </p>
                    </div>

                </div>
                </div>
                </div>

            `)
        })
    })
}

function loadUserTweets() {
    $('#tweet').empty();
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/twatt/fadhilmch",
        dataType: "JSON",
        headers: {
          token:localStorage.token
        },
        error: function() {
          window.location.href = 'login.html';
        }
    })
    .done(function(data) {
        console.log(data);
        let tweets = data.data
        tweets.forEach(value => {
            $('#tweet').append(`
                <div class="row grey lighten-4">
                <div class="col s12">
                <div class="inside_tweet">
                    <div class="col s2">
                    <img class="profile circle responsive-img" src=${value.user.profile_image_url}>
                    </div>
                    <div class="col s10">
                        <p><strong>${value.user.name}</strong>  @${value.user.screen_name}<br>
                         ${value.text}<br>
                         <span class='right small'>${value.created_at}</span>
                         </p>
                    </div>

                </div>
                </div>
                </div>

            `)
        })
    })
}

function postTweet(){
    $.ajax({
        method: "POST",
        url: `http://localhost:3000/twatt/post?status=${$('#status').val()}`,
        data: {
            update : $('#status').val()
        },
        headers: {
          token:localStorage.token
        },
        error: function() {
          window.location.href = 'login.html';
        }
    })
    .done(function(data) {
        console.log("sucess");
        console.log(data);
        loadTweets()
    })
}

setInterval(function () {
    loadTweets();
}, 300000);
