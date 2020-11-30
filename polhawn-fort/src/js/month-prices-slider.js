function initMonthPricesSlider() {
  if ($(".month-prices-slider").length) {
    'use strict';
    var breakpoint = window.matchMedia( '(min-width:768px)' );
    let monthPricesSlider1;
    var breakpointChecker = function() {
      if ( breakpoint.matches === true ) {
        if ( monthPricesSlider1 !== undefined ) monthPricesSlider1.destroy( true, true );
        return;
        } else if ( breakpoint.matches === false ) {
          enableSwiper1();
          enableSwiper2();
          enableSwiper3();
          return;
        }
    };

    function slideDouble(selector) {
      var monthPricesSliderElement = document.querySelector(selector + " .swiper-container").swiper;
      // workaround to slide two slides at once since "loopedSlides" doesn't work in vertical mode
      $(selector + " .swiper-button-next").on("click", function() {
        monthPricesSliderElement.slideNext();
      });
      $(selector + " .swiper-button-prev").on("click", function() {
        monthPricesSliderElement.slidePrev();
      });
    }

    var enableSwiper1 = function() {
      var monthPricesSlider1 = new Swiper (".month-prices-slider1 .swiper-container", {
        spaceBetween: 40,
        direction: 'vertical',
        slidesPerView: 2,
        loopedSlides: 2,
        navigation: {
            nextEl: '.swiper-button-next.swiper-button-next1',
            prevEl: '.swiper-button-prev.swiper-button-prev1',
        },
        autoHeight: true
      });
      slideDouble(".month-prices-slider1");
    }
      var enableSwiper2 = function() {
        var monthPricesSlider2 = new Swiper (".month-prices-slider2 .swiper-container", {
          spaceBetween: 40,
          direction: 'vertical',
          slidesPerView: 2,
          loopedSlides: 2,
          navigation: {
              nextEl: '.swiper-button-next.swiper-button-next2',
              prevEl: '.swiper-button-prev.swiper-button-prev2',
          },
          autoHeight: true
        });
        slideDouble(".month-prices-slider2");
    };
    var enableSwiper3 = function() {
      var monthPricesSlider3 = new Swiper (".month-prices-slider3 .swiper-container", {
        spaceBetween: 40,
        direction: 'vertical',
        slidesPerView: 2,
        loopedSlides: 2,
        navigation: {
            nextEl: '.swiper-button-next.swiper-button-next3',
            prevEl: '.swiper-button-prev.swiper-button-prev3',
        },
        autoHeight: true
      });
      slideDouble(".month-prices-slider3");
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
};
