$(document).ready(() => {

    if($('.js-video-swiper').length > 0) {
        let $window = $(window);
        let windowWidth = $window.outerWidth();
        let breakpoint = 1250;
        let isInitVideoSlider = false;

        let videoSwiper = new Swiper ('.js-video-swiper', {
            init: false,
            loop: true,
            spaceBetween: 15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });

        const initialVideoSwiper = () => {
            if(windowWidth < breakpoint && !isInitVideoSlider) {
                videoSwiper.init();
                isInitVideoSlider = true;
            } else if(windowWidth >= breakpoint && isInitVideoSlider) {
                videoSwiper.destroy(false, true);
                isInitVideoSlider = false;
            }
        }
        initialVideoSwiper();

        $window.resize(() => {
            if(windowWidth !== $window.outerWidth()) {
                windowWidth = $window.outerWidth();

                initialVideoSwiper();
            };
        });

        // $('.js-video-swiper').find('video').hover(function() {
        //     $(this).get(0).play();
        // });

        // $('.js-video-swiper').find('video').mouseleave(function() {
        //     $(this).get(0).pause();
        // });
    }
});


$(document).ready(() => {

    if($('.js-video-swiperqq').length > 0) {
        let $window = $(window);
        let windowWidth = $window.outerWidth();
        let breakpoint = 1250;
        let isInitVideoSlider = false;

        let videoSwiper = new Swiper ('.js-video-swiperqq', {
            init: false,
            loop: true,
            spaceBetween: 15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });

        const initialVideoSwiper = () => {
            if(windowWidth < breakpoint && !isInitVideoSlider) {
                videoSwiper.init();
                isInitVideoSlider = true;
            } else if(windowWidth >= breakpoint && isInitVideoSlider) {
                videoSwiper.destroy(false, true);
                isInitVideoSlider = false;
            }
        }
        initialVideoSwiper();

        $window.resize(() => {
            if(windowWidth !== $window.outerWidth()) {
                windowWidth = $window.outerWidth();

                initialVideoSwiper();
            };
        });

        // $('.js-video-swiper').find('video').hover(function() {
        //     $(this).get(0).play();
        // });

        // $('.js-video-swiper').find('video').mouseleave(function() {
        //     $(this).get(0).pause();
        // });
    }
});