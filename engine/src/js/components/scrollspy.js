import { throttle, isElementInViewport } from "../helpers";

const applyScrollspyClasses = (elements) => {
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      const animationClass = element.dataset.scrollspy;
      element.classList.add("animate__animated");
      if (animationClass) {
        element.classList.add(animationClass);
      }
    }
  });
};

export const scrollspy = (function () {
  const init = function () {
    const scrollspyElements = document.querySelectorAll("[data-scrollspy]");

    if (!scrollspyElements.length) {
      return;
    }

    applyScrollspyClasses(scrollspyElements);

    document.addEventListener(
      "scroll",
      throttle(() => {
        applyScrollspyClasses(scrollspyElements);
      }, 500)
    );
  };

  return {
    init,
  };
})();
