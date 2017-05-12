// Starts playing the video on hover over card

var figure = $(".video-card").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}


// Plays video playlist on the page background

var myvid = document.getElementById('video');
var myvids = [
    "./videos/lviv.mp4",
    "./videos/river.mp4",
    "./videos/plant.mp4",
    "./videos/bubble.mp4",
    "./videos/street.mp4"
];
var activeVideo = 0;

window.onload = function() {
    myvid.play();
    myvid.addEventListener('ended', function(e) {
        // update the new active video index
        activeVideo = (++activeVideo) % myvids.length;
        // update the video source and play
        myvid.src = myvids[activeVideo];
        myvid.play();
        console.log('next video');
    });





    // Pauses video when page is  scrolling down

    var main = document.getElementById('main');
    main.onscroll = function pauseOnScroll() {
        var myvid = document.getElementById('video');
        if (main.scrollTop > 150) {
            myvid.pause()
            console.log('pause')
        } else {
            myvid.play()
            console.log('play')
        }
    };

};
