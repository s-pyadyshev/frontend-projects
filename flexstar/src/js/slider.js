import Swiper from "swiper/bundle";

export const initSliders = () => {
  // product slider
  const slider = new Swiper(".slider-product", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
      type: "bullets",
      bulletElement: "button",
    },
    watchOverflow: true,
    on: {
      init: function () {
        if (this.slides.length <= 1) {
          this.allowSlidePrev = false;
          this.allowSlideNext = false;
          this.el
            .querySelector(".swiper-button-prev")
            .setAttribute("hidden", "");
          this.el
            .querySelector(".swiper-button-next")
            .setAttribute("hidden", "");
        }
      },
    },
  });
};
