$.ajax({
    method: "GET",
    url: "http://localhost:3000/api/twatt/hometimeline",
    dataType: "JSON"
})
.done(function(datas) {
    datas.forEach((data) => {
        $('#list-tl').append(`<li>${data.text}</li>`)
    })
})

function newTweet() {
    $.ajax({
        method: "POST",
        url : "http://localhost:3000/api/twatt/updatestatus",
        data : {
            status : $('#status').val()
        }
    })
    .done(function() {
        // alert('Tweet send !')
        // getTweet()
    })
}

// function getTweet() {

// }