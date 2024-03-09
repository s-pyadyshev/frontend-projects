import { throttle } from "../helpers";

export const backToTop = (() => {
  const init = () => {
    const btnUp = document.querySelector(".button--up");
    if (!btnUp) {
      return;
    }

    btnUp.classList.add("is-hidden");

    btnUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    const onScroll = throttle(() => {
      if (window.scrollY > 200) {
        btnUp.classList.remove("is-hidden");
      } else {
        btnUp.classList.add("is-hidden");
      }
    }, 100);

    document.addEventListener("scroll", onScroll);
  };

  return {
    init,
  };
})();
