(function () {
    var body = document.querySelector('body'),
        controls = document.querySelector('.controls');

    function togglePlay (e) {
        var className = 'paused',
            isPaused = body.classList.contains(className),
            target = e.target;

        if (isPaused) {
            body.classList.remove('first-play');
            body.classList.remove(className);
            target.textContent = target.getAttribute('data-alt-text');
        }
        else {
            body.classList.add(className);
            target.textContent = target.getAttribute('data-text');
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
            togglePlay(e);
        }
        else if (cl.contains('mute-toggle')) {
            toggleVolume(e);
        }
    }

    controls.addEventListener('click', controlsClick);
}());