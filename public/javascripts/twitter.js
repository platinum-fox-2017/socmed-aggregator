$(document).ready(() => {
  $.get('/api/timeline',(data,status) => {
    if (status == 'success') {
      timelines = JSON.parse(data);
      timelines.forEach((timeline) => {
        $('#timeline').append(`<li>${timeline.user.name} || ${timeline.text}</li>`);
      })
    }
  });
});
//post new Tweet
$('#btn-status').click(() => {
  const status = $('#status').val();
  $.post('/api/tweet',{status: status},(data,status) => {
    if (status == 'success') {
      let timeline = JSON.parse(data);
      $('#timeline').append(`<li class="list-group-item">${timeline.user.name} || ${timeline.text}</li>`);
    }
  })
})
// search tweet
$('#btn-search').click(() => {
  const search = $('#search').val();
  $.get(`/api/search?q=${search}`,(data,status) => {
    if (status == 'success') {
      timelines = JSON.parse(data);
      $('#timeline').empty();
      timelines.statuses.forEach((timeline) => {
        $('#timeline').append(`<li>${timeline.user.name} || ${timeline.text}</li>`);
      })
    }
  })
})
