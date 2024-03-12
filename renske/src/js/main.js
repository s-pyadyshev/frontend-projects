import { mobileMenu } from "./components/mobile-menu";

window.addEventListener(
  "load",
  () => {
    mobileMenu.init();

    const header = document.querySelector(".header__inner");
    const headerHeight = header.offsetHeight;

    window.addEventListener(
      "scroll",
      () => {
        const top =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (top > headerHeight / 2) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
      },
      false
    );
  },
  false
);
