/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/apply-form-upload.js":
/*!*************************************!*\
  !*** ./src/js/apply-form-upload.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uikit_dist_js_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit */ "./node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit_dist_js_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit__WEBPACK_IMPORTED_MODULE_0__);
// var bar = document.getElementById('js-progressbar');

$(document).ready(function () {
  uikit_dist_js_uikit__WEBPACK_IMPORTED_MODULE_0___default.a.upload('.js-upload', {
    url: '',
    multiple: true,
    beforeSend: function beforeSend(environment) {
      console.log('beforeSend', arguments); // The environment object can still be modified here. 
      // var {data, method, headers, xhr, responseType} = environment;
    },
    beforeAll: function beforeAll() {
      console.log('beforeAll', arguments);
    },
    load: function load() {
      console.log('load', arguments);
    },
    error: function error() {
      console.log('error', arguments);
    },
    complete: function complete() {
      console.log('complete', arguments);
    },
    loadStart: function loadStart(e) {
      console.log('loadStart', arguments);
    },
    progress: function progress(e) {
      console.log('progress', arguments);
    },
    loadEnd: function loadEnd(e) {
      console.log('loadEnd', arguments);
    },
    completeAll: function completeAll() {
      console.log('completeAll', arguments);
      alert('Upload Completed');
    }
  });
});

/***/ }),

/***/ "./src/js/benefits-slider.js":
/*!***********************************!*\
  !*** ./src/js/benefits-slider.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.js-benefits-slider').length > 0) {
    var benefitsSwiper = new Swiper('.js-benefits-slider', {
      loop: true,
      spaceBetween: 15,
      centeredSlides: true,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
          centeredSlides: true
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
          centeredSlides: false
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var $toggleDropdown = $(".js-toggle-dropdown");

  if ($toggleDropdown.length > 0) {
    var stateClass = "open-dropdown";
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var breakpoint = 768;
    var animTime = 300;

    var openDropdown = function openDropdown(el) {
      el.addClass(stateClass);
      el.next().stop().slideDown(animTime);
    };

    var closeDropdown = function closeDropdown(el) {
      el.removeClass(stateClass);
      el.next().stop().slideUp(animTime);
    }; // Init dropdown state for mobile


    if (windowWidth < breakpoint) {
      closeDropdown($toggleDropdown);
    }

    $window.resize(function () {
      if (windowWidth !== $window.outerWidth() && $window.outerWidth() >= breakpoint) {
        openDropdown($toggleDropdown);
        $toggleDropdown.next().stop().height("");
        windowWidth = $window.outerWidth();
      } else if (windowWidth !== $window.outerWidth() && $window.outerWidth() < breakpoint) {
        closeDropdown($toggleDropdown);
        windowWidth = $window.outerWidth();
      } else {
        windowWidth = $window.outerWidth();
      }
    });
    $toggleDropdown.on("click", function () {
      if (windowWidth < breakpoint) {
        var $this = $(this);

        if ($this.hasClass(stateClass)) {
          closeDropdown($this);
        } else {
          openDropdown($this);
        }
      }
    });
  }
});
$(document).ready(function () {
  var $dropdown = $(".js-dropdown");

  if ($dropdown.length) {
    var stateClass = "is-open";
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var animTime = 300;

    var openDropdown = function openDropdown(el) {
      el.next().stop().slideDown(animTime);
      el.parent().addClass(stateClass);
    };

    var closeDropdown = function closeDropdown(el) {
      el.next().stop().slideUp(animTime);
      el.parent().removeClass(stateClass);
    };

    $dropdown.children(".dropdown__title").on("click", function () {
      var $this = $(this);

      if ($this.parent().hasClass(stateClass)) {
        closeDropdown($this);
      } else {
        openDropdown($this);
      }
    });
  }
});

/***/ }),

/***/ "./src/js/filter-sticky.js":
/*!*********************************!*\
  !*** ./src/js/filter-sticky.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  if ($('.js-filter-sticky').length > 0) {
    var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Controller();
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var duration = $('.job-listing__aside').height() - $('.js-filter-sticky').height();
    var filterStickyInstance = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
      triggerElement: '.js-filter-sticky',
      triggerHook: 0,
      offset: -110,
      duration: duration
    }).addTo(controller).setPin(".js-filter-sticky");

    var offsetFilterTrigger = function offsetFilterTrigger() {
      if (windowWidth < 768) {
        filterStickyInstance.offset(-110);
        $(".job-listing__wrap").addClass("border-top");
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        filterStickyInstance.offset(-129);
        $(".job-listing__wrap").removeClass("border-top");
      } else if (windowWidth >= 1024) {
        filterStickyInstance.offset(-159);
        $(".job-listing__wrap").css("padding-top", "20px");
      }

      ;
    };

    offsetFilterTrigger();
    $window.resize(function () {
      windowWidth = $window.outerWidth();
      duration = $('.job-listing__aside').height() - $('.js-filter-sticky').height();
      offsetFilterTrigger();
    });
    $('.search-roles').addClass('no-gradient');
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _move_link_back_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move-link-back-page */ "./src/js/move-link-back-page.js");
/* harmony import */ var _move_link_back_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_move_link_back_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-menu */ "./src/js/toggle-menu.js");
/* harmony import */ var _toggle_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toggle_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scrollSceneForHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollSceneForHeader */ "./src/js/scrollSceneForHeader.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ "./src/js/dropdown.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _video_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-swiper */ "./src/js/video-swiper.js");
/* harmony import */ var _video_swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_video_swiper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _passion_inside_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passion-inside-slider */ "./src/js/passion-inside-slider.js");
/* harmony import */ var _passion_inside_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_passion_inside_slider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _representation_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./representation-text */ "./src/js/representation-text.js");
/* harmony import */ var _representation_text__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_representation_text__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _us_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./us-gallery */ "./src/js/us-gallery.js");
/* harmony import */ var _us_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_us_gallery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mapbox_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mapbox-scroll */ "./src/js/mapbox-scroll.js");
/* harmony import */ var _apply_form_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apply-form-upload */ "./src/js/apply-form-upload.js");
/* harmony import */ var _play_video__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./play-video */ "./src/js/play-video.js");
/* harmony import */ var _play_video__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_play_video__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _benefits_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./benefits-slider */ "./src/js/benefits-slider.js");
/* harmony import */ var _benefits_slider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_benefits_slider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sticky_apply_now__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sticky-apply-now */ "./src/js/sticky-apply-now.js");
/* harmony import */ var _filter_sticky__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter-sticky */ "./src/js/filter-sticky.js");
















/***/ }),

/***/ "./src/js/mapbox-scroll.js":
/*!*********************************!*\
  !*** ./src/js/mapbox-scroll.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

$(document).ready(function () {
  if ($('.js-mapbox-scroll').length > 0) {
    var mapboxScroll = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-mapbox-scroll', {
      minScrollbarLength: 20,
      maxScrollbarLength: 20,
      wheelPropagation: true,
      swipeEasing: false,
      suppressScrollX: true
    });
  }
});

/***/ }),

/***/ "./src/js/move-link-back-page.js":
/*!***************************************!*\
  !*** ./src/js/move-link-back-page.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.js-link-back-page').length > 0) {
    var breakpoint = '1024';
    var $window = $(window);
    var $linkBackPage = $('.js-link-back-page'); // e.prepend(s) — добавит s первым в e

    var moveLink = function moveLink() {
      var windowWidth = $window.outerWidth();

      if (windowWidth < breakpoint) {
        // mobile
        $('.js-link-back-place-mobile').prepend($linkBackPage);
      } else {
        // desktop
        $('.js-link-back-place-desktop').prepend($linkBackPage);
      }
    };

    moveLink();
    $window.resize(function () {
      moveLink();
    });
  }
});

/***/ }),

/***/ "./src/js/passion-inside-slider.js":
/*!*****************************************!*\
  !*** ./src/js/passion-inside-slider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".js-passion-inside-slider").length > 0) {
    var passionInsideSwiper = new Swiper(".js-passion-inside-slider", {
      loop: true,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
}); // .js-passion-inside-slider

/***/ }),

/***/ "./src/js/play-video.js":
/*!******************************!*\
  !*** ./src/js/play-video.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.js-play-video').length) {
    $('.js-play-video').on('click', function () {
      var $this = $(this);
      var iframe = document.querySelector('iframe');
      var player = new Vimeo.Player(iframe);
      player.play();
      player.on('play', function () {
        $this.fadeOut(300);
      });
      player.on('pause', function () {
        $this.fadeIn(300);
      });
    });
  }

  ;
});

/***/ }),

/***/ "./src/js/representation-text.js":
/*!***************************************!*\
  !*** ./src/js/representation-text.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.js-representation-text').length > 0) {
    var $window = $(window);
    var windowWidth = $window.outerWidth();

    var init = function init() {
      if (windowWidth < 768) {
        var height = $('.js-representation-text').outerHeight();
        $('.representation').css({
          'margin-bottom': height
        });
      } else {
        $('.representation').css({
          'margin-bottom': ''
        });
      }

      ;
    };

    init();
    $window.resize(function () {
      windowWidth = $window.outerWidth();
      init();
    });
  }
});

/***/ }),

/***/ "./src/js/scrollSceneForHeader.js":
/*!****************************************!*\
  !*** ./src/js/scrollSceneForHeader.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  var elemToAddSceneToHeader = ".js-add-scene-for-header";
  var triggerToStartSceneHeader = ".js-trigger-to-start-scene-header";
  var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Controller();
  var $window = $(window);
  var windowWidth = $window.outerWidth(); // build scenes

  new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
    triggerElement: triggerToStartSceneHeader,
    triggerHook: 0
  }).setClassToggle(elemToAddSceneToHeader, "scroll-scene").addTo(controller); // Scene for logo

  var $whiteLogo = $(".js-logo-white-for-scene");
  var $purpleLogo = $(".js-logo-purple-for-scene");

  var showPurpleLogo = function showPurpleLogo() {
    $whiteLogo.stop().fadeOut(150, function () {
      $purpleLogo.stop().fadeIn(150);
    });
  };

  var showWhiteLogo = function showWhiteLogo() {
    $purpleLogo.stop().fadeOut(150, function () {
      $whiteLogo.stop().fadeIn(150);
    });
  };

  new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
    triggerElement: triggerToStartSceneHeader,
    triggerHook: 0
  }).addTo(controller).on("enter leave", function (e) {
    if (e.type === "enter") {
      showPurpleLogo();
    } else {
      showWhiteLogo();
    }
  });

  var offsetForSearch = function offsetForSearch() {
    if (windowWidth < 1024) {
      instanceSearchRoles.offset(-59);
    } else {
      instanceSearchRoles.offset(-88);
    }
  };

  var instanceSearchRoles = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
    triggerElement: ".search-roles",
    triggerHook: 0,
    offset: -60
  }).addTo(controller).setPin(".search-roles").setClassToggle(".search-roles", "fixed");
  offsetForSearch();
  $window.resize(function () {
    windowWidth = $window.outerWidth();
    offsetForSearch();
  });
});

/***/ }),

/***/ "./src/js/sticky-apply-now.js":
/*!************************************!*\
  !*** ./src/js/sticky-apply-now.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  if ($('.js-sticky-apply-now').length > 0) {
    // .js-sticky-apply-now
    // .js-trigger-search-roles-theme
    var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Controller();
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var stickyApplyNowInst = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
      triggerElement: '.js-trigger-apply-now-sticky',
      triggerHook: 0,
      offset: -320
    }).addTo(controller);

    var initStickyApplyNow = function initStickyApplyNow() {
      if (windowWidth < 1250) {
        stickyApplyNowInst.removePin(true).removeClassToggle(true);
      } else {
        stickyApplyNowInst.setPin(".js-sticky-apply-now").setClassToggle('.js-sticky-apply-now', 'fixed');
      }

      ;
    };

    initStickyApplyNow();
    $window.resize(function () {
      windowWidth = $window.outerWidth();
      initStickyApplyNow();
    });
  }
});

/***/ }),

/***/ "./src/js/toggle-menu.js":
/*!*******************************!*\
  !*** ./src/js/toggle-menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var $toggleMenu = $('.js-toggle-menu');

  if ($toggleMenu.length > 0) {
    var $body = $('body'),
        nameClassForOpenMenu = 'menu-open',
        $window = $(window),
        positionScroll = 0; // $mobileMenu = $('.js-mobile-menu'),
    // $nav = $('.js-nav'),
    // windowWidth = $window.outerWidth(),
    // breakpoint = 576;

    var openMenu = function openMenu() {
      positionScroll = $window.scrollTop();
      $body.addClass(nameClassForOpenMenu);
      $('.page-wrapper').scrollTop(positionScroll);
    };

    var closeMenu = function closeMenu() {
      $body.removeClass(nameClassForOpenMenu);
      $window.scrollTop(positionScroll);
    };

    $toggleMenu.on('click', function (event) {
      event.preventDefault();
      $body.hasClass(nameClassForOpenMenu) ? closeMenu() : openMenu();
    });
  }
});

/***/ }),

/***/ "./src/js/us-gallery.js":
/*!******************************!*\
  !*** ./src/js/us-gallery.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".js-us-gallery").length > 0) {
    var usGallerySwiper = new Swiper(".js-us-gallery", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uikit_dist_js_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/dist/js/uikit */ "./node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit_dist_js_uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit__WEBPACK_IMPORTED_MODULE_3__);



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

 // import 'scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic';
// import 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// import 'swiper';

/***/ }),

/***/ "./src/js/video-swiper.js":
/*!********************************!*\
  !*** ./src/js/video-swiper.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.js-video-swiper').length > 0) {
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var breakpoint = 1250;
    var isInitVideoSlider = false;
    var videoSwiper = new Swiper('.js-video-swiper', {
      init: false,
      loop: true,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    var initialVideoSwiper = function initialVideoSwiper() {
      if (windowWidth < breakpoint && !isInitVideoSlider) {
        videoSwiper.init();
        isInitVideoSlider = true;
      } else if (windowWidth >= breakpoint && isInitVideoSlider) {
        videoSwiper.destroy(false, true);
        isInitVideoSlider = false;
      }
    };

    initialVideoSwiper();
    $window.resize(function () {
      if (windowWidth !== $window.outerWidth()) {
        windowWidth = $window.outerWidth();
        initialVideoSwiper();
      }

      ;
    }); // $('.js-video-swiper').find('video').hover(function() {
    //     $(this).get(0).play();
    // });
    // $('.js-video-swiper').find('video').mouseleave(function() {
    //     $(this).get(0).pause();
    // });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map