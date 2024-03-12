/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileMenu: function() { return /* binding */ mobileMenu; }
/* harmony export */ });
const mobileMenu = (() => {
  const init = () => {
    const mobileMenuOpen = document.querySelector(".js-open-menu");
    const menu = document.querySelector(".menu");
    const menuList = document.querySelector(".menu__list");
    const menuLinks = document.querySelectorAll(".menu__link");
    if (!mobileMenuOpen) {
      return;
    }
    const mobileMenuClose = document.querySelector(".js-close-menu");
    const body = document.querySelector("body");
    mobileMenuOpen.addEventListener("click", function () {
      body.classList.toggle("menu-active");
      menu.classList.add("menu--open");
      menu.classList.remove("menu--closed");
      mobileMenuClose.focus();
    });
    mobileMenuClose.addEventListener("click", function () {
      body.classList.toggle("menu-active");
      menu.classList.add("menu--closed");
      menu.classList.remove("menu--open");
    });
    menuList.addEventListener("click", function (event) {
      if (event.target.closest(".menu__link")) {
        menuLinks.forEach(link => {
          link.classList.remove("active");
        });
        event.target.closest(".menu__link").classList.toggle("active");
        body.classList.toggle("menu-active");
        menu.classList.add("menu--closed");
        menu.classList.remove("menu--open");
      }
    });
  };
  return {
    init
  };
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mobile-menu */ "./src/js/components/mobile-menu.js");

window.addEventListener("load", () => {
  _components_mobile_menu__WEBPACK_IMPORTED_MODULE_0__.mobileMenu.init();
  const header = document.querySelector(".header__inner");
  const headerHeight = header.offsetHeight;
  window.addEventListener("scroll", () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > headerHeight / 2) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }, false);
}, false);
}();
/******/ })()
;
//# sourceMappingURL=main.js.map