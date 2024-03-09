export const permutation = (() => {
  const init = () => {
    const textBlock = document.querySelector(".main-cases__text");

    const swiperWrapper = document.querySelector(
      ".cases-slider .swiper-wrapper"
    );

    const firstPlace = document.querySelector(".main-cases .container");

    if (!textBlock) {
      return;
    }

    const replaceBlock = () => {
      if (window.innerWidth >= 1025) {
        swiperWrapper.append(textBlock);
      } else if (window.innerWidth > 320 && window.innerWidth < 1025) {
        firstPlace.prepend(textBlock);
      }
    };

    replaceBlock();

    window.addEventListener("resize", () => {
      replaceBlock();
    });
  };

  return {
    init,
  };
})();
