var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("youtube", {
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(e) {
    var playButton = document.getElementById("start");
    player.playVideo();
    player.pauseVideo();
    player.setVolume(100);
    playButton.addEventListener("click", function () {
        player.playVideo();
        document.getElementById("youtube").style.display = "block";
        document.getElementById("title").innerText = "Have a nice day";
        document.getElementById("desc").innerText = "Sorry not sorry :)";
        document.getElementById("start").style.display = "none";
    });
}
