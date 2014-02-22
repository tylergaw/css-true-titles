(function () {
    var body = document.getElementsByTagName('body')[0],
        track = document.getElementById('audio-track');

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
            track.play();
        }
        else {
            body.classList.add(classPaused);
            target.textContent = target.getAttribute('data-text');
            track.pause();
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
}());