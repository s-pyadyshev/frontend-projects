import "./vendor";
import { sectionOverlap } from "./components/sectionOverlap";
import { scrollspy } from "./components/scrollspy";
import { smoothScroll } from "./components/scrollto";
import { pageNavFixed } from "./components/page-nav";

window.addEventListener(
  "load",
  () => {
    scrollspy.init();
    sectionOverlap.init();
    smoothScroll.init();
    pageNavFixed.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
