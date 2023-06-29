import "./vendor";
// import { vhFix } from "./vendor/vh-fix";
import { accordion } from "./components/accordion";
import { mobileMenu } from "./components/mobile-menu";
import { toggle } from "./components/toggle";
import { scrollspy } from "./components/scrollspy";
import "./components/scrollto";

window.addEventListener(
  "load",
  () => {
    accordion.init();
    mobileMenu.init();
    toggle.init();
    scrollspy.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
