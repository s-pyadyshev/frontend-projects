import Swiper, { Pagination } from "swiper";

export const initSLider = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 96,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });
};
