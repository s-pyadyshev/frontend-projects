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

/***/ "./src/js/align-columns.js":
/*!*********************************!*\
  !*** ./src/js/align-columns.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".ingredients__list").length) {
    var listLength = $(".ingredients__list li").length;
    var leftColumn = $(".ingredients__list li").slice(0, Math.round(listLength / 2));
    leftColumn.each(function () {
      $(this).css("text-align", "right");
    });
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
/* harmony import */ var _toggle_head_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-head-dropdown */ "./src/js/toggle-head-dropdown.js");
/* harmony import */ var _toggle_head_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toggle_head_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_collapse_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-collapse-menu */ "./src/js/toggle-collapse-menu.js");
/* harmony import */ var _toggle_collapse_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toggle_collapse_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toggle_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-menu */ "./src/js/toggle-menu.js");
/* harmony import */ var _toggle_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toggle_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover */ "./src/js/popover.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_popover__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rate */ "./src/js/rate.js");
/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _toggle_reply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-reply */ "./src/js/toggle-reply.js");
/* harmony import */ var _toggle_reply__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_toggle_reply__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _align_columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./align-columns */ "./src/js/align-columns.js");
/* harmony import */ var _align_columns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_align_columns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _toggle_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle-search */ "./src/js/toggle-search.js");
/* harmony import */ var _toggle_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_toggle_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scroll_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scroll-header */ "./src/js/scroll-header.js");
/* harmony import */ var _scroll_header__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scroll_header__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll-to */ "./src/js/scroll-to.js");
/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scroll_to__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _toggle_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toggle-animations */ "./src/js/toggle-animations.js");
/* harmony import */ var _toggle_animations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_toggle_animations__WEBPACK_IMPORTED_MODULE_11__);













/***/ }),

/***/ "./src/js/popover.js":
/*!***************************!*\
  !*** ./src/js/popover.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".popover").length) {
    var $popover = $(".popover");
    var $html = $("html");
    var $pageOverlay = $(".page-overlay");
    var $sortButton = $(".sort__button");
    var $popoverClose = $(".popover__close");

    var closePopover = function closePopover() {
      $popover.removeClass("is-active");
      $html.removeClass("no-scroll");
      $pageOverlay.removeClass("is-visible");
      $(".sort").removeClass("overlay");
    };

    $sortButton.on("click", function () {
      if ($popover.hasClass("is-active")) {
        closePopover();
      } else {
        $popover.addClass("is-active");
        $html.addClass("no-scroll");
        $(".sort").addClass("overlay");

        if ($(window).outerWidth() < 1024) {
          $pageOverlay.addClass("is-visible");
        }
      }
    });
    $popoverClose.on("click", function () {
      closePopover();
    });
    $(document).on("click", function (event) {
      if ($popover.hasClass("is-active")) {
        if ($popover.has(event.target).length == 0 && !$popover.is(event.target) && !$sortButton.is(event.target)) {
          $popover.removeClass("is-active");
          $html.removeClass("no-scroll");
          $pageOverlay.removeClass("is-visible");
          $(".sort").removeClass("overlay");
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/js/rate.js":
/*!************************!*\
  !*** ./src/js/rate.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // readonly ratings in comment, author block
  if ($(".rate").length) {
    $(".rate").rate({
      step_size: 1,
      symbols: {
        utf8_star: {
          base: '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star"></use></svg>',
          hover: '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>',
          selected: '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>'
        }
      },
      readonly: true
    });
  } // functional rating


  if ($(".rate-comment").length) {
    $(".rate-comment").rate({
      step_size: 1,
      symbols: {
        utf8_star: {
          base: '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star"></use></svg>',
          hover: '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>',
          selected: '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>'
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/js/scroll-header.js":
/*!*********************************!*\
  !*** ./src/js/scroll-header.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".js-transparent").length) {
    var setStateHeader = function setStateHeader() {
      if ($(window).scrollTop() >= $(".header").height()) {
        $(".js-transparent").removeClass("header--transparent");
      } else {
        $(".js-transparent").addClass("header--transparent");
      }
    };

    setStateHeader();
    $(window).on("scroll", function () {
      setStateHeader();
    });
  }
});

/***/ }),

/***/ "./src/js/scroll-to.js":
/*!*****************************!*\
  !*** ./src/js/scroll-to.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var $scrollToButton = $(".scroll-to");
  $scrollToButton.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")) // plus header height + half of scrollTo height + shadow
      .offset().top - $(".header").height() + $(".scroll-to").height() / 2 + 10
    }, 500);
  });
});

/***/ }),

/***/ "./src/js/toggle-animations.js":
/*!*************************************!*\
  !*** ./src/js/toggle-animations.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $(".section-header__image").addClass("is-loaded");
  $(".section-header__content").addClass("is-loaded");
});

/***/ }),

/***/ "./src/js/toggle-collapse-menu.js":
/*!****************************************!*\
  !*** ./src/js/toggle-collapse-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".sidebar-menu__plus").length) {
    $(".sidebar-menu__link").attr("aria-expanded", "false");
    $(".sidebar-menu__link").next().stop().slideUp();
    $(".sidebar-menu__link").on("click", function (e) {
      if ($(e.target).hasClass('sidebar-menu__plus')) {
        e.preventDefault();
        var $this = $(this);

        if ($this.attr("aria-expanded") === "false") {
          $this.attr("aria-expanded", "true");
          $this.next().stop().slideDown();
        } else {
          $this.attr("aria-expanded", "false");
          $this.next().stop().slideUp();
        }
      }

      ;
    });
  }
});

/***/ }),

/***/ "./src/js/toggle-head-dropdown.js":
/*!****************************************!*\
  !*** ./src/js/toggle-head-dropdown.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".js-head-dropdown").length) {
    var $toggle = $(".js-toggle-head-dropdown");
    var $dropdown = $(".js-head-dropdown");
    $toggle.mouseover(function () {
      $dropdown.attr("aria-hidden", "true");
      $(this).next().attr("aria-hidden", "false");
    });
    $(".header__wrap").mouseleave(function () {
      $dropdown.attr("aria-hidden", "true");
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
  if ($(".sidebar-menu__close").length) {
    var $menu = $(".sidebar-menu");
    var $pageOverlay = $(".page-overlay");
    var $html = $("html");
    var $sort = $(".sort");

    var closeMenu = function closeMenu() {
      if ($menu.attr("aria-hidden") === "false") {
        // if open
        $menu.attr("aria-hidden", "true");
        $html.removeClass("no-scroll");
        $pageOverlay.removeClass("is-visible");

        if ($(".header__search").hasClass("is-show")) {
          $pageOverlay.addClass("is-visible");
        }
      }
    };

    $(".sidebar-menu__close").on("click", function () {
      closeMenu();
      setTimeout(function () {
        $sort.css("z-index", "14");
      }, 500);
    });
    $(".header__hamburger").on("click", function () {
      if ($menu.attr("aria-hidden") === "true") {
        // if close
        $menu.attr("aria-hidden", "false");
        $pageOverlay.addClass("is-visible");
        $html.addClass("no-scroll");
        $sort.css("z-index", "11");
      }
    });
    $pageOverlay.on("click", function () {
      closeMenu();
    });
  }
});

/***/ }),

/***/ "./src/js/toggle-reply.js":
/*!********************************!*\
  !*** ./src/js/toggle-reply.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".comment").length) {
    $(".comment__reply-button").on("click", function () {
      var $this = $(this);

      if ($this.attr("aria-expanded") === "false") {
        $this.attr("aria-expanded", "true").fadeOut();
        $this.queue(function () {
          $this.next().stop().slideDown();
        });
      } else {
        $this.attr("aria-expanded", "false");
        $this.next().stop().slideUp();
      }
    });
  }
});

/***/ }),

/***/ "./src/js/toggle-search.js":
/*!*********************************!*\
  !*** ./src/js/toggle-search.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($(".header__search").length) {
    var $search = $(".header__search");
    var $pageOverlay = $(".page-overlay");
    var $html = $("html");
    var stateHeaderIsTransparent = false;
    var $header = $(".js-transparent");
    var $sort = $(".sort");

    var closeSearch = function closeSearch() {
      $search.removeClass("is-show");
      $pageOverlay.removeClass("is-visible");
      $pageOverlay.css("z-index", "");
      $html.removeClass("no-scroll");

      if (stateHeaderIsTransparent) {
        $header.addClass("header--transparent");
      }
    };

    $(".header__icon--search").on("click", function () {
      if ($search.hasClass("is-show")) {
        closeSearch();
        setTimeout(function () {
          $sort.css("z-index", "14");
        }, 500);
      } else {
        $search.addClass("is-show");
        $pageOverlay.addClass("is-visible");
        $pageOverlay.css("z-index", "12");
        $html.addClass("no-scroll");
        $sort.css("z-index", "11");

        if ($header.hasClass("header--transparent")) {
          $header.removeClass("header--transparent");
          stateHeaderIsTransparent = true;
        } else {
          stateHeaderIsTransparent = false;
        }
      }
    });
    $(".header__search-close").on("click", function () {
      closeSearch();
      setTimeout(function () {
        $sort.css("z-index", "14");
      }, 500);
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



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

__webpack_require__(/*! ./vendor/rater.min.js */ "./src/js/vendor/rater.min.js");

/***/ }),

/***/ "./src/js/vendor/rater.min.js":
/*!************************************!*\
  !*** ./src/js/vendor/rater.min.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


(function ($, window) {
  $.fn.textWidth = function () {
    var html_calc = $("<span>" + $(this).html() + "</span>");
    html_calc.css("font-size", $(this).css("font-size")).hide();
    html_calc.prependTo("body");
    var width = html_calc.width();
    html_calc.remove();

    if (width == 0) {
      var total = 0;
      $(this).eq(0).children().each(function () {
        total += $(this).textWidth();
      });
      return total;
    }

    return width;
  };

  $.fn.textHeight = function () {
    var html_calc = $("<span>" + $(this).html() + "</span>");
    html_calc.css("font-size", $(this).css("font-size")).hide();
    html_calc.prependTo("body");
    var height = html_calc.height();
    html_calc.remove();
    return height;
  };

  Array.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  String.prototype.getCodePointLength = function () {
    return this.length - this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length + 1;
  };

  String.fromCodePoint = function () {
    var chars = Array.prototype.slice.call(arguments);

    for (var i = chars.length; i-- > 0;) {
      var n = chars[i] - 65536;
      if (n >= 0) chars.splice(i, 1, 55296 + (n >> 10), 56320 + (n & 1023));
    }

    return String.fromCharCode.apply(null, chars);
  };

  $.fn.rate = function (options) {
    if (options === undefined || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(options) === "object") {
      return this.each(function () {
        if (!$.data(this, "rate")) {
          $.data(this, "rate", new Rate(this, options));
        }
      });
    } else if (typeof options === "string") {
      var args = arguments;
      var returns;
      this.each(function () {
        var instance = $.data(this, "rate");

        if (instance instanceof Rate && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }

        if (options === "destroy") {
          $(instance.element).off();
          $.data(this, "rate", null);
        }
      });
      return returns !== undefined ? returns : this;
    }
  };

  function Rate(element, options) {
    this.element = element;
    this.settings = $.extend({}, $.fn.rate.settings, options);
    this.set_faces = {};
    this.build();
  }

  Rate.prototype.build = function () {
    this.layers = {};
    this.value = 0;
    this.raise_select_layer = false;

    if (this.settings.initial_value) {
      this.value = this.settings.initial_value;
    }

    if ($(this.element).attr("data-rate-value")) {
      this.value = $(this.element).attr("data-rate-value");
    }

    var selected_width = this.value / this.settings.max_value * 100;

    if (typeof this.settings.symbols[this.settings.selected_symbol_type] === "string") {
      var symbol = this.settings.symbols[this.settings.selected_symbol_type];
      this.settings.symbols[this.settings.selected_symbol_type] = {};
      this.settings.symbols[this.settings.selected_symbol_type]["base"] = symbol;
      this.settings.symbols[this.settings.selected_symbol_type]["selected"] = symbol;
      this.settings.symbols[this.settings.selected_symbol_type]["hover"] = symbol;
    }

    var base_layer = this.addLayer("base-layer", 100, this.settings.symbols[this.settings.selected_symbol_type]["base"], true);
    var select_layer = this.addLayer("select-layer", selected_width, this.settings.symbols[this.settings.selected_symbol_type]["selected"], true);
    var hover_layer = this.addLayer("hover-layer", 0, this.settings.symbols[this.settings.selected_symbol_type]["hover"], false);
    this.layers["base_layer"] = base_layer;
    this.layers["select_layer"] = select_layer;
    this.layers["hover_layer"] = hover_layer;
    $(this.element).on("mousemove", $.proxy(this.hover, this));
    $(this.element).on("click", $.proxy(this.select, this));
    $(this.element).on("mouseleave", $.proxy(this.mouseout, this));
    $(this.element).css({
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none"
    });

    if (this.settings.hasOwnProperty("update_input_field_name")) {
      this.settings.update_input_field_name.val(this.value);
    }
  };

  Rate.prototype.addLayer = function (layer_name, visible_width, symbol, visible) {
    var layer_body = "<div>";

    for (var i = 0; i < this.settings.max_value; i++) {
      if (Array.isArray(symbol)) {
        if (this.settings.convert_to_utf8) {
          symbol[i] = String.fromCodePoint(symbol[i]);
        }

        layer_body += "<span>" + symbol[i] + "</span>";
      } else {
        if (this.settings.convert_to_utf8) {
          symbol = String.fromCodePoint(symbol);
        }

        layer_body += "<span>" + symbol + "</span>";
      }
    }

    layer_body += "</div>";
    var layer = $(layer_body).addClass("rate-" + layer_name).appendTo(this.element);
    $(layer).css({
      width: visible_width + "%",
      height: $(layer).children().eq(0).textHeight(),
      overflow: "hidden",
      position: "absolute",
      top: 0,
      display: visible ? "block" : "none",
      "white-space": "nowrap"
    });
    $(this.element).css({
      width: $(layer).textWidth() + "px",
      height: $(layer).height(),
      position: "relative",
      cursor: this.settings.cursor
    });
    return layer;
  };

  Rate.prototype.updateServer = function () {
    if (this.settings.url != undefined) {
      $.ajax({
        url: this.settings.url,
        type: this.settings.ajax_method,
        data: $.extend({}, {
          value: this.getValue()
        }, this.settings.additional_data),
        success: $.proxy(function (data) {
          $(this.element).trigger("updateSuccess", [data]);
        }, this),
        error: $.proxy(function (jxhr, msg, err) {
          $(this.element).trigger("updateError", [jxhr, msg, err]);
        }, this)
      });
    }
  };

  Rate.prototype.getValue = function () {
    return this.value;
  };

  Rate.prototype.hover = function (ev) {
    var pad = parseInt($(this.element).css("padding-left").replace("px", ""));
    var x = ev.pageX - $(this.element).offset().left - pad;
    var val = this.toValue(x, true);

    if (val != this.value) {
      this.raise_select_layer = false;
    }

    if (!this.raise_select_layer && !this.settings.readonly) {
      var visible_width = this.toWidth(val);
      this.layers.select_layer.css({
        display: "none"
      });

      if (!this.settings.only_select_one_symbol) {
        this.layers.hover_layer.css({
          width: visible_width + "%",
          display: "block"
        });
      } else {
        var index_value = Math.floor(val);
        this.layers.hover_layer.css({
          width: "100%",
          display: "block"
        });
        this.layers.hover_layer.children("span").css({
          visibility: "hidden"
        });
        this.layers.hover_layer.children("span").eq(index_value != 0 ? index_value - 1 : 0).css({
          visibility: "visible"
        });
      }
    }
  };

  Rate.prototype.select = function (ev) {
    if (!this.settings.readonly) {
      var old_value = this.getValue();
      var pad = parseInt($(this.element).css("padding-left").replace("px", ""));
      var x = ev.pageX - $(this.element).offset().left - pad;
      var selected_width = this.toWidth(this.toValue(x, true));
      this.setValue(this.toValue(selected_width));
      this.raise_select_layer = true;
    }
  };

  Rate.prototype.mouseout = function () {
    this.layers.hover_layer.css({
      display: "none"
    });
    this.layers.select_layer.css({
      display: "block"
    });
  };

  Rate.prototype.toWidth = function (val) {
    return val / this.settings.max_value * 100;
  };

  Rate.prototype.toValue = function (width, in_pixels) {
    var val;

    if (in_pixels) {
      val = width / this.layers.base_layer.textWidth() * this.settings.max_value;
    } else {
      val = width / 100 * this.settings.max_value;
    }

    var temp = val / this.settings.step_size;

    if (temp - Math.floor(temp) < 5e-5) {
      val = Math.round(val / this.settings.step_size) * this.settings.step_size;
    }

    val = Math.ceil(val / this.settings.step_size) * this.settings.step_size;
    val = val > this.settings.max_value ? this.settings.max_value : val;
    return val;
  };

  Rate.prototype.getElement = function (layer_name, index) {
    return $(this.element).find(".rate-" + layer_name + " span").eq(index - 1);
  };

  Rate.prototype.getLayers = function () {
    return this.layers;
  };

  Rate.prototype.setFace = function (value, face) {
    this.set_faces[value] = face;
  };

  Rate.prototype.setAdditionalData = function (data) {
    this.settings.additional_data = data;
  };

  Rate.prototype.getAdditionalData = function () {
    return this.settings.additional_data;
  };

  Rate.prototype.removeFace = function (value) {
    delete this.set_faces[value];
  };

  Rate.prototype.setValue = function (value) {
    if (!this.settings.readonly) {
      if (value < 0) {
        value = 0;
      } else if (value > this.settings.max_value) {
        value = this.settings.max_value;
      }

      var old_value = this.getValue();
      this.value = value;
      var change_event = $(this.element).trigger("change", {
        from: old_value,
        to: this.value
      });
      $(this.element).find(".rate-face").remove();
      $(this.element).find("span").css({
        visibility: "visible"
      });
      var index_value = Math.ceil(this.value);

      if (this.set_faces.hasOwnProperty(index_value)) {
        var face = "<div>" + this.set_faces[index_value] + "</div>";
        var base_layer_element = this.getElement("base-layer", index_value);
        var select_layer_element = this.getElement("select-layer", index_value);
        var hover_layer_element = this.getElement("hover-layer", index_value);
        var left_pos = base_layer_element.textWidth() * (index_value - 1) + (base_layer_element.textWidth() - $(face).textWidth()) / 2;
        $(face).appendTo(this.element).css({
          display: "inline-block",
          position: "absolute",
          left: left_pos
        }).addClass("rate-face");
        base_layer_element.css({
          visibility: "hidden"
        });
        select_layer_element.css({
          visibility: "hidden"
        });
        hover_layer_element.css({
          visibility: "hidden"
        });
      }

      if (!this.settings.only_select_one_symbol) {
        var width = this.toWidth(this.value);
        this.layers.select_layer.css({
          display: "block",
          width: width + "%",
          height: this.layers.base_layer.css("height")
        });
        this.layers.hover_layer.css({
          display: "none",
          height: this.layers.base_layer.css("height")
        });
      } else {
        var width = this.toWidth(this.settings.max_value);
        this.layers.select_layer.css({
          display: "block",
          width: width + "%",
          height: this.layers.base_layer.css("height")
        });
        this.layers.hover_layer.css({
          display: "none",
          height: this.layers.base_layer.css("height")
        });
        this.layers.select_layer.children("span").css({
          visibility: "hidden"
        });
        this.layers.select_layer.children("span").eq(index_value != 0 ? index_value - 1 : 0).css({
          visibility: "visible"
        });
      }

      $(this.element).attr("data-rate-value", this.value);

      if (this.settings.change_once) {
        this.settings.readonly = true;
      }

      this.updateServer();
      var change_event = $(this.element).trigger("afterChange", {
        from: old_value,
        to: this.value
      });

      if (this.settings.hasOwnProperty("update_input_field_name")) {
        this.settings.update_input_field_name.val(this.value);
      }
    }
  };

  Rate.prototype.increment = function () {
    this.setValue(this.getValue() + this.settings.step_size);
  };

  Rate.prototype.decrement = function () {
    this.setValue(this.getValue() - this.settings.step_size);
  };

  $.fn.rate.settings = {
    max_value: 5,
    step_size: .5,
    initial_value: 0,
    symbols: {
      utf8_star: {
        base: "☆",
        hover: "★",
        selected: "★"
      },
      utf8_hexagon: {
        base: "⬡",
        hover: "⬢",
        selected: "⬢"
      },
      hearts: "&hearts;",
      fontawesome_beer: '<i class="fa fa-beer"></i>',
      fontawesome_star: {
        base: '<i class="fa fa-star-o"></i>',
        hover: '<i class="fa fa-star"></i>',
        selected: '<i class="fa fa-star"></i>'
      },
      utf8_emoticons: {
        base: [128549, 128531, 128530, 128516],
        hover: [128549, 128531, 128530, 128516],
        selected: [128549, 128531, 128530, 128516]
      }
    },
    selected_symbol_type: "utf8_star",
    convert_to_utf8: false,
    cursor: "default",
    readonly: false,
    change_once: false,
    only_select_one_symbol: false,
    ajax_method: "POST",
    additional_data: {}
  };
})(jQuery, window);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map