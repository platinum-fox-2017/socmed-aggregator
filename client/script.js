'use stirct'

function rePopulateTimeline(tweets) {
    $('.tweet').remove();
    tweets.forEach((tweet) => {
        let template =  `
            <div class="tweet">
                <p style="font-size:20px;"><b style="font-size:12px; color:#7b7c77;">@${tweet.user.name}</b><br>${tweet.text}</p>
            </div>
                        `;
        $('#tweetDiv').append(template);
    })
}

function getTimeline() {
    $.ajax({
        url: 'http://localhost:3000/twitter',
        method: 'GET',
        success: function(tweets) {
            tweets = JSON.parse(tweets);
            rePopulateTimeline(tweets);
        }
    });
};

$('#postTweet').click(() => {
    $.ajax({
        url: 'http://localhost:3000/twitter',
        method: 'POST',
        data: {tweet : $('#tweetBar').val()},
        success: function(tweets) {
            getTimeline()
        }
    })
});

$('#searchButton').click(() => {
    $.ajax({
        url: `http://localhost:3000/twitter/search/${$('#searchBar').val()}`,
        method: 'GET',
        success: function(searchRes) {
            searchRes = JSON.parse(searchRes)
            rePopulateTimeline(searchRes.statuses);
        }
    })
});