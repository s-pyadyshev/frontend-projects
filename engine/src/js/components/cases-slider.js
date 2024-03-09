import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export const casesSlider = (function () {
  const init = function () {
    const casesSwiperElement = document.querySelector(".cases-slider");
    if (!casesSwiperElement) {
      return;
    }

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let casesSwiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function (className, settings) {
        if (document.querySelector(className)) {
          casesSwiper = new Swiper(className, settings);
        }
      };

      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (casesSwiper !== undefined) casesSwiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener("change", checker);
      checker();
    };

    resizableSwiper("(max-width: 1024px)", ".cases-slider", {
      modules: [Pagination],
      spaceBetween: 23,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button",
      },
    });
  };

  return {
    init,
  };
})();
