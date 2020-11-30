if($('.js-gallery-slider').length > 0) {
    var weddingFilterSlider = null;
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var breakpoint = 768;

    function enableSlider() {
        if(windowWidth < breakpoint && !weddingFilterSlider) {
            weddingFilterSlider = new Swiper('.js-gallery-slider', {
                loop: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        };
    };
    enableSlider();

    function destroySlider() {
        if(windowWidth >= breakpoint && weddingFilterSlider) {
            weddingFilterSlider.destroy(true, true);
            weddingFilterSlider = null;
        }
    };

    $window.resize(function() {
        windowWidth = $window.outerWidth();
        enableSlider();
        destroySlider();
    })
};