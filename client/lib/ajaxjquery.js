loadData();

function searchTweet() {
    $('#list-tl').html("")
    $('#search-result').html("")
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/api/twatt/searchtweet?keyword=${$('#search').val()}`,
        dataType: "JSON"
    })
    .done(function(datas) {
        $('#search-result').append(`Search Result for : ${$('#search').val()}`)

        datas.statuses.forEach((data) => {
            $('#list-tl').append(`<li>${data.text}</li>`)
        })

        $('#status').val('')
    })
}

function newTweet() {
    $.ajax({
        method: "POST",
        url : "http://localhost:3000/api/twatt/updatestatus",
        data : {
            status : $('#status').val()
        }
    })
    .done(function() {
        loadData()
    })
}

function loadData() {
    $('#list-tl').html("")
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/api/twatt/hometimeline",
        dataType: "JSON"
    })
    .done(function(datas) {
        datas.forEach((data) => {
            $('#list-tl').append(`<li>${data.text}</li>`)
        })
        $('#status').val('')
    })
}