(function () {
    var body = document.getElementsByTagName('body')[0],
        track = document.getElementById('audio-track');

    // Pretty hacky here. The CSS animations take a short time to start/stop on
    // play/pause, but the audio starts immediately. Using this to make sure
    // the audio and animations stay in sync.
    function delayPlayToggle (action) {
        setTimeout(function () {
            if (action === 'play') {
                track.play();
            }
            else {
                track.pause();
            }
        }, 50);
    }

    function togglePlay (e) {
        var classPaused = 'paused',
            classPlaying = 'playing',
            isPaused = body.classList.contains(classPaused),
            target = e.target;

        e.preventDefault();

        if (isPaused) {
            body.classList.remove('first-play');
            body.classList.remove(classPaused);
            target.textContent = target.getAttribute('data-alt-text');
            delayPlayToggle('play');
        }
        else {
            body.classList.add(classPaused);
            target.textContent = target.getAttribute('data-text');
            delayPlayToggle('pause');
        }
    }

    function toggleVolume (e) {
        var muted = track.volume === 0,
            target = e.target;

        if (muted) {
            track.volume = 1;
            target.textContent = target.getAttribute('data-text');
        }
        else {
            track.volume = 0;
            target.textContent = target.getAttribute('data-alt-text');
        }
    }

    document.getElementById('play-toggle').addEventListener('click', togglePlay);
    document.getElementById('mute-toggle').addEventListener('click', toggleVolume);

    // man-handle the big play button a bit.
    document.getElementById('big-play-btn').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('play-toggle').click();
    });
}());