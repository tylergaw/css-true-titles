(function () {
    var body = document.querySelector('body'),
        controls = document.querySelector('.controls');

    function togglePlay () {
        var className = 'paused',
            isPaused = body.classList.contains(className);

        if (isPaused) {
            body.classList.remove(className);
        }
        else {
            body.classList.add(className);
        }
    }

    function toggleVolume () {
        console.log('mute/unmute');
    }

    function controlsClick (e) {
        e.preventDefault();

        var target = e.target,
            cl = target.classList;

        if (cl.contains('play-toggle')) {
            togglePlay();
        }
        else if (cl.contains('mute-toggle')) {
            toggleVolume();
        }
    }

    controls.addEventListener('click', controlsClick);
}());