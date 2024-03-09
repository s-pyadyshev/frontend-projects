import "@babel/polyfill";
require("viewport-units-buggyfill").init();
require("./vendor/jquery.modal.js");

import { polyfillForEach } from "./polyfills/polyfillForEach";
import { addHeaderOffset } from "./addHeaderOffset";
import { initFullpage } from "./initFullpage";
import { initMobileMenu } from "./mobileMenu";
import { initTabs } from "./tabs";
import { initToggle } from "./toggle";
import { initSliders } from "./slider";
import { initScrollForm } from "./initScrollForm";
import { scrollToElement } from "./scrollToElement";
import { toggleStickyHeader } from "./toggleStickyHeader";

$(function () {
  polyfillForEach();
  addHeaderOffset();
  initTabs();
  initFullpage();
  initMobileMenu();
  initSliders();
  initTabs();
  initToggle();
  initScrollForm();
  toggleStickyHeader();
  scrollToElement();
});
