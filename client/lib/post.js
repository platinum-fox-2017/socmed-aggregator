
$('#submit_tweet').click( function() {
  let data = $('#tweet_form').serialize()
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/oauth/post',
    data: data
  })
})
