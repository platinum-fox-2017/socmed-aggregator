$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/oauth/timeline',
  success: function(resp) {
    resp.map((result) => {
      $('.timeline').append(
        `<div class="post">
          <article class="tweet">
            <p>
              ${result.text}
            </p>
          </article>
        </div>`
      )
    })

  },
  error: function(error) {
    console.log(error);
  }
});
