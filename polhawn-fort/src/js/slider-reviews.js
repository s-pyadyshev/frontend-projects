const sliderReviews = new Swiper('.slider-reviews .swiper-container', {
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 1500,
  autoHeight: true,
  breakpoints: {
    768: {
      spaceBetween: 50,
    },
    1200: {
      spaceBetween: 100,
    }
  }
});
