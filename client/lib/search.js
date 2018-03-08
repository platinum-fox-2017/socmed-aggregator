$('#search_tweet').click( function() {
  let data = $('#tweet_form').serialize()
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/oauth/search',
    data: data,
    success: function(resp) {
      console.log(resp);
      resp.statuses.map((result) => {
        $('#twitter').append(
          `<div class="tweets">
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
  })
})
