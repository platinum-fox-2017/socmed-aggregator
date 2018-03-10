

$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/tweets/profile',
    success: function(response) {
      $('.showProfile')
      .append('<p>'+response.name+'</p>')
    },
    error: function(error) {
      console.log(error);
    }
  })

function gettimeline() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/tweets/timelineuser',
    success: function(response) {
      response.forEach(data=>{
        $('.showTimeline').append('<p>'+data.text+`</p><br>`)
      })
      console.log(response)
      // $('.showTimeline')
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function search(){
  let value = $('#searchbody').val()
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/tweets/search?q='+value,
    success: function(response) {
      response.forEach(data=>{
        $('.search').append('<p>'+data.text+`</p><br>`)
      })
      console.log(response)
    },
    error: function(error) {
      console.log(error);
    }
  })
}

function post(){
  let value = $('#searchpost').val()
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/tweets/post',
    data: value,
    success: function(response) {
      response.forEach(data=>{
        $('.search').append('<p>'+data.text+`</p><br>`)
      })
      console.log(response)
    },
    error: function(error) {
      console.log(error);
    }
  })
}