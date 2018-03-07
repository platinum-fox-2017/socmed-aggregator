const populateTimeline = (data) => {
    $('.timeline').empty();
    let side = ['left', 'right'];
    let count = 0;
    data.forEach(element => {
        $('.timeline').append(`
        <div class="container ${side[count]}">
        <div class="content">
        <span>${ moment(moment(element.created_at)).fromNow() }</span>
        <h4><img src="${element.user.profile_image_url}"> ${element.user.name} <span>@${element.user.screen_name}</span></h4>
        <p>${element.text}</p>
        </div>
        </div>
        `)
        count = ((count + 1) % 2);
    });
}

const getTimeline = () => {
    $.ajax({
        url: 'http://localhost:3000/api/timeline',
        method: 'get',
        success: (response) => {
            populateTimeline(response);
        }
    })
}

$('#status').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
        $.ajax({
            type: "POST",
            data: { status: $('#status').val() },
            url: 'http://localhost:3000/api/tweet',
            success: (response) => {
                getTimeline();
                $('#status').val('');
            },
        });
    }
});

$('#btnSearch').click(function (event) {
    $.ajax({
        url: `http://localhost:3000/api/search/${ $('#search').val() }`,
        method: 'get',
        success: (response) => {
            populateTimeline(response.statuses);
        }
    })
});

$('#search').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
        $('#btnSearch').click();        
    }
});

getTimeline();

setInterval(function () {
    getTimeline();
}, 300000);