import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

export const clientsSlider = (function () {
  const init = function () {
    const clientsSwiperElement = document.querySelector(".clients-swiper");
    if (!clientsSwiperElement) {
      return;
    }

    const clientsSwiper = new Swiper(".clients-swiper", {
      modules: [Autoplay],
      spaceBetween: 20,
      slidesPerView: 2,
      followFinger: false,
      loop: true,
      breakpoints: {
        640: {
          spaceBetween: 80,
          slidesPerView: 3,
        },
        960: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
        1280: {
          spaceBetween: 160,
          slidesPerView: 5,
        },
      },
      autoplay: {
        delay: 4000,
      },
    });
  };

  return {
    init,
  };
})();
