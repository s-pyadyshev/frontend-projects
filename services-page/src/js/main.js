import "./vendor";
import { scrollspy } from "./components/scrollspy";
import { smoothScroll } from "./components/scrollto";

window.addEventListener(
  "load",
  () => {
    scrollspy.init();
    smoothScroll.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
