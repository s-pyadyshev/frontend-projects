$(document).ready(() => {

    if($('.js-play-video').length) {
        $('.js-play-video').on('click', function() {
            const $this = $(this);
            let iframe = document.querySelector('iframe');
            let player = new Vimeo.Player(iframe);

            player.play();
        
            player.on('play', function() {
                $this.fadeOut(300);
            });

            player.on('pause', function() {
                $this.fadeIn(300);
            });
        });
    };
});