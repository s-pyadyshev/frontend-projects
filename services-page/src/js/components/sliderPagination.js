import Swiper, { Pagination } from "swiper";

export const sliderPagination = (function () {
  const init = function () {
    const swiperPagination = new Swiper(".slider-pagination", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        renderBullet: function (index, className) {
          return (
            '<button class="' + className + '">' + (index + 1) + "</button>"
          );
        },
      },
    });
  };

  return {
    init,
  };
})();
