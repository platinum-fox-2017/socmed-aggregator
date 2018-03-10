$(document).ready(() => {
  // $.get('http://localhost:3000/api/timeline',(data,status) => {
  //   if (status == 'success') {
  //     timelines = JSON.parse(data);
  //     timelines.forEach((timeline) => {
  //       $('#timeline-twitter').append(`<li class="list-group-item"><h4>${timeline.user.name}</h4><p> ${timeline.text}</p></li>`);
  //     })
  //   }
  // });
});
//post new Tweet
$('#btn-status').click(() => {
  const status = $('#status').val();
  $.post('http://localhost:3000/api/tweet',{status: status},(data,status) => {
    if (status == 'success') {
      let timeline = JSON.parse(data);
      $('#timeline-twitter').append(`<li class="list-group-item">${timeline.user.name} || ${timeline.text}</li>`);
    }
  })
})
// search tweet
$('#btn-search').click(() => {
  const search = $('#search').val();
  $.get(`http://localhost:3000/api/search?q=${search}`,(data,status) => {
    if (status == 'success') {
      timelines = JSON.parse(data);
      $('#timeline-twitter').empty();
      timelines.statuses.forEach((timeline) => {
        $('#timeline-twitter').append(`<li>${timeline.user.name} || ${timeline.text}</li>`);
      })
    }
  })
})
// refresh tweet
$('#btn-refresh').click(() => {
  $.get('http://localhost:3000/api/timeline',(data,status) => {
    if (status == 'success') {
      timelines = JSON.parse(data);
      timelines.forEach((timeline) => {
        $('#timeline-twitter').append(`<li class="list-group-item"><h4>${timeline.user.name}</h4><p> ${timeline.text}</p></li>`);
      })
    }
  });
});
