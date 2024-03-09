import { mobileMenu } from "./components/mobile-menu";
import { heroSlider } from "./components/hero-slider";
import { clientsSlider } from "./components/clients-slider";
import { permutation } from "./components/permutation";
import { casesSlider } from "./components/cases-slider";
import { jobSlider } from "./components/job-slider";
import { tabs } from "./components/tabs";
import { scrollspy } from "./components/scrollspy";
import { backToTop } from "./components/backToTop";
import { cardEmployeesInit } from "./components/cardEmployees";

window.addEventListener(
  "load",
  () => {
    mobileMenu.init();
    heroSlider.init();
    clientsSlider.init();
    casesSlider.init();
    jobSlider.init();
    permutation.init();
    tabs.init();
    scrollspy.init();
    backToTop.init();
    cardEmployeesInit.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
