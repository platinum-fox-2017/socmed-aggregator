$("#button-tweet").click(()=> {
    $.ajax({
      url       : "http://localhost:3000/api/twatt",
      method    : "post",
      data      : {
        tweet : $("#tweet").val()
      },
      dataType  : "json",
      success   : (data) => {
        console.log(data);
        $(".newtimeline").append(
        `<div class="box">
        <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src=${data.tweet.user.profile_image_url} alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${data.tweet.user.name}</strong> <small>${data.tweet.user.screen_name}</small> <small>31m</small>
              <br>
              ${data.tweet.text}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        </article>
        </div>`
          )
      },
      error     : (err) => {
        console.log(err);
      }
    })
  })