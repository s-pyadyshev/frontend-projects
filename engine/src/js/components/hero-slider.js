import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

export const heroSlider = (function () {
  const init = function () {
    const heroSwiperElement = document.querySelector(".hero-swiper");
    if (!heroSwiperElement) {
      return;
    }

    const progressBar = document.querySelector(".hero-slider-progress");

    const heroSwiper = new Swiper(".hero-swiper", {
      modules: [Autoplay, Pagination],
      spaceBetween: 20,
      slidesPerView: "auto",
      followFinger: false,
      breakpoints: {
        1025: {
          spaceBetween: 0,
          rewind: true,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button",
      },
      autoplay: {
        delay: 4000,
      },
      on: {
        init: function () {
          progressBar.style.animation = `fillBackground 4s`;
          setTimeout(() => {
            progressBar.style.animation = `none`;
          }, 3950);
        },
        beforeSlideChangeStart: function () {
          progressBar.style.animation = `fillBackground 4s`;
          setTimeout(() => {
            progressBar.style.animation = `none`;
          }, 3950);
        },
      },
    });
  };

  return {
    init,
  };
})();
