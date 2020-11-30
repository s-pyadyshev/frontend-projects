"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(undefined, function () {
  "use strict";
  var f = "undefined" == typeof document ? { body: {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, activeElement: { blur: function blur() {}, nodeName: "" }, querySelector: function querySelector() {
      return null;
    }, querySelectorAll: function querySelectorAll() {
      return [];
    }, getElementById: function getElementById() {
      return null;
    }, createEvent: function createEvent() {
      return { initEvent: function initEvent() {} };
    }, createElement: function createElement() {
      return { children: [], childNodes: [], style: {}, setAttribute: function setAttribute() {}, getElementsByTagName: function getElementsByTagName() {
          return [];
        } };
    }, location: { hash: "" } } : document,
      J = "undefined" == typeof window ? { document: f, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function CustomEvent() {
      return this;
    }, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, getComputedStyle: function getComputedStyle() {
      return { getPropertyValue: function getPropertyValue() {
          return "";
        } };
    }, Image: function Image() {}, Date: function Date() {}, screen: {}, setTimeout: function setTimeout() {}, clearTimeout: function clearTimeout() {} } : window,
      l = function l(e) {
    for (var t = 0; t < e.length; t += 1) {
      this[t] = e[t];
    }return this.length = e.length, this;
  };function L(e, t) {
    var a = [],
        i = 0;if (e && !t && e instanceof l) return e;if (e) if ("string" == typeof e) {
      var s,
          r,
          n = e.trim();if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
        var o = "div";for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) {
          a.push(r.childNodes[i]);
        }
      } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) {
        s[i] && a.push(s[i]);
      }
    } else if (e.nodeType || e === J || e === f) a.push(e);else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) {
      a.push(e[i]);
    }return new l(a);
  }function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1) {
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    }return t;
  }L.fn = l.prototype, L.Class = l, L.Dom7 = l;var t = { addClass: function addClass(e) {
      if (void 0 === e) return this;for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
        for (var i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
        for (var i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
        }
      }return this;
    }, hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    }, toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
        for (var i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
        }
      }return this;
    }, attr: function attr(e, t) {
      var a = arguments;if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var i = 0; i < this.length; i += 1) {
        if (2 === a.length) this[i].setAttribute(e, t);else for (var s in e) {
          this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        }
      }return this;
    }, removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }return this;
    }, data: function data(e, t) {
      var a;if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1) {
          (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
        }return this;
      }if (a = this[0]) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];var s = a.getAttribute("data-" + e);return s || void 0;
      }
    }, transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;a.webkitTransform = e, a.transform = e;
      }return this;
    }, transition: function transition(e) {
      "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;a.webkitTransitionDuration = e, a.transitionDuration = e;
      }return this;
    }, on: function on() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }var i = t[0],
          r = t[1],
          n = t[2],
          s = t[3];function o(e) {
        var t = e.target;if (t) {
          var a = e.target.dom7EventData || [];if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) {
            L(i[s]).is(r) && n.apply(i[s], a);
          }
        }
      }function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }"function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];if (r) for (d = 0; d < p.length; d += 1) {
          var h = p[d];u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }), u.addEventListener(h, o, s);
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, s);
        }
      }return this;
    }, off: function off() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];"function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);for (var o = i.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
              u = void 0;if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
            var v = u[h];r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
          }
        }
      }return this;
    }, trigger: function trigger() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) {
        for (var r = a[s], n = 0; n < this.length; n += 1) {
          var o = this[n],
              l = void 0;try {
            l = new J.CustomEvent(r, { detail: i, bubbles: !0, cancelable: !0 });
          } catch (e) {
            (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i;
          }o.dom7EventData = e.filter(function (e, t) {
            return 0 < t;
          }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData;
        }
      }return this;
    }, transitionEnd: function transitionEnd(t) {
      var a,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;function r(e) {
        if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) {
          s.off(i[a], r);
        }
      }if (t) for (a = 0; a < i.length; a += 1) {
        s.on(i[a], r);
      }return this;
    }, outerWidth: function outerWidth(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }return this[0].offsetWidth;
      }return null;
    }, outerHeight: function outerHeight(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }return this[0].offsetHeight;
      }return null;
    }, offset: function offset() {
      if (0 < this.length) {
        var e = this[0],
            t = e.getBoundingClientRect(),
            a = f.body,
            i = e.clientTop || a.clientTop || 0,
            s = e.clientLeft || a.clientLeft || 0,
            r = e === J ? J.scrollY : e.scrollTop,
            n = e === J ? J.scrollX : e.scrollLeft;return { top: t.top + r - i, left: t.left + n - s };
      }return null;
    }, css: function css(e, t) {
      var a;if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var i in e) {
              this[a].style[i] = e[i];
            }
          }return this;
        }if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e);
      }if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }return this;
      }return this;
    }, each: function each(e) {
      if (!e) return this;for (var t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) return this;
      }return this;
    }, html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }return this;
    }, text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }return this;
    }, is: function is(e) {
      var t,
          a,
          i = this[0];if (!i || void 0 === e) return !1;if ("string" == typeof e) {
        if (i.matches) return i.matches(e);if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);if (i.msMatchesSelector) return i.msMatchesSelector(e);for (t = L(e), a = 0; a < t.length; a += 1) {
          if (t[a] === i) return !0;
        }return !1;
      }if (e === f) return i === f;if (e === J) return i === J;if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
          if (t[a] === i) return !0;
        }return !1;
      }return !1;
    }, index: function index() {
      var e,
          t = this[0];if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }return e;
      }
    }, eq: function eq(e) {
      if (void 0 === e) return this;var t,
          a = this.length;return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]]);
    }, append: function append() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }for (var i = 0; i < t.length; i += 1) {
        e = t[i];for (var s = 0; s < this.length; s += 1) {
          if ("string" == typeof e) {
            var r = f.createElement("div");for (r.innerHTML = e; r.firstChild;) {
              this[s].appendChild(r.firstChild);
            }
          } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) {
            this[s].appendChild(e[n]);
          } else this[s].appendChild(e);
        }
      }return this;
    }, prepend: function prepend(e) {
      var t, a;for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var i = f.createElement("div");for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) {
            this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
          }
        } else if (e instanceof l) for (a = 0; a < e.length; a += 1) {
          this[t].insertBefore(e[a], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }return this;
    }, next: function next(e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
    }, nextAll: function nextAll(e) {
      var t = [],
          a = this[0];if (!a) return new l([]);for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
      }return new l(t);
    }, prev: function prev(e) {
      if (0 < this.length) {
        var t = this[0];return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
      }return new l([]);
    }, prevAll: function prevAll(e) {
      var t = [],
          a = this[0];if (!a) return new l([]);for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
      }return new l(t);
    }, parent: function parent(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      }return L(r(t));
    }, parents: function parents(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].parentNode; i;) {
          e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
        }
      }return L(r(t));
    }, closest: function closest(e) {
      var t = this;return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    }, find: function find(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
          t.push(i[s]);
        }
      }return new l(t);
    }, children: function children(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) {
          e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
        }
      }return new l(r(t));
    }, remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }return this;
    }, add: function add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }var a, i;for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);for (i = 0; i < s.length; i += 1) {
          this[this.length] = s[i], this.length += 1;
        }
      }return this;
    }, styles: function styles() {
      return this[0] ? J.getComputedStyle(this[0], null) : {};
    } };Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e];
  });var e,
      a,
      i,
      s,
      ee = { deleteProps: function deleteProps(e) {
      var t = e;Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}try {
          delete t[e];
        } catch (e) {}
      });
    }, nextTick: function nextTick(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }, now: function now() {
      return Date.now();
    }, getTranslate: function getTranslate(e, t) {
      var a, i, s;void 0 === t && (t = "x");var r = J.getComputedStyle(e, null);return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }, parseUrlQuery: function parseUrlQuery(e) {
      var t,
          a,
          i,
          s,
          r = {},
          n = e || J.location.href;if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, t = 0; t < s; t += 1) {
        i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
      }return r;
    }, isObject: function isObject(e) {
      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && e.constructor && e.constructor === Object;
    }, extend: function extend() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
        var s = e[i];if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n],
              d = Object.getOwnPropertyDescriptor(s, l);void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l]);
        }
      }return a;
    } },
      te = (i = f.createElement("div"), { touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch), pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints), prefixedPointerEvents: !!J.navigator.msPointerEnabled, transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a), transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e), flexbox: function () {
      for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) {
        if (t[a] in e) return !0;
      }return !1;
    }(), observer: "MutationObserver" in J || "WebkitMutationObserver" in J, passiveListener: function () {
      var e = !1;try {
        var t = Object.defineProperty({}, "passive", { get: function get() {
            e = !0;
          } });J.addEventListener("testPassiveListener", null, t);
      } catch (e) {}return e;
    }(), gestures: "ongesturestart" in J }),
      I = { isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g), isEdge: !!J.navigator.userAgent.match(/Edge/g), isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent) },
      n = function n(e) {
    void 0 === e && (e = {});var t = this;t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      o = { components: { configurable: !0 } };n.prototype.on = function (e, t, a) {
    var i = this;if ("function" != typeof t) return i;var s = a ? "unshift" : "push";return e.split(" ").forEach(function (e) {
      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
    }), i;
  }, n.prototype.once = function (a, i, e) {
    var s = this;if ("function" != typeof i) return s;function r() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy;
    }return r.f7proxy = i, s.on(a, r, e);
  }, n.prototype.off = function (e, i) {
    var s = this;return s.eventsListeners && e.split(" ").forEach(function (a) {
      void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
        (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1);
      });
    }), s;
  }, n.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }var a,
        i,
        s,
        r = this;return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(s, i);
        });
      }
    })), r;
  }, n.prototype.useModulesParams = function (a) {
    var i = this;i.modules && Object.keys(i.modules).forEach(function (e) {
      var t = i.modules[e];t.params && ee.extend(a, t.params);
    });
  }, n.prototype.useModules = function (i) {
    void 0 === i && (i = {});var s = this;s.modules && Object.keys(s.modules).forEach(function (e) {
      var a = s.modules[e],
          t = i[e] || {};a.instance && Object.keys(a.instance).forEach(function (e) {
        var t = a.instance[e];s[e] = "function" == typeof t ? t.bind(s) : t;
      }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
        s.on(e, a.on[e]);
      }), a.create && a.create.bind(s)(t);
    });
  }, o.components.set = function (e) {
    this.use && this.use(e);
  }, n.installModule = function (t) {
    for (var e = [], a = arguments.length - 1; 0 < a--;) {
      e[a] = arguments[a + 1];
    }var i = this;i.prototype.modules || (i.prototype.modules = {});var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
      i.prototype[e] = t.proto[e];
    }), t.static && Object.keys(t.static).forEach(function (e) {
      i[e] = t.static[e];
    }), t.install && t.install.apply(i, e), i;
  }, n.use = function (e) {
    for (var t = [], a = arguments.length - 1; 0 < a--;) {
      t[a] = arguments[a + 1];
    }var i = this;return Array.isArray(e) ? (e.forEach(function (e) {
      return i.installModule(e);
    }), i) : i.installModule.apply(i, [e].concat(t));
  }, Object.defineProperties(n, o);var d = { updateSize: function updateSize() {
      var e,
          t,
          a = this,
          i = a.$el;e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
    }, updateSlides: function updateSlides() {
      var e = this,
          t = e.params,
          a = e.$wrapperEl,
          i = e.size,
          s = e.rtlTranslate,
          r = e.wrongRTL,
          n = e.virtual && t.virtual.enabled,
          o = n ? e.virtual.slides.length : e.slides.length,
          l = a.children("." + e.params.slideClass),
          d = n ? e.virtual.slides.length : l.length,
          p = [],
          c = [],
          u = [],
          h = t.slidesOffsetBefore;"function" == typeof h && (h = t.slidesOffsetBefore.call(e));var v = t.slidesOffsetAfter;"function" == typeof v && (v = t.slidesOffsetAfter.call(e));var f = e.snapGrid.length,
          m = e.snapGrid.length,
          g = t.spaceBetween,
          b = -h,
          w = 0,
          y = 0;if (void 0 !== i) {
        var x, T;"string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
          T = 0;var P = l.eq(z);if (1 < t.slidesPerColumn) {
            var k = void 0,
                $ = void 0,
                L = void 0;"column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({ "-webkit-box-ordinal-group": k, "-moz-box-ordinal-group": k, "-ms-flex-order": k, "-webkit-order": k, order: k })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L);
          }if ("none" !== P.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = J.getComputedStyle(P[0], null),
                  D = P[0].style.transform,
                  O = P[0].style.webkitTransform;if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);else if (e.isHorizontal()) {
                var A = parseFloat(I.getPropertyValue("width")),
                    H = parseFloat(I.getPropertyValue("padding-left")),
                    N = parseFloat(I.getPropertyValue("padding-right")),
                    G = parseFloat(I.getPropertyValue("margin-left")),
                    B = parseFloat(I.getPropertyValue("margin-right")),
                    X = I.getPropertyValue("box-sizing");T = X && "border-box" === X ? A + G + B : A + H + N + G + B;
              } else {
                var Y = parseFloat(I.getPropertyValue("height")),
                    V = parseFloat(I.getPropertyValue("padding-top")),
                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                    R = parseFloat(I.getPropertyValue("margin-top")),
                    q = parseFloat(I.getPropertyValue("margin-bottom")),
                    W = I.getPropertyValue("box-sizing");T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q;
              }D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T));
            } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");l[z] && (l[z].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1;
          }
        }if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) {
          E = [];for (var j = 0; j < p.length; j += 1) {
            var U = p[j];t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U);
          }p = E;
        }if (!t.centeredSlides) {
          E = [];for (var K = 0; K < p.length; K += 1) {
            var _ = p[K];t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_);
          }p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
        }if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" }) : l.css({ marginBottom: g + "px" })), t.centerInsufficientSlides) {
          var Z = 0;if (u.forEach(function (e) {
            Z += e + (t.spaceBetween ? t.spaceBetween : 0);
          }), (Z -= t.spaceBetween) < i) {
            var Q = (i - Z) / 2;p.forEach(function (e, t) {
              p[t] = e - Q;
            }), c.forEach(function (e, t) {
              c[t] = e + Q;
            });
          }
        }ee.extend(e, { slides: l, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
      }
    }, updateAutoHeight: function updateAutoHeight(e) {
      var t,
          a = this,
          i = [],
          s = 0;if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
        var r = a.activeIndex + t;if (r > a.slides.length) break;i.push(a.slides.eq(r)[0]);
      } else i.push(a.slides.eq(a.activeIndex)[0]);for (t = 0; t < i.length; t += 1) {
        if (void 0 !== i[t]) {
          var n = i[t].offsetHeight;s = s < n ? n : s;
        }
      }s && a.$wrapperEl.css("height", s + "px");
    }, updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    }, updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);var t = this,
          a = t.params,
          i = t.slides,
          s = t.rtlTranslate;if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();var r = -e;s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
              l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
                p = d + t.slidesSizesGrid[n];(0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
          }o.progress = s ? -l : l;
        }t.visibleSlides = L(t.visibleSlides);
      }
    }, updateProgress: function updateProgress(e) {
      void 0 === e && (e = this && this.translate || 0);var t = this,
          a = t.params,
          i = t.maxTranslate() - t.minTranslate(),
          s = t.progress,
          r = t.isBeginning,
          n = t.isEnd,
          o = r,
          l = n;0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, { progress: s, isBeginning: r, isEnd: n }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s);
    }, updateSlidesClasses: function updateSlidesClasses() {
      var e,
          t = this,
          a = t.slides,
          i = t.params,
          s = t.$wrapperEl,
          r = t.activeIndex,
          n = t.realIndex,
          o = t.virtual && i.virtual.enabled;a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    }, updateActiveIndex: function updateActiveIndex(e) {
      var t,
          a = this,
          i = a.rtlTranslate ? a.translate : -a.translate,
          s = a.slidesGrid,
          r = a.snapGrid,
          n = a.params,
          o = a.activeIndex,
          l = a.realIndex,
          d = a.snapIndex,
          p = e;if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1) {
          void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
        }n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
        var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);ee.extend(a, { snapIndex: t, realIndex: u, previousIndex: o, activeIndex: p }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange");
      } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
    }, updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          a = t.params,
          i = L(e.target).closest("." + a.slideClass)[0],
          s = !1;if (i) for (var r = 0; r < t.slides.length; r += 1) {
        t.slides[r] === i && (s = !0);
      }if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    } };var p = { getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");var t = this.params,
          a = this.rtlTranslate,
          i = this.translate,
          s = this.$wrapperEl;if (t.virtualTranslate) return a ? -i : i;var r = ee.getTranslate(s[0], e);return a && (r = -r), r || 0;
    }, setTranslate: function setTranslate(e, t) {
      var a = this,
          i = a.rtlTranslate,
          s = a.params,
          r = a.$wrapperEl,
          n = a.progress,
          o = 0,
          l = 0;a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;var d = a.maxTranslate() - a.minTranslate();(0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
    }, minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    }, maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    } };var c = { setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    }, transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);var a = this,
          i = a.activeIndex,
          s = a.params,
          r = a.previousIndex;s.autoHeight && a.updateAutoHeight();var n = t;if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
      }
    }, transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);var a = this,
          i = a.activeIndex,
          s = a.previousIndex;a.animating = !1, a.setTransition(0);var r = t;if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
      }
    } };var u = { slideTo: function slideTo(e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);var s = this,
          r = e;r < 0 && (r = 0);var n = s.params,
          o = s.snapGrid,
          l = s.slidesGrid,
          d = s.previousIndex,
          p = s.activeIndex,
          c = s.rtlTranslate;if (s.animating && n.preventInteractionOnTransition) return !1;var u = Math.floor(r / n.slidesPerGroup);u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");var h,
          v = -o[u];if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) {
        -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      }if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1;
      }return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h));
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0);
    }, slideToLoop: function slideToLoop(e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);var s = e;return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
    }, slideNext: function slideNext(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
          s = i.params,
          r = i.animating;return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
    }, slidePrev: function slidePrev(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
          s = i.params,
          r = i.animating,
          n = i.snapGrid,
          o = i.slidesGrid,
          l = i.rtlTranslate;if (s.loop) {
        if (r) return !1;i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
      }function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }var p,
          c = d(l ? i.translate : -i.translate),
          u = n.map(function (e) {
        return d(e);
      }),
          h = (o.map(function (e) {
        return d(e);
      }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
    }, slideReset: function slideReset(e, t, a) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
    }, slideToClosest: function slideToClosest(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
          s = i.activeIndex,
          r = Math.floor(s / i.params.slidesPerGroup);if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate,
            o = i.snapGrid[r];(i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
      }return i.slideTo(s, e, t, a);
    }, slideToClickedSlide: function slideToClickedSlide() {
      var e,
          t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
          r = t.clickedIndex;if (a.loop) {
        if (t.animating) return;e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r);
      } else t.slideTo(r);
    } };var h = { loopCreate: function loopCreate() {
      var i = this,
          e = i.params,
          t = i.$wrapperEl;t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();var s = t.children("." + e.slideClass);if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - s.length % e.slidesPerGroup;if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);t.append(n);
          }s = t.children("." + e.slideClass);
        }
      }"auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);var o = [],
          l = [];s.each(function (e, t) {
        var a = L(t);e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e);
      });for (var d = 0; d < l.length; d += 1) {
        t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }for (var p = o.length - 1; 0 <= p; p -= 1) {
        t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }
    }, loopFix: function loopFix() {
      var e,
          t = this,
          a = t.params,
          i = t.activeIndex,
          s = t.slides,
          r = t.loopedSlides,
          n = t.allowSlidePrev,
          o = t.allowSlideNext,
          l = t.snapGrid,
          d = t.rtlTranslate;t.allowSlidePrev = !0, t.allowSlideNext = !0;var p = -l[i] - t.getTranslate();i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));t.allowSlidePrev = n, t.allowSlideNext = o;
    }, loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          a = this.slides;e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index");
    } };var v = { setGrabCursor: function setGrabCursor(e) {
      if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    }, unsetGrabCursor: function unsetGrabCursor() {
      te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    } };var m = { appendSlide: function appendSlide(e) {
      var t = this,
          a = t.$wrapperEl,
          i = t.params;if (i.loop && t.loopDestroy(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) for (var s = 0; s < e.length; s += 1) {
        e[s] && a.append(e[s]);
      } else a.append(e);i.loop && t.loopCreate(), i.observer && te.observer || t.update();
    }, prependSlide: function prependSlide(e) {
      var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;a.loop && t.loopDestroy();var r = s + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
        for (var n = 0; n < e.length; n += 1) {
          e[n] && i.prepend(e[n]);
        }r = s + e.length;
      } else i.prepend(e);a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1);
    }, addSlide: function addSlide(e, t) {
      var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));var n = a.slides.length;if (e <= 0) a.prependSlide(t);else if (n <= e) a.appendSlide(t);else {
        for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
          var p = a.slides.eq(d);p.remove(), l.unshift(p);
        }if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "length" in t) {
          for (var c = 0; c < t.length; c += 1) {
            t[c] && i.append(t[c]);
          }o = e < r ? r + t.length : r;
        } else i.append(t);for (var u = 0; u < l.length; u += 1) {
          i.append(l[u]);
        }s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
      }
    }, removeSlide: function removeSlide(e) {
      var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));var r,
          n = s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
        for (var o = 0; o < e.length; o += 1) {
          r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
        }n = Math.max(n, 0);
      } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
    }, removeAllSlides: function removeAllSlides() {
      for (var e = [], t = 0; t < this.slides.length; t += 1) {
        e.push(t);
      }this.removeSlide(e);
    } },
      g = function () {
    var e = J.navigator.userAgent,
        t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: J.cordova || J.phonegap, phonegap: J.cordova || J.phonegap },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
      var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
    }return t.pixelRatio = J.devicePixelRatio || 1, t;
  }();function b() {
    var e = this,
        t = e.params,
        a = e.el;if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();var i = e.allowSlideNext,
          s = e.allowSlidePrev,
          r = e.snapGrid;if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }var w = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
      y = { update: d, translate: p, transition: c, slide: u, loop: h, grabCursor: v, manipulation: m, events: { attachEvents: function attachEvents() {
        var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;e.onTouchStart = function (e) {
          var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches;if (!t.animating || !i.preventInteractionOnTransition) {
            var r = e;if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
              s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;var n = s.currentX,
                  o = s.currentY,
                  l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                  d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;if (!l || !(n <= d || n >= J.screen.width - d)) {
                if (ee.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                  var p = !0;L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();var c = p && t.allowTouchMove && i.touchStartPreventDefault;(i.touchStartForcePreventDefault || c) && r.preventDefault();
                }t.emit("touchStart", r);
              }
            }
          }
        }.bind(e), e.onTouchMove = function (e) {
          var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = e;if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
            if (!a.isTouchEvent || "mousemove" !== n.type) {
              var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                  l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (ee.extend(s, { startX: o, startY: l, currentX: o, currentY: l }), a.touchStartTime = ee.now()));if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
                if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1);
              } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                s.currentX = o, s.currentY = l;var d,
                    p = s.currentX - s.startX,
                    c = s.currentY - s.startY;if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;else if (a.startMoving) {
                  t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;var u = t.isHorizontal() ? p : c;s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;var h = !0,
                      v = i.resistanceRatio;if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                    if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                  }i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: a.touchStartTime }), a.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: ee.now() })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate));
                }
              }
            }
          } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
        }.bind(e), e.onTouchEnd = function (e) {
          var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = t.$wrapperEl,
              o = t.slidesGrid,
              l = t.snapGrid,
              d = e;if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);var p,
              c = ee.now(),
              u = c - a.touchStartTime;if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
            t && !t.destroyed && t.emit("click", d);
          }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
            t.destroyed || (t.allowClick = !0);
          }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));if (i.freeModeMomentum) {
              if (1 < a.velocities.length) {
                var h = a.velocities.pop(),
                    v = a.velocities.pop(),
                    f = h.position - v.position,
                    m = h.time - v.time;t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0);
              } else t.velocity = 0;t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;var g = 1e3 * i.freeModeMomentumRatio,
                  b = t.velocity * g,
                  w = t.translate + b;r && (w = -w);var y,
                  x,
                  T = !1,
                  E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);else if (i.freeModeSticky) {
                for (var S, C = 0; C < l.length; C += 1) {
                  if (l[C] > -w) {
                    S = C;break;
                  }
                }w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
              }if (x && t.once("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideToClosest();i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                }));
              })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
            } else if (i.freeModeSticky) return void t.slideToClosest();(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          } else {
            for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) {
              void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
            }var k = (p - o[M]) / z;if (u > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
            }
          }
        }.bind(e), e.onClick = function (e) {
          this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        }.bind(e);var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
          if (te.touch) {
            var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(a.end, e.onTouchEnd, o);
          }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
        } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0);
      }, detachEvents: function detachEvents() {
        var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
          if (te.touch) {
            var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
          }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
        } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b);
      } }, breakpoints: { setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides;void 0 === i && (i = 0);var s = e.params,
            r = s.breakpoints;if (r && (!r || 0 !== Object.keys(r).length)) {
          var n = e.getBreakpoint(r);if (n && e.currentBreakpoint !== n) {
            var o = n in r ? r[n] : void 0;o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
              var t = o[e];void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });var l = o || e.originalParams,
                d = l.direction && l.direction !== s.direction,
                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);d && a && e.changeDirection(), ee.extend(e.params, l), ee.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = n, p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l);
          }
        }
      }, getBreakpoint: function getBreakpoint(e) {
        if (e) {
          var t = !1,
              a = [];Object.keys(e).forEach(function (e) {
            a.push(e);
          }), a.sort(function (e, t) {
            return parseInt(e, 10) - parseInt(t, 10);
          });for (var i = 0; i < a.length; i += 1) {
            var s = a[i];this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s);
          }return t || "max";
        }
      } }, checkOverflow: { checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked;e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
      } }, classes: { addClasses: function addClasses() {
        var t = this.classNames,
            a = this.params,
            e = this.rtl,
            i = this.$el,
            s = [];s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
          t.push(a.containerModifierClass + e);
        }), i.addClass(t.join(" "));
      }, removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;e.removeClass(t.join(" "));
      } }, images: { loadImage: function loadImage(e, t, a, i, s, r) {
        var n;function o() {
          r && r();
        }e.complete && s ? o() : t ? ((n = new J.Image()).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
      }, preloadImages: function preloadImages() {
        var e = this;function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }e.imagesToLoad = e.$el.find("img");for (var a = 0; a < e.imagesToLoad.length; a += 1) {
          var i = e.imagesToLoad[a];e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
        }
      } } },
      x = {},
      T = function (u) {
    function h() {
      for (var e, t, s, a = [], i = arguments.length; i--;) {
        a[i] = arguments[i];
      }1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(y).forEach(function (t) {
        Object.keys(y[t]).forEach(function (e) {
          h.prototype[e] || (h.prototype[e] = y[t][e]);
        });
      });var r = this;void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
        var t = r.modules[e];if (t.params) {
          var a = Object.keys(t.params)[0],
              i = t.params[a];if ("object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) || null === i) return;if (!(a in s && "enabled" in i)) return;!0 === s[a] && (s[a] = { enabled: !0 }), "object" != _typeof(s[a]) || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = { enabled: !1 });
        }
      });var n = ee.extend({}, w);r.useModulesParams(n), r.params = ee.extend({}, n, x, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);var o = (r.$ = L)(r.params.el);if (t = o[0]) {
        if (1 < o.length) {
          var l = [];return o.each(function (e, t) {
            var a = ee.extend({}, s, { el: t });l.push(new h(a));
          }), l;
        }t.swiper = r, o.data("swiper", r);var d,
            p,
            c = o.children("." + r.params.wrapperClass);return ee.extend(r, { $el: o, el: t, $wrapperEl: c, wrapperEl: c[0], classNames: [], slides: L(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function isHorizontal() {
            return "horizontal" === r.params.direction;
          }, isVertical: function isVertical() {
            return "vertical" === r.params.direction;
          }, rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"), rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")), wrongRTL: "-webkit-box" === c.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }, r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: ee.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: r.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r.useModules(), r.params.init && r.init(), r;
      }
    }u && (h.__proto__ = u);var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
      var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;if (t.centeredSlides) {
        for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
          a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
        }for (var p = r - 1; 0 <= p; p -= 1) {
          a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0));
        }
      } else for (var c = r + 1; c < a.length; c += 1) {
        i[c] - i[r] < s && (n += 1);
      }return n;
    }, h.prototype.update = function () {
      var a = this;if (a && !a.destroyed) {
        var e = a.snapGrid,
            t = a.params;t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update");
      }function i() {
        var e = a.rtlTranslate ? -1 * a.translate : a.translate,
            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
      }
    }, h.prototype.changeDirection = function (a, e) {
      void 0 === e && (e = !0);var t = this,
          i = t.params.direction;return a || (a = "horizontal" === i ? "vertical" : "horizontal"), a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), t.params.direction = a, t.slides.each(function (e, t) {
        "vertical" === a ? t.style.width = "" : t.style.height = "";
      }), t.emit("changeDirection"), e && t.update()), t;
    }, h.prototype.init = function () {
      var e = this;e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
    }, h.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);var a = this,
          i = a.params,
          s = a.$el,
          r = a.$wrapperEl,
          n = a.slides;return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
        a.off(e);
      }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null;
    }, h.extendDefaults = function (e) {
      ee.extend(x, e);
    }, e.extendedDefaults.get = function () {
      return x;
    }, e.defaults.get = function () {
      return w;
    }, e.Class.get = function () {
      return u;
    }, e.$.get = function () {
      return L;
    }, Object.defineProperties(h, e), h;
  }(n),
      E = { name: "device", proto: { device: g }, static: { device: g } },
      S = { name: "support", proto: { support: te }, static: { support: te } },
      C = { name: "browser", proto: { browser: I }, static: { browser: I } },
      M = { name: "resize", create: function create() {
      var e = this;ee.extend(e, { resize: { resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          }, orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          } } });
    }, on: { init: function init() {
        J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      }, destroy: function destroy() {
        J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      } } },
      z = { func: J.MutationObserver || J.WebkitMutationObserver, attach: function attach(e, t) {
      void 0 === t && (t = {});var a = this,
          i = new z.func(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            a.emit("observerUpdate", e[0]);
          };J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0);
        } else a.emit("observerUpdate", e[0]);
      });i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i);
    }, init: function init() {
      var e = this;if (te.observer && e.params.observer) {
        if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
          e.observer.attach(t[a]);
        }e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
      }
    }, destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    } },
      P = { name: "observer", params: { observer: !1, observeParents: !1, observeSlideChildren: !1 }, create: function create() {
      ee.extend(this, { observer: { init: z.init.bind(this), attach: z.attach.bind(this), destroy: z.destroy.bind(this), observers: [] } });
    }, on: { init: function init() {
        this.observer.init();
      }, destroy: function destroy() {
        this.observer.destroy();
      } } },
      k = { update: function update(e) {
      var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;t.updateActiveIndex();var m,
          g,
          b,
          w = t.activeIndex || 0;m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);function E() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }if (ee.extend(t.virtual, { from: y, to: x, offset: T, slidesGrid: t.slidesGrid }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: T, from: y, to: x, slides: function () {
          for (var e = [], t = y; t <= x; t += 1) {
            e.push(u[t]);
          }return e;
        }() }), void E();var S = [],
          C = [];if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var M = p; M <= c; M += 1) {
        (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
      }for (var z = 0; z < u.length; z += 1) {
        y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
      }C.forEach(function (e) {
        t.$wrapperEl.append(v(u[e], e));
      }), S.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E();
    }, renderSlide: function renderSlide(e, t) {
      var a = this,
          i = a.params.virtual;if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
    }, appendSlide: function appendSlide(e) {
      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) for (var t = 0; t < e.length; t += 1) {
        e[t] && this.virtual.slides.push(e[t]);
      } else this.virtual.slides.push(e);this.virtual.update(!0);
    }, prependSlide: function prependSlide(e) {
      var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;if (Array.isArray(e)) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && t.virtual.slides.unshift(e[r]);
        }i = a + e.length, s = e.length;
      } else t.virtual.slides.unshift(e);if (t.params.virtual.cache) {
        var n = t.virtual.cache,
            o = {};Object.keys(n).forEach(function (e) {
          o[parseInt(e, 10) + s] = n[e];
        }), t.virtual.cache = o;
      }t.virtual.update(!0), t.slideTo(i, 0);
    }, removeSlide: function removeSlide(e) {
      var t = this;if (null != e) {
        var a = t.activeIndex;if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; i -= 1) {
          t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
        } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);t.virtual.update(!0), t.slideTo(a, 0);
      }
    }, removeAllSlides: function removeAllSlides() {
      var e = this;e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    } },
      $ = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } }, create: function create() {
      var e = this;ee.extend(e, { virtual: { update: k.update.bind(e), appendSlide: k.appendSlide.bind(e), prependSlide: k.prependSlide.bind(e), removeSlide: k.removeSlide.bind(e), removeAllSlides: k.removeAllSlides.bind(e), renderSlide: k.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
    }, on: { beforeInit: function beforeInit() {
        var e = this;if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");var t = { watchSlidesProgress: !0 };ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      }, setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      } } },
      D = { handle: function handle(e) {
      var t = this,
          a = t.rtlTranslate,
          i = e;i.originalEvent && (i = i.originalEvent);var s = i.keyCode || i.charCode;if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
          var r = !1;if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;var n = J.innerWidth,
              o = J.innerHeight,
              l = t.$el.offset();a && (l.left -= t.$el[0].scrollLeft);for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
            var c = d[p];0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
          }if (!r) return;
        }t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s);
      }
    }, enable: function enable() {
      this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    }, disable: function disable() {
      this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    } },
      O = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function create() {
      ee.extend(this, { keyboard: { enabled: !1, enable: D.enable.bind(this), disable: D.disable.bind(this), handle: D.handle.bind(this) } });
    }, on: { init: function init() {
        this.params.keyboard.enabled && this.keyboard.enable();
      }, destroy: function destroy() {
        this.keyboard.enabled && this.keyboard.disable();
      } } };var A = { lastScrollTime: ee.now(), event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
      var e = "onwheel",
          t = e in f;if (!t) {
        var a = f.createElement("div");a.setAttribute(e, "return;"), t = "function" == typeof a[e];
      }return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t;
    }() ? "wheel" : "mousewheel", normalize: function normalize(e) {
      var t = 0,
          a = 0,
          i = 0,
          s = 0;return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), { spinX: t, spinY: a, pixelX: i, pixelY: s };
    }, handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    }, handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    }, handle: function handle(e) {
      var t = e,
          a = this,
          i = a.params.mousewheel;if (!a.mouseEntered && !i.releaseOnEdges) return !0;t.originalEvent && (t = t.originalEvent);var s = 0,
          r = a.rtlTranslate ? -1 : 1,
          n = A.normalize(t);if (i.forceToAxis) {
        if (a.isHorizontal()) {
          if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;s = n.pixelX * r;
        } else {
          if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;s = n.pixelY;
        }
      } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;if (0 === s) return !0;if (i.invert && (s = -s), a.params.freeMode) {
        a.params.loop && a.loopFix();var o = a.getTranslate() + s * i.sensitivity,
            l = a.isBeginning,
            d = a.isEnd;if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
          a.slideToClosest();
        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0;
      } else {
        if (60 < ee.now() - a.mousewheel.lastScrollTime) if (s < 0) {
          if (a.isEnd && !a.params.loop || a.animating) {
            if (i.releaseOnEdges) return !0;
          } else a.slideNext(), a.emit("scroll", t);
        } else if (a.isBeginning && !a.params.loop || a.animating) {
          if (i.releaseOnEdges) return !0;
        } else a.slidePrev(), a.emit("scroll", t);a.mousewheel.lastScrollTime = new J.Date().getTime();
      }return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    }, enable: function enable() {
      var e = this;if (!A.event) return !1;if (e.mousewheel.enabled) return !1;var t = e.$el;return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(A.event, e.mousewheel.handle), e.mousewheel.enabled = !0;
    }, disable: function disable() {
      var e = this;if (!A.event) return !1;if (!e.mousewheel.enabled) return !1;var t = e.$el;return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(A.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
    } },
      H = { update: function update() {
      var e = this,
          t = e.params.navigation;if (!e.params.loop) {
        var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
      }
    }, onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    }, onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    }, init: function init() {
      var e,
          t,
          a = this,
          i = a.params.navigation;(i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
    }, destroy: function destroy() {
      var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
    } },
      N = { update: function update() {
      var e = this,
          t = e.rtl,
          s = e.params.pagination;if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var r,
            a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
          var o,
              l,
              d,
              p = e.pagination.bullets;if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
            var a = L(t),
                i = a.index();i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"));
          });else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) {
              p.eq(h).addClass(s.bulletActiveClass + "-main");
            }c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next");
          }if (s.dynamicBullets) {
            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                m = t ? "right" : "left";p.css(e.isHorizontal() ? m : "top", f + "px");
          }
        }if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
          var g;g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";var b = (r + 1) / n,
              w = 1,
              y = 1;"horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed);
        }"custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
    }, render: function render() {
      var e = this,
          t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";if ("bullets" === t.type) {
          for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) {
            t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
          }i.html(s), e.pagination.bullets = i.find("." + t.bulletClass);
        }"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
      }
    }, init: function init() {
      var a = this,
          e = a.params.pagination;if (e.el) {
        var t = L(e.el);0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
          e.preventDefault();var t = L(this).index() * a.params.slidesPerGroup;a.params.loop && (t += a.loopedSlides), a.slideTo(t);
        }), ee.extend(a.pagination, { $el: t, el: t[0] }));
      }
    }, destroy: function destroy() {
      var e = this,
          t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.pagination.$el;a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
      }
    } },
      G = { setTranslate: function setTranslate() {
      var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          o[0].style.opacity = 0, o.transition(400);
        }, 1e3));
      }
    }, setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    }, updateSize: function updateSize() {
      var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;a[0].style.width = "", a[0].style.height = "";var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ee.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
      }
    }, setDragPosition: function setDragPosition(e) {
      var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses();
    }, onDragStart: function onDragStart(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e);
    }, onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
    }, onDragEnd: function onDragEnd(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
        i.css("opacity", 0), i.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
    }, enableDraggable: function enableDraggable() {
      var e = this;if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
            o = !(!te.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
      }
    }, disableDraggable: function disableDraggable() {
      var e = this;if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
            o = !(!te.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
      }
    }, init: function init() {
      var e = this;if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = L(i.el);e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));var r = s.find("." + e.params.scrollbar.dragClass);0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable();
      }
    }, destroy: function destroy() {
      this.scrollbar.disableDraggable();
    } },
      B = { setTransform: function setTransform(e, t) {
      var a = this.rtl,
          i = L(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y"),
          l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
        var p = d - (d - 1) * (1 - Math.abs(t));i[0].style.opacity = p;
      }if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");else {
        var c = l - (l - 1) * (1 - Math.abs(t));i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")");
      }
    }, setTranslate: function setTranslate() {
      var i = this,
          e = i.$el,
          t = i.slides,
          s = i.progress,
          r = i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
        i.parallax.setTransform(t, s);
      }), t.each(function (e, t) {
        var a = t.progress;1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
          i.parallax.setTransform(t, a);
        });
      });
    }, setTransition: function setTransition(s) {
      void 0 === s && (s = this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
        var a = L(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;0 === s && (i = 0), a.transition(i);
      });
    } },
      X = { getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
    }, onGestureStart: function onGestureStart(e) {
      var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;i.fakeGestureTouched = !0, s.scaleStart = X.getDistanceBetweenTouches(e);
      }s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
    }, onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;if (!te.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;a.fakeGestureMoved = !0, i.scaleMove = X.getDistanceBetweenTouches(e);
      }i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
    }, onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;if (!te.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
      }i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0));
    }, onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          a = t.gesture,
          i = t.image;a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    }, onTouchMove: function onTouchMove(e) {
      var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));var n = s.width * a.scale,
            o = s.height * a.scale;if (!(n < i.slideWidth && o < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    }, onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);a.isTouched = !1, a.isMoved = !1;var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));var p = Math.max(s, r);a.currentX = o, a.currentY = d;var c = a.width * e.scale,
            u = a.height * e.scale;a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
      }
    }, onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    }, toggle: function toggle(e) {
      var t = this.zoom;t.scale && 1 !== t.scale ? t.out() : t.in(e);
    }, in: function _in(e) {
      var t,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image;(y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
    }, out: function out() {
      var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
    }, enable: function enable() {
      var e = this,
          t = e.zoom;if (!t.enabled) {
        t.enabled = !0;var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
      }
    }, disable: function disable() {
      var e = this,
          t = e.zoom;if (t.enabled) {
        e.zoom.enabled = !1;var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
      }
    } },
      Y = { loadInSlide: function loadInSlide(e, l) {
      void 0 === l && (l = !0);var d = this,
          p = d.params.lazy;if (void 0 !== e && 0 !== d.slides.length) {
        var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
            t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");!c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
          var i = L(t);i.addClass(p.loadingClass);var s = i.attr("data-background"),
              r = i.attr("data-src"),
              n = i.attr("data-srcset"),
              o = i.attr("data-sizes");d.loadImage(i[0], r || s, n, o, !1, function () {
            if (null != d && d && (!d || d.params) && !d.destroyed) {
              if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                var e = c.attr("data-swiper-slide-index");if (c.hasClass(d.params.slideDuplicateClass)) {
                  var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");d.lazy.loadInSlide(t.index(), !1);
                } else {
                  var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');d.lazy.loadInSlide(a.index(), !1);
                }
              }d.emit("lazyImageReady", c[0], i[0]);
            }
          }), d.emit("lazyImageLoad", c[0], i[0]);
        });
      }
    }, load: function load() {
      var i = this,
          t = i.$wrapperEl,
          a = i.params,
          s = i.slides,
          e = i.activeIndex,
          r = i.virtual && a.virtual.enabled,
          n = a.lazy,
          o = a.slidesPerView;function l(e) {
        if (r) {
          if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (s[e]) return !0;return !1;
      }function d(e) {
        return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
      }if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
        var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();i.lazy.loadInSlide(a);
      });else if (1 < o) for (var p = e; p < e + o; p += 1) {
        l(p) && i.lazy.loadInSlide(p);
      } else i.lazy.loadInSlide(e);if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) {
          l(f) && i.lazy.loadInSlide(f);
        }for (var m = v; m < e; m += 1) {
          l(m) && i.lazy.loadInSlide(m);
        }
      } else {
        var g = t.children("." + a.slideNextClass);0 < g.length && i.lazy.loadInSlide(d(g));var b = t.children("." + a.slidePrevClass);0 < b.length && i.lazy.loadInSlide(d(b));
      }
    } },
      V = { LinearSpline: function LinearSpline(e, t) {
      var a,
          i,
          s,
          r,
          n,
          o = function o(e, t) {
        for (i = -1, a = e.length; 1 < a - i;) {
          e[s = a + i >> 1] <= t ? i = s : a = s;
        }return a;
      };return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    }, getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid));
    }, setTranslate: function setTranslate(e, t) {
      var a,
          i,
          s = this,
          r = s.controller.control;function n(e) {
        var t = s.rtlTranslate ? -s.translate : s.translate;"slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
      }if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof T && n(r[o]);
      } else r instanceof T && t !== r && n(r);
    }, setTransition: function setTransition(t, e) {
      var a,
          i = this,
          s = i.controller.control;function r(e) {
        e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
          e.updateAutoHeight();
        }), e.$wrapperEl.transitionEnd(function () {
          s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
        }));
      }if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) {
        s[a] !== e && s[a] instanceof T && r(s[a]);
      } else s instanceof T && e !== s && r(s);
    } },
      F = { makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    }, addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    }, addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    }, disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    }, enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    }, onEnterKey: function onEnterKey(e) {
      var t = this,
          a = t.params.a11y;if (13 === e.keyCode) {
        var i = L(e.target);t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click();
      }
    }, notify: function notify(e) {
      var t = this.a11y.liveRegion;0 !== t.length && (t.html(""), t.html(e));
    }, updateNavigation: function updateNavigation() {
      var e = this;if (!e.params.loop) {
        var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
      }
    }, updatePagination: function updatePagination() {
      var i = this,
          s = i.params.a11y;i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
        var a = L(t);i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
      });
    }, init: function init() {
      var e = this;e.$el.append(e.a11y.liveRegion);var t,
          a,
          i = e.params.a11y;e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
    }, destroy: function destroy() {
      var e,
          t,
          a = this;a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey);
    } },
      R = { init: function init() {
      var e = this;if (e.params.history) {
        if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);var t = e.history;t.initialized = !0, t.paths = R.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState));
      }
    }, destroy: function destroy() {
      this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState);
    }, setHistoryPopState: function setHistoryPopState() {
      this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    }, getPathValues: function getPathValues() {
      var e = J.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          t = e.length;return { key: e[t - 2], value: e[t - 1] };
    }, setHistory: function setHistory(e, t) {
      if (this.history.initialized && this.params.history.enabled) {
        var a = this.slides.eq(t),
            i = R.slugify(a.attr("data-history"));J.location.pathname.includes(e) || (i = e + "/" + i);var s = J.history.state;s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({ value: i }, null, i) : J.history.pushState({ value: i }, null, i));
      }
    }, slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    }, scrollToSlide: function scrollToSlide(e, t, a) {
      var i = this;if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
        var n = i.slides.eq(s);if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
          var o = n.index();i.slideTo(o, e, a);
        }
      } else i.slideTo(0, e, a);
    } },
      q = { onHashCange: function onHashCange() {
      var e = this,
          t = f.location.hash.replace("#", "");if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();if (void 0 === a) return;e.slideTo(a);
      }
    }, setHash: function setHash() {
      var e = this;if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");else {
        var t = e.slides.eq(e.activeIndex),
            a = t.attr("data-hash") || t.attr("data-history");f.location.hash = a || "";
      }
    }, init: function init() {
      var e = this;if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
        e.hashNavigation.initialized = !0;var t = f.location.hash.replace("#", "");if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
          var s = e.slides.eq(a);if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
            var r = s.index();e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
          }
        }e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange);
      }
    }, destroy: function destroy() {
      this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange);
    } },
      W = { run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, a);
    }, start: function start() {
      var e = this;return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
    }, stop: function stop() {
      var e = this;return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
    }, pause: function pause(e) {
      var t = this;t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
    } },
      j = { setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
        var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;e.params.virtualTranslate || (s -= e.translate);var r = 0;e.isHorizontal() || (r = s, s = 0);var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
      }
    }, setTransition: function setTransition(e) {
      var a = this,
          t = a.slides,
          i = a.$wrapperEl;if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
        var s = !1;t.transitionEnd(function () {
          if (!s && a && !a.destroyed) {
            s = !0, a.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
              i.trigger(e[t]);
            }
          }
        });
      }
    } },
      U = { setTranslate: function setTranslate() {
      var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.params.cubeEffect,
          p = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          u = 0;d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));for (var h = 0; h < s.length; h += 1) {
        var v = s.eq(h),
            f = h;c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));var m = 90 * f,
            g = Math.floor(m / 360);o && (m = -m, g = Math.floor(-m / 360));var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
          var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
        }
      }if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            z = d.shadowScale,
            P = d.shadowScale / M,
            k = d.shadowOffset;e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
      }var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)");
    }, setTransition: function setTransition(e) {
      var t = this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    } },
      K = { setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
        var s = t.eq(i),
            r = s[0].progress;e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
          var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
        }s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
      }
    }, setTransition: function setTransition(e) {
      var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
        var r = !1;t.eq(i).transitionEnd(function () {
          if (!r && a && !a.destroyed) {
            r = !0, a.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
              s.trigger(e[t]);
            }
          }
        });
      }
    } },
      _ = { setTranslate: function setTranslate() {
      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
        var v = i.eq(u),
            f = r[u],
            m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
            g = o ? p * m : 0,
            b = o ? 0 : p * m,
            w = -c * Math.abs(m),
            y = o ? 0 : n.stretch * m,
            x = o ? n.stretch * m : 0;Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
          var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
        }
      }(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
    }, setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    } },
      Z = { init: function init() {
      var e = this,
          t = e.params.thumbs,
          a = e.constructor;t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), ee.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
    }, onThumbClick: function onThumbClick() {
      var e = this,
          t = e.thumbs.swiper;if (t) {
        var a = t.clickedIndex,
            i = t.clickedSlide;if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
          var s;if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
            var r = e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
          }e.slideTo(s);
        }
      }
    }, update: function update(e) {
      var t = this,
          a = t.thumbs.swiper;if (a) {
        var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;if (t.realIndex !== a.realIndex) {
          var s,
              r = a.activeIndex;if (a.params.loop) {
            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n;
          } else s = t.realIndex;a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0));
        }var l = 1,
            d = t.params.thumbs.slideThumbActiveClass;if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) {
          a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
        } else for (var c = 0; c < l; c += 1) {
          a.slides.eq(t.realIndex + c).addClass(d);
        }
      }
    } },
      Q = [E, S, C, M, P, $, O, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function create() {
      var e = this;ee.extend(e, { mousewheel: { enabled: !1, enable: A.enable.bind(e), disable: A.disable.bind(e), handle: A.handle.bind(e), handleMouseEnter: A.handleMouseEnter.bind(e), handleMouseLeave: A.handleMouseLeave.bind(e), lastScrollTime: ee.now() } });
    }, on: { init: function init() {
        this.params.mousewheel.enabled && this.mousewheel.enable();
      }, destroy: function destroy() {
        this.mousewheel.enabled && this.mousewheel.disable();
      } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function create() {
      var e = this;ee.extend(e, { navigation: { init: H.init.bind(e), update: H.update.bind(e), destroy: H.destroy.bind(e), onNextClick: H.onNextClick.bind(e), onPrevClick: H.onPrevClick.bind(e) } });
    }, on: { init: function init() {
        this.navigation.init(), this.navigation.update();
      }, toEdge: function toEdge() {
        this.navigation.update();
      }, fromEdge: function fromEdge() {
        this.navigation.update();
      }, destroy: function destroy() {
        this.navigation.destroy();
      }, click: function click(e) {
        var t,
            a = this,
            i = a.navigation,
            s = i.$nextEl,
            r = i.$prevEl;!a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
      } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        }, formatFractionTotal: function formatFractionTotal(e) {
          return e;
        }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function create() {
      var e = this;ee.extend(e, { pagination: { init: N.init.bind(e), render: N.render.bind(e), update: N.update.bind(e), destroy: N.destroy.bind(e), dynamicBulletIndex: 0 } });
    }, on: { init: function init() {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      }, activeIndexChange: function activeIndexChange() {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
      }, snapIndexChange: function snapIndexChange() {
        this.params.loop || this.pagination.update();
      }, slidesLengthChange: function slidesLengthChange() {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      }, snapGridLengthChange: function snapGridLengthChange() {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      }, destroy: function destroy() {
        this.pagination.destroy();
      }, click: function click(e) {
        var t = this;t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
      } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function create() {
      var e = this;ee.extend(e, { scrollbar: { init: G.init.bind(e), destroy: G.destroy.bind(e), updateSize: G.updateSize.bind(e), setTranslate: G.setTranslate.bind(e), setTransition: G.setTransition.bind(e), enableDraggable: G.enableDraggable.bind(e), disableDraggable: G.disableDraggable.bind(e), setDragPosition: G.setDragPosition.bind(e), onDragStart: G.onDragStart.bind(e), onDragMove: G.onDragMove.bind(e), onDragEnd: G.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } });
    }, on: { init: function init() {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      }, update: function update() {
        this.scrollbar.updateSize();
      }, resize: function resize() {
        this.scrollbar.updateSize();
      }, observerUpdate: function observerUpdate() {
        this.scrollbar.updateSize();
      }, setTranslate: function setTranslate() {
        this.scrollbar.setTranslate();
      }, setTransition: function setTransition(e) {
        this.scrollbar.setTransition(e);
      }, destroy: function destroy() {
        this.scrollbar.destroy();
      } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function create() {
      ee.extend(this, { parallax: { setTransform: B.setTransform.bind(this), setTranslate: B.setTranslate.bind(this), setTransition: B.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      }, init: function init() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      }, setTranslate: function setTranslate() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      }, setTransition: function setTransition(e) {
        this.params.parallax.enabled && this.parallax.setTransition(e);
      } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function create() {
      var i = this,
          t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
        t[e] = X[e].bind(i);
      }), ee.extend(i, { zoom: t });var s = 1;Object.defineProperty(i.zoom, "scale", { get: function get() {
          return s;
        }, set: function set(e) {
          if (s !== e) {
            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;i.emit("zoomChange", e, t, a);
          }s = e;
        } });
    }, on: { init: function init() {
        this.params.zoom.enabled && this.zoom.enable();
      }, destroy: function destroy() {
        this.zoom.disable();
      }, touchStart: function touchStart(e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      }, touchEnd: function touchEnd(e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      }, doubleTap: function doubleTap(e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
      }, transitionEnd: function transitionEnd() {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
      } } }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function create() {
      ee.extend(this, { lazy: { initialImageLoaded: !1, load: Y.load.bind(this), loadInSlide: Y.loadInSlide.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
      }, init: function init() {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
      }, scroll: function scroll() {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
      }, resize: function resize() {
        this.params.lazy.enabled && this.lazy.load();
      }, scrollbarDragMove: function scrollbarDragMove() {
        this.params.lazy.enabled && this.lazy.load();
      }, transitionStart: function transitionStart() {
        var e = this;e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      }, transitionEnd: function transitionEnd() {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
      } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function create() {
      var e = this;ee.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: V.getInterpolateFunction.bind(e), setTranslate: V.setTranslate.bind(e), setTransition: V.setTransition.bind(e) } });
    }, on: { update: function update() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, resize: function resize() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, observerUpdate: function observerUpdate() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, setTranslate: function setTranslate(e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      }, setTransition: function setTransition(e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      } } }, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function create() {
      var t = this;ee.extend(t, { a11y: { liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(F).forEach(function (e) {
        t.a11y[e] = F[e].bind(t);
      });
    }, on: { init: function init() {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      }, toEdge: function toEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      }, fromEdge: function fromEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      }, paginationUpdate: function paginationUpdate() {
        this.params.a11y.enabled && this.a11y.updatePagination();
      }, destroy: function destroy() {
        this.params.a11y.enabled && this.a11y.destroy();
      } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function create() {
      var e = this;ee.extend(e, { history: { init: R.init.bind(e), setHistory: R.setHistory.bind(e), setHistoryPopState: R.setHistoryPopState.bind(e), scrollToSlide: R.scrollToSlide.bind(e), destroy: R.destroy.bind(e) } });
    }, on: { init: function init() {
        this.params.history.enabled && this.history.init();
      }, destroy: function destroy() {
        this.params.history.enabled && this.history.destroy();
      }, transitionEnd: function transitionEnd() {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
      } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function create() {
      var e = this;ee.extend(e, { hashNavigation: { initialized: !1, init: q.init.bind(e), destroy: q.destroy.bind(e), setHash: q.setHash.bind(e), onHashCange: q.onHashCange.bind(e) } });
    }, on: { init: function init() {
        this.params.hashNavigation.enabled && this.hashNavigation.init();
      }, destroy: function destroy() {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
      }, transitionEnd: function transitionEnd() {
        this.hashNavigation.initialized && this.hashNavigation.setHash();
      } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function create() {
      var t = this;ee.extend(t, { autoplay: { running: !1, paused: !1, run: W.run.bind(t), start: W.start.bind(t), stop: W.stop.bind(t), pause: W.pause.bind(t), onTransitionEnd: function onTransitionEnd(e) {
            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
          } } });
    }, on: { init: function init() {
        this.params.autoplay.enabled && this.autoplay.start();
      }, beforeTransitionStart: function beforeTransitionStart(e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      }, sliderFirstMove: function sliderFirstMove() {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      }, destroy: function destroy() {
        this.autoplay.running && this.autoplay.stop();
      } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function create() {
      ee.extend(this, { fadeEffect: { setTranslate: j.setTranslate.bind(this), setTransition: j.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        var e = this;if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };ee.extend(e.params, t), ee.extend(e.originalParams, t);
        }
      }, setTranslate: function setTranslate() {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function create() {
      ee.extend(this, { cubeEffect: { setTranslate: U.setTranslate.bind(this), setTransition: U.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        var e = this;if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };ee.extend(e.params, t), ee.extend(e.originalParams, t);
        }
      }, setTranslate: function setTranslate() {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function create() {
      ee.extend(this, { flipEffect: { setTranslate: K.setTranslate.bind(this), setTransition: K.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        var e = this;if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };ee.extend(e.params, t), ee.extend(e.originalParams, t);
        }
      }, setTranslate: function setTranslate() {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function create() {
      ee.extend(this, { coverflowEffect: { setTranslate: _.setTranslate.bind(this), setTransition: _.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        var e = this;"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      }, setTranslate: function setTranslate() {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      } } }, { name: "thumbs", params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } }, create: function create() {
      ee.extend(this, { thumbs: { swiper: null, init: Z.init.bind(this), update: Z.update.bind(this), onThumbClick: Z.onThumbClick.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        var e = this.params.thumbs;e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
      }, slideChange: function slideChange() {
        this.thumbs.swiper && this.thumbs.update();
      }, update: function update() {
        this.thumbs.swiper && this.thumbs.update();
      }, resize: function resize() {
        this.thumbs.swiper && this.thumbs.update();
      }, observerUpdate: function observerUpdate() {
        this.thumbs.swiper && this.thumbs.update();
      }, setTransition: function setTransition(e) {
        var t = this.thumbs.swiper;t && t.setTransition(e);
      }, beforeDestroy: function beforeDestroy() {
        var e = this.thumbs.swiper;e && this.thumbs.swiperCreated && e && e.destroy();
      } } }];return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T;
});
//# sourceMappingURL=swiper.min.js.map
;

$(document).ready(function () {
  /*! UIkit 3.1.6 | http://www.getuikit.com | (c) 2014 - 2018 YOOtheme | MIT License */

  !function (a, c) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c() : "function" == typeof define && define.amd ? define("uikiticons", c) : (a = a || self).UIkitIcons = c();
  }(this, function () {
    "use strict";
    function c(a) {
      c.installed || a.icon.add({ "arrow-left": '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39"><circle cx="19.66" cy="19.53" r="18.8" fill="#fff"/><path d="M15.06 19.24l5.84-5.84a.45.45 0 0 1 .29-.12.42.42 0 0 1 .28.12l.63.63a.41.41 0 0 1 .13.29.43.43 0 0 1-.13.29l-4.92 4.92 4.92 4.92a.43.43 0 0 1 .13.29.41.41 0 0 1-.13.29l-.63.63a.42.42 0 0 1-.28.12.45.45 0 0 1-.29-.12l-5.84-5.84a.39.39 0 0 1 0-.58z"/></svg>', "arrow-right": '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39"><circle cx="19.66" cy="19.53" r="18.8" fill="#fff"/><path d="M24.25 19.82l-5.84 5.84a.42.42 0 0 1-.28.12.45.45 0 0 1-.29-.12l-.63-.66a.41.41 0 0 1-.12-.29.47.47 0 0 1 .12-.29l4.93-4.92-4.93-4.92a.41.41 0 0 1 0-.58l.63-.63a.45.45 0 0 1 .29-.12.42.42 0 0 1 .28.12l5.84 5.84a.39.39 0 0 1 0 .58z"/></svg>', "arrow-up": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><path d="M0 0h16v16H0z" fill="none"/></clipPath></defs><g data-name="Backward arrow" transform="rotate(90 8 8)" clip-path="url(#a)"><path d="M8 16l1.455-1.455-5.506-5.506H16V6.961H3.948l5.507-5.506L8 0 0 8z" data-name="Path 10" fill="#fff"/></g></svg>', calendar: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 41"><defs><style>.calendar{fill:#15bb98}</style></defs><path class="calendar" d="M2.65 16.45V6.59A2.71 2.71 0 0 1 5 3.79a3.24 3.24 0 0 1 .44 0h3.3c.23 0 .31-.06.31-.29C9 2.9 9 2.32 9 1.74a.9.9 0 0 1 .05-.36.56.56 0 0 1 1.06 0 1.42 1.42 0 0 1 0 .36V3.4c0 .36 0 .36.36.36h9.71c.24 0 .33-.06.32-.3V1.77a1.62 1.62 0 0 1 0-.31.56.56 0 0 1 1.1 0 1.63 1.63 0 0 1 0 .31v1.67c0 .24.07.33.32.33h3.3a2.7 2.7 0 0 1 2.77 2.76v19.92a2.73 2.73 0 0 1-2.83 2.78H5.57A2.75 2.75 0 0 1 3 27.8a2.82 2.82 0 0 1-.34-1.43zm12.73-5.91H4.19c-.39 0-.39 0-.39.39v15.5a1.53 1.53 0 0 0 1.65 1.65h19.87A1.53 1.53 0 0 0 27 26.43V10.92c0-.38 0-.38-.39-.38zm0-1.15H26.6c.36 0 .36 0 .36-.36v-2.5a1.79 1.79 0 0 0 0-.46 1.6 1.6 0 0 0-1.66-1.18h-3.22c-.26 0-.32.08-.32.33v1.87a.57.57 0 1 1-1.13 0 1 1 0 0 1 0-.25V5.17c0-.22-.06-.31-.31-.31h-9.83c-.23 0-.31.07-.3.29v1.8a.66.66 0 0 1-.21.56.51.51 0 0 1-.58.09.6.6 0 0 1-.4-.55V5.16c0-.2-.06-.27-.27-.27H5.41a1.58 1.58 0 0 0-1.61 1.7v2.39c0 .41 0 .41.42.41z"/><path class="calendar" d="M15.38 12.55h1.14a1.64 1.64 0 0 1 1.67 1.63v2.31a1.61 1.61 0 0 1-1.52 1.65 18.23 18.23 0 0 1-2.56 0 1.61 1.61 0 0 1-1.53-1.66v-2.26a1.64 1.64 0 0 1 1.68-1.67zm0 4.47h1.12c.37 0 .55-.17.55-.53v-2.26a.45.45 0 0 0-.5-.52h-2.32a.45.45 0 0 0-.5.5v2.29a.46.46 0 0 0 .53.52zM5.76 15.36V14.2a1.62 1.62 0 0 1 1.59-1.65h2.39a1.63 1.63 0 0 1 1.61 1.64v2.2a1.61 1.61 0 0 1-1.59 1.76 16.83 16.83 0 0 1-2.56 0 1.59 1.59 0 0 1-1.44-1.6zm2.79-1.66H7.46c-.39 0-.58.18-.58.57v2.18a.5.5 0 0 0 .56.56h2.23c.37 0 .55-.19.55-.57v-2.18c0-.38-.17-.55-.55-.56zM15.37 25.25h-1.12a1.61 1.61 0 0 1-1.67-1.61v-2.36a1.63 1.63 0 0 1 1.66-1.61h2.29a1.63 1.63 0 0 1 1.66 1.63v2.31a1.61 1.61 0 0 1-1.68 1.64c-.38.01-.76 0-1.14 0zm-1.64-2.78v1.14a.46.46 0 0 0 .53.52h2.23c.37 0 .55-.17.55-.54v-2.25a.49.49 0 0 0-.52-.55h-2.26a.49.49 0 0 0-.53.56c-.01.37 0 .74 0 1.12zM25 15.35v1.06a1.6 1.6 0 0 1-1.58 1.74 17.23 17.23 0 0 1-2.59 0 1.58 1.58 0 0 1-1.42-1.56v-2.41A1.63 1.63 0 0 1 21 12.55h2.41A1.63 1.63 0 0 1 25 14.18zM22.21 17h1.12a.5.5 0 0 0 .56-.56v-2.2a.49.49 0 0 0-.55-.55h-2.22c-.4 0-.57.18-.58.57v2.18a.5.5 0 0 0 .56.56zM8.54 25.25H7.32a1.59 1.59 0 0 1-1.56-1.56v-2.44a1.61 1.61 0 0 1 1.55-1.58H9.8a1.62 1.62 0 0 1 1.55 1.61v2.39a1.59 1.59 0 0 1-1.59 1.58c-.41.01-.76 0-1.22 0zm0-1.12h1.14a.5.5 0 0 0 .55-.55v-2.2a.52.52 0 0 0-.57-.59H7.44a.53.53 0 0 0-.56.58v2.2a.5.5 0 0 0 .56.56c.37.01.73 0 1.09 0zM22.22 25.25H21a1.59 1.59 0 0 1-1.58-1.57v-2.41a1.62 1.62 0 0 1 1.58-1.6h2.46A1.62 1.62 0 0 1 25 21.26v2.42a1.59 1.59 0 0 1-1.57 1.57c-.43.01-.8 0-1.21 0zm0-1.12h1.09a.51.51 0 0 0 .58-.57v-2.18a.53.53 0 0 0-.57-.59h-2.21a.54.54 0 0 0-.57.59v2.18a.51.51 0 0 0 .59.57c.36.01.72 0 1.09 0z"/><path fill="none" stroke="#939393" stroke-miterlimit="10" d="M5.65 38h20"/></svg>', camera: '<svg xmlns="http://www.w3.org/2000/svg" width="72.281" height="44.195" viewBox="0 0 72.281 44.195"><path d="M37.392 9.658a.434.434 0 01.021-.115zm-.1 11.039c0-.084-.022-.119-.039-.123.014.078.025.142.039.124zm-.2 1.885l.012-.111a.152.152 0 00-.012.111zm.3-12.924l-.056.295c.056.021.043-.151.056-.295zm-1.357-3.041h-.09a.5.5 0 00-.075.073zm-3.588-.184a.273.273 0 01-.184.1.184.184 0 00.038.108c.083.01.113-.142.145-.205zm-6.068-.056l-.1.021c.021-.007.068-.013.099-.021zm10.835 1.089a.111.111 0 00-.054.034.076.076 0 00.053-.035zM21.859 6.261l-.06.008a.4.4 0 00-.013.085zm15.042 19.771v-.015c-.014-.092-.009-.04 0 .019zM17.576 37.18c.358.136-.584.175-.044.326-.05-.061.491-.238.044-.327zm19.417-3.2a.225.225 0 00.066-.081c-.016.002-.035.02-.067.08zm.216-5.921l-.021.146a.707.707 0 00.021-.147zm-.014 8.966a.287.287 0 00.013-.031.107.107 0 00-.016.03zm0 0a.082.082 0 000 .073.045.045 0 00.019-.01.073.073 0 01-.022-.064zm-2.176.35a.591.591 0 00.06.03l.1-.008zm2.254-9.138a.41.41 0 01.037.109c-.018-.073-.018-.181-.037-.11zm-30.8-17.291v-.008a.023.023 0 00.004.008zm.017 2.927s.002.003.002 0zm30.468 11.949a.923.923 0 00-.013-.128.984.984 0 00.017.128zm.35 2.53a.034.034 0 000-.007zM6.453 11.167l.048.053v-.081a.375.375 0 01-.011-.062.915.915 0 00-.034.09zm30.979-1.665c-.007.013-.012.013-.018.022v.02a.124.124 0 01.021-.042zm-8.138-2.911c.739.175-.152-.131.616-.108l-.586-.044c.105.058.239.137-.032.151zm2.434-.022c-.315.027 0 .085-.013.118.202-.051.25-.068.015-.119zm5.564 7.057l-.138-.032c.023.242.056.002.138.031zm-.29 3.889l.05.405-.03-.3zm-1.41 19.721l.074.171c.16-.027.194-.219-.074-.171zm-10.062.117a4.2 4.2 0 00.537.056.588.588 0 00-.54-.052zm-18.8-8.281l.057.192-.047-.361zm-6.467.154a.672.672 0 00-.021.148zm2.651 13.7c-.1-.055-.152-.065-.165-.054.092.047.173.082.159.055zm2.394.995l-.151-.036a.286.286 0 00.145.037zM.241 29.376l-.056.38c.052.028.037-.193.05-.378zm-.145-6.272v-.116a.59.59 0 00-.073-.1zm.185-4.625a.384.384 0 01-.1-.237.165.165 0 00-.108.049c-.017.11.135.145.201.19zm.055-7.821l-.014-.094a.355.355 0 00.008.096zm-.014-.094c0-.016 0-.03-.007-.042zM.009 26.592c.019 0 .037-.017.055-.044a.113.113 0 00-.062.047zM.455 4.818l.02-.076a.311.311 0 00-.074-.045zm9.371 39.365h-.02c-.123.017-.057.014.013.003zm34.061-10.495c-.136.462-.174-.753-.326-.057.053-.061.231.637.319.06zm-23.819 10.4a.291.291 0 00-.1-.067c-.008.015.016.035.093.067zm-7.631-.211l.189.02a1.243 1.243 0 00-.196-.021zm11.675.006a.552.552 0 00.195 0 .2.2 0 00-.042-.019.318.318 0 01-.16.018zm0 0c-.024 0-.05-.009-.083-.012a.673.673 0 00.076.011zm4.041-.016a.818.818 0 00-.076-.031l-.131.008zm-15.487-.055a.647.647 0 01.141-.037c-.099.018-.239.015-.147.037zm.149-.039zM24.742.173h-.011zm-.013 43.59l.009-.011c-.011.006-.015.01-.015.014zM28.515.156s-.003.004-.007.003zM9.556 44.122a1.494 1.494 0 00-.164.013.62.62 0 00.157-.01zm-1.279-.906a1.351 1.351 0 01.568-.293l.233-.064.207.049h.19c.077 0 .153-.005.225-.005a1.477 1.477 0 01.8.2 2.627 2.627 0 01.549-.051h.112q.083-.026.176-.048l.169-.04.181.025a1.992 1.992 0 01.882-.188c.071 0 .149-.008.232-.015l.67-.053.07.158.036.007a2.269 2.269 0 00.383.053.442.442 0 00.081-.007l.2-.038.2.046c.036.008.07.018.1.028v-.022l.119-.035.071-.021a.74.74 0 00-.171.083 1.252 1.252 0 01.224.1v-.007l.459-.117.079-.151h-.016.02a2.081 2.081 0 00.256-.029 3.794 3.794 0 01.573-.053 2.2 2.2 0 01.518.059l.765.182-.005.108.105-.013c.228-.028.478-.059.759-.073a1.625 1.625 0 01.66-.115c.074 0 .154 0 .236.005h.193a.792.792 0 00.109 0l.793-.118.036-.08.169.05.475-.071-.058.193.572.168h.022a1.29 1.29 0 00.466-.092c.109-.036.236-.077.388-.112l.017-.286.52.214h.287l.026.128.222.092.078-.012a3.7 3.7 0 01.565-.059 1.529 1.529 0 01.627-.123h.06l.26.007.189.119.082-.2a3 3 0 00.846.089c.153 0 .31 0 .463-.007s.329-.007.486-.007a4.377 4.377 0 011.11.112c.671-.038 1.3-.064 1.753-.071h.188a1.689 1.689 0 01.781-.171 3.061 3.061 0 01.387.027l.116.015.108.043a1.562 1.562 0 01.143.064l.778-.012-.151.138a2.159 2.159 0 01.607.1c.092-.01.2-.026.311-.043a6.437 6.437 0 01.972-.091h.147a13.037 13.037 0 011.913-.228l.089-.006a2.22 2.22 0 01.367-.052l.2-.013.188.069c.038.013.086.025.136.038a2.73 2.73 0 01.591.21h.227l.214.014a1.359 1.359 0 00.216-.077l.03-.014c.134-.061.281-.127.474-.195l.137-.051.024-.02a2.3 2.3 0 01.23-.166 1.561 1.561 0 01.24-.137 1.435 1.435 0 01.4-.116l.4-.42.3.125.054-.053.231-.27.085-.1.053-.074.134-.184.069-.092c.018-.024.036-.046.049-.065l.072.027.092-.165c.126-.226.256-.459.389-.717l.578-1.131.068.065.1-.355a3.391 3.391 0 01.186-.6c-.023-.6-.019-1.148.014-1.728l.02-.36c.014-.255.029-.514.038-.778l-.255.067-.047-.75h-.226l.2-1a1.211 1.211 0 01.039-.2l.2-1.029.034-.084q.018-.046.04-.088a2.594 2.594 0 01.085-1.372.822.822 0 00.021-.508l.074-.018c-.007-.136-.011-.286-.017-.449a6.913 6.913 0 00-.125-1.384l-.2-.39.167-.405a1.525 1.525 0 01.079-.161c-.013-.359-.046-.74-.078-1.113a9.682 9.682 0 01-.03-2.245 1.636 1.636 0 01.029-.7 2.818 2.818 0 01-.025-.862l.1-.009a6.027 6.027 0 00-.136-1.237 9.1 9.1 0 01-.16-1.2l-.053-1h.354q.027-.23.055-.569l.031-.386a18.217 18.217 0 00-.15-1.821c-.051-.431-.1-.877-.138-1.372l-.013-.18.055-.172a10.029 10.029 0 00.131-1.964c.006-.479.013-.969.042-1.429a1.633 1.633 0 01-.168-.582l-.012-.122.014-.093c0-.041-.013-.122-.021-.178a1.339 1.339 0 01.183-1.058l-.5-.141.3-.932a3.1 3.1 0 00.113-.826v-.565c-.007-.18-.012-.335-.032-.516l-.041-.425-.018-.1a15.66 15.66 0 01-.077-.492l-.007-.051a4.333 4.333 0 01-.094-.782l-.036-.075-.044-.1-.05-.089-.064-.114a1.979 1.979 0 00-.123-.2l-.9-1.025.345-.131a3.847 3.847 0 00-.85-.76l.015-.035h-.055a3.318 3.318 0 01-.409-.025l-.079-.013a2.1 2.1 0 01-.558-.154l-.418-.187-.063-.245a5.585 5.585 0 00-1.033-.281l-.228-.037a.527.527 0 00-.076-.009h-.026a6.512 6.512 0 00-.381-.012h-.045a2.313 2.313 0 00-.254.017 4.036 4.036 0 00-.31.047l-1.913.379L35.786 0l-1.237.6a.792.792 0 00.5.318h-.036a9.527 9.527 0 00-1.1.134l-2.085.33.092-.157h-.067a2.946 2.946 0 01-.371-.025l-.079-.01-.116.044-.086.015a2.387 2.387 0 01-.412.033 3.324 3.324 0 01-.869-.1 2.164 2.164 0 01-.556.074 2.089 2.089 0 01-.25-.015l-.371-.045-.049-.059c-.1.008-.2.021-.3.034a4.8 4.8 0 01-.619.05 2.625 2.625 0 01-.611-.07l-.513-.121c-.066 0-.13-.008-.192-.015l-.161-.018-.027-.013-.042.009-.1-.013.01.058a2.413 2.413 0 01-.8.146h-.087c-.065.038-.13.075-.188.1l-.439.223-.435-.231a3.91 3.91 0 00-.558-.183 5.63 5.63 0 01-.465-.144c-.178.013-.359.023-.538.033a6.128 6.128 0 00-1.5.187l-.14.071-.155.023a1.589 1.589 0 01-.225.017 1.254 1.254 0 01-.6-.146 8.44 8.44 0 00-.29.02l-.142.233-.619-.087a1.425 1.425 0 01-.676-.254 3.543 3.543 0 00-.415-.024 7.626 7.626 0 00-1.214.131c-.163.026-.327.053-.5.076l.177.218-2.213-.183c-.417-.035-.88-.051-1.418-.051-.5 0-1.009.014-1.506.027s-1.036.028-1.557.028a16.656 16.656 0 01-2.189-.123 1.883 1.883 0 00-.168-.009.415.415 0 00-.2.043c-.081.03-.193.07-.336.107l-.59.153-.116-.143-.067.022-.057.012a5.188 5.188 0 01-1.031.082h-.246l-1.072.5a3.488 3.488 0 00-.514.34l-.021.016-.092.069c-.063.048-.127.1-.2.144a1.238 1.238 0 01-.388.328 4.442 4.442 0 00-.248.451l-.041.086-.058.076a2.189 2.189 0 01-.281.318l-.173.667.089.078-.19.515v6.9l-.214-.238c0 .013 0 .026.006.04a2.459 2.459 0 01.036.631l.171.174v1.2l-.113.147v.032l.155.339-.1.337a2.957 2.957 0 00-.02.53c0 .141.005.3-.006.467.016.064.031.132.042.206l.1.651-.157.088a2.043 2.043 0 01-.049.777l-.1.375a6.121 6.121 0 01-.035.21l-.021.121a1.576 1.576 0 01.089.386 6.3 6.3 0 01.021.65c0 .231 0 .471.02.672l.189 1.949-.336-.217c0 .031 0 .062-.008.092a3.659 3.659 0 01.127.968c0 .114.009.228.018.332l.105 1.2-.159-.025.038.484.2.107v2.237l-.143-.042-.005.126-.124-.006a1.907 1.907 0 01-.023.262v.687a1.309 1.309 0 01-.089.478c0 .082.01.172.014.275s.01.223.018.311h.117a1.09 1.09 0 01.02.118 8.55 8.55 0 01.018 1.939 9.1 9.1 0 00-.032 1.2l.072 1.043h-.064a3.069 3.069 0 00.059.515l.033.122v.127a1.587 1.587 0 01-.124.614 3.708 3.708 0 01-.034 1.007h-.117a1.338 1.338 0 00.047.542l-.92.386.91.078a8.624 8.624 0 010 .95l-.063 1.526c.014.023.026.046.039.07l.013.026.011.026q.053.12.1.236l.169.144.087.215a4.059 4.059 0 01.146.455l.014.05c.049.155.088.3.12.427.057.2.092.29.1.319a.75.75 0 00.108.142l.049.025.109.056c.087.044.188.1.306.169a1.822 1.822 0 01.867.284l.024.014.023.016a1.836 1.836 0 01.734.82 2.678 2.678 0 00.421.153l.037.011c.073.024.163.045.267.069l.067.016a1.019 1.019 0 01.216-.023 1.1 1.1 0 01.185.016h.027l.042.009c.1.022.189.043.243.052h.036a1.946 1.946 0 01.75-.123h.118l.115.028a1.462 1.462 0 01.334.124l.045-.005.121.018a1.483 1.483 0 01.558.187c.234.02.441.056.619.087zm29.2-4.887h-.062l-.009.211h-.031a2.1 2.1 0 01-.4-.043l-.058-.011c-.046-.008-.089-.018-.136-.023h-.537c-.129 0-.258.007-.382.007a3.157 3.157 0 01-.914-.109c-.228.016-.455.03-.664.041a7.5 7.5 0 01-3.178.59c-.244 0-.51-.006-.813-.019-.961-.04-1.916-.146-2.838-.248a73.28 73.28 0 00-1.443-.151 1.256 1.256 0 01-.189.014 1.225 1.225 0 01-.318-.042l-.61.233-.168-.288-.184-.006c-.283.05-.518.083-.717.1l-.022-.071a4.7 4.7 0 01-.827.069l-1.221-.008.017-.071-1.308.039-1.173.036c-1.352.042-2.75.085-4.135.085a36.653 36.653 0 01-6.794-.536 9.974 9.974 0 00-.282.064 5.94 5.94 0 01-.988.169l-1.022.071.006-.718a1.175 1.175 0 01-.165-.3 1.038 1.038 0 01-.056-.466 2.748 2.748 0 01-.522-1.5c-.223-5.6-.1-11.289.028-16.787l.057-2.624v-.007a2.312 2.312 0 01.021-.966v-.192a1.653 1.653 0 01-.018-.6l.032-.205.008-.439a2.214 2.214 0 01.011-.71q.01-.651.017-1.3a1.63 1.63 0 01-.014-.168l-.053-.076-.348-.53.358-.523a.95.95 0 00.069-.151q.005-.692.005-1.384a2.716 2.716 0 01.037-.445.11.11 0 01-.006-.017l-.1-.159-.035-.187a1.185 1.185 0 01.1-.757l-.332-.354.306-.594a1.034 1.034 0 01.923-.585h.029l.046-.018.354-.578.1.4.78-.306-.057.514.158-.033c.193-.04.409-.083.645-.112a2.233 2.233 0 011.28-.419 2.1 2.1 0 01.251.015 51.657 51.657 0 006.2.338 2.2 2.2 0 01.331-.025 2.421 2.421 0 01.331.023c1.459-.011 2.931-.06 4.231-.111l.028-.1h2.281c2.1-.089 4.152-.169 6.194-.169a51.057 51.057 0 017.3.459c.06.009.119.02.179.034a1.044 1.044 0 01.214-.1l.75-.254.383.693a1.63 1.63 0 01.18.716l.015.282a2.915 2.915 0 01.283 1.079 72.438 72.438 0 01-.481 11.968 2.037 2.037 0 01.079.361l.012.088v.088a1.585 1.585 0 01-.233.783l-.091.774.236-.286-.147 1.053a1.915 1.915 0 01.064.429l.008.165-.048.159a1.381 1.381 0 01-.109.26l-.018.094a1.484 1.484 0 01-.1.318l-.077.549a1.394 1.394 0 01.168.335l.1.294-.069.225v.073a1.613 1.613 0 01-.168.891 2.211 2.211 0 01.025.364v.005c.012.032.023.065.033.1l.064.214-.016.093a1.8 1.8 0 01.169.727c0 .052.007.109.014.17l.077.75-.221.075a.747.747 0 00-.019.1l.058.236-.056.183.019.049-.02-.044-.019.062a1.266 1.266 0 01-.077.195l.138.421-.1.016.161.107a.364.364 0 00.042-.166c0 .022.014.087.022.133a2.008 2.008 0 01-.016 1.025l-.215.7h-.021c.016.109.031.226.041.351a1.688 1.688 0 01.115.816c0 .052-.005.128 0 .161l.089.465.2.071-.125.329.106.554-.29-.068-.118.311a.781.781 0 00.063.178c.027.065.059.141.089.227l.492.023-.368.692v.159l-.049.865a1.092 1.092 0 01-.011.2l-.114 2.017zM24.994.148a.66.66 0 01-.08.011c.04.013.078.025.116.034l.069-.048zM.266 29.227a.168.168 0 01.021-.054c-.007.017-.012.017-.019.028zM.234 15.213l.044-.756c-.059.132-.138.306-.152-.038-.185.955.122-.194.098.796zm-.085 2.343c-.027-.406-.085 0-.119-.017.044.26.062.322.109.02zm0 16.932l-.138-.041c.008.315.043.005.127.043zM.02 39.669c.078.172.149.343.233.513-.062-.126-.111-.253-.167-.38zM27.42 44l-.095-.17c-.218.032-.263.223.088.171zm13.075-.786c-.279.11-.572.172-.709.229a.945.945 0 00.706-.227zm3.446-35.622l-.009.219.057.247zm21.918 23.657a.122.122 0 00-.021.056zm-2.283 1.446c.034.024.059.021.07.01-.043-.014-.074-.026-.077-.009zm-.566-.751c.011.017.022.03.033.045-.012-.025-.022-.046-.041-.044zm2.829-.639l-.057.144c.051.012.036-.072.049-.142zm-.146-2.374v-.044a.517.517 0 00-.073-.036zm.185-1.751a.152.152 0 01-.1-.09.338.338 0 00-.107.019c-.02.042.132.057.199.072zm.056-2.961l-.021-.051a.094.094 0 00.013.052zm-.273 6.016a.155.155 0 00-.054.017.106.106 0 00.046-.016zm.389-8.222l-.008-.029a.783.783 0 00-.085-.006zm-4.184 8.682v.007c.04.018.019.003-.008-.005zM53.31 20.638c-.1 0-.088-.07-.081-.14s.009-.137-.13-.108c.045.034.005.315.203.246zm5.552 7.665a.122.122 0 00.014-.076.183.183 0 00-.022.078zm2.055 1.978l-.041-.062a.191.191 0 00.033.064zm-3.328-2.908a.22.22 0 00.016.03.123.123 0 00-.023-.028zm-.055-.048a.07.07 0 000 .025.057.057 0 01.055.023.085.085 0 00-.063-.046zm-1.105-.947a.3.3 0 000 .042l.042.026zm8.416-16.024a.074.074 0 01-.016 0 .021.021 0 00.007.002zM61.907 30.81a.24.24 0 00.053.029.25.25 0 00-.062-.027zm3.778-18.832l-.048-.025v.038a.111.111 0 01.011.03.41.41 0 00.028-.041zm.2 19.25a.11.11 0 01-.018.011v.01a.066.066 0 01.006-.019zm-.054-5.285l.044-.286c-.059.05-.138.116-.152-.014-.186.362.121-.073.097.302zm-.085.887c-.027-.154-.085 0-.119-.006.042.099.056.123.108.012zm-.129 6.28l-.126-.057c-.025.094.038.022.114.059zm-.876.269a.53.53 0 00.093.03.124.124 0 00.033 0c-.016 0-.038-.007-.058-.011a.279.279 0 01-.08-.017zm-8.01-6.92l-.085.152c.068.032.206-.101.073-.15zm-3.711-3.123a.676.676 0 01.057.126c.019.039.037.071.061.08a.188.188 0 00-.011-.138.107.107 0 00-.119-.068zm7.653-8.974l.1-.152-.068.047zm11.211 4.716a.255.255 0 00.021-.089zm.12-8.588c0 .07.022.093.039.1-.024-.054-.035-.112-.051-.097zm-.19-1.559c0 .032.008.058.012.087-.006-.034-.006-.068-.024-.082zm.092 10.058l.056-.227c-.07-.013-.055.12-.07.23zm.145 3.746v.069a.45.45 0 00.073.057zm-.184 2.762a.206.206 0 01.1.142.23.23 0 00.108-.029c-.002-.063-.154-.086-.22-.11zm-.056 4.671l.021.081c-.019-.019-.024-.054-.033-.079zm.272-9.49a.123.123 0 00.055-.026.084.084 0 00-.066.028zm-.391 12.978v.047a.531.531 0 00.081.03zM70.665 6.289l.006.012c.049.055.021.021-.017-.009zm-20.8 8.253c.3-.082-.221.429.191.266-.084-.016.11-.426-.206-.263zm14.84-10.9a.2.2 0 00.072.062c-.018-.012-.034-.03-.085-.058zm4.552 1.659c-.027-.03-.053-.063-.082-.091a.648.648 0 00.067.095zm-7.033-.846a.224.224 0 00-.111.052.117.117 0 00.032.005.134.134 0 01.063-.053zm0 0l.054-.012a.285.285 0 00-.07.016zm-2.1 1.411a.41.41 0 00.054-.007l.054-.057zm8.979-.6a.3.3 0 01-.079-.017c.038.023.094.064.068.017zm1.7 1.285a.733.733 0 00-.07-.075.578.578 0 00.053.075zm-1.789-1.306h.011zm-1.915 33.5l.039-.02.04-.016a1.976 1.976 0 00.2-.107l.158-.089.112-.061c.1-.054.193-.1.264-.153l.028-.018a8.67 8.67 0 01.464-.271c.119-.077.24-.149.362-.217.015-.047.033-.1.057-.159l.331-.81.2.065a1.866 1.866 0 01.229-.235l.564-.821c.02-.037.06-.131.085-.188a3.032 3.032 0 01.139-.3 1.059 1.059 0 01.161-.353l.016-.173.014-.172.074-.156c.022-.046.045-.09.069-.131v-.088l-.164-.081.162-.664v-5.246l-.139-.182.217-.45v-.319l-.019-.065-.225-.857.257-.086a1.305 1.305 0 01.1-.359l.065-.142a1.3 1.3 0 01-.038-.156 2.706 2.706 0 01-.031-.5 2.416 2.416 0 00-.011-.3l-.266-1.629.305.117c-.01-.081-.015-.153-.019-.211s-.007-.1-.014-.153l-.113-.769-.075-.024v-2.059l.167.029.006-.089h.122v-.19a1.128 1.128 0 01.035-.269l-.056-.149a.986.986 0 01-.042-.145 3.676 3.676 0 01-.029-1.363 2.86 2.86 0 00.031-.58l-.124-1.076h.021v-.073a1.2 1.2 0 01.106-.483 2.158 2.158 0 01.066-.617l.091-.4h-.021a3.739 3.739 0 010-.684l.067-.962-.158-.182.028-.393a2.28 2.28 0 01.242-.814 2.008 2.008 0 01-.039-.08 1.338 1.338 0 01-.4-.787l-.021-.12.011-.121a1.52 1.52 0 01.245-.722l-.037-.124a.991.991 0 01-.2-.381l-.013-.048a1.516 1.516 0 01-.308-.452l-.085-.181v-.2a1.311 1.311 0 01.018-.242 1.325 1.325 0 01-.023-.363l-.038-.089a1.358 1.358 0 01-.231-.125l-.294-.2-.059-.218a1.515 1.515 0 01-.337-.652 1.62 1.62 0 01-.088-.081l-.017-.007-.261-.118-.009-.013a1.551 1.551 0 01-.456-.216c-.042-.026-.078-.05-.111-.067l-.744-.385.06-.159h-.014l-.235-.268h-.176l.036-.19h-.054c-.032 0-.074 0-.127.007l.006-.1-.267.124a.57.57 0 00.332.256l-.046-.007h-.029l-.057-.008a1.585 1.585 0 01-.843-.333l-.3-.245h-.121a1.262 1.262 0 01-.458.081c-.091 0-.174-.008-.241-.014l-.056-.005-.124.033c-.711.652-1.4 1.347-2.077 2.023l-.175.176a46.122 46.122 0 01-4.809 4.281 63.462 63.462 0 01-6.111 4.008l-.346.3c-.7.607-1.422 1.215-2.12 1.8s-1.4 1.178-2.09 1.777a3.063 3.063 0 01-.149.306 1.209 1.209 0 01-.142.4 1.6 1.6 0 01-.135.563l-.084.187c0 .028.006.058.011.088.011.081.025.162.04.241a41.459 41.459 0 002.232 3.995c.288.3.622.653.966 1a33.318 33.318 0 003.686 3.085c.861.654 1.752 1.331 2.59 2.055 1.189 1.026 2.3 2.154 3.368 3.246a72.65 72.65 0 002.3 2.276c.887.831 1.8 1.637 2.729 2.4l.826.04h.105a3.2 3.2 0 001.43-.376zm-2.405-4.031l-.389.041-.01-.086-.418-.429a1.247 1.247 0 01-.217-.307h-.023a1.175 1.175 0 01-.238-.024l-.253.125-.073-.24-.137-.066-.122-.133a1.117 1.117 0 01-.083-.1l-.021.117-.548-.839a1.345 1.345 0 01-.135-.084l-.266-.186-.1-.31a1.087 1.087 0 01-.03-.124l-.5-.044-.115-.375a1.134 1.134 0 01-.219-.293l-.2-.033-.02-.035a1.411 1.411 0 01-.31-.156l-.036-.022-.861-.48.107-.175a1.176 1.176 0 01-.73-.764l-.019-.062a1.1 1.1 0 01-.272-.154l-.608.5-.16-.815-.728.8-.039-1.679-.1-.105a1.12 1.12 0 01-.2-.16l-.345-.35.013-.073-.086-.094a.433.433 0 00.095.218c-.019-.018-.077-.064-.116-.095a1.953 1.953 0 01-.537-.574c-.074-.05-.152-.1-.229-.161a1.139 1.139 0 01-.85-.585l-.1-.179-.375-.3.14-.069-.056-.037a3.146 3.146 0 01-.659-.306 1.232 1.232 0 01-.255-.12l-.411-.254v-.018l-1.263-.741.16-.051-.642-.108.492-.69a1.067 1.067 0 01-.061-.093l-1.175-1.973 1.156.3h.032q.013-.04.031-.082a1.257 1.257 0 01.108-.213l.019-.076a1.432 1.432 0 01.184-.419l-.2-.158.148-.219-.615-.61 1.532-.371a.946.946 0 01.19-.046l.223-.054a1.184 1.184 0 01.678-.307l.032-.034-.081-.944.843.093a2.4 2.4 0 01.73-.715 1.045 1.045 0 01.2-.156 1.12 1.12 0 01.375-.291 2.132 2.132 0 01.342-.568l.716-.828.317.367c.038-.056.078-.12.124-.2a5.27 5.27 0 01.354-.521l.277-.349.343-.007c.075-.049.2-.147.281-.216l.2-.16a1.113 1.113 0 01.127-.256l.116-.172-.564-.81 1.684-.022c.045-.045.1-.116.149-.167a2.189 2.189 0 01.625-.55l.485-1.522.414.518a1.113 1.113 0 01.178-.216l.546-.518.226.149.187-.195.618-1.586.3.509.561-1.32.506.877.059.006h.084a1.066 1.066 0 01.939.584l.046.048.165.123-.038.053a1.066 1.066 0 01.119.3l.022.1a1.114 1.114 0 01.114.917l.008.019.962.71-1.042.742-.018.021.006.033.11.082.1.257a1.049 1.049 0 01.051.183l.366.084-.378 1.012a1.168 1.168 0 01-.06.137l.012.125.39-.119-.277 1.266.047.477-.129-.094a3.841 3.841 0 00.005.809 4.923 4.923 0 01-.037 1.372l.122.178.217-.11-.047.357.388.565-.482.148-.089.67v.05a2.144 2.144 0 01.005.289 1.018 1.018 0 010 .241l.086.227.146.021v3.232l1.046 2.492-.983-.651.272.657-.519.11-.034.065a1.877 1.877 0 01.025.315v.077l.387 1.5-.341-.083v.02l.142.029v.583l.083.357h-.083v.443l.023.113-.023-.007v.5l-.2-.022-.007.062h-.036a2.111 2.111 0 01.029 1.111c-.011.062-.026.145-.029.183l.178 1.135-.228-.012a1.055 1.055 0 01-.241.352 1.41 1.41 0 01-.341.416l-1.426 1.236zm-2.77-29.986v.013a.019.019 0 00-.016-.005zm-2.443 32.894a.255.255 0 01.043.022.642.642 0 00-.03-.071l-.062.01zm12.4-18.529v-.015a.086.086 0 01-.021.032c-.002-.007.003-.007.01-.014zm.035 8.354l-.044.451c.059-.079.138-.182.152.023.168-.566-.143.115-.119-.471zm.085-1.4c.027.242.085 0 .119.01-.065-.15-.079-.188-.128-.007zm0-10.111l.139.024c-.031-.183-.065.002-.148-.024zm.24-3.3l.03.23.02.081zM60.373 5.48l.155.094c.074-.109-.023-.278-.165-.096zm-5.437 4.938a.364.364 0 00-.349.228c.122-.1.29-.158.339-.229zm-6.172 18.239l.239.15-.091-.094z" data-name="Path 4635" fill="#fff"/></svg>', "chevron-down": '<svg xmlns="http://www.w3.org/2000/svg" width="30.727" height="30.727" viewBox="0 0 30.727 30.727"><path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/></svg>', "chevron-left": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.002 24.001"><g data-name="-e-arrow right copy 2"><g data-name="-e-arrow right copy 2"><g data-name="Group 14"><path d="M.259 11.448L12.27.241a.852.852 0 011.185 0l1.29 1.2a.757.757 0 01.257.553.8.8 0 01-.257.553L4.616 11.998l10.129 9.451a.722.722 0 010 1.106l-1.29 1.2a.852.852 0 01-1.185 0L.259 12.548a.722.722 0 010-1.106z" data-name="Path 36" fill="#b7b7b7"/></g></g><path d="M12.271 23.76L.259 12.552a.72.72 0 010-1.1L12.271.244a.852.852 0 011.184 0l1.29 1.2a.758.758 0 01.257.556.8.8 0 01-.256.553L4.615 12l10.13 9.451a.724.724 0 010 1.1l-1.29 1.2a.848.848 0 01-1.184 0z" data-name="Color Overlay" fill="#fff" opacity=".98"/></g></svg>', "chevron-right": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.001 24.001"><g data-name="-e-arrow right copy"><g data-name="-e-arrow right copy"><g data-name="Group 12"><path d="M14.744 12.553L2.733 23.76a.852.852 0 01-1.185 0l-1.29-1.2a.757.757 0 01-.257-.553.8.8 0 01.257-.553l10.129-9.451L.258 2.552a.722.722 0 010-1.106l1.29-1.2a.852.852 0 011.185 0l12.011 11.207a.722.722 0 010 1.106z" data-name="Path 34" fill="#b7b7b7"/></g></g><path d="M1.548 23.761l-1.29-1.2A.76.76 0 01.001 22a.8.8 0 01.257-.553l10.129-9.452L.258 2.544a.722.722 0 010-1.105l1.29-1.2a.849.849 0 011.184 0l12.012 11.208a.722.722 0 010 1.105L2.732 23.76a.852.852 0 01-1.184 0z" data-name="Color Overlay" fill="#fff" opacity=".98"/></g></svg>', close: '<svg width="52" height="50" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg" data-svg="close"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>', "down-arrow-roughness": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 61"><g data-name="Group 713"><path d="M-1034.143 4448.351a1.984 1.984 0 0 0-.227-.3c-.682-.515-1.376-1.013-2.039-1.553a21.263 21.263 0 0 1-1.693-1.538 44.354 44.354 0 0 1-1.887-2.058 1.174 1.174 0 0 0-.85-.482c-.165-.009-.272-.007-.361.166a.344.344 0 0 1-.621.023c-.037-.052-.07-.106-.13-.2a2.081 2.081 0 0 0 .166 1.162 1.387 1.387 0 0 1-.229-.073c-.153-.086-.3-.185-.453-.272a.4.4 0 0 0-.5.105.3.3 0 0 0-.023.387 5.043 5.043 0 0 0 .391.662 15.172 15.172 0 0 0 2.965 2.965c.125.1.226.225.342.333.2.188.409.372.613.558l-.025.074h-1.093l.142.16c-.281.028-.542.063-.8.079a6.1 6.1 0 0 1-1.283.042 8.486 8.486 0 0 0-2.051-.026 2.466 2.466 0 0 0-.481.14 1.1 1.1 0 0 1-.289.078c-.43 0-.861-.032-1.29-.022-.708.018-1.415.059-2.122.087-.31.014-.62.029-.93.032a.885.885 0 0 1-.253-.063c-.05-.016-.1-.058-.147-.059-.065 0-.131.039-.2.037-.66-.017-1.319-.043-1.979-.056a14.4 14.4 0 0 1-2.641-.154c-.078-.016-.171.053-.259.08a3.69 3.69 0 0 1-.648.187 5.478 5.478 0 0 1-.7-.033c-.348-.007-.7 0-1.045 0-1.308-.02-2.616-.045-3.923-.064a1.121 1.121 0 0 0-.3.045 2.1 2.1 0 0 1-.423.132 24.459 24.459 0 0 0-2.783.132c-.536.09-1.089.073-1.633.109-.076 0-.156 0-.235.006a4.552 4.552 0 0 1-.153.429 3.682 3.682 0 0 0-.025.469c.065.008.131.017.2.028a.5.5 0 0 1 .328.229.492.492 0 0 0 .479.338c.411.007.822.011 1.234.014a.3.3 0 0 1 .3.164.654.654 0 0 0 .531.3c-.033-.04-.065-.075-.093-.114-.138-.19-.1-.292.125-.323a1.048 1.048 0 0 1 .141-.008c.661 0 1.321 0 1.981.011 2.386.05 4.773.106 7.159.157.213 0 .427-.018.641-.028v-.07c-.11-.01-.219-.024-.329-.028-.343-.015-.687-.019-1.03-.042-.073 0-.142-.068-.213-.1l.021-.081c.13-.018.26-.041.39-.052a11.633 11.633 0 0 0 1.761-.146 5.453 5.453 0 0 1 1.506.041c.234.015.465.073.7.11v.066a15.733 15.733 0 0 1-2.492.286c.192.033.385.04.577.057a18.217 18.217 0 0 1 2.11-.057.138.138 0 0 0 .059-.011l.716-.157a.442.442 0 0 1 .319-.317.338.338 0 0 1-.015-.132c0-.053-.1-.123-.17-.165a1.188 1.188 0 0 0-.224-.086l.019-.071 1.154.169-.05.216a11.37 11.37 0 0 1 1.264.028h.218a.617.617 0 0 1 .185.033l.42.035a.454.454 0 0 0 .048-.118.183.183 0 0 1 .23-.16q1.36.1 2.721.188v.086l-.505.042a.535.535 0 0 1 .13.138l3.589-.185c-.072.1-.108.154-.153.2q-.553.587-1.11 1.17c-.612.643-1.235 1.273-1.831 1.931a8.428 8.428 0 0 0-.668.92.545.545 0 0 0-.034.222c-.018.155-.027.312-.056.463s-.076.29-.115.435h.283a2.96 2.96 0 0 0 .36-.181 1.922 1.922 0 0 1 1.076-.518.511.511 0 0 0 .244-.092c.383-.233.758-.482 1.146-.7a2.779 2.779 0 0 1 .518-.192 1.27 1.27 0 0 0 .266-.072c.172-.107.326-.243.5-.354.864-.566 1.732-1.126 2.6-1.695.276-.182.539-.382.807-.576.1-.074.2-.148.319-.088a8.5 8.5 0 0 1 .651-.594 11.357 11.357 0 0 1 1.181-1.4l.014-.013a2.5 2.5 0 0 0 .1-.477.628.628 0 0 0-.128-.4zm-7.087-4.387a.808.808 0 0 1 .542.449.837.837 0 0 1-.542-.449zm-16.252 6.556v-.037h.722v.037zm1.1-.021c.288-.067.6-.155.91-.207a4.044 4.044 0 0 1 .616-.006 3.053 3.053 0 0 1-1.527.214zm5.982-.133a2.142 2.142 0 0 1-1.053-.258 4.938 4.938 0 0 1 1.751.035.751.751 0 0 1-.698.223zm6.809-.321l-2.446-.15v-.076a12 12 0 0 1 2.446.153c.002.028 0 .049-.001.073zm4.765-1.218v.061h-.515v-.061zm-1.91 3.333a2.828 2.828 0 0 1 .26-.326c.35-.328.708-.645 1.063-.967a.269.269 0 0 0 .053-.063c.048-.082.091-.166.14-.247.009-.015.034-.022.054-.026.17-.038.34-.074.537-.116a9.119 9.119 0 0 1-2.109 1.745zm3.746-3.847c.009-.129.079-.156.176-.085a.546.546 0 0 1 .194.476.485.485 0 0 1-.372-.391z" class="cls-2" data-name="Path 4569" transform="rotate(90.97 1661.521 2772.469)"/></g></svg>', "menu-back": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"/></svg>', menu: '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 37"><path d="M6.04 10.58h34.2v2.69H6.04zm0 7.09h28.2v2.69H6.04zm0 6.35h20.2v2.69H6.04z" fill="#3b8a80"/></svg>', phone: '<svg xmlns="http://www.w3.org/2000/svg" width="40.898" height="44.421" viewBox="0 0 40.898 44.421"><g data-name="Group 323" transform="translate(0 1)"><g data-name="Group 108"><path d="M40.898 34.822a9.568 9.568 0 01-.293 2.048 11.274 11.274 0 01-.609 1.988q-.612 1.456-3.545 3.08a11.253 11.253 0 01-5.4 1.482 11.079 11.079 0 01-1.524-.1 12.9 12.9 0 01-1.671-.364c-.621-.175-1.083-.315-1.381-.418s-.837-.306-1.611-.6-1.246-.462-1.425-.52a26.27 26.27 0 01-5.081-2.415 42.955 42.955 0 01-7.683-6.258 43.082 43.082 0 01-6.26-7.682 26.442 26.442 0 01-2.413-5.084c-.057-.175-.23-.648-.522-1.422s-.487-1.31-.6-1.614-.243-.758-.419-1.378a12.557 12.557 0 01-.363-1.671 11.137 11.137 0 01-.1-1.523 11.278 11.278 0 011.479-5.4q1.629-2.933 3.082-3.544a11.044 11.044 0 011.989-.613 9.688 9.688 0 012.045-.29 1.632 1.632 0 01.61.088q.526.172 1.54 2.21.32.55.872 1.564t1.017 1.849c.309.552.61 1.069.9 1.551q.09.119.509.73a8.123 8.123 0 01.629 1.028 1.959 1.959 0 01.2.829 2.42 2.42 0 01-.831 1.452 14.327 14.327 0 01-1.8 1.6 18.032 18.032 0 00-1.8 1.537 2.233 2.233 0 00-.826 1.34 1.952 1.952 0 00.145.654c.1.26.181.457.249.593s.2.369.405.7.317.511.334.552a28.825 28.825 0 0011.88 11.881c.041.016.225.129.552.331s.56.339.7.407a5.888 5.888 0 00.594.246 1.963 1.963 0 00.654.148 2.223 2.223 0 001.337-.829 17.767 17.767 0 001.54-1.8 14.513 14.513 0 011.6-1.8 2.411 2.411 0 011.452-.829 1.944 1.944 0 01.826.2 8.256 8.256 0 011.031.626c.407.282.651.451.727.509.482.287 1 .591 1.554.9s1.165.648 1.846 1.015 1.2.662 1.567.875q2.031 1.017 2.21 1.537a1.643 1.643 0 01.082.604z" data-name="Path 22"/></g><circle cx="5.758" cy="5.758" data-name="Ellipse 22" transform="translate(25.316)" fill="none" stroke="#bcc3c2" stroke-miterlimit="10" stroke-width="2" r="5.758"/></g></svg>', "play-button": '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 151"><circle cx="75.5" cy="75.5" r="75.5" fill="#fff" opacity=".6"/><path d="M88.61 81L72.39 91.56A4.14 4.14 0 0 1 66 88.09V67a4.13 4.13 0 0 1 6.39-3.46l16.22 10.54a4.14 4.14 0 0 1 0 6.92z" fill="#30b298"/></svg>', plus: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="2" height="17"/><rect x="1" y="9" width="17" height="2"/></svg>', "polhawn-icon": '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43"><defs><style>.polhawn3{fill:#fff}</style><linearGradient id="linear-gradient" x1="21.47" y1="1.5" x2="21.47" y2="43.45" gradientTransform="matrix(1 0 0 -1 0 44)" gradientUnits="userSpaceOnUse"><stop offset=".01" stop-color="#009dd2"/><stop offset=".63" stop-color="#146e9a"/><stop offset=".99" stop-color="#205177"/></linearGradient><clipPath id="clip-path"><circle cx="21.47" cy="21.53" r="20.97" fill="none"/></clipPath></defs><circle cx="21.47" cy="21.53" r="20.97" fill="url(#linear-gradient)"/><path class="polhawn3" d="M36.76 15.56a20.18 20.18 0 0 0-7.06-4.18l-.08-.05.11-.26a8.24 8.24 0 0 0 .75-2.91v-.57l-.54-.14a2.57 2.57 0 0 0-.83-.07 3.76 3.76 0 0 0-2.37 1.21l-.53.51.55.51a1 1 0 0 0 .47.24c-.06.22-.12.45-.19.65a33.2 33.2 0 0 0-11.6-1.28c-3.93.26-13.11 1.66-13.3 9.08a8.18 8.18 0 0 0 2 5.55 5.61 5.61 0 0 0 4.15 1.7 4.19 4.19 0 0 0 1.11-.21l2.12-.72-2.2-.62a3.75 3.75 0 0 0-1.1-.16 2.62 2.62 0 0 1-.56 0 3.37 3.37 0 0 1-1.51-1.2 7.57 7.57 0 0 1-1.45-4.4c.13-3.6 3.15-5.92 9-6.89a23.61 23.61 0 0 1 2.39-.27 27 27 0 0 1 10.21 1.4c-.72 2-1.72 4.09-2.66 6.32-1.17 2.69-2.38 5.46-3.33 8.07A16.62 16.62 0 0 0 19.06 33a6.49 6.49 0 0 0 1.48 4.53 3.52 3.52 0 0 0 2.35 1h.17a2.43 2.43 0 0 0 1.06-.32L26.35 37H23.8c-.93 0-1.84-.33-2.18-2.59a13.59 13.59 0 0 1 .77-6c.18-.59.38-1.2.59-1.79l1.11.36a10.8 10.8 0 0 0 4 .46c3.81-.26 7.78-2.14 9.43-4.49a6.41 6.41 0 0 0 1.13-2.56 5.68 5.68 0 0 0-1.89-4.83zm-13.7 10.77c1-2.78 2.31-5.5 3.58-8.14.81-1.69 1.57-3.27 2.23-4.83l.16.07a24.83 24.83 0 0 1 3.66 1.89 7.43 7.43 0 0 1 3.1 3.48c.62 1.95-.74 3.54-1.61 4.33a10.55 10.55 0 0 1-6.13 2.56 7.54 7.54 0 0 1-2-.13l-.27-.06a3.16 3.16 0 0 0-1-.14 1.66 1.66 0 0 0-.93.35z"/><g opacity=".4"><g opacity=".53" clip-path="url(#clip-path)"><path class="polhawn3" d="M3.86 23.6a.2.2 0 0 0 0-.11.2.2 0 0 1 0 .11zM4.23 31.72a14.46 14.46 0 0 1-1.78-1.33c.08.18.17.35.25.53a10.18 10.18 0 0 1 1 1.45 5.48 5.48 0 0 1 .4.85c.35.35.7.7 1 1.06v-.56c.34.15.56.62.68 1.33l.09.13.13-.12c-.13-.92-.52-1.09-.7-1.89.79.2.83 2 1.19 2.37a.66.66 0 0 1-.12.27l.1.14a16.43 16.43 0 0 0 5 .21c.06-.28.14-.46.32-.31 0-.9.54-1 1-1.15.09.52.36.65.67.64v.46c3-1 4.72-4.57 4.72-4.57-1.13 1.19-8.1 4.18-13.95.49zM42.05 18.73l-.41-.08-.88-1.09h1a9.42 9.42 0 0 0-.41-1.12 2.29 2.29 0 0 1-.65-.55c.2.09.31.07.37 0a7.74 7.74 0 0 0-2.17-2.62 4.81 4.81 0 0 0 .05.8 4.37 4.37 0 0 1-.48-1.16 7.5 7.5 0 0 0-4.6-1.06h-.29a4.69 4.69 0 0 0-.07 1.4c.25-.12.27-.59.58-.59a6.42 6.42 0 0 0 0 1.24c.24-.55.42-.05.51.76A7 7 0 0 1 40.29 20c1.53 6.35-3 7.22-6.25 7.47-2.46.19-13.18-6.87-18-10.09v.45h-.24a.83.83 0 0 1 0-.6c-1.28-.83-2.09-1.41-2.13-1.41-.21 1-1.35.5-1.62-.08-.33.53-.41.56-1 .61.23-.42.07-.51-.2-1.21.19-.29.7 0 1.11-.14-5.28-2.32-8.32-.3-8.32-.3a16.8 16.8 0 0 0-2.34 1.52 7.53 7.53 0 0 1-.12 1.35L1 18.7a6.71 6.71 0 0 1 3.3-2.36c0-.07-.07-.09-.09-.17a1.38 1.38 0 0 0 .24.14 7.21 7.21 0 0 1 1.73-.23c.16-.45.31-.95.8-.85-.06.73-.09.71.17.94a11.67 11.67 0 0 1 4.32 1.55l3.75 2.56 8.89 5.13.32-.92 1.25-.49 1.33.55-.63.17.06.78.2.07.67.23.62.09c-.17-.11-.28-.38-.51-.42 0-.65.57-.27.56.43l.52.07v.52l-.34.53-1.56.25 1 .83a10.37 10.37 0 0 0 6.46 2.07c-.28-.48-.58-.93-1-1-.23-.73.49 0 .27-.73.25.88.72.48 1 1.67.43-.13.68 0 .38-1.26.51 0 .08-.31 0-.71.28-.11.39.18.5.49a11.68 11.68 0 0 0-.15 1.45h.19c5.95-1.1 6.84-6.67 6.92-9.32 0-.68-.06-1.33-.12-2.03zm-3-3.41c0-.6.07.49.28.16a3.69 3.69 0 0 0 .07.87c-.21.02-.14-.81-.31-1.03zm-35 .16a4.14 4.14 0 0 0 0-.72 2.48 2.48 0 0 1 .44 1c-.16.07-.25-.21-.44-.28zm1.59.57c-.29-.3-.29-1.3-.47-1.89.52-.06.77.52 1.1.95-.07.56-.6.38-.63.94zm5.18.09c-.17-.06-.21-.49-.48-.31-.08-.49.49.1.42-.39.24 0 .07.56.06.7zM42 17.56h-.18c.1.29.18.58.25.87-.07-.29-.07-.63-.07-.87z"/><path class="polhawn3" d="M4.09 23.14a2.29 2.29 0 0 1 0 .37c3.95-2.16 6.22.57 9.86 3.33a61.53 61.53 0 0 0 9.4 5.77 3.12 3.12 0 0 1 0-1.14c.23-.15.21.34.39.32a1.53 1.53 0 0 1-.15.92c.25.12.52.27.79.39a1.61 1.61 0 0 0 0-.31c.19 0 .27.2.29.43A37.17 37.17 0 0 0 32.73 36a11.35 11.35 0 0 0 1.93.17c0-.38.31-.11.41-.22v.29a9.82 9.82 0 0 0 2-.27 26.08 26.08 0 0 0 1.49-2.27c-3.24 1-5.62-.75-10.08-2C22.45 30 17.1 24.8 11.7 21.22c-4.54-3-6.91.61-7.61 1.92zm29.56 10.62a.36.36 0 0 0 .29.16c.07.7-.29.72-.14 1.59-.49-.29-.15-1.15-.15-1.75zm-9.42-3.6a2.12 2.12 0 0 1 .09 1.22c-.19 0-.16-.47-.4-.32 0-.43 0-.91.33-.9zm-1-.45v.53c-.26.61-.45-.29-.64-.47 0-.38.53-.22.62-.06zm-2-.36c-.06.26-.2.4-.44.39-.09-.6.28-.65.45-.39zm-9.68-6.05c.26-.17.21.44.39.49 0 .39-.47.06-.38-.49zM33.8 14.6h.44a.51.51 0 0 0-.26-.47c-.18-.13-.13.32-.18.47zM35.26 9.51a2.36 2.36 0 0 0 0 .65.82.82 0 0 0 0-.65zM12.54 15.19a.44.44 0 0 0-.09.29c.11.11.31 0 .53-.07a2.58 2.58 0 0 0-.44-.22zM29.3 12.91a1 1 0 0 1 0 .25c-.13.09-.18 0-.23-.13a8.78 8.78 0 0 0-4.49 4.47 13.34 13.34 0 0 1 9.07-2.9c0-.22 0-.6-.36-.36.52-.62-.41-2 .35-2.31a13.23 13.23 0 0 0-4.34.98zm-1.7 2.33c0-.2-.05-.3-.12-.34.09-.52.41-.3.47.31z"/></g></g></svg>', search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.109 42.042"><g data-name="Group 642"><path d="M523.442 966.162a16.691 16.691 0 0 1-2.889 9.953.577.577 0 0 0 .084.9q5.681 5.647 11.333 11.324a2.363 2.363 0 1 1-3.37 3.3q-4.147-4.14-8.288-8.285c-1.026-1.025-2.059-2.044-3.072-3.082a.456.456 0 0 0-.709-.064 16.072 16.072 0 0 1-10.488 3.005 15.77 15.77 0 0 1-9.713-3.953 16.03 16.03 0 0 1-5.677-13.532 16.418 16.418 0 0 1 31.072-6.245 15.424 15.424 0 0 1 1.717 6.679zm-16.381-12.717a13.387 13.387 0 1 0 13.352 13.455 13.355 13.355 0 0 0-13.352-13.455z" class="cls-1" data-name="Path 4521" transform="translate(-490.621 -950.406)"/></g></svg>', "section-line": '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 444"><defs><style>.cls-1{fill:#0d80a9}</style></defs><path class="cls-1" d="M3.75 137.19c0 .22 0 .5-.06.81zM3.43 215.56c0-.59-.05-.84-.1-.87.03.55.06 1 .1.87zM2.92 228.8v-.78a2.67 2.67 0 0 0 0 .78zM3.69 138l-.15 2.07c.16.15.12-1.07.15-2.07zM3.31 103.81v-.63a3.52 3.52 0 0 0-.19-.52zM3.24 77.57c0 .59.38.8.55 1a3.59 3.59 0 0 1-.27-1.3c-.07.02-.16.1-.28.3zM3.91 35.55v-.32zM3.92 35.66zM3.94 36v-.3zM3.23 122.59a.55.55 0 0 0-.15.24s.1-.1.15-.24zM4.35 4.1h.39a.57.57 0 0 0 .08-.24zM2.41 253v-.1c-.04-.61-.03-.25 0 .1zM11.64 409.51c-.36 2.52-.46-4.1-.85-.31.15-.35.62 3.45.85.31zM2.82 308.3s-.09.15-.17.57a2.17 2.17 0 0 0 .17-.57zM3.21 267.27v1a10.31 10.31 0 0 0 0-1zM3.18 330.92a6.09 6.09 0 0 0 0 1.06v-.23a3.23 3.23 0 0 1 0-.83zM3.18 330.92v-.45a3.91 3.91 0 0 0 0 .45zM3.21 353c0-.12.06-.28.08-.41s0-.49 0-.72zM3.51 334.34zM2.57 251.56v-.89c-.03.33-.02.66 0 .89z"/><path class="cls-1" d="M11.69 405.29c.06-4 .36-1.66.59-4.28-.31.54-.44-1.38-.32-3.63l-.4 3.17c-.46-5.52.72-4.77.27-10.35l.27 1.8c-.16-2.86 0-10.55-.69-13.35.1-.51.34-1.17.4.08.1-6.83-.74-15.21-.31-20.52l.21.52a16.54 16.54 0 0 1-.18-3.82c.08.08.21.51.22-.08a35 35 0 0 1-.25-5.07l.24 1.44c.28-6.67-.58-10.23-.72-15.82.62 0 .82-5.23.92-7.85l.09.09c.07-7.76-.52-13.19-.76-20.38.67-4.46.28-15.11.66-22.29-.11 1.1-.48-.17-.55-1.45.13-1.68-.43-4.65.14-4.39v.6c.56-1.26.41-4.72.43-7.42l-.75-.45c1.09-7.06-.4-18.51.57-22.36-.18-1.71-.18-3.82-.37-5.51l.4.09c.11-4.72.16-7.08.06-12.92l.29 1.19c0-3.29-1.16-4.16-1.18-7.2l.6-.91c0-5.74.51-11.56 0-17.24.09.1.26.27.28 1.2 0-2.62.38-10-.33-9.55.4-.63 0-6-.26-9l.39.48a28 28 0 0 1-.78-6.36c.05-.87.31-.76.21.39.21-2.89-.37-2.25-.16-5.75l.25 1.3a13.66 13.66 0 0 0-.4-4.37c-.15-1.87.1-5.63.46-6.07a9.66 9.66 0 0 1-.4-3.78c.13-.24.21.4.25.72.27-5-.45-7.39-.07-10.81.13-.07.2-.29.24-.57 0 3.62 0 6.59-.06 6.82.36 0 .43-3.17.93-.65a69.3 69.3 0 0 1-.7-10 2 2 0 0 1 .12-.41v.32a12.43 12.43 0 0 0 0-2c.06-1 .1-1.63.1-2.58.31-.37.17-3.65.18-5.24-.39.13-.33-1.9-.65-.06a11 11 0 0 1 .05 1.41c0 .24 0 .52.05.68v-.11 4a14.3 14.3 0 0 1-.15-4.33c-.26-.82-.52-1.71-.64-2.22.55-2.18.85-6.37 1.19-7-.22-4.86-.15-11.44-.89-14.49a4 4 0 0 1 .33-2.1c.07.79.06 1.74.17 2.17-.19-2.76-.08-8.18-.6-8.83.24-3.48.48 2 .4-2.83l.16.65c.83-9.41-1.33-15.29-.26-25.71a4.31 4.31 0 0 1-.19 1.23c.47-11.89-.44-24.49.31-36.22a21.21 21.21 0 0 0-.44-5.73l.43-.72-.49-3.48c-.36-4.93 1-8.54.36-14.78l-.28.8c.05-2.24-.17-7.1.16-6.73a3 3 0 0 1-.15-1.61l.22-.07-.38-5.51c.08-2.09.29-2 .5-2s.2-.12.27-.56v-.51-.89c0-.7.05-1.61.05-2.78H11c-.89 0-2 .08-3 .15l-.59.06L6.9 3l-.9.1c-1.16.19-1.95.38-1.55.46.87 0 2.22.15 2.28.39L5.21 4H4.74l-.08.14h-.31v.44a.41.41 0 0 0 0 .56v24L4.24 29l.11.75V33a2.14 2.14 0 0 1-.19-1c-.29 2.35.2 2.08-.12 4.1 0 .22-.08.12-.1-.09l.17 2.3c-.12-.45-.41.38-.33-1-.34 4.13.44 6.65 0 8.2v-.34c.15 4.28.32 2.47.61 3.08v2.67l-.73 2 .43.57c0 .59 0 1.75-.22 1.54.29 2.19.19-.38.46.9-.39 2.84.19 7.83-.5 8.47.33 1 .25-2.72.48.32-.74.86.13 3.5-.21 6.1-.38-.8-.18-3.26-.52-.66.64 1.57-.14 5 0 7.24.51.11.22 4.76.39 8.44-.18-.24-.29 6.91-.47 10.33L3.35 96c.52.66.42 4.18.53 6.75-.31-.1-.43-.56-.57-2v2.41a11.71 11.71 0 0 1 .31 2.89l-.38-.61c0 3.21.45 6.47.19 10.6.25.16.62-1.4.92-1.07v2.24c-.13-.08-.24-.32-.28-.91a10.72 10.72 0 0 1 .08 2.09l-.33-1.74c-.14 1.88.28 1 .25 2.49-.28 0-.2 1.11-.42.89a14.81 14.81 0 0 0 0-1.89 25.14 25.14 0 0 1-.42 4.43c.15-.15.37 0 .41 1.24 0 3.21-.34 1.1-.48 3 .19.78 0 2.83.41 2.88a3.17 3.17 0 0 1-.31 1.48c.18 1.66.05 7.76.5 5.89v-.42.27c.42 5.44-.23 11.31 0 16.72h-.15c.16 3.23.09 7.18.39 9.49 0 1-.25 2.25-.42 1.84a39 39 0 0 1 0 6.31c-.24-2.48-.22.85-.18-2.54a36.38 36.38 0 0 0 0 7.37c-.36-1.17-.45 2.41-.34 3.93l.25-2.24c.05 1.71 0 3.21 0 4.73l-.47-.82c-.57 6.56 1 11.82 0 16.82.33 1.73.23-3.56.61-2-.06 3-.73 6.16-.74 7.1-.26 4.13.69 3.86.51 8.18.17-.55.62-1.07.78 2.16-.07 3-.71 3.71-.84 1.8 0-.72 0-1.07.09-1-.06-1-.13-2.25-.31-1.06l.17.39c-.17 1.5-.16 5.65-.43 4.68.16 2.28.27 1 .36-.72-.24 3.88 0 6.05-.17 10 .09-.63.29-1.22.29-.59-.21 5.85.32 2.58.39 6.54-.26 2.25-.61-.81-.4 3.18-.17 2.43-.44.51-.58-.45a59 59 0 0 1-.27 8.86l-.13-1.91c.08 1.14.07 2.08.07 3l.34-1.09c-.06 1.12-.06 2.07-.2 2 .22 1.16.56-.88.86 1.41-.17 1.5.18 4.57-.27 5.08.14-4.27-.34-.37-.48-2.57v1.94c0 .17-.09-.16-.12-.47-.4 4.51.5 2.08.49 6.75-.25-.6-.47 1.08-.42 1.84 0-1.88.42-.9.61.83a37.8 37.8 0 0 0 .12 4.82l.1-1.79a20.33 20.33 0 0 1 .29 4.2c-.19.17-.13-1.9-.22-1.16.44 2.32-.45 5.24-.16 8.48-.17 1.49-.47.14-.58 1.46.32 3.62-.35 3.92-.08 7.73.34-1.1.26-1.29.58 1.39l-.23-6.26.49 4c0-1.89-.21-4-.16-5.12.28 1.91.19 1.72.47.81-.5 2.59.3 5.13 0 8.12l-.84-.09c-.37 4.49.43 8 .22 13.81l.15-1.8c.33.78 0 3.6.18 5.49-.28-.17-.38 1-.56 1.81.21-.1 0 4.27.54 4.8L3 315.71c-.15 4.71.8 5.37.7 9.9-.3-1.36-.5.7-.71-2.34 0 1.52-.06 2.88.14 2.9-.18.88.37 4.19.11 5.58a6.83 6.83 0 0 1 .39 2.55c0 .11-.08.08-.11 0 .12.34.18 2.49.47 1.12-.87 4.66.06 13-.69 17.08.1 3.3.19 7.27.21 10.27-.09-.19-.14 0-.11-.58-.26 4.13.8 2.54.51 7.24-.45 2.41-.25-2.49-.42-1-.92.65.13 5.67-.41 8.83v-.76c-.31 2.42.34 5.9.28 9.85 0 0-.08-.19-.14 0A109.74 109.74 0 0 1 3.91 398c-.36-1.18-.19-1.73-.55-1 .05 1.7.58-.5.69 2.9-.2 1.1-.37 3.56-.76 3.88v-3.21c-.51 1.65 0 4.16-.07 5.85L3 406.2c.07 4.92.62 5 .58 10.27l.17-.54c.55 2.89-.31 2.42.1 5.3l-.56.87c.14 1.91.54 6.68.65 10.1-.42-1.94-.63-5.94-.87-8.42a57.37 57.37 0 0 0 .31 7.41 14.63 14.63 0 0 1-.1-2.47 35.67 35.67 0 0 1 .49 4c0 .76.09 1.57.12 2.42V438c-.3-.13-.45.79-.54 2.51.48 0 1.05.06 1.68.07h1.9l4.19.05V436.59a10.14 10.14 0 0 1 .3-2c-.4-6.66.17-13.21.11-21-.84 2.75 0-2.27-.89-1.79a17.46 17.46 0 0 1 0-2.65v.38-.4l.51-5.46c.4-1.23.34 1.78.54 1.62zm0-261a3.45 3.45 0 0 1-.11 1.56c0-.5 0-1.08-.05-1.85v-.12a1.3 1.3 0 0 1 .17.44zM4.28 37a1.44 1.44 0 0 1 .07-.31V38c-.03-.32-.05-.66-.07-1zM11.15 161.63z"/><path class="cls-1" d="M11.11 141.07V141a.22.22 0 0 0 0 .07zM11.17 142.42v-.43q-.06.31-.09.63c0 .13.08.26.12.37-.02-.19-.02-.39-.03-.57zM3.75 137.19a1.72 1.72 0 0 1 0-.29v.15zM3.66 60.8l.12-4.12c-.16.72-.36 1.67-.4-.21-.46 5.19.34-1.07.28 4.33zM3.44 73.57c-.07-2.21-.22 0-.31-.09.14 1.4.18 1.74.31.09zM3.44 165.87l-.36-.22c.05 1.7.14.01.36.22zM2.73 193.94l-.05-.75.13 2.85-.08-2.1zM2.86 349l.45-.51c-.08-1.21-.58-1.49-.45.51zM3.31 415.87a10.44 10.44 0 0 0-.14 3.77c.03-1.5.2-3 .14-3.77zM11.75 268.44l.15 1.35-.12-2.54-.03 1.19z"/></svg>', "social-fb": '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M55.69 45.42a10.43 10.43 0 0 1-10.42 10.43H10.53A10.42 10.42 0 0 1 .1 45.44V10.7A10.43 10.43 0 0 1 10.51.27h34.74a10.44 10.44 0 0 1 10.43 10.4zm-7.46-24.5h-7.17V17c0-2.07.21-3.19 3.14-3.19h4V5.86h-6.35c-7.6 0-10.28 3.84-10.28 10.31v4.74h-4.73v7.92h4.74v23h9.48v-23h6.34z" fill="#fff"/></svg>', "social-inst": '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M56 51.88a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4.12a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4zm-4-39.81V3.25H26.13l-2 4.84H4v4zm0 40.65v-4.81H4v4.81zM20 6.11v-4H8v4zm8 12a11.93 11.93 0 1 0 12 11.94 12 12 0 0 0-12-11.93zM28 38a8 8 0 1 1 8-7.95A8 8 0 0 1 28 38zm0-13a5 5 0 0 0-5 5 1 1 0 0 0 2 0c0-1.65 1-2 3-3 .5-.25 1-.44 1-1a1 1 0 0 0-1-1z" fill="#fff"/></svg>', "social-pinterest": '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M28.1,55.79a27.44,27.44,0,0,1-7.92-1.16,23.12,23.12,0,0,0,2.84-6s.33-1.24,2-7.66c.95,1.85,3.78,3.48,6.79,3.48,9,0,15.08-8.17,15.08-19.14,0-8.25-7-16-17.69-16C15.94,9.37,9.25,18.88,9.25,26.8c0,4.8,1.82,9.08,5.7,10.68a1,1,0,0,0,1.38-.73c.15-.47.44-1.7.59-2.21a1.38,1.38,0,0,0-.4-1.56,8.1,8.1,0,0,1-1.86-5.49c0-7,5.27-13.36,13.73-13.36C35.88,14.13,40,18.7,40,24.84c0,8-3.56,14.82-8.87,14.82a4.32,4.32,0,0,1-4.39-5.37c.83-3.53,2.47-7.34,2.47-9.89,0-2.28-1.23-4.21-3.78-4.21-3,0-5.37,3.09-5.37,7.23a11.72,11.72,0,0,0,.9,4.43C17.93,44.78,17.39,47,17.39,47a24.09,24.09,0,0,0-.47,6.43A27.92,27.92,0,1,1,28.1,55.79Z" fill="#fff"/></svg>', "social-twitter": '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M56 45.5A10.5 10.5 0 0 1 45.48 56h-35A10.51 10.51 0 0 1 0 45.5v-35A10.51 10.51 0 0 1 10.49 0h35A10.5 10.5 0 0 1 56 10.5zM42.24 18.81a7.76 7.76 0 0 0 3.39-4.26 15.48 15.48 0 0 1-4.89 1.86A7.56 7.56 0 0 0 35.17 14a7.66 7.66 0 0 0-7.66 7.66 7.27 7.27 0 0 0 .18 1.75 21.75 21.75 0 0 1-15.82-8 7.77 7.77 0 0 0-1.06 3.87 7.53 7.53 0 0 0 3.32 6.38 9.15 9.15 0 0 1-3.64-.95v.07a7.79 7.79 0 0 0 6.3 7.51 6.19 6.19 0 0 1-1.86.3 9.78 9.78 0 0 1-1.42-.15 7.71 7.71 0 0 0 7.15 5.33A15.51 15.51 0 0 1 11.14 41a15.34 15.34 0 0 1-1.82-.11 21.82 21.82 0 0 0 11.74 3.42c14.07 0 21.8-11.66 21.8-21.8a8 8 0 0 0 0-1 14.67 14.67 0 0 0 3.83-4 16.11 16.11 0 0 1-4.45 1.3z" fill="#fff"/></svg>', "step-back": '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" data-name="Backward arrow" viewBox="0 0 28 28"><path d="M14 0l-2.545 2.545 9.636 9.636H0v3.636h21.091l-9.636 9.636L14 28l14-14z" data-name="Path 10" transform="rotate(180 14 14)" fill="#fff"/></svg>', swirl: '<svg xmlns="http://www.w3.org/2000/svg" width="42.491" height="40.88" viewBox="0 0 42.491 40.88"><path d="M33.491 30.29c-.08.09-.2-.81-.05-.72l.11-.11c-.06-.06-.02.88-.06.83zm4.84-7.07c0-.19-.16-.08-.17.06-.01.26.17.06.17-.06zm-5.46 3.31c-.06-.06-.02-.11-.06-.17-.08.09-.2.19-.06.28zm-16.46 13.55a.188.188 0 00.34.11c-.12-.14-.23-.19-.34-.11zm1.51-3.76c-.13-.17-.26-.11-.39.06.13.16.26.22.39.05-.03-.04-.05-.08 0-.11zm3.77-5.35c-.05.11-.36.22-.22.34l.17-.17c.02-.05.1-.11.05-.17zm-8.15 7.82c-.11-.19-.32-.38 0-.56.13.08.26.42.4.17-.09-.22-.58-.65-.84-.39.07.13.21.26.17.39l-.23.23c.16.16.33.39.5.16zm-4.44-1.41a.45.45 0 01.5.62c-.28.04-.2-.41-.45-.22.27.34.62.5.73.73.11-.11.25.1.34.11s.19-.1.28-.06c.12.09.06.19.17.28.32-.04.64.29.96.28.19.26.38.08.56.34.15-.24.3-.13.45-.34-.25-.25-.29-.41-.45-.45-.19-.04-.33-.07-.34-.22-.09.07-.19.23-.28.17-.07-.05-.15-.17-.22-.11-.16.15-.41-.24-.51-.28-.05-.02-.15.04-.22 0-.11-.06.03-.13-.11-.11a.915.915 0 01-.28-.17.474.474 0 01-.17-.28c-.13.1-.26-.04-.39-.05.05-.06.02-.11.05-.17.21-.25.41.07.62-.06-.23-.14-.24-.39-.39-.51-.09-.07-.15.02-.23 0s-.14-.19-.22-.11c-.2.01-.1-.25-.34-.11.25.24-.14.48-.06.72zm2.81.68a.419.419 0 00-.51-.28c.01.17.33.56.51.28zm13.04-15.4l.11.11c.29.08.11-.45-.11-.11zM8.481 36.99c-.09-.04-.13-.19-.22-.22-.04-.02-.17.08-.23 0l-.34.33c.3.14.6.23.9.34a.479.479 0 00.22-.34c-.06-.13-.22-.06-.33-.11zm-1.29-1.07c.12-.08.06-.23.17-.17-.17.25.5.2.17.39.21.2.42.16.56.22-.02-.01-.05.08 0 .11a.191.191 0 01.11 0c.03.02.12.01.11 0 .02.01.06.13 0 .11.16.04.28.1.45-.11a1.132 1.132 0 00-.39-.28c-.26-.16-.22-.17-.28-.28-.15-.25-.38-.1-.5-.28-.18-.19-.06-.37-.34-.56-.19.05-.08.23-.11.34-.03.09-.09.16-.11.22-.01.04.03.05 0 .11s-.12.11-.06.17c.07-.06.14.06.22.01zm4.77-7.93a1.129 1.129 0 00.11.22.419.419 0 00.11.22c.38.23.7-.27.95-.62l-.34-.34c.21-.11.07-.23.23-.34-.24-.17-.21-.34-.28-.51a.337.337 0 01-.34.11c.1-.23-.03-.45-.22-.67a.757.757 0 00-.45 0c-.03 0-.09-.12-.11-.11-.27.08-.27.32-.45.56.13.21.07.15.28.28a.694.694 0 000 .45c.08-.06.15-.12.22 0-.08.13-.22.26-.06.4.09.09.19-.13.28-.06-.09.11-.34.22-.11.34.21-.07.07-.4.28-.28.19.14-.09.27-.1.35zm11.02-11.57c.05.23.36-.03.22-.11-.04.03-.08.06-.11 0zm-7.14 6.46l-.11-.11-.11.11.11.11zm2.03-6.86c-.13.08-.26.02-.39.17.09.18.47 0 .39-.17zm-.85.28c.08 0 .23-.26.17-.28-.18-.03-.22.28-.17.28zm-11.24 9.78c-.11.19-.05.37-.11.56-.03.06-.11.11-.06.17.12-.13.25-.23.39-.39.11-.12.22-.34.28-.28-.05.07-.02.15 0 .23a.474.474 0 01.28-.17.4.4 0 010-.34c-.19-.07-.37-.3-.56-.34a.723.723 0 00-.34-.56c-.24.12-.13.12-.34.34.21.26-.11.53.11.79.13 0 .24-.2.35-.01zm.17-.05l.11-.11.11.11-.11.11zm10.12-11.81a.392.392 0 00-.17.39c.08-.13.42-.26.17-.39zM5.161 25.35c.15-.13.09-.26.17-.39-.31-.18-.18-.19-.34-.45-.31.19-.08.38-.22.56.25.09.2.24.39.28zm4.61-6.29c.15-.05.59-.03.56-.34-.22.04-.22-.05-.34-.23.02-.15.16-.3.11-.45-.15.24-.3.13-.45.34.21.08-.07.2-.06.28s.21.14.23.22c.02.06-.13.13-.05.18zm-4.44 4.44c-.13-.16-.26-.03-.39.06.12.09.06.19.17.28a.581.581 0 00.22-.34zm.06-1.52c-.19.02-.37-.09-.56 0 .06.19-.18.38-.11.56.18 0 .15.25.45.23.04.11-.21.23-.11.34a1.389 1.389 0 00.68-.45.558.558 0 00-.23-.34c-.12-.11.07-.23-.12-.34zm-.34 1.24c-.11.1-.23-.15-.34 0a.353.353 0 01.11.22c.06-.16.36-.02.23-.22zm3.6-4.27a.474.474 0 01.17.28c.15.01.36-.19.23-.34-.14.16-.27-.18-.4.06zm1.29-1.07c.29-.26.33-.52.67-.79a.4.4 0 01.06-.51c-.24-.11-.05-.23-.11-.34-.05.08-.12.05-.17.06s-.16-.02-.22 0c0-.3-.24-.1-.39-.28l-.45.45c.32.17.07.34.17.51.1-.06.16-.03.17-.17.07.06.15.12.22 0 .07-.07-.05-.15 0-.22a.568.568 0 01.28-.06c.11.13-.02.26-.17.39.14.15.09.3.11.45-.07-.06-.15.03-.22.11-.19-.04-.38-.19-.56 0 .23.13.08.26.17.39.14-.2.29-.01.44.01zm8.38-8.83c.09-.07.19 0 .28-.06-.07-.16-.4-.1-.28.06zm-7.99 7.08c.15-.09.3-.02.45-.22.11.13.22.13.34 0-.11-.09-.08-.19.06-.28l-.22-.23c-.21.1-.71.17-.73.51.23-.13.04.17.1.22zm-6.18 5.85a.331.331 0 00.22.11 2.195 2.195 0 00.45-.79c-.19-.17-.14-.34-.39-.51-.33.3-.02.6-.11.9-.15.09-.21.03-.23-.11-.23.13.11.26-.06.39-.23.1-.24.17-.17.39.25.02.27-.22.29-.38zm1.29-1.74l.11-.11-.22-.23-.11.11zm-4.55 4.21a.331.331 0 01-.22.11l.22.23a.352.352 0 00.11-.23zm-.45-.22c0 .12.24-.15.28-.17.1-.05.28.13.34 0-.13-.08-.05-.21-.17-.28-.28-.18-.89.08-.56.45.1-.06.11-.12.11 0zm11.3-11.07c-.06-.06-.02-.11-.06-.17-.08.07-.15.01-.22.11a.224.224 0 00.28.06zM.271 23.05c-.06.03-.11.02-.17-.06-.23.24-.03.47.23.45-.1-.13.04-.26-.06-.39zM22.421.79l.11-.11-.11-.11-.11.11zm-6.13 4.44c.12-.11.22.08.34-.11-.02-.2-.08-.07-.23-.22a.341.341 0 00-.11.33zm4.11-4.78c-.17.07-.34-.01-.5.17.12.33.55.05.5-.17zm-1.13.45l.11-.11-.11-.11-.11.11zm-.5.06c.25-.09.37-.28.17-.51-.15.12-.59 0-.56.34.12-.04.25.02.39.17zm-9.84 9.72c.04-.02.03-.13 0-.11.06-.04.13-.02.17-.06s.1.01.11 0c.15-.1.04-.17.17-.17.06 0 .17-.19.22-.22.09-.05.15-.02.23-.11a.681.681 0 00.22-.45c.03-.14.08-.22.11-.34 0-.35-.18.06-.34-.11-.05-.05 0-.27-.06-.28-.04-.02-.21.04-.27.05a.4.4 0 01-.11 0c-.08.03-.68.3-.45.45.11.19.22-.31.33-.11-.07.16-.17.6-.44.56 0-.27.18-.28-.12-.11-.17.1-.42.01-.39.17a5.3 5.3 0 00.5.84c.01-.07.12 0 .12 0zm-.06-.73l.22.22c-.1.14-.19.11-.28.17-.03-.13-.09-.26.06-.39zm2.93-2.47c-.13-.26-.08-.35-.39-.39-.23.19-.29.38-.11.56a.378.378 0 00.5-.17zm1.4-5.57c0 .27.19.02.34.23l.23-.22c-.12-.37-.51-.19-.79 0-.13-.03-.26-.09-.39.06-.01.21-.28.41-.06.62.25-.3.57-.34.67-.69zm10.51-.73c.12.11.21-.11.4.06.07.06.06-.01.11 0a1.984 1.984 0 01.84.51.751.751 0 01.45 0c.13.01.24-.25.34-.11.06.26.35.22.45.22s.14.1.23.11c.04.01.12-.06.17-.06a2.25 2.25 0 01.22.11c.06.03.04.16.11.23-.01-.01.08-.02.11 0 .23.14.21.03.39.06.07.08 0 .15.11.23.11-.23.22.02.34.11.15-.17.37.08.51.17.05.04.13.02.17.06.09.09 0 .17.17.17.23 0 .16.15.28.28.01.02.11-.03.17.06.03.04-.04.09.06.17.02.02.19-.03.23.11.26-.05.52.03.79 0-.08.1.1.18.17.28s.08.28.22.34c.22.02.52.28.62.28.25 0 .27.22.39.39.12-.09.23-.34.34-.11.11.08-.1.14-.11.22-.01.05.14.11.06.17l.28.28c.12.1.23-.15.34 0 .09.3.23.14.45.23.02.16-.1.4.17.39-.2.15-.14.3-.22.45.29.18.26.5.51.51-.07.22.13.45.22.67.32-.23.8.18.96.51.53-.01.87.73 1.12 1.01-.17.15-.31.3-.11.45.11.1.22-.15.34 0a.618.618 0 00.17.39c.14.15-.11.25.11.22.07-.01 0 .12 0 .11.06.22.1.33.28.39a.4.4 0 000 .34.381.381 0 01.34.11c.08.08-.03.16 0 .22.09.17.28.02.34.22l-.23.23c.35.38.24.75.56 1.12-.25.17.06.34.06.51-.06.06-.12.17 0 .11.02-.14.08-.2.22-.11.01.21.41.41.06.62.26.19.08.37.34.56-.02.17-.11.34.06.51.15.2.3-.04.45.23-.24.25-.34.18-.34.45.16.09.62.33.45.56-.09.06-.19.03-.28.17.09.17 0 .34-.06.51a.549.549 0 01.23.34c-.4.12-.37.66.06.96a2.46 2.46 0 01-.11.45 1.493 1.493 0 01.23.67c-.22.19-.04.38-.23.56.1.05.07.18.11.22.06.06-.01.07 0 .11.05.14.13.14.17.28-.35.3-.04.6-.45.9-.08.14-.44-.18-.34.11.19-.07.38.14.56.34-.06.06-.02.11-.06.17-.14.29-.56.26-.5.5.2.01.1-.25.34-.11-.06.07.03.15.11.22-.35.28-.13.56-.39.84-.06.03-.11.02-.17-.06a7.733 7.733 0 01-.39.96c.19.22.07.45 0 .67.11.14.16.28.11.34-.14.15.1.22 0 .34.01.15-.19.3-.33.45.17.18-.11.5-.17.62a6.982 6.982 0 01-.62.84c.03.19.15.52.06.62-.06.07 0 .05 0 .11a1.614 1.614 0 010 .22c-.01.11-.14.15-.17.28s.02.3 0 .45a.86.86 0 01-.17.5c-.17.07-.33 0-.5.17-.25.28-.22.56-.39.84-.29.07-.24.3-.4.28-.18-.02-.49.61-.45.56-.07.08-.14.01-.22.11a.191.191 0 010 .11c-.18.34-.47.24-.45.45 0 .02-.1.09-.11.11-.15.2-.2.21-.23.34a.949.949 0 01-.34.45c-.19-.12-.38-.09-.56-.22a.629.629 0 01-.39.39c.06.08.17.15.11.23l-.23.22c-.49.08-.97-.12-1.46.45-.42-.02-.71.31-1.01.67.23.33-.09.44-.34.67-.19.12-.38-.1-.56.11-.01.11.19.23 0 .34-.38.1-.75.57-1.12.79a.244.244 0 00-.22 0c-.06-.08-.03-.2-.17-.06-.26.17-.01.34-.17.51-.24.15-.13.3-.34.45-.12-.15.05-.3 0-.45a.213.213 0 01-.28-.06c.02-.13.15-.26.06-.39-.15.2-.3.02-.45 0-.24.4-.49.23-.73.4.09.38-.34.37-.56.56.25.13.41.08.28.39a.337.337 0 01-.34.11c-.33-.17.04-.34-.17-.51a1.311 1.311 0 00-.51.73c-.09.07-.19 0-.28.06-.09-.09-.19.13-.28.06-.21-.13.05-.26-.17-.39-.11.05-.22.36-.34.22-.34-.31.14-.32 0-.56-.47.15-.41.91-.95.84-.18-.25-.18-.28-.45-.34-.2.18.2.18 0 .45-.34-.19-.48.77-.9.45-.02-.26-.04-.2-.28-.39-.3.35-.6.26-.9.22a.554.554 0 00-.22-.34c-.23.1-.45.24-.68.11l-.28.28c-.32-.1-.64.12-.95-.28-.21.24-.41-.01-.62-.06-.23.19-.14.37-.11.56.09-.08.19-.2.28-.06.06.15-.13.21.11.23-.1.13.04.26.06.39l-.17.17c.21.16.41-.02.62-.05a.5.5 0 00.28.17.568.568 0 01.28-.06 4.291 4.291 0 00.79.11c.17-.19.34-.34.51-.28.16.11-.29.22 0 .34.19.17.38-.13.56-.11a.474.474 0 01.17.28c.19-.27.33-.24.45-.23a1.764 1.764 0 00.23 0c.16-.11.02-.22.22-.34.13.13.07.26.28.39.06-.03.11-.02.17.06.13-.15.26-.09.39-.17.26.2.53-.11.79.11.21-.3.41-.15.62-.28l.17.17c.19-.18.38-.06.56-.34.13.03.26.17.39-.06.19.11.38.05.56.11l.22-.23c.15.06.32-.02.51-.06.06-.01.16.02.22 0 .04-.01.07-.1.11-.11s.13.07.17.06a3.672 3.672 0 00.62-.5 1.825 1.825 0 01.05-.4c.04-.13.01-.32.23-.45a7.523 7.523 0 00.34.79.771.771 0 01.95-.06c.27-.16.58-.33.79-.45.03-.02.12-.01.11 0 .12-.09.21-.26.34-.34.02-.01.06.03.11 0a.684.684 0 01.23-.11.779.779 0 00.51-.4.694.694 0 01.39-.28c.25-.14.53-.39.68-.45a.147.147 0 00.05-.06c.06-.06.08.01.12 0 .25-.11.35-.3.56-.45.14-.1.33-.12.45-.22a7.57 7.57 0 00.9-1.13c.14-.04.26-.1.34-.11.25-.05.54-.35.67-.34.04 0 .19-.11.23-.11.2-.04.28-.21.5-.39.09-.07.16-.06.28-.17.27-.25.28-.46.45-.68a.755.755 0 00.34-.11c.11-.09.12-.24.22-.34-.01.01.08.02.11 0a2.241 2.241 0 00.62-.73c.11.1.22-.16.34-.11-.03-.16.09-.19.11-.34.02-.1-.1-.23 0-.34.24.03.27-.28.39-.39-.02.01.09.01.11 0a.686.686 0 00.17-.17c.19-.27.19-.9.56-1.12-.06-.43.37-.86.73-1.29-.16-.24-.02-.49.28-.73-.15-.19-.03-.26.05-.39.04-.06-.01-.09 0-.11a2.881 2.881 0 01.62-.96.235.235 0 010-.23c.06-.07-.01-.06 0-.11.03-.13.16-.31.17-.4.04-.31-.12-.61 0-.9a1.49 1.49 0 00.45-1.13c.06-.2.11-.1.23-.34-.03-.06-.02-.11.06-.17a1.32 1.32 0 01-.06-.39.435.435 0 00.17-.4 11.414 11.414 0 01.17-1.4c-.23-.1-.21-.17-.28-.39.21 0 .14-.13.28-.28a.474.474 0 01-.17-.28c.2-.15-.05-.3.23-.45-.13-.32.07-.64.28-.96-.31-.22-.02-.48-.17-.62-.02-.02-.24.09-.28-.06.19-.17-.06-.34-.06-.51-.06.03-.11.11-.17.05.06-.09.03-.19.17-.28-.33-.21-.01-.45-.11-.56-.01 0-.21.17-.23 0 .32-.17-.1-.34.17-.51l-.28-.28c.08-.32-.3-.64-.28-.95.07-.09.23-.19.17-.28-.24.14-.13-.12-.34-.11.05-.15-.11-.3 0-.45l-.28-.13c.06-.11.06-.23.11-.34a.44.44 0 01-.17-.39c.01-.09-.29-.19-.17-.28l.28-.28c-.13-.21-.26.05-.39-.17-.08-.13.06-.26-.17-.39.02-.17.1-.34-.06-.51-.13.04-.26-.1-.39-.17a.4.4 0 010-.34c-.21-.13-.15-.07-.28-.28.02-.15.2-.3 0-.45-.56-.29-.72-.89-1.24-1.24.3-.09.14-.23.22-.45a2.059 2.059 0 00-.79-.67c.07-.21-.21-.35-.28-.51-.01-.03.01-.18 0-.23a.419.419 0 00-.11-.22c-.07.06-.15.17-.22.11.02-.2-.26-.28-.34-.45-.01-.02.06-.14.06-.17-.01-.06-.13-.11-.06-.17a4.538 4.538 0 01-.62-.62c-.05-.05.01-.1 0-.11-.04-.07-.14-.01-.17-.06-.06-.1-.01-.18-.06-.28-.08.2-.38-.04-.39-.06-.07-.06-.06.01-.11 0-.25-.05-.07-.1-.11-.23-.15-.45-.78-.15-.73-.62-.11.09-.17-.02-.28-.06a.739.739 0 01-.33-.09c-.15-.09-.03-.18-.17-.17-.03 0-.08-.1-.11-.11-.01 0-.04.06-.05.06-.16.02-.28-.41-.45-.45-.05.07-.07.01-.11 0a.4.4 0 00-.11 0c-.09-.02-.13-.09-.22-.11-.05-.01-.17.02-.22 0-.54-.16-1.03-1-1.52-1.29a2.956 2.956 0 01-.51-.06.578.578 0 00-.34-.23 2.6 2.6 0 01-.46-.11c-.16-.06-.22-.19-.34-.22-.01 0-.04.05-.06.06s-.08-.11-.11-.11c-.11-.02-.24.07-.4.06-.08-.01-.15-.1-.22-.11a1.065 1.065 0 00-.39.06c-.08.01-.14-.01-.22 0-.14.01-.3.08-.45 0 .04-.29-.4-.22-.56-.34-.08-.06.01-.16-.11-.22-.22.18-.45-.09-.67-.11.03-.06.02-.11-.06-.17.06-.08.12-.15 0-.23-.14.13-.27.26-.4.15-.13 0-.26-.13-.39-.28-.06.03-.17.05-.22 0-.11-.1-.26-.01-.34 0-.04 0-.08-.11-.11-.11-.05 0-.18.1-.23.11a1.772 1.772 0 01-.17-.06c-.03 0-.08.11-.11.11a2.074 2.074 0 01-.5-.06c-.04-.01-.07-.11-.11-.11s-.08.1-.11.11c-.19.07-.27-.38-.45-.11-.04-.03-.08-.06-.11 0 .06.06.02.11.06.17-.19.19.12.2.17.28a.131.131 0 000 .11c.12.21.14.18.22.34a.428.428 0 01.37.06zm-3.88 38.96c-.08.15-.14.02-.22 0-.12-.02-.31-.02-.28-.17.11-.05.22-.06.34-.11.1.09.05.18.16.28zm1.07.17a.224.224 0 01.06-.28.226.226 0 01-.06.28zm4.16-.79c-.15-.2-.3-.06-.45.11-.14-.02-.07-.29 0-.34.04-.03.25.08.28.05.07-.05.06-.26.23-.34.02-.01.05.05.11 0s.11.02.17.06c-.11.16-.12.31-.34.46zm-16.86-8.66a5.25 5.25 0 001.12 1.24c.19.12.27.19.34.22.19.12.18.06.34.11.09.03.14.13.22.11.34-.26-.03-.53.23-.79.15.27.3-.12.45.11-.24.19-.33.38-.22.56.11-.13.22.17.34.22.09.06.19.03.28.17-.31.18-.11.32-.11.45 0 .09-.18.19-.06.28.17-.01.34-.24.51-.17-.03.2 0 .48.28.39-.29-.15-.04-.3.11-.45.2.24.41.37.62.28-.14-.11-.2-.23-.11-.34.16.02.4.04.39.28.17-.02.34-.1.51.06-.08.13-.02.26-.17.39-.13.1-.26-.04-.39-.06-.12.07-.06.23-.17.17-.06-.03-.11-.02-.17.06-.02-.09-.08-.34-.22-.11-.13.15.17.21.22.23a1.32 1.32 0 01.39-.06c.09.13.19.04.28.06.16.11.02.22.23.34.24-.18.14.18.28.05.12-.11.34.1.45.23a.224.224 0 01.28-.06c-.11.18.22.22.23.23.18.04.23.21.39.28.03.01.17-.01.22 0a.487.487 0 01.23.11c.02.34.38.19.56.45a.474.474 0 00.17-.28 5.252 5.252 0 001.01.23c.19.19.37.01.56.22l.23-.22c.11.29.22-.16.34 0 .24-.2.1-.77.5-.62-.15.15-.36.3-.22.45.19-.06.28.02.28-.17 0-.09-.02-.06.05-.17.08-.09.21-.21.28-.17.09.2-.21.34-.11.45s-.16.25 0 .34c.24 0 .49.07.73.06.19.08.14.1.39.28.17.01.34-.2.51.06.23-.19-.08-.38.23-.56-.3-.03-.37-.56 0-.56-.31.34.23.5.28.73a1.445 1.445 0 00.62-.17c.13.15.26.09.39.17.16-.11.02-.23.22-.34.22.14.45.04.67.11l.17-.17c.35.14.71-.17 1.06-.06a.99.99 0 01.45-.34c.02-.01.04-.04.06-.06.06-.05.08.02.11 0 .23-.1.16-.19.34-.11-.02-.01 0 .21.11.22l.28-.28a.5.5 0 00.28.17 1.771 1.771 0 00.73-.73c.03.33.42-.1.62-.17.26.29.53.06.79-.11-.06-.07-.17-.15-.11-.22.17.22.34-.28.5-.17.02.15-.12.3-.11.45.17-.05.37-.22.45-.22.39-.01.46-.52.45-.68.08.07.15.01.23.11-.06.06.03.12.11 0 .08-.06-.05-.11-.06-.17 0-.03.11-.08.11-.11 0-.09-.18-.26 0-.34.09-.14.2-.04.28-.06.1-.02.19-.09.28-.06.27-.19.27-.37.45-.56a.388.388 0 01.51.17c.23-.08.13-.28.22-.45s.3-.32.39-.51c.03-.05-.1-.22.06-.28.15-.24.3-.13.45-.34-.15-.2-.34.04-.34-.22.22-.23.45-.39.68-.11.13-.21.26-.15.39-.28-.03-.05-.02-.11.06-.17-.29-.21-.04-.41-.06-.62a4.935 4.935 0 00.79-.45c.05-.25-.4-.29-.28-.39.06.04.1.01.17-.05.11-.1.36.15.45 0-.09-.11-.03-.23.11-.34a.224.224 0 01-.06-.28c.22-.1.13-.27.23-.34.03-.02.29.11.34-.11-.06-.08.03-.15.11-.22-.15-.11-.2-.22-.11-.34a2.393 2.393 0 00.67-.9c-.15-.13-.29-.07-.17-.28l.45-.45c.11-.01.22.19.34 0-.06-.09.06-.19.06-.28a.224.224 0 01-.06-.28c-.06-.07-.17-.15-.11-.22l.28-.28-.28-.28a2.438 2.438 0 00.28-.73c.13.11.26-.02.39-.17-.03-.06-.02-.11.06-.17-.08-.09-.23-.19-.17-.28a1.518 1.518 0 01.5-.39 1.517 1.517 0 00.06-.51c0-.08.11-.15.11-.22 0-.09-.1-.13-.11-.22a.8.8 0 01.17-.51 1.182 1.182 0 01-.22-.79.479.479 0 00-.34-.22c.16-.3-.2-.6-.22-.9l.22-.23c-.02-.15-.16-.3-.11-.45.18-.15.09-.3.11-.45-.13-.23-.26.11-.39-.06-.07-.09 0-.19-.06-.28-.07.04-.4-.02-.28-.17.15-.14.3.18.45-.11-.01-.32-.33-.23-.5-.28a1.4 1.4 0 00.22-.56.568.568 0 01.06-.28l-.4-.39a.294.294 0 000-.45c-.09.07-.19.23-.28.17s.03-.18 0-.22c-.05-.08-.21-.08-.23-.11-.02-.06.07-.21.06-.28-.03-.16-.29-.2-.11-.34.05-.11.36-.23.23-.34-.02.06-.23.02-.23 0s.12-.11.11-.11c-.17-.19-.25-.03-.22-.22.01-.06-.26-.01-.28-.06a.4.4 0 000-.34c-.08.06-.15.12-.22 0 .08-.21.28-.52.11-.67-.03-.02-.24.1-.28-.06.09-.2-.12-.21-.17-.39-.03-.1.09-.22 0-.34a.851.851 0 01-.17.06c-.2-.01-.21-.16-.28-.28-.01-.02-.04-.04-.06-.06s-.02-.13 0-.11c-.21-.2-.26.03-.34-.11-.04-.08.18-.17.17-.28-.01-.07-.19-.16-.23-.23-.01-.02.01-.19 0-.22-.03-.09-.13-.14-.11-.23-.32.38-.25-.02-.39-.06-.05-.01-.12.14-.17.06.11-.22-.35-.45-.11-.67a1.228 1.228 0 00-.68-.45.213.213 0 01.06-.28c-.16-.13-.25-.06-.39-.17.03.02.01-.09 0-.11-.05-.08-.12-.06-.17-.06-.07 0 0-.21-.11-.23-.2.2-.11-.01-.23-.11l-.05.05c-.03 0-.09-.1-.11-.11-.09-.05-.14-.12-.22-.11.14-.11.2-.23.11-.34-.11.05-.22.35-.34.22-.02-.31-.37-.27-.56-.56-.23.19-.34.44-.45.34-.07-.07-.16.04-.23.11-.08.09.1.19-.06.28l-.17.17c-.05-.11-.36.08-.22-.11.11-.16.23-.02.34-.23-.23-.13.1-.26.06-.39.21-.02.59-.38.23-.57-.2.1-.14.48-.39.4.01-.23.3-.45.23-.68-.28.34-.56-.07-.84-.17-.34.21-.67.98-1.01.67.13-.13.26-.07.39-.28-.21-.35-.41.25-.62.17a.842.842 0 01.06-.62c.24.07.34-.33.34-.45-.38-.13-.42-.33-.79-.56-.13.15-.26.09-.39.06-.15-.2-.3-.14-.45-.23-.13-.06-.26.27-.39.17-.15-.1.05-.21-.15-.33-.13.15-.26.28-.39.17-.23-.13-.09-.26-.17-.39-.15.04-.23.15-.39.06s-.08-.06-.22 0c-.02.01-.14-.06-.17-.06-.13.01-.21.08-.34 0 0-.26-.29-.27-.45-.45a.226.226 0 01-.28.06.6.6 0 01-.29.05c-.07-.07-.01-.15-.11-.22-.21.01-.41.15-.62.06-.17-.23-.34.06-.51-.17-.06.03-.11.11-.17.06-.19.19-.38.41-.56.34-.13-.19.17-.37.23-.56a1.23 1.23 0 00-1.24.22c-.11-.05-.22-.06-.34-.11l-.28.28c-.15-.03-.48-.07-.56 0s-.07-.01-.11 0a4.741 4.741 0 01-.79.1c-.03.01-.08-.12-.11-.11a1.5 1.5 0 00-.22.11c-.11.1-.36 0-.45.11.07.13-.07.24-.11.34s0 .32-.17.39c-.19-.02-.46.08-.62-.06-.08-.06 0-.16-.11-.22-.3.29-.6.08-.9.45-.04-.1-.12.06-.17.06-.03 0-.09-.12-.11-.11-.2.08-.27.35-.39.51-.07.21.33.1.22.34a.394.394 0 01-.39-.06c-.1-.06-.07-.17-.11-.22 0 0-.22.01-.11-.11.11.13.22.13.34 0-.21-.12-.27-.26-.39-.28-.17-.03-.08.14-.23.11.05.01-.06-.16-.17-.17-.18.22-.18.36-.45.45a1.81 1.81 0 01-.96 1.29.928.928 0 01-.39.73c-.08-.06-.15-.12-.22 0a.294.294 0 00-.45 0c.06.08.17.15.11.22-.16-.03-.4.31-.39-.06-.23.25-.45.16-.68.45.16.31.07.27.34.56.09-.11.19-.08.28.06.19-.25.37-.17.56-.45-.09-.15.03-.21 0-.34.01.05-.18-.07-.06-.17.21-.2.41.32.62.28.28-.16.11-.29.17-.39.08-.16.22-.21.28-.39.17-.09.34.44.5.17.19-.12-.31-.23-.12-.34.19-.25.24-.64.56-.45-.12.31.33.32.34.56.39-.16.79.01 1.18-.51a.758.758 0 00.5-.17c.21-.15-.04-.3.23-.45.21-.21.41.07.62-.28.15.24.3.17.45.23.11-.15.12-.3.34-.45.26.35.55-.02.79 0 .07.01.02.23.17.17a1.458 1.458 0 01.51-.06c.03 0 .07.12.11.11s.08-.1.11-.11.13.06.17.06a.809.809 0 01.22 0c.04 0 .08-.11.12-.11s.08.11.11.11.07-.11.11-.11a1.567 1.567 0 01.28.06c.04.01.07.11.11.11.25.01.54-.16.79 0 .22-.1.13-.27.23-.34.03-.02.29.11.34-.11.11.19.22 0 .34.11-.09.09-.2.19-.06.28.06-.03.11-.02.17.05.41-.64.83-.1 1.24-.45-.02-.15.13-.3.11-.45-.15-.02-.3.17-.45 0 .15-.21.3-.22.45-.34-.04-.05-.12-.1-.07-.16.09.13.19.03.28.06.38.2.33.3.45.56.06-.03.11-.11.17-.06-.15.27-.3.02-.45.23.13.15.05.27.17.39.1.11.18.06.34.11s.28.17.39.17l.45-.45a.474.474 0 01-.17-.28.224.224 0 01-.28.06c.09-.16-.14-.15-.23-.23-.01-.01.07-.06 0-.11-.03-.02-.06.08-.11 0a.216.216 0 010-.22.568.568 0 01.28-.06.568.568 0 00-.06.28 1.593 1.593 0 01.56.11.794.794 0 01.5-.17c-.3.29-.03.1.06.17 0 0-.05.05-.05.06 0 .29.33.34.45.45-.03.06-.11.11-.06.17.11-.14.22-.2.34-.11a.388.388 0 01-.17.51c.03-.17-.29-.06-.34-.23-.01-.02.14-.15.06-.17-.04-.01-.12.17-.17.17-.08-.13.06-.26-.17-.39-.18.24-.5.21-.5.51a.213.213 0 00-.28.06 1.709 1.709 0 00.62.17 1.053 1.053 0 00.39.06c.06.11.24.17.28.28.02.04-.18.17 0 .22.19-.26.39.15.56.22.08.04.24-.1.34 0 .06.06.02.11.06.17.32-.2-.04-.41.28-.62.06.06.11.02.17.06-.06.32.36.51.62.62.06.13-.27.26-.17.39.17-.08.24.19.39.28.13.08.23.06.34.11-.2.19.09.14.17.28.01.02-.03.05 0 .11.1.17.03.26.11.34 0 0 .16-.06.17-.06a.986.986 0 01.23.11c.09.06.14.16.22.23.11-.14.23-.2.34-.11a.352.352 0 00.23.11c-.04.23.29.28.34.34-.01-.01-.02.08 0 .11a2.63 2.63 0 00.28.39c.24.04.49-.28.73-.05-.3.41.14.66.5.96-.21.11-.07.22-.23.34.08.11.04.26.12.34.03.04.01.12 0 .11.08.1.16 0 .17.17 0 .22.14.18.28.28.34.25.37.55.5.73.07.09.19.06.23.11a.674.674 0 00-.06.17c.04.09.18-.01.22.11-.07.09 0 .19-.05.28a1.542 1.542 0 01.39 1.29 1.019 1.019 0 01.34.79c.17.35.65.35.56.45-.25.19-.18.37-.45.56.2.34.2.67.56 1.01-.02.13-.15.26-.17.39.16.24.06.49.39.73-.05.11-.06.23-.11.34a.474.474 0 00.28.17c-.02.13-.15.26-.05.39.31-.08.05-.44.22-.34.3.41-.18.82.22 1.24.09.09.19-.12.28-.06-.09.13.06.26-.17.39.07.13.2.26.17.39l-.22.22c.14.22.01.45-.22.67a.694.694 0 010 .45c-.31.26-.09.52-.34.79-.04.11.21.23.11.34-.24-.04-.11.21-.23.34.04-.04-.34.11-.34.22a3.055 3.055 0 010 .68 2.25 2.25 0 01-.11.22c-.01.02.01.07 0 .11-.08.35-.68.7-.96 1.07-.06.08 0 .14 0 .22s-.31.29-.34.34c0 .01.03.07 0 .11-.17.28-.16.26-.34.34-.16.07-.37.29-.51.17-.07-.08-.01-.15-.11-.23a1.994 1.994 0 01-.51.62c.09.12.19.06.28.17a3.772 3.772 0 01-.62.84 1.146 1.146 0 01-.45.79c.09.17 0 .34-.06.51-.26.02-.52.3-.79.23-.26.28-.52.44-.79.34-.13.24-.55.48-.84.84-.07.15.33.3.23.45-.13.04-.26-.02-.39-.17-.3.26-.6-.03-.9.45-.28-.23-.56-.06-.84.28a2.46 2.46 0 01-.45-.11c-.23.17-.21.34-.28.51-.19.02-.37-.21-.56 0-.18.15-.05.3-.23.45-.15.03-.2.11-.34.11s-.32-.13-.39-.06c-.1.09-.25.02-.33 0-.3.34-.6.3-.9.56l-.17-.17c-.24.26-.47.1-.56.45-.46-.12-.59-.38-1.01-.56-.25.09-.17.23-.45.45a1.013 1.013 0 00-.79.45c-.13-.21-.07-.15-.28-.28-.09.09-.19-.12-.28-.06.06.06-.03.17-.11.11a3.308 3.308 0 00-.05-.62c-.23.1.06.48-.17.39-.12-.09-.06-.19-.17-.28-.13-.05-.26.29-.39.06.16-.13.22-.26.06-.39a1.024 1.024 0 01-.62-.06c-.24.09-.49.26-.73.17.01-.08-.09-.44-.23-.34.06.09-.06.19-.06.28-.23.04-.47-.21-.56-.45a.474.474 0 01-.28.17c-.19-.15-.35-.08-.62-.17 0 0 .05-.05.05-.06 0-.05-.25-.03-.28-.06-.07-.06-.07.01-.11 0-.07-.02-.1-.14-.17-.17-.05-.02-.15.03-.23 0-.12-.05-.23-.19-.34-.23-.14-.04-.3.14-.39-.06-.01-.27-.33-.33-.51-.51-.11-.04-.23.21-.34.11.24-.46.07-.19-.17-.28.15-.11.2-.22.12-.34-.15-.07-.3.33-.45.23-.03-.06-.02-.11.06-.17a7.046 7.046 0 01-.62-.39c-.1.29-.41.29-.51.62-.13-.2.03-.41.28-.62-.06-.07-.17-.15-.11-.22-.19-.16-.41-.13-.62-.28-.08-.05-.14-.18-.22-.22a1.772 1.772 0 00-.17.06c-.17 0-.27-.17-.39-.28-.15.02-.3.16-.45.11-.28.15-.2.5-.45.34-.17-.44.61-.66.56-1.01-.19.03-.24-.35-.56-.45.15-.09-.15-.21-.2-.32-.01-.11.19-.23 0-.34-.17-.09-.34.04-.51-.06 0-.22-.29-.17-.45-.34.22-.34.04-.5-.28-.73-.3.24-.01.49-.28.73-.15.21-.3-.05-.45.22.14.31.23.73.62.73.16-.19.06-.72.45-.56-.07.19.01.38-.23.56a.479.479 0 00.34.22c-.09.17 0 .34.06.51.26 0 .53-.59.79-.45-.33.19.2.37.11.56-.07.07-.15-.05-.22 0a.217.217 0 01-.22 0c.06-.16-.27-.22-.17-.06.04-.03.07-.06.11 0a3.227 3.227 0 01-.12.47zm5.28 3.37c-.11-.13.02-.26.17-.39.07.16.01.4-.17.39zm15.4-26.98c.04.38-.36.02 0 0zm-17.98 1.58c-.21-.17.09-.56.28-.28a3.7 3.7 0 00-.28.28zm9.33-3.49c-.08-.05.07-.12.06-.17-.02-.12-.2-.19-.11-.34.13-.17.26-.03.4.06a.463.463 0 01-.35.45zm2.13 0a.558.558 0 00-.34.23c-.17-.24-.42-.62-.73-.39-.11-.48.79-.59 1.07-.39-.03.18-.11.36 0 .55zm4.05 1.46c-.26-.2.18-.59.28-.62.3.25-.07.53-.28.62zm7.93 8.72c-.01-.15.15-.3 0-.45l.28-.28a1.088 1.088 0 01-.28.73zm.67-.79l-.11.11c-.15-.09-.03-.19.06-.28.03.06-.01.11.05.17zm-.73-.06c-.3-.31.16-.27.33-.56.17.19-.18.37-.33.56zm-1.29-2.53c-.04-.37.36-.02 0 0zm.73-.39c-.19.33-.38-.02-.56.11-.04-.15.05-.3.23-.45.14.21.33.1.33.34zm-.39-.96c.14.15-.08.34-.23.34a.261.261 0 01.23-.34zm-4.05-2.13c-.08-.08.08-.14.11-.23s-.08-.22-.06-.28c.07-.18.25-.25.34-.45.29.15-.01.3 0 .45a4.429 4.429 0 00.51.06c.06.08-.06.15-.11.23l-.12-.11a1.743 1.743 0 01-.67.33zm4.66 5.79c.14-.15-.18-.3.11-.45-.19-.38-.38.11-.56-.11.23-.2.13-.62.51-.73.26.17.1.34.06.5a1.918 1.918 0 01.23.45c-.25.19-.18.37-.45.56-.24.14.02-.17.1-.22zm.12.45c.1.13.04.26.06.39-.22.09-.31-.29-.06-.39zm.28 1.07l-.11.11c-.17-.15.43-.41.11-.11zm.5-.17c.04.2-.11.59-.28.62-.19-.22.11-.53.28-.62zm.51 4.89c-.01-.09-.11-.19-.06-.28.17-.33.34.04.51-.17a.474.474 0 00.17.28c-.07.25-.26.64-.56.45-.11-.1-.04-.18-.06-.28zm-2.08 7.59c.1-.11-.15-.22-.11-.34.09-.06.19.09.28.17-.11.09-.05.19-.17.28-.06-.04-.03-.08 0-.11zm-.23.45c-.04-.32.43-.03 0 0zm-1.63 1.63c-.09.14-.19.11-.28.17-.15-.17.13-.35.28-.17zm-6.57 4.1l.11.11-.28.28c-.07-.1-.01-.48.17-.39zm-8.27.51a1 1 0 01.51.06l.23-.23c.13.13.07.26.28.39-.19.14-.38-.02-.56.23-.28-.19-.21-.19-.46-.45zm-1.06.28a.318.318 0 01.06-.51c.18.17.04.34-.06.51zm-.45-.68c.13.05.26-.29.39-.05-.09.16-.23.45-.45.45-.18-.14.16-.27.06-.4zm-5.06-3.15c.2.15.06.3-.11.45-.05-.15-.1-.3.11-.45zm-2.03-1.68c-.13-.24.17-.05.23-.11.13.19-.17 0-.23.11zm-.78-.79a.365.365 0 01.11-.34c.08.12.03.23-.11.34zm3.99-15.46c-.24-.09-.1.29-.28.39.01.22.1.45.11.67-.13.13-.26.07-.39.28.1.36.41.18.5.51.28-.17 0-.34.28-.51.15-.11.3.09.45-.11-.03-.17-.11-.34.06-.5.2-.15.3-.1.45-.22.31-.25.23-.42.39-.62.06-.07.14-.03.22-.11s.04-.17.17-.28c.25-.22.5-.32.62-.62.2.21.41.02.62.06.3-.28.49-.73.67-.9.04-.04.11 0 .11 0 .14-.1.04-.18.17-.17.01 0 .23-.11.23-.11.19-.12.19-.04.34 0 .29-.32.68-.64.95-.96.09-.11.1-.36.28-.28a.392.392 0 00-.17.39c.3-.12.6-.02.9-.34.2.28.41-.15.62.17.36-.39.71.01 1.07-.51.25.29.53.29.62.62.08-.06.15-.12.23 0 .16-.11.02-.23.23-.34.17.17.34.1.51.17.11-.05.23-.36.34-.23-.06.07-.17.15-.11.23.3-.15.1.13.28.28.06-.09.11.05.17.05.14.01.2-.18.34-.11.06.09.03.19.17.28.26-.3.53-.2.79.11.15-.2.3-.02.45 0 .07.09 0 .19.06.28.16-.02.2.07.34.11.1.03.26-.01.34.11.24.15.13.3.34.45a.705.705 0 01.73.06c.08.04.04.15.06.17.12.15.32.02.39.17-.06.09.06.19.06.28.09-.07.19.09.28.17.09-.1.13.08.23.11.07.02.2-.1.28.05-.04.26.18.27.17.4 0 .03.1.08.11.11 0 .01-.06.04-.06.06-.01.11.33.21.39.28s.05.16.17.28c.19.19.29.19.45.34 0 .08.1.14.12.23 0 .02-.12.09-.12.11.08.17.3.22.45.45.11-.16.22-.02.34-.22.01.32.33.15.5.17.06.09.03.19.17.28-.13.08-.26-.06-.39.17.02.13.16.26.06.39-.06.07-.12.15 0 .22.14.18.07-.35.28-.17a1.064 1.064 0 010 .56.352.352 0 00.23.11c.06.07.17.01.11.11a.554.554 0 00-.34.22c.19.27.38.27.56.45-.15.2-.4.14-.11.22a6.311 6.311 0 01-.39.84c.11.25.23-.14.34.11-.27.15.08.3 0 .45l.45.45c-.14.15.14.3 0 .45-.1.25-.18.14-.4.39a.213.213 0 01-.06.28c.02.15.16.3.11.45-.2.11-.06.23-.22.34a.424.424 0 010 .45c-.06.07.01.06 0 .11a1.01 1.01 0 01-.39.62c.06.07.17.15.11.23a5.18 5.18 0 00-.11.79.578.578 0 01.06.73c-.13.08-.26.02-.4.17a.758.758 0 01-.17.5 1.578 1.578 0 00-.73.62.593.593 0 010 .23c0 .09.08.19-.06.28-.11-.13-.22-.13-.34 0-.22.13.05.26-.17.39-.01.08.1.14.11.22 0 .03-.11.08-.11.11 0 .07.22.26 0 .34-.09-.08-.19.1-.28-.06-.11.1-.22-.16-.34-.11-.38.26-.19.53-.56.79-.19.12-.37-.09-.56.11-.11.15-.12.3-.34.45-.15-.02-.3.02-.45 0-.17.26-.34.2-.51.39-.09-.14-.2-.04-.28-.06s-.26-.17-.34 0c-.04.11.21.22.11.34-.3.11-.1.12-.11.34-.09-.08-.18.1-.28-.06-.18-.13.35-.26.17-.39-.13.08-.26.02-.39.17-.22.13.05.26-.17.39-.13-.22-.26.12-.39-.17-.15.08-.3.44-.45.34-.15-.13-.09-.26-.17-.4-.21.13-.07.26-.28.4.09.12.19.06.28.17-.15.13-.09.26-.06.39.09-.05.13-.03.23-.11.07-.06.07.01.11 0 .09-.03.22-.14.34-.11-.14.15-.28.3-.11.45a.338.338 0 01.45-.11c-.22.13.05.26-.17.39-.09.06-.19.03-.28.17-.06-.1-.03-.16-.17-.17-.32.3-.58.57-.56.79.01.08-.29.19-.17.28a1.706 1.706 0 00.39-.17c.03-.01.13.07.17.06.15-.05.22-.27.39-.17a.474.474 0 00.28.17c.19-.19.38-.37.56-.11a4.293 4.293 0 00.5-1.07c.36-.03.71-.37 1.07-.28a1.645 1.645 0 011.35-.56c.09-.19.28-.5.51-.28.07-.28.37-.35.56-.56.08-.09.12-.25.22-.34.18-.15.45-.22.62-.39.09-.19-.08-.37.23-.56a.286.286 0 00.28.28c.31-.2.38-.53.56-.79.09-.13.24-.21.34-.34.05-.06.02-.11.06-.17.08-.14.18-.15.17-.28 0-.03.1-.08.12-.11a.845.845 0 01.05-.17c.09-.14.18-.04.17-.17 0-.02.1-.09.11-.11.1-.16.1-.31.23-.45.24-.17.25-.2.56-.45a1.31 1.31 0 010-1.01c-.08-.13-.42-.07-.17-.28.13-.17.07.37.28.06.02-.13-.04-.26.06-.39.11-.16.22-.02.34-.23-.06-.07.03-.15.11-.22.03-.39-.15-.79.06-1.18.26-.02.2-.04.39-.28l-.17-.17c.24-.28-.08-.56.17-.84-.03-.06-.11-.11-.06-.17-.26-.24-.51-.49-.4-.73a1.6 1.6 0 00.23-.45c-.11-.15-.12-.3-.34-.45.07-.07.01-.15.11-.23-.03-.04-.09-.07-.11-.11s-.01-.13 0-.11c-.09-.11-.22-.07-.17-.17.09.07.19-.09.28-.17a1.937 1.937 0 00-.45-1.01c.08-.22.12-.22-.11-.34.11-.26-.06-.52 0-.79l-.34-.34c.04-.22-.12-.28-.23-.34a1.309 1.309 0 01-.39-.51c-.04-.04 0-.11 0-.11-.09-.12-.19-.06-.28-.17.05-.11.36-.23.23-.34a.221.221 0 01-.28-.05.522.522 0 00-.17-.39c-.05-.05.01-.09 0-.11-.29-.49-.47-.38-.84-.51-.2.05-.07.36-.22.22.08-.13-.06-.26.17-.39-.18-.15-.21-.35-.39-.51-.1-.09-.28-.09-.39-.17-.22-.17-.24-.46-.5-.51l.17-.17c-.21-.29-.54-.27-.68-.34-.23-.11-.45-.34-.56-.34a.383.383 0 01-.34-.34 2.911 2.911 0 01-.39.05c-.03 0-.08-.1-.11-.11-.05-.02-.17.02-.22 0a4.73 4.73 0 01-.39-.28c-.01 0-.05.06-.06.06s-.23-.11-.23-.11c-.14-.08-.08-.06-.23 0s-.26-.29-.39-.17c-.07.06-.16-.04-.23-.11-.11-.04-.23.21-.34.11-.11-.24-.12-.13-.34-.34-.11.05-.22.35-.34.22-.11-.24-.12-.13-.34-.34-.33.05-.36.31-.73.28-.02-.37-.37-.12-.56-.45-.06.03-.11.11-.17.06-.22.17 0 .34-.06.51-.33-.16-.36-.48-.73-.62-.15.15-.3.36-.45.22.06-.07.17-.15.11-.22-.31.02-.32.37-.56.56-.09-.05-.13-.03-.22-.11-.06-.06-.07.02-.11 0-.09-.03-.22-.14-.34-.11.08.19.18.37-.11.56 0-.23-.14-.08-.28-.17a.806.806 0 00-.45-.56.982.982 0 00-.62.39c-.15.11-.3-.09-.45.11-.09.06.02.17 0 .22-.04.09-.2.14-.23.23-.02.05.17.17 0 .23-.13.16-.26.22-.39.06.11-.05.47-.34.28-.51-.17-.1-.21.2-.28.28s-.15 0-.22.11c-.01.02.01.2 0 .22.05-.03.11-.02.17.06a.612.612 0 00-.51.28c-.13-.1-.26.04-.39-.06-.07-.09 0-.19-.06-.28-.22.15-.22.3-.34.45-.09-.13-.18-.03-.28-.06-.23.13.03.26-.06.39-.13-.13-.26-.07-.39-.28-.4.56-.79.19-1.18.62.03.06.02.11-.06.17.16.13.22.26.06.39-.19.08-.37-.08-.56.22.17.15.31.3.11.45-.19 0-.38-.08-.56.11.28.49.56-.12.84.17a.533.533 0 01-.23.34c-.13-.17-.26.17-.39-.06-.25.17-.15.34-.39.51-.09-.34-.23-.12-.45-.11-.1-.14.2-.56-.17-.51-.02.2.04.33.02.46zm12.19 16.14a.224.224 0 01-.28-.06c.07-.11.15-.04.23-.11.03.05 0 .11.05.17zm7.43-5.74c.04 0 .08.08.11 0 .07.48-.56.02-.11 0zm.44-4.49c-.07.11-.15.04-.22.11-.13-.09.17-.34.22-.11zm-3.65-7.7a.224.224 0 01-.28-.06.2.2 0 01.28.06zm2.08 2.86l-.17.17c0-.17-.3-.34-.06-.5.17.11.03.22.23.33zm-2.25-2.36c-.02.17.1.34-.17.51-.23-.17 0-.34.17-.51zm1.02 1.69c.11.01.22-.19.34 0l-.34.34c0-.12-.19-.23 0-.34zm-7.26-4.33c.19-.31.37.01.56-.22a.328.328 0 010 .56c-.11-.07-.04-.15-.11-.23-.15-.05-.3.16-.45-.11zm-3.65.28c-.12-.14.02-.28.17-.28.06.09-.1.18-.17.28zm-.39-.17l.34-.34a.5.5 0 01-.22.56.483.483 0 00-.12-.22zm-3.27 1.57l.23.22c-.17.27-.43.66-.73.39.29-.19.26-.4.5-.61zm-.11.79c.04.11-.02.22-.11.34-.22-.12.03-.23.11-.34zm-.78.56c.06.02-.09.28-.17.28-.05 0-.02-.31.17-.28zm.5 26.93c.04.11-.21.23-.11.34.12-.07.06.08.17.17.16-.11.02-.23.23-.34.11.13.22.13.34 0 .13-.09.03-.19.06-.28.13.23.26-.03.39.06.08.17.27.34.17.51-.15-.12-.28.22-.17.28.2-.08.48.18.62.17.03 0 .08.1.11.11.01.01.05-.05.06-.05.04 0 .08.11.11.11.07.01.15-.22.23-.11-.06.08.03.15.11.23l.28-.28c-.15-.13-.09-.26-.06-.39a.294.294 0 010-.45c.03.03.11.02.06-.06-.19.1-.55-.03-.56-.22-.23.2-.45-.01-.68-.11-.11-.11.08-.22-.11-.34a2.092 2.092 0 00-.95.39.575.575 0 00-.62.17c.1.17.21-.02.32.09zm3.82-13.04c.03.02.26-.02.34 0 .15.03.2.12.34.11.11-.05.22-.36.34-.22a.558.558 0 01-.23.34c.23.16.41.45.62.51.15.04.25-.12.39-.06l.22.23c.2-.14.18-.3.28-.39s.32.02.34-.22a.712.712 0 00.62.28.581.581 0 00.22.34c.16-.24.28.11.4.17a1.772 1.772 0 00.17-.06c.03 0 .08.1.11.11.1.03.18.03.28.06-.06.06.03.12.11 0-.3-.09-.14-.23-.22-.45-.19.19-.45-.21-.62-.28-.05-.02-.15.05-.23 0 .01.01.04-.14-.05-.06a.221.221 0 01.05-.28l.17.17c.29-.32.51-.05.67.22.2-.15.06-.34-.11-.34.2-.19.07-.34.11-.45-.01.02.14.03.06-.06-.19.04-.38-.12-.56-.22.08-.21.12-.22-.11-.34.42-.22-.03-.45.23-.68a.68.68 0 01.67.56c.06-.03.11-.11.17-.06-.07.07.05.15 0 .22-.22 0-.29.24-.39.4.09.12.18.05.28.06a2.8 2.8 0 01.28.06c.09.07.19 0 .28.06-.06.08-.12.15 0 .22.3-.15.6-.07.9-.34.11.16.23-.29.34 0 .13.11-.18.22-.23.34-.11-.09-.23-.34-.34-.11-.18.13.35.26.17.39a1.929 1.929 0 01-.34 0c-.04-.01-.26-.02-.28-.06 0 .01.08-.12 0-.11-.13.01-.16.18-.28.17-.06 0-.02-.16-.06-.17l-.5.51a2.46 2.46 0 00.11.45c.19-.07.37.14.56.34.17-.2.56-.01.67-.11.06-.06.07.01.11 0 .11-.04.18-.21.28-.28.17-.12.35-.08.34-.23 0-.07.21-.1.22-.11.07-.04.1-.13.17-.17 0-.17-.14-.34-.06-.51.35.2 1 .04 1.01-.45-.16.08-.14-.14-.22-.22-.1-.09-.31-.09-.4-.28a1.7 1.7 0 00.45-.56c.17-.12.34 0 .51-.17-.04-.17.09-.34.06-.51.08.06.15-.03.23-.11-.15-.34.15-.67.45-1.01 0-.17-.13-.34-.06-.5.21-.16-.16-.4.17-.39a.429.429 0 01-.17-.28c-.57-.03-.74.59-.9 1.01a.4.4 0 00-.34 0c.09.06-.05.1-.06.17 0 .04.12.08.12.11a.392.392 0 01-.12.34c-.17.18-.34-.02-.5.28-.06-.06-.02-.11-.06-.17l-.28.28c.18.22-.02.29.28.39a.224.224 0 00-.06.28c.11-.05.23-.35.34-.22-.1.09.08.13.11.23.02.06-.05.21-.06.28s.15.14.11.23c-.04.12-.23.09-.28.06.28-.24 0-.21-.17-.51-.11.13-.22.13-.34 0-.38.24-.19.49-.28.73-.13.06-.26.4-.39.28.03-.15.17-.28-.06-.28.02-.15.16-.3.11-.45-.09.07-.19.23-.28.17-.21-.13-.15-.07-.28-.28.23-.13-.03-.26.06-.39-.29-.05-.2-.42-.45-.45-.28.19-.2.37-.45.56-.17.01-.34-.24-.5-.39a.244.244 0 01-.22 0c-.21.13-.15.26-.28.39-.09-.06-.19-.03-.28-.17-.15.11-.3.23-.45 0-.35.23-.71.12-1.07.5.19.13 0 .22.11.34 0 0 .19-.03.22 0 .07.05.16.17.11.22-.26.19-.26-.07-.45-.11-.1.08-.19.23-.28.17.03-.3-.26-.13-.34-.22-.03-.04.12-.19.11-.23-.08-.27-.4-.26-.62-.51a.337.337 0 01-.34.11c-.3-.39-.6-.45-.9-.79-.13.17-.26.11-.39-.06-.11.14-.23.2-.34.11.07-.04.01-.07 0-.11-.02-.15.17-.32 0-.45-.15-.07-.3.33-.45.23a.578.578 0 00.06-.17c.01-.05-.13-.04-.11 0-.02-.06-.01-.25-.06-.28s-.23.1-.28-.06a1.614 1.614 0 00-.11-1.01l.17-.17c-.1-.17.1-.34-.17-.51.33-.32-.09-.64-.28-.96.07-.07 0-.15.11-.22-.28-.28-.2-.56-.17-.84-.07-.09-.23-.19-.17-.28.09-.06.19.06.28.06.07-.21.4-.15.28-.28-.14.04-.24-.18-.22-.22.3-.15.1-.3.11-.45.09.13.19.04.28.05a1.907 1.907 0 00.56-.78.5.5 0 00.39-.28c.09-.16.4-.26.28-.39-.03.03-.11.02-.06-.06.07-.09 0-.19.06-.28.09-.15.05-.14.06-.28 0-.08.11-.15.11-.23s-.1-.19-.06-.28l.28-.28c0 .26.24.1.39.06-.06-.08-.17-.15-.11-.23.17-.08.34-.27.5-.17.08.4-.6.45-.39.84.22-.3.63-.3.67 0 .22-.23.45-.08.67-.45.11.15.23-.1.34 0 .34-.34.68-.73 1.01-.23l.28-.28c.11.11-.08.22.11.34.07-.06.15-.12.22 0a.474.474 0 01.28-.17c-.03-.06-.11-.11-.06-.17.08-.08-.05-.15 0-.22.11-.11-.08-.23.11-.34.09.35.23.06.45.11.01.22-.49.45-.23.67.12-.07.06-.23.17-.17.13.1.15.23.23.34.16.21.38.35.45.56a.626.626 0 01.45 0c.15.08.08.05.22 0 .02-.01.14.05.17.05.13 0 .2-.07.22.11.3-.21.26-.41.51-.62-.2-.34-.41.03-.62-.17.21-.35.41-.14.62-.39a1.767 1.767 0 01.17-.73c.07.07.15-.05.22 0a.224.224 0 00-.06.28c.19-.38.04.04.28-.17.05-.21-.05-.22-.22-.34a.5.5 0 00.17-.28c-.11-.27-.56-.31-.62-.39-.01-.01.09-.1 0-.11-.07-.01-.2.19-.28.06 0-.13-.14-.26-.28-.39-.21.01-.41.28-.62.06-.39.2-.55.93-.84.62.07-.13.4-.26.28-.39-.06.03-.11.11-.17.06-.17-.22.05-.45-.22-.68-.26.19-.08.38-.34.56a.318.318 0 01-.06.51c-.11-.31-.12-.06-.34-.23l.28-.28c-.13-.21-.26-.07-.39-.28-.28.28-.67.37-.79 0-.09.23-.29-.07-.39-.06a1.627 1.627 0 00-.23.11c-.12.06-.17.11-.28.17-.12.15 0 .6-.34.56.06-.07.17-.15.11-.22-.11-.04-.22.21-.34.11.06-.01.06-.17.05-.17-.15.11-.54.55-.73.17l-.34.34c-.13-.13-.26-.07-.39-.28-.1.24-.48.09-.39.28.1-.07.1.09.06.17-.17.24-.34.1-.51.28-.05.38-.33.42-.56.79.2.22.06.22-.11.34a.294.294 0 010 .45c-.18-.26-.5.44-.51-.06-.09.21-.3.32-.39.51-.06.11.02.28-.11.34a.568.568 0 00-.28-.06c.15.17-.44.34-.28.51.15-.2.3-.02.45 0 .21-.05.07-.36.23-.23-.03.33-.37.3-.56.45-.08.06-.02.14-.12.22-.07.07-.15.01-.22.11.11.25.22-.14.34.11-.21.15-.39.4-.56.45-.05.02-.17-.18-.23 0l-.17.17c.08.09.2.19.06.28a.8.8 0 00.51.17c.04-.21-.21-.07-.11-.22.19-.1.37-.26.56-.23.07.17.33.34.06.51.15.2.3-.04.45.22-.08.13-.2-.06-.28-.05s-.14.2-.23.11c-.21 0-.15-.14-.28-.28-.21.19-.41 0-.62.28.09.28.28.56-.05.84.4.35.08.59.17.96-.01-.06.34.16.11.22a.461.461 0 01-.34.22c-.04.11.21.23.11.34-.3.15-.05.3-.22.45.03.05.11.11.06.17.2.15.41.08.62.28a.353.353 0 00-.11.22c.23.22.29.63.56.67-.22.19.12.38.12.56a.374.374 0 01.5.17.452.452 0 01.45 0c-.06.1-.03.19-.17.28.3.17.1.34.28.51s.38-.19.56.11c-.09.06-.19.03-.28.17.11.21.22.07.33.23-.16.31.08.24.17.39.03.05-.1.22.06.28.07-.15.15 0 .23 0s.18-.09.28-.06a.333.333 0 01.11.23c.17-.2.27-.17.45-.11.03-.02.03.2.06.22zm7.88-3.04c.04-.16.23-.21.22 0s-.27.2-.22 0zm-1.92 1.91c.22-.19-.03.3-.12.11-.22.04.04-.01.12-.11zm-.05.62c-.11-.09-.05-.19-.17-.28.17-.15.4.13.17.28zm-.29-.5c.03.06 0 .11.06.17l-.11.11c-.15-.1-.03-.19.05-.28zm-2.08.5c.15.11-.1.22 0 .34-.2.1-.2-.26 0-.34zm-1.57.34c.25-.28.49-.25.73-.39.23.13-.03.26.05.39-.09.15-.19.03-.28-.06-.25.15-.2.4-.39.39-.05-.11-.05-.22-.11-.33zm1.01-12.03c-.04.06-.07.03-.11 0-.08-.06-.24.09-.17.17-.32.09-.02-.29-.06-.39.12-.14.23.17.34.22zm-.56-.79c.09.11.03.22-.11.34-.23-.11.03-.23.11-.34zm-.73.4a.533.533 0 01.34-.23c.04.08-.05.44-.22.34zm.56.11c.05 0 .01.31-.17.28-.05-.02.1-.28.17-.28zm-.78-.23a.579.579 0 01-.22.67.409.409 0 01.22-.67zm0 1.58c-.22.07-.45.31-.68 0 .23-.14.45-.36.68 0zm-1.41-1.52c.13.11-.17.22-.23.34-.13-.15.08-.34.23-.34zm.28.73a.234.234 0 01-.11.45c.02-.15-.03-.3.11-.45zm-.9.11l-.11.11c-.17-.14.44-.4.11-.11zm-.22.68c-.13-.15.18-.21.23-.23.13.24-.08.18-.23.23zm-.28-.62c.18.19.05.38-.11.56-.13-.19-.26-.54.11-.56zm-.56 1.12c.17-.22.33.27.5.17.05.07-.07.15 0 .23-.29.12-.43-.3-.5-.4zm-.17.73c.02-.21.08-.07.23-.23.25.18-.06.49-.23.23zm-.57.12l.11-.11.11.11-.11.11zm.79 6.97l.11.11c.08-.08.15-.17.23-.11l-.17.17c-.08-.09-.42.05-.17-.17zm1.86 2.08c.11-.05.22-.06.34-.11.09.17-.26.31-.34.11zm-1.35-.34c-.21.18-.15-.16-.28-.06-.06-.04-.03-.07 0-.11l.11-.11c.14.09.11.18.17.28zm9.78-9.89c-.06.03-.11.02-.17-.06a2.669 2.669 0 01-.34.11c-.03 0-.07-.11-.11-.11s-.08.1-.11.11-.13-.06-.17-.06c-.12.02-.17.13-.28.17-.13-.23-.26.11-.39-.05-.26.25-.27.17-.45.45-.2-.14-.41-.01-.62.05a.437.437 0 01.11.34c0 .02.06.04.06.06s-.12.08-.11.11c.02.09.19.14.22.22s-.12.21-.06.28c.1-.08.18.1.28.17.06.04.12.02.17.06a5.767 5.767 0 00.51.39.191.191 0 01.11 0c.17.07.3.2.45.22-.06.11-.06.23-.11.34.08.09.2.19.05.28a1.129 1.129 0 01.39.51c.05.05-.01.1 0 .11.05.08.43.12.17.28-.03-.03-.11-.02-.06.06.02-.03.09-.06.11 0a1.1 1.1 0 01-.34 1.01c.03.28.07.2.22.45-.35.2-.13.41-.06.62.16-.21.4-.3.39-.06.29-.28.46-.8.84-.51.1-.25.17-.2.39-.39-.03-.06-.02-.11.06-.17a.224.224 0 01-.06-.28c-.09-.12-.19-.06-.28-.17.22-.24-.14-.49.17-.73.06.11-.13.23.11.34.31-.13-.03-.26.06-.39.06-.1.03-.19.17-.28-.09-.15-.02-.3-.23-.45l.17-.17c-.25-.17.09-.34-.06-.51-.09.07-.19-.08-.28-.17.04-.13-.02-.26-.17-.39.18-.13-.1-.22-.11-.34-.01-.08.18-.2.06-.28-.25.03-.15-.25-.39-.28a.86.86 0 00-.31-.89zm.11 3.48c-.02.09.07.19-.06.28-.13-.17-.04-.34.06-.51.02.08.05.16 0 .23zm-14.9 6.58c.18.08.04.44.22.34-.06-.07.03-.15.11-.22-.06.23.35.17.22 0-.03.03-.11.02-.06-.06-.11-.19-.23 0-.34-.11.06-.17.11-.34.17-.51a.612.612 0 00-.51-.28c.18-.21.01-.41.17-.62l-.51-.51c-.01-.11.19-.23 0-.34-.15.22-.3.11-.45 0l.34-.34c.07.06.15.12.22 0-.03-.06-.02-.11.06-.17-.19-.34-.52-.68-.45-1.01-.24-.1-.26-.18-.28-.39-.11.09-.23-.16-.34-.11.32-.22.19-.45.11-.67-.07.06-.15.17-.22.11.04-.05-.02-.36-.11-.23-.12-.07.02-.4.17-.28.07.08-.05.15 0 .23.36-.28.44-.56.73-.84-.15-.12-.34-.12-.34-.34-.34.48-.68-.13-1.01-.11l-.39.39c.27.19.2.37.45.56-.16.19-.13.37-.22.56.2.13.41.08.62.39-.06.05-.02.11-.06.17a1.1 1.1 0 00-.45 1.01c.05.14.24.12.28.17.03.03-.05.1.05.17s.28-.03.4.17c-.03.06-.11.11-.06.17.11-.14.23-.2.34-.11-.44.47.29.76.11 1.12-.09.12-.19.06-.28.17.21.13.07.26.28.39.14-.14.12-.35.17-.39.09-.1-.14-.26.11-.34.06.09.03.19.17.28-.33.24.14.49-.06.73-.26-.09-.17.59-.51.51-.05-.13.29-.26.06-.39a.261.261 0 00-.23.34c.13-.09.09.16.17.28 0-.01.14-.04.06.06.24.11.13.12.34.34a.815.815 0 01.75-.29zm-1.85-6.13c.06.05.1.13.17.17a.588.588 0 00.23 0c.11.13-.04.19.06.39-.15.14-.3-.14-.45 0-.01-.18-.3-.37-.01-.56zm.56 2.47c-.09.16-.19-.03-.28.06-.12-.16.21-.3.28-.06zm-2.92 6.19c-.07-.07.05-.15 0-.23-.33.07.06-.33 0-.45-.11.1-.23-.14-.34 0-.04.11.21.22.11.34-.13.06-.26.4-.39.28-.1-.02.06-.16.06-.17-.05-.1-.2-.07-.23-.11.02.03.01-.25 0-.23.02-.04.09-.07.11-.11.05-.11.35.08.22-.11-.09.06-.19-.06-.28-.06-.16.11-.02.23-.23.34-.05.09.17.19.17.28 0 .02-.12.09-.11.11.06.16.24.21.28.39.22-.35.42-.06.63-.27zm-.79-1.01c.19-.19.25.07.39-.06s.35.09.45-.11c-.14-.21-.07-.15-.28-.28-.08.06-.15.17-.23.11.06-.08-.03-.15-.11-.23-.1.33-.48-.04-.4.17.33 0-.09.24.18.4zm3.2-4.11c.06.1.03.16.17.17-.14.13-.16.55.06.51-.1-.15.32-.3.11-.45-.27.1-.01-.46-.34-.23zm-4.04 3.38c-.11.08-.12-.27-.34 0 .08.13.44.13.34 0zm-.51-6.92c-.03-.06-.02-.11.06-.17-.12-.21-.23-.07-.34-.23.27-.22-.08-.22 0-.34-.01-.23.24-.21.39-.28-.06-.24-.08-.49.22-.45.06.08.03.2.17.06-.01-.32-.46-.33-.68-.45-.09-.05 0-.2-.17-.17-.17.21-.38.29-.28.39.13.14-.19.28-.05.39.22-.26.45-.37.67-.23l-.34.34c-.07-.06-.15-.12-.22 0a.224.224 0 00.22.23 4.454 4.454 0 00-.05.5c-.03.11-.16.17-.06.28.16-.19.31.23.46.13zm-.9-.79c-.1-.13-.04-.26-.05-.4-.15.11-.15.49.05.4zM20.341.17c.27.29.18.33.45.34.05 0 .12-.05.17-.06s.08.11.11.11.08-.1.11-.11.13.06.17.06c.11-.02.18-.16.28-.06-.03.06-.02.11.06.17l.28-.28-.23-.23c-.25.01-.2.1-.39.17-.19-.19-.38-.11-.56-.11a.12.12 0 00-.06-.17c-.13.09-.55.01-.5.17.03-.03.07-.06.11 0zm.62.62c.12-.14.52.02.45-.22-.12.13-.52-.03-.45.22zm-10.91 7.64c.03-.07.22-.15.23-.23s-.26-.1-.28-.06c.19.23-.22.45-.11.67.13.01.12-.26.16-.38zm3.6 21.03c.08.01.19-.29.28-.17a.511.511 0 00-.23.34c.17.17.34.05.51.17-.07.12.08.06.17.17.07.08.02.19.17.28.13-.01.23.09.34.11.04.01.12-.07.17-.06s.11.16.17.17c.09.02.19-.07.28-.06s.17.15.28.17c.05.01.28-.23.34 0 .08.1-.1.19.06.28.41.38.82.17 1.24.22-.09.11-.03.22.11.34s.3-.09.45.11a.824.824 0 01.62-.17 1.3 1.3 0 01.51.28c.14-.28.25.04.39.06.08.01.2-.06.28-.06.17 0 .35.09.45 0s.09.05.17.06.2-.18.28-.06c.15.16.21.02.23.22a3.578 3.578 0 01.62-.17l-.28-.28c.23-.13-.11-.26.06-.4.21-.11.07-.22.22-.34.01-.1-.22-.23-.23-.34 0-.02.12-.1.12-.11-.07-.13-.21-.09-.34-.23-.1-.1-.06-.28-.23-.34-.18.05-.38.24-.56.11l-.23-.22a.605.605 0 01-.73-.06l-.28.28c-.15-.27-.3.08-.45 0-.3-.24-.6-.12-.9-.11-.2-.15-.14-.3-.22-.45a4.48 4.48 0 01-.73-.05.479.479 0 01-.51.17c-.06-.21-.11-.1-.23-.34-.11-.09-.31.01-.34 0s-.04-.17-.06-.17c-.14 0-.13.14-.34.11-.07-.08 0-.15-.11-.22-.23.11-.35.42-.68.45-.14-.21.12-.41-.05-.62-.07.08-.15-.05-.22 0-.08-.07-.15.05-.23 0 .07-.22-.33-.17-.45-.34.03-.13.18-.26-.05-.39-.32.34-.1.71-.56.9-.12-.17-.12-.31-.34-.11-.06.11.25.14.17.28a.213.213 0 01.28.06c.15.21.06.41.28.62a.373.373 0 01.33-.09zm5.62 1.12c-.08.11-.15.04-.23.11-.12-.08.18-.33.23-.11zm-3.93-1.01c.05.05-.02.11-.06.17l-.11.11c-.06-.09.09-.19.17-.28zm-9.5 4.66c.15.17-.03.34.06.51.12-.07.06.08.17.17.12-.09.06-.19.17-.28.43.14.33.63.79.34-.37-.11-.23-.46-.39-.73a.568.568 0 01-.28.06c-.13-.08-.05-.22-.17-.28-.24-.13-.36.09-.34-.11.01-.07-.11 0-.11 0-.04-.01-.05-.15-.06-.17-.13-.22-.21-.1-.34-.22-.06-.06.01-.08 0-.11-.05-.1-.18-.07-.22-.11-.09-.1-.07-.33-.3-.3-.19.11 0 .23-.11.34a1.868 1.868 0 00.45.22.693.693 0 00.17.73c.17-.11.34-.24.51-.06zm-.23-16.97c.1-.13-.04-.26.06-.39.34-.22.1-.45.34-.67-.18-.07-.03-.28-.06-.39s-.28-.2-.11-.34c.26-.19.21-.37.22-.56-.07.06-.15.11-.22 0 .27-.36.33.04.51.06.37-.39.26-.79.28-1.18.11.09.22.03.34-.11-.11-.29-.23.16-.34 0-.07-.21-.2-.15-.17-.28a1.32 1.32 0 01.39.06c.13-.21.26-.07.39-.28.07-.08-.05-.15 0-.23.29-.17.26-.5.51-.51-.1-.13.04-.26.06-.39.17.02.34.1.51-.06s.19-.37.28-.51c.08-.12.17.02.17-.17 0-.12.24-.23.11-.34-.27.07-.35.52-.73.39a1.7 1.7 0 01.45-.56c-.03-.06-.11-.11-.06-.17-.2-.23-.41.17-.62-.06.06-.08.17-.15.11-.23-.2.2-.35.12-.5.28-.11.11-.03.38-.28.5a.56.56 0 010 .56c-.17-.01-.34.24-.51.39-.19-.28-.37.13-.56.11a.793.793 0 01-.17.62c-.13.16-.26-.17-.39.06a1.837 1.837 0 00-.28.73c.27.28.65.56.62.84a.452.452 0 01-.45 0c-.08.06-.15.17-.23.11a1 1 0 00-.17.51c-.01.1-.12.13-.11.22s.15.18.17.28c.19-.17.38-.29.56-.11-.16.37-.4.09-.56.11-.04.01-.07.1-.11.11s-.13-.07-.17-.05c-.12.03-.17.12-.28.17.08.22-.08.36.22.45-.03.05-.02.11.06.17.03.12-.14.16-.17.28s.21.32-.06.41c.2.11 0 .23.11.34.28-.38.56.08.84-.17zm1.97-5.57c.14.1.03.19-.06.28a.226.226 0 01.06-.28zm-1.74 1.41c.17-.02.34-.1.51.06.04.11-.21.22-.11.34-.22.16-.31-.24-.4-.4zm-.06 1.97c.01.02-.02.22-.11.22s.06-.39.11-.22zm-.62 1.51c.16-.13-.17-.26.06-.39a.474.474 0 00.17.28l-.23.23c-.05-.04-.03-.08 0-.12zm9.9-15.06c.03-.01.14.08.17.06.12-.07.2-.23.34-.34a1.3 1.3 0 01.51.28c.28-.17.55-.38.56-.67-.32-.37-.64-.11-.96-.28l-.28.28c-.12-.15-.33.01-.45 0-.1-.01-.18-.25-.28-.06-.12.09-.06.19-.17.28.06.21.11.1.22.34-.08.09-.2.19-.06.28.16.16.31-.14.4-.17z" data-name="Path 3623" fill-rule="evenodd"/></svg>', underline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.49 10.035"><g data-name="Group 712"><path d="M269.822 1962.421c-.031.288-.048.652-.056 1.059z" class="cls-1" data-name="Path 4533" transform="rotate(90 1155.514 887.192)"/><path d="M269.51 2065.3a3.555 3.555 0 0 0-.1-1.139c.03.718.059 1.309.1 1.139z" class="cls-1" data-name="Path 4534" transform="rotate(90 1196.262 927.94)"/><path d="M268.994 2082.681l.032-1.024a4.731 4.731 0 0 0-.032 1.024z" class="cls-1" data-name="Path 4535" transform="rotate(90 1203.238 934.917)"/><path d="M269.766 1963.48l-.147 2.72c.153.19.113-1.394.147-2.72z" class="cls-1" data-name="Path 4536" transform="rotate(90 1156.146 887.825)"/><path d="M269.387 1918.595v-.827a6.818 6.818 0 0 0-.19-.687z" class="cls-1" data-name="Path 4537" transform="rotate(90 1137.405 869.084)"/><path d="M269.315 1884.149a1.969 1.969 0 0 0 .554 1.348 5.749 5.749 0 0 1-.272-1.7c-.076-.011-.166.091-.282.352z" class="cls-1" data-name="Path 4538" transform="rotate(90 1115.444 847.122)"/><path d="M269.983 1828.99l-.024-.431z" class="cls-1" data-name="Path 4539" transform="rotate(90 1084.833 816.512)"/><path d="M269.991 1829.125l-.008-.135z" class="cls-1" data-name="Path 4540" transform="rotate(90 1084.833 816.512)"/><path d="M270.014 1829.528l-.023-.4z" class="cls-1" data-name="Path 4541" transform="rotate(90 1084.833 816.512)"/><path d="M269.3 1943.25a.7.7 0 0 0-.141.314c.05 0 .098-.124.141-.314z" class="cls-1" data-name="Path 4542" transform="rotate(90 1147.758 879.436)"/><path d="M270.421 1787.694l.391-.03a.9.9 0 0 0 .085-.315z" class="cls-1" data-name="Path 4543" transform="rotate(90 1084.833 816.512)"/><path d="M268.486 2114.5l.007-.142c-.045-.84-.037-.367-.007.142z" class="cls-1" data-name="Path 4544" transform="rotate(90 1216.046 947.725)"/><path d="M277.714 2319.92c-.355 3.308-.456-5.385-.85-.4.155-.468.619 4.524.85.4z" class="cls-1" data-name="Path 4545" transform="rotate(90 1314.58 1046.26)"/><path d="M268.9 2187.053c-.04.025-.09.194-.174.747a3.6 3.6 0 0 0 .174-.747z" class="cls-1" data-name="Path 4546" transform="rotate(90 1245.349 977.027)"/><path d="M269.289 2133.19l-.053 1.351c.036-.535.049-.97.053-1.351z" class="cls-1" data-name="Path 4547" transform="rotate(90 1223.945 955.623)"/><path d="M269.253 2216.748a10.876 10.876 0 0 0 0 1.394c.02-.093.034-.185.048-.3a6.1 6.1 0 0 1-.048-1.094z" class="cls-1" data-name="Path 4548" transform="rotate(90 1257.424 989.102)"/><path d="M269.253 2216.748c.01-.176.022-.359.032-.593a12.26 12.26 0 0 0-.032.593z" class="cls-1" data-name="Path 4549" transform="rotate(90 1256.946 988.624)"/><path d="M269.287 2245.668c.031-.157.053-.363.08-.545l-.021-.935z" class="cls-1" data-name="Path 4550" transform="rotate(90 1268.442 1000.121)"/><path d="M269.585 2221.232c-.009-.037-.019-.064-.03-.064a.644.644 0 0 0 .03.064z" class="cls-1" data-name="Path 4551" transform="rotate(90 1258.79 990.47)"/><path d="M268.644 2112.562c0-.417-.014-.815-.033-1.175.007.492.018.876.033 1.175z" class="cls-1" data-name="Path 4552" transform="rotate(90 1215.173 946.851)"/><path d="M277.76 1892.013c.067-1.043.366-.438.6-1.128-.309.142-.442-.363-.324-.958l-.4.837c-.459-1.458.725-1.26.27-2.73l.272.465c-.161-.754.005-2.782-.689-3.521.1-.133.336-.31.4.022.1-1.8-.739-4.012-.311-5.413l.211.137c-.061-.336-.4-.585-.185-1.006.088.022.211.135.224-.02a2.567 2.567 0 0 1-.247-1.339l.237.38c.277-1.758-.578-2.7-.723-4.172.622 0 .824-1.379.924-2.07l.088.024c.077-2.047-.515-3.477-.759-5.373.675-1.177.282-3.986.661-5.877-.113.289-.485-.047-.547-.383.126-.444-.431-1.227.139-1.156l-.011.158c.559-.334.41-1.247.426-1.959l-.746-.117c1.085-1.863-.4-4.881.573-5.9-.186-.449-.184-1.006-.371-1.452l.4.024a19.128 19.128 0 0 0 .057-3.407l.286.314c.026-.868-1.153-1.1-1.176-1.9l.6-.241c-.01-1.515.514-3.048-.027-4.545a.332.332 0 0 1 .284.314c.015-.69.379-2.626-.339-2.517.4-.167-.037-1.589-.259-2.364l.394.127a2.635 2.635 0 0 1-.78-1.677c.051-.229.315-.2.214.1.206-.762-.373-.594-.163-1.517l.251.344c.031-.784-.1-.721-.4-1.153-.158-.493.1-1.486.455-1.6a.962.962 0 0 1-.405-1c.135-.062.218.106.259.19.268-1.31-.458-1.948-.071-2.849a.286.286 0 0 0 .235-.152c-.009.955-.028 1.738-.053 1.8.357-.011.423-.835.921-.171a5.439 5.439 0 0 1-.7-2.648.429.429 0 0 1 .125-.108l.041.085a.926.926 0 0 0-.059-.518 3 3 0 0 0 .109-.679c.3-.1.162-.964.177-1.383-.393.034-.336-.5-.651-.015.023-.013.039.129.054.373a.64.64 0 0 0 .041.179l-.035-.028.027 1.042a1.093 1.093 0 0 1-.152-1.141 8.583 8.583 0 0 1-.64-.585c.554-.574.853-1.68 1.194-1.833-.222-1.28-.147-3.016-.893-3.82-.1-.364.214-.418.332-.554.075.21.063.46.17.574-.191-.727-.074-2.156-.6-2.329.235-.917.479.515.394-.745l.159.17c.833-2.479-1.33-4.031-.26-6.779-.066.19-.1.286-.184.325.472-3.134-.442-6.458.306-9.55.15-.879-.183-.974-.436-1.511l.427-.191-.492-.917c-.36-1.3 1.047-2.252.365-3.9l-.287.212c.054-.591-.17-1.873.161-1.774-.053-.061-.3-.194-.149-.425l.223-.018-.383-1.453c.08-.552.294-.52.5-.541a.337.337 0 0 0 .278-.149l.028-.048.026-.086.044-.235a6.792 6.792 0 0 0 .053-.732h-.415c-.887.006-1.965.021-3 .04-.3 0-.423.01-.594.015l-.491.016-.928.035c-1.161.048-1.952.1-1.548.12a16.811 16.811 0 0 1 2.282.1l-1.491.025a.2.2 0 0 0-.135 0l-.341.006a.792.792 0 0 1-.079.035h-.312v.116c-.12.051-.17.1 0 .148v6.339l-.109-.067.109.2v.854c-.084-.026-.156-.107-.19-.275-.29.62.209.549-.115 1.081-.051.059-.079.032-.1-.022l.175.606c-.124-.119-.415.1-.33-.271-.339 1.087.441 1.753-.005 2.163l-.036-.091c.149 1.128.316.651.6.811v.706l-.729.522.431.148c-.015.156-.048.464-.22.407.295.579.187-.1.466.237-.393.749.184 2.066-.5 2.234.327.269.253-.716.481.083-.739.228.126.924-.213 1.609-.381-.21-.18-.858-.52-.174.645.413-.141 1.333-.017 1.91.513.027.214 1.255.385 2.224-.173-.061-.282 1.823-.468 2.724l-.086-.027c.519.175.421 1.1.528 1.781-.311-.026-.433-.148-.572-.515v.636a1.142 1.142 0 0 1 .313.761l-.388-.16a8.853 8.853 0 0 1 .2 2.795c.245.042.619-.369.911-.281v.589a.309.309 0 0 1-.273-.238c.026.1.163.352.079.551l-.329-.46c-.144.5.275.26.244.656-.279-.008-.2.294-.42.237-.027-.1.116-.346.006-.5a2.122 2.122 0 0 1-.427 1.167c.159-.039.376 0 .412.328.02.847-.335.29-.479.784.194.2-.007.745.41.759 0 .248-.2.294-.309.389.183.438.052 2.047.5 1.553l.029-.112.018.072c.415 1.437-.236 2.984-.057 4.409h-.14a12.046 12.046 0 0 0 .394 2.5c0 .252-.254.594-.421.486a2.73 2.73 0 0 1 .032 1.663c-.244-.654-.216.226-.178-.67-.121.845-.344 1.037.037 1.944-.357-.309-.45.636-.343 1.038l.256-.592a6.231 6.231 0 0 1-.011 1.248l-.469-.217c-.572 1.729.972 3.119.015 4.435.329.458.232-.939.616-.53-.063.8-.738 1.624-.739 1.874-.26 1.089.686 1.017.509 2.157.167-.146.614-.284.772.569-.062.8-.7.978-.837.476-.014-.191.039-.283.1-.275-.061-.257-.133-.594-.315-.279l.168.1c-.171.395-.153 1.49-.428 1.233.159.6.275.257.362-.188-.243 1.021-.008 1.6-.171 2.646.092-.167.289-.321.288-.155-.208 1.541.318.679.391 1.723-.255.594-.61-.213-.4.839-.173.642-.445.136-.581-.119.323.958-.213 1.79-.272 2.337l-.135-.5a2.852 2.852 0 0 1 .077.8l.335-.288c-.058.3-.059.547-.2.542.22.305.558-.234.858.372-.17.395.183 1.2-.262 1.339.137-1.126-.341-.1-.486-.678a2.01 2.01 0 0 1-.041.511c-.049.045-.092-.042-.117-.123-.4 1.188.5.546.493 1.778-.251-.156-.476.286-.423.486.006-.5.419-.237.611.218-.2.79.145.858.122 1.272l.092-.472c.251.16.218.555.3 1.106-.2.047-.134-.5-.22-.3.44.611-.457 1.381-.16 2.234-.169.4-.471.038-.586.385.325.955-.343 1.035-.075 2.039.337-.289.255-.34.583.367l-.237-1.651.49 1.059c.005-.5-.212-1.051-.155-1.35.275.5.192.453.471.214-.505.682.3 1.352-.047 2.14l-.834-.024c-.372 1.185.428 2.1.218 3.644l.145-.495c.332.206.047.95.181 1.448-.279-.046-.38.265-.554.478.207-.026-.019 1.126.538 1.266l-.367.687c-.15 1.242.794 1.418.7 2.612-.3-.36-.5.183-.718-.617 0 .4-.054.757.14.763-.175.233.375 1.105.11 1.472.123.168.415.223.392.671a.1.1 0 0 1-.108.011c.117.091.181.658.466.3-.87 1.228.063 3.433-.684 4.5.094.87.183 1.919.2 2.708-.084-.051-.139 0-.11-.152-.26 1.09.8.67.511 1.91-.451.634-.244-.658-.415-.263-.917.172.125 1.5-.411 2.331l-.053-.2c-.312.638.347 1.556.282 2.6 0 0-.082-.051-.139-.006a8.406 8.406 0 0 1 .753 3.064c-.359-.312-.19-.455-.555-.265.052.449.586-.132.688.765-.2.292-.368.939-.758 1.025l-.021-.846c-.5.433.018 1.1-.07 1.541l-.22-.057c.071 1.3.626 1.315.587 2.708l.167-.144c.549.762-.31.639.1 1.4l-.558.23a20.139 20.139 0 0 1 .644 2.662 9.117 9.117 0 0 1-.87-2.218 4.2 4.2 0 0 0 .316 1.952c-.054-.2-.191-.454-.1-.652a3.236 3.236 0 0 1 .49 1.061 4.406 4.406 0 0 1 .12.638l.028.346c.01.118 0 .268.007.406-.3-.036-.455.207-.539.662a196.6 196.6 0 0 0 1.675.019l1.9.01 4.187.014.044-.576.033-.276.02-.128.023-.084a1.085 1.085 0 0 1 .306-.531c-.4-1.756.171-3.483.107-5.53-.841.726-.024-.6-.888-.471-.054-.473-.041-.655.014-.7l-.036.1.041-.1.515-1.442c.244-.344.183.452.376.408zm.01-68.812c.057.279-.021.372-.1.41a68.447 68.447 0 0 0-.047-.488c-.015-.008-.032-.025-.049-.033a.5.5 0 0 1 .196.11zm-7.411-28.31a.3.3 0 0 1 .062-.081v.357c-.021-.087-.043-.177-.062-.276z" class="cls-1" data-name="Path 4553" transform="rotate(90 1084.833 816.512)"/><path d="M277.23 1994.5l-.007.005c.003.036.005.027.007-.005z" class="cls-1" data-name="Path 4554" transform="rotate(90 1168.207 899.885)"/><path d="M277.186 1967.506l.01-.075a.4.4 0 0 0-.01.075z" class="cls-1" data-name="Path 4555" transform="rotate(90 1157.395 889.073)"/><path d="M277.25 1969.288c-.009-.2-.026-.311-.029-.572a25.78 25.78 0 0 0-.09.828l.125.492-.006-.748z" class="cls-1" data-name="Path 4556" transform="rotate(90 1158.067 889.746)"/><path d="M269.822 1962.421a2.878 2.878 0 0 1 .056-.388 2.078 2.078 0 0 1-.047.2z" class="cls-1" data-name="Path 4557" transform="rotate(90 1155.276 886.955)"/><path d="M269.738 1862.129l.115-5.407c-.153.945-.36 2.188-.4-.271-.453 6.816.347-1.407.285 5.678z" class="cls-1" data-name="Path 4558" transform="rotate(90 1107.19 838.869)"/><path d="M269.515 1878.9c-.071-2.906-.222.034-.309-.12.14 1.84.175 2.286.309.12z" class="cls-1" data-name="Path 4559" transform="rotate(90 1113.608 845.287)"/><path d="M269.514 2000.067l-.361-.292c.047 2.239.14.025.361.292z" class="cls-1" data-name="Path 4560" transform="rotate(90 1170.46 902.139)"/><path d="M268.808 2036.913l-.052-.978.131 3.736z" class="cls-1" data-name="Path 4561" transform="rotate(90 1185.411 917.09)"/><path d="M268.936 2240.418l.445-.677c-.081-1.514-.581-1.831-.445.677z" class="cls-1" data-name="Path 4562" transform="rotate(90 1266.308 997.986)"/><path d="M269.389 2328.272a17.869 17.869 0 0 0-.147 4.951c.031-1.975.205-3.945.147-4.951z" class="cls-1" data-name="Path 4563" transform="rotate(90 1314.58 1046.26)"/><path d="M277.828 2134.727l.149 1.767-.124-3.33z" class="cls-1" data-name="Path 4564" transform="rotate(90 1224.416 956.095)"/></g></svg>', "write-icon": '<svg xmlns="http://www.w3.org/2000/svg" width="28.934" height="28.933" viewBox="0 0 28.934 28.933"><defs><style>.cls-2{fill:#fff}</style></defs><g id="Group_391" data-name="Group 391" transform="translate(0 -.002)" opacity=".406"><path id="Path_3625" d="M10.291 83.485H3.1v17.568h17.561v-7.2h3.08v10.3H0V80.41h10.291z" class="cls-2" data-name="Path 3625" transform="translate(0 -75.211)"/><path id="Path_3626" d="M173.169 51.97l-3.8-3.805L181.227 36.3l3.8 3.808z" class="cls-2" data-name="Path 3626" transform="translate(-158.425 -33.952)"/><path id="Path_3627" d="M121.354 247.33l3.3 3.323-5.221 1.921c.655-1.792 1.29-3.524 1.921-5.244z" class="cls-2" data-name="Path 3627" transform="translate(-111.712 -231.344)"/><path id="Path_3628" d="M376.71.738a2.73 2.73 0 0 1 3.848 3.87z" class="cls-2" data-name="Path 3628" transform="translate(-352.365)"/></g></svg>' });
    }return "undefined" != typeof window && window.UIkit && window.UIkit.use(c), c;
  });;
  ;
  /*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
  window.Choices = function (e) {
    var t = {};function i(n) {
      if (t[n]) return t[n].exports;var s = t[n] = { i: n, l: !1, exports: {} };return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
    }return i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var n = Object.create(null);if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var s in e) {
        i.d(n, s, function (t) {
          return e[t];
        }.bind(null, s));
      }return n;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "/public/assets/scripts/", i(i.s = 4);
  }([function (e, t, i) {
    "use strict";
    var n = function n(e) {
      return function (e) {
        return !!e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      }(e) && !function (e) {
        var t = Object.prototype.toString.call(e);return "[object RegExp]" === t || "[object Date]" === t || function (e) {
          return e.$$typeof === s;
        }(e);
      }(e);
    };var s = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;function r(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? l((i = e, Array.isArray(i) ? [] : {}), e, t) : e;var i;
    }function o(e, t, i) {
      return e.concat(t).map(function (e) {
        return r(e, i);
      });
    }function a(e) {
      return Object.keys(e).concat(function (e) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
          return e.propertyIsEnumerable(t);
        }) : [];
      }(e));
    }function c(e, t, i) {
      var n = {};return i.isMergeableObject(e) && a(e).forEach(function (t) {
        n[t] = r(e[t], i);
      }), a(t).forEach(function (s) {
        (function (e, t) {
          try {
            return t in e && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
          } catch (e) {
            return !1;
          }
        })(e, s) || (i.isMergeableObject(t[s]) && e[s] ? n[s] = function (e, t) {
          if (!t.customMerge) return l;var i = t.customMerge(e);return "function" == typeof i ? i : l;
        }(s, i)(e[s], t[s], i) : n[s] = r(t[s], i));
      }), n;
    }function l(e, t, i) {
      (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || n, i.cloneUnlessOtherwiseSpecified = r;var s = Array.isArray(t);return s === Array.isArray(e) ? s ? i.arrayMerge(e, t, i) : c(e, t, i) : r(t, i);
    }l.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error("first argument should be an array");return e.reduce(function (e, i) {
        return l(e, i, t);
      }, {});
    };var h = l;e.exports = h;
  }, function (e, t, i) {
    "use strict";
    (function (e, n) {
      var s,
          r = i(3);s = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;var o = Object(r.a)(s);t.a = o;
    }).call(this, i(5), i(6)(e));
  }, function (e, t, i) {
    /*!
     * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
     * 
     * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
     * All Rights Reserved. Apache Software License 2.0
     * 
     * http://www.apache.org/licenses/LICENSE-2.0
     */
    e.exports = function (e) {
      var t = {};function i(n) {
        if (t[n]) return t[n].exports;var s = t[n] = { i: n, l: !1, exports: {} };return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }return i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var n = Object.create(null);if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var s in e) {
          i.d(n, s, function (t) {
            return e[t];
          }.bind(null, s));
        }return n;
      }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };return i.d(t, "a", t), t;
      }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, i.p = "", i(i.s = 1);
    }([function (e, t) {
      e.exports = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
      };
    }, function (e, t, i) {
      function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
        })(e);
      }function s(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }var r = i(2),
          o = i(8),
          a = i(0),
          c = function () {
        function e(t, i) {
          var n = i.location,
              s = void 0 === n ? 0 : n,
              r = i.distance,
              a = void 0 === r ? 100 : r,
              c = i.threshold,
              l = void 0 === c ? .6 : c,
              h = i.maxPatternLength,
              u = void 0 === h ? 32 : h,
              d = i.caseSensitive,
              p = void 0 !== d && d,
              m = i.tokenSeparator,
              f = void 0 === m ? / +/g : m,
              v = i.findAllMatches,
              g = void 0 !== v && v,
              _ = i.minMatchCharLength,
              b = void 0 === _ ? 1 : _,
              y = i.id,
              E = void 0 === y ? null : y,
              I = i.keys,
              S = void 0 === I ? [] : I,
              w = i.shouldSort,
              O = void 0 === w || w,
              C = i.getFn,
              A = void 0 === C ? o : C,
              L = i.sortFn,
              T = void 0 === L ? function (e, t) {
            return e.score - t.score;
          } : L,
              x = i.tokenize,
              k = void 0 !== x && x,
              P = i.matchAllTokens,
              D = void 0 !== P && P,
              M = i.includeMatches,
              N = void 0 !== M && M,
              F = i.includeScore,
              j = void 0 !== F && F,
              K = i.verbose,
              R = void 0 !== K && K;!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.options = { location: s, distance: a, threshold: l, maxPatternLength: u, isCaseSensitive: p, tokenSeparator: f, findAllMatches: g, minMatchCharLength: b, id: E, keys: S, includeMatches: N, includeScore: j, shouldSort: O, getFn: A, sortFn: T, verbose: R, tokenize: k, matchAllTokens: D }, this.setCollection(t);
        }var t, i;return t = e, (i = [{ key: "setCollection", value: function value(e) {
            return this.list = e, e;
          } }, { key: "search", value: function value(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: !1 };this._log('---------\nSearch pattern: "'.concat(e, '"'));var i = this._prepareSearchers(e),
                n = i.tokenSearchers,
                s = i.fullSearcher,
                r = this._search(n, s),
                o = r.weights,
                a = r.results;return this._computeScore(o, a), this.options.shouldSort && this._sort(a), t.limit && "number" == typeof t.limit && (a = a.slice(0, t.limit)), this._format(a);
          } }, { key: "_prepareSearchers", value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = [];if (this.options.tokenize) for (var i = e.split(this.options.tokenSeparator), n = 0, s = i.length; n < s; n += 1) {
              t.push(new r(i[n], this.options));
            }return { tokenSearchers: t, fullSearcher: new r(e, this.options) };
          } }, { key: "_search", value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                i = this.list,
                n = {},
                s = [];if ("string" == typeof i[0]) {
              for (var r = 0, o = i.length; r < o; r += 1) {
                this._analyze({ key: "", value: i[r], record: r, index: r }, { resultMap: n, results: s, tokenSearchers: e, fullSearcher: t });
              }return { weights: null, results: s };
            }for (var a = {}, c = 0, l = i.length; c < l; c += 1) {
              for (var h = i[c], u = 0, d = this.options.keys.length; u < d; u += 1) {
                var p = this.options.keys[u];if ("string" != typeof p) {
                  if (a[p.name] = { weight: 1 - p.weight || 1 }, p.weight <= 0 || p.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");p = p.name;
                } else a[p] = { weight: 1 };this._analyze({ key: p, value: this.options.getFn(h, p), record: h, index: c }, { resultMap: n, results: s, tokenSearchers: e, fullSearcher: t });
              }
            }return { weights: a, results: s };
          } }, { key: "_analyze", value: function value(e, t) {
            var i = e.key,
                n = e.arrayIndex,
                s = void 0 === n ? -1 : n,
                r = e.value,
                o = e.record,
                c = e.index,
                l = t.tokenSearchers,
                h = void 0 === l ? [] : l,
                u = t.fullSearcher,
                d = void 0 === u ? [] : u,
                p = t.resultMap,
                m = void 0 === p ? {} : p,
                f = t.results,
                v = void 0 === f ? [] : f;if (null != r) {
              var g = !1,
                  _ = -1,
                  b = 0;if ("string" == typeof r) {
                this._log("\nKey: ".concat("" === i ? "-" : i));var y = d.search(r);if (this._log('Full text: "'.concat(r, '", score: ').concat(y.score)), this.options.tokenize) {
                  for (var E = r.split(this.options.tokenSeparator), I = [], S = 0; S < h.length; S += 1) {
                    var w = h[S];this._log('\nPattern: "'.concat(w.pattern, '"'));for (var O = !1, C = 0; C < E.length; C += 1) {
                      var A = E[C],
                          L = w.search(A),
                          T = {};L.isMatch ? (T[A] = L.score, g = !0, O = !0, I.push(L.score)) : (T[A] = 1, this.options.matchAllTokens || I.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(T[A]));
                    }O && (b += 1);
                  }_ = I[0];for (var x = I.length, k = 1; k < x; k += 1) {
                    _ += I[k];
                  }_ /= x, this._log("Token score average:", _);
                }var P = y.score;_ > -1 && (P = (P + _) / 2), this._log("Score average:", P);var D = !this.options.tokenize || !this.options.matchAllTokens || b >= h.length;if (this._log("\nCheck Matches: ".concat(D)), (g || y.isMatch) && D) {
                  var M = m[c];M ? M.output.push({ key: i, arrayIndex: s, value: r, score: P, matchedIndices: y.matchedIndices }) : (m[c] = { item: o, output: [{ key: i, arrayIndex: s, value: r, score: P, matchedIndices: y.matchedIndices }] }, v.push(m[c]));
                }
              } else if (a(r)) for (var N = 0, F = r.length; N < F; N += 1) {
                this._analyze({ key: i, arrayIndex: N, value: r[N], record: o, index: c }, { resultMap: m, results: v, tokenSearchers: h, fullSearcher: d });
              }
            }
          } }, { key: "_computeScore", value: function value(e, t) {
            this._log("\n\nComputing score:\n");for (var i = 0, n = t.length; i < n; i += 1) {
              for (var s = t[i].output, r = s.length, o = 1, a = 1, c = 0; c < r; c += 1) {
                var l = e ? e[s[c].key].weight : 1,
                    h = (1 === l ? s[c].score : s[c].score || .001) * l;1 !== l ? a = Math.min(a, h) : (s[c].nScore = h, o *= h);
              }t[i].score = 1 === a ? o : a, this._log(t[i]);
            }
          } }, { key: "_sort", value: function value(e) {
            this._log("\n\nSorting...."), e.sort(this.options.sortFn);
          } }, { key: "_format", value: function value(e) {
            var t = [];if (this.options.verbose) {
              var i = [];this._log("\n\nOutput:\n\n", JSON.stringify(e, function (e, t) {
                if ("object" === n(t) && null !== t) {
                  if (-1 !== i.indexOf(t)) return;i.push(t);
                }return t;
              })), i = null;
            }var s = [];this.options.includeMatches && s.push(function (e, t) {
              var i = e.output;t.matches = [];for (var n = 0, s = i.length; n < s; n += 1) {
                var r = i[n];if (0 !== r.matchedIndices.length) {
                  var o = { indices: r.matchedIndices, value: r.value };r.key && (o.key = r.key), r.hasOwnProperty("arrayIndex") && r.arrayIndex > -1 && (o.arrayIndex = r.arrayIndex), t.matches.push(o);
                }
              }
            }), this.options.includeScore && s.push(function (e, t) {
              t.score = e.score;
            });for (var r = 0, o = e.length; r < o; r += 1) {
              var a = e[r];if (this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), s.length) {
                for (var c = { item: a.item }, l = 0, h = s.length; l < h; l += 1) {
                  s[l](a, c);
                }t.push(c);
              } else t.push(a.item);
            }return t;
          } }, { key: "_log", value: function value() {
            var e;this.options.verbose && (e = console).log.apply(e, arguments);
          } }]) && s(t.prototype, i), e;
      }();e.exports = c;
    }, function (e, t, i) {
      function n(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }var s = i(3),
          r = i(4),
          o = i(7),
          a = function () {
        function e(t, i) {
          var n = i.location,
              s = void 0 === n ? 0 : n,
              r = i.distance,
              a = void 0 === r ? 100 : r,
              c = i.threshold,
              l = void 0 === c ? .6 : c,
              h = i.maxPatternLength,
              u = void 0 === h ? 32 : h,
              d = i.isCaseSensitive,
              p = void 0 !== d && d,
              m = i.tokenSeparator,
              f = void 0 === m ? / +/g : m,
              v = i.findAllMatches,
              g = void 0 !== v && v,
              _ = i.minMatchCharLength,
              b = void 0 === _ ? 1 : _;!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.options = { location: s, distance: a, threshold: l, maxPatternLength: u, isCaseSensitive: p, tokenSeparator: f, findAllMatches: g, minMatchCharLength: b }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = o(this.pattern));
        }var t, i;return t = e, (i = [{ key: "search", value: function value(e) {
            if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return { isMatch: !0, score: 0, matchedIndices: [[0, e.length - 1]] };var t = this.options,
                i = t.maxPatternLength,
                n = t.tokenSeparator;if (this.pattern.length > i) return s(e, this.pattern, n);var o = this.options,
                a = o.location,
                c = o.distance,
                l = o.threshold,
                h = o.findAllMatches,
                u = o.minMatchCharLength;return r(e, this.pattern, this.patternAlphabet, { location: a, distance: c, threshold: l, findAllMatches: h, minMatchCharLength: u });
          } }]) && n(t.prototype, i), e;
      }();e.exports = a;
    }, function (e, t) {
      var i = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
            s = new RegExp(t.replace(i, "\\$&").replace(n, "|")),
            r = e.match(s),
            o = !!r,
            a = [];if (o) for (var c = 0, l = r.length; c < l; c += 1) {
          var h = r[c];a.push([e.indexOf(h), h.length - 1]);
        }return { score: o ? .5 : 1, isMatch: o, matchedIndices: a };
      };
    }, function (e, t, i) {
      var n = i(5),
          s = i(6);e.exports = function (e, t, i, r) {
        for (var o = r.location, a = void 0 === o ? 0 : o, c = r.distance, l = void 0 === c ? 100 : c, h = r.threshold, u = void 0 === h ? .6 : h, d = r.findAllMatches, p = void 0 !== d && d, m = r.minMatchCharLength, f = void 0 === m ? 1 : m, v = a, g = e.length, _ = u, b = e.indexOf(t, v), y = t.length, E = [], I = 0; I < g; I += 1) {
          E[I] = 0;
        }if (-1 !== b) {
          var S = n(t, { errors: 0, currentLocation: b, expectedLocation: v, distance: l });if (_ = Math.min(S, _), -1 !== (b = e.lastIndexOf(t, v + y))) {
            var w = n(t, { errors: 0, currentLocation: b, expectedLocation: v, distance: l });_ = Math.min(w, _);
          }
        }b = -1;for (var O = [], C = 1, A = y + g, L = 1 << y - 1, T = 0; T < y; T += 1) {
          for (var x = 0, k = A; x < k;) {
            n(t, { errors: T, currentLocation: v + k, expectedLocation: v, distance: l }) <= _ ? x = k : A = k, k = Math.floor((A - x) / 2 + x);
          }A = k;var P = Math.max(1, v - k + 1),
              D = p ? g : Math.min(v + k, g) + y,
              M = Array(D + 2);M[D + 1] = (1 << T) - 1;for (var N = D; N >= P; N -= 1) {
            var F = N - 1,
                j = i[e.charAt(F)];if (j && (E[F] = 1), M[N] = (M[N + 1] << 1 | 1) & j, 0 !== T && (M[N] |= (O[N + 1] | O[N]) << 1 | 1 | O[N + 1]), M[N] & L && (C = n(t, { errors: T, currentLocation: F, expectedLocation: v, distance: l })) <= _) {
              if (_ = C, (b = F) <= v) break;P = Math.max(1, 2 * v - b);
            }
          }if (n(t, { errors: T + 1, currentLocation: v, expectedLocation: v, distance: l }) > _) break;O = M;
        }return { isMatch: b >= 0, score: 0 === C ? .001 : C, matchedIndices: s(E, f) };
      };
    }, function (e, t) {
      e.exports = function (e, t) {
        var i = t.errors,
            n = void 0 === i ? 0 : i,
            s = t.currentLocation,
            r = void 0 === s ? 0 : s,
            o = t.expectedLocation,
            a = void 0 === o ? 0 : o,
            c = t.distance,
            l = void 0 === c ? 100 : c,
            h = n / e.length,
            u = Math.abs(a - r);return l ? h + u / l : u ? 1 : h;
      };
    }, function (e, t) {
      e.exports = function () {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], n = -1, s = -1, r = 0, o = e.length; r < o; r += 1) {
          var a = e[r];a && -1 === n ? n = r : a || -1 === n || ((s = r - 1) - n + 1 >= t && i.push([n, s]), n = -1);
        }return e[r - 1] && r - n >= t && i.push([n, r - 1]), i;
      };
    }, function (e, t) {
      e.exports = function (e) {
        for (var t = {}, i = e.length, n = 0; n < i; n += 1) {
          t[e.charAt(n)] = 0;
        }for (var s = 0; s < i; s += 1) {
          t[e.charAt(s)] |= 1 << i - s - 1;
        }return t;
      };
    }, function (e, t, i) {
      var n = i(0);e.exports = function (e, t) {
        return function e(t, i, s) {
          if (i) {
            var r = i.indexOf("."),
                o = i,
                a = null;-1 !== r && (o = i.slice(0, r), a = i.slice(r + 1));var c = t[o];if (null != c) if (a || "string" != typeof c && "number" != typeof c) {
              if (n(c)) for (var l = 0, h = c.length; l < h; l += 1) {
                e(c[l], a, s);
              } else a && e(c, a, s);
            } else s.push(c.toString());
          } else s.push(t);return s;
        }(e, t, []);
      };
    }]);
  }, function (e, t, i) {
    "use strict";
    function n(e) {
      var t,
          i = e.Symbol;return "function" == typeof i ? i.observable ? t = i.observable : (t = i("observable"), i.observable = t) : t = "@@observable", t;
    }i.d(t, "a", function () {
      return n;
    });
  }, function (e, t, i) {
    e.exports = i(7);
  }, function (e, t) {
    var i;i = function () {
      return this;
    }();try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
    }e.exports = i;
  }, function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
            return t.l;
          } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
            return t.i;
          } }), Object.defineProperty(t, "exports", { enumerable: !0 }), t.webpackPolyfill = 1;
      }return t;
    };
  }, function (e, t, i) {
    "use strict";
    i.r(t);var n = i(2),
        s = i.n(n),
        r = i(0),
        o = i.n(r),
        a = i(1),
        c = function c() {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
        l = { INIT: "@@redux/INIT" + c(), REPLACE: "@@redux/REPLACE" + c(), PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + c();
      } };function h(e) {
      if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || null === e) return !1;for (var t = e; null !== Object.getPrototypeOf(t);) {
        t = Object.getPrototypeOf(t);
      }return Object.getPrototypeOf(e) === t;
    }function u(e, t, i) {
      var n;if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
        if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");return i(u)(e, t);
      }if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");var s = e,
          r = t,
          o = [],
          c = o,
          d = !1;function p() {
        c === o && (c = o.slice());
      }function m() {
        if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return r;
      }function f(e) {
        if ("function" != typeof e) throw new Error("Expected the listener to be a function.");if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t = !0;return p(), c.push(e), function () {
          if (t) {
            if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t = !1, p();var i = c.indexOf(e);c.splice(i, 1);
          }
        };
      }function v(e) {
        if (!h(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if (d) throw new Error("Reducers may not dispatch actions.");try {
          d = !0, r = s(r, e);
        } finally {
          d = !1;
        }for (var t = o = c, i = 0; i < t.length; i++) {
          (0, t[i])();
        }return e;
      }return v({ type: l.INIT }), (n = { dispatch: v, subscribe: f, getState: m, replaceReducer: function replaceReducer(e) {
          if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");s = e, v({ type: l.REPLACE });
        } })[a.a] = function () {
        var e,
            t = f;return (e = { subscribe: function subscribe(e) {
            if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || null === e) throw new TypeError("Expected the observer to be an object.");function i() {
              e.next && e.next(m());
            }return i(), { unsubscribe: t(i) };
          } })[a.a] = function () {
          return this;
        }, e;
      }, n;
    }function d(e, t) {
      var i = t && t.type;return "Given " + (i && 'action "' + String(i) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }var p = [];var m = [];var f = [];var v,
        g = { loading: !1 },
        _ = function _(e, t) {
      switch (void 0 === e && (e = g), t.type) {case "SET_IS_LOADING":
          return { loading: t.isLoading };default:
          return e;}
    },
        b = function b(e) {
      return Array.from({ length: e }, function () {
        return (e = 0, t = 36, Math.floor(Math.random() * (t - e) + e)).toString(36);var e, t;
      }).join("");
    },
        y = function y(e, t) {
      var i = e.id || e.name && e.name + "-" + b(2) || b(4);return i = t + "-" + (i = i.replace(/(:|\.|\[|\]|,)/g, ""));
    },
        E = function E(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    },
        I = function I(e, t) {
      return null != t && E(t) === e;
    },
        S = function S(e) {
      return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    },
        w = (v = document.createElement("div"), function (e) {
      var t = e.trim();v.innerHTML = t;for (var i = v.children[0]; v.firstChild;) {
        v.removeChild(v.firstChild);
      }return i;
    }),
        O = function O(e, t) {
      return e.score - t.score;
    },
        C = function C(e) {
      return JSON.parse(JSON.stringify(e));
    },
        A = function A(e, t) {
      var i = Object.keys(e).sort(),
          n = Object.keys(t).sort();return i.filter(function (e) {
        return n.indexOf(e) < 0;
      });
    },
        L = function (e) {
      for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
        var s = t[n];0, "function" == typeof e[s] && (i[s] = e[s]);
      }var r,
          o = Object.keys(i);try {
        !function (e) {
          Object.keys(e).forEach(function (t) {
            var i = e[t];if (void 0 === i(void 0, { type: l.INIT })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if (void 0 === i(void 0, { type: l.PROBE_UNKNOWN_ACTION() })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + l.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
          });
        }(i);
      } catch (e) {
        r = e;
      }return function (e, t) {
        if (void 0 === e && (e = {}), r) throw r;for (var n = !1, s = {}, a = 0; a < o.length; a++) {
          var c = o[a],
              l = i[c],
              h = e[c],
              u = l(h, t);if (void 0 === u) {
            var p = d(c, t);throw new Error(p);
          }s[c] = u, n = n || u !== h;
        }return n ? s : e;
      };
    }({ items: function items(e, t) {
        switch (void 0 === e && (e = p), t.type) {case "ADD_ITEM":
            return [].concat(e, [{ id: t.id, choiceId: t.choiceId, groupId: t.groupId, value: t.value, label: t.label, active: !0, highlighted: !1, customProperties: t.customProperties, placeholder: t.placeholder || !1, keyCode: null }]).map(function (e) {
              var t = e;return t.highlighted = !1, t;
            });case "REMOVE_ITEM":
            return e.map(function (e) {
              var i = e;return i.id === t.id && (i.active = !1), i;
            });case "HIGHLIGHT_ITEM":
            return e.map(function (e) {
              var i = e;return i.id === t.id && (i.highlighted = t.highlighted), i;
            });default:
            return e;}
      }, groups: function groups(e, t) {
        switch (void 0 === e && (e = m), t.type) {case "ADD_GROUP":
            return [].concat(e, [{ id: t.id, value: t.value, active: t.active, disabled: t.disabled }]);case "CLEAR_CHOICES":
            return [];default:
            return e;}
      }, choices: function choices(e, t) {
        switch (void 0 === e && (e = f), t.type) {case "ADD_CHOICE":
            return [].concat(e, [{ id: t.id, elementId: t.elementId, groupId: t.groupId, value: t.value, label: t.label || t.value, disabled: t.disabled || !1, selected: !1, active: !0, score: 9999, customProperties: t.customProperties, placeholder: t.placeholder || !1, keyCode: null }]);case "ADD_ITEM":
            return t.activateOptions ? e.map(function (e) {
              var i = e;return i.active = t.active, i;
            }) : t.choiceId > -1 ? e.map(function (e) {
              var i = e;return i.id === parseInt(t.choiceId, 10) && (i.selected = !0), i;
            }) : e;case "REMOVE_ITEM":
            return t.choiceId > -1 ? e.map(function (e) {
              var i = e;return i.id === parseInt(t.choiceId, 10) && (i.selected = !1), i;
            }) : e;case "FILTER_CHOICES":
            return e.map(function (e) {
              var i = e;return i.active = t.results.some(function (e) {
                var t = e.item,
                    n = e.score;return t.id === i.id && (i.score = n, !0);
              }), i;
            });case "ACTIVATE_CHOICES":
            return e.map(function (e) {
              var i = e;return i.active = t.active, i;
            });case "CLEAR_CHOICES":
            return f;default:
            return e;}
      }, general: _ }),
        T = function T(e, t) {
      var i = e;if ("CLEAR_ALL" === t.type) i = void 0;else if ("RESET_TO" === t.type) return C(t.state);return L(i, t);
    };function x(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }var k = function () {
      function e() {
        this._store = u(T, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      }var t,
          i,
          n,
          s = e.prototype;return s.subscribe = function (e) {
        this._store.subscribe(e);
      }, s.dispatch = function (e) {
        this._store.dispatch(e);
      }, s.isLoading = function () {
        return this.state.general.loading;
      }, s.getChoiceById = function (e) {
        return this.activeChoices.find(function (t) {
          return t.id === parseInt(e, 10);
        });
      }, s.getGroupById = function (e) {
        return this.groups.find(function (t) {
          return t.id === e;
        });
      }, t = e, (i = [{ key: "state", get: function get() {
          return this._store.getState();
        } }, { key: "items", get: function get() {
          return this.state.items;
        } }, { key: "activeItems", get: function get() {
          return this.items.filter(function (e) {
            return !0 === e.active;
          });
        } }, { key: "highlightedActiveItems", get: function get() {
          return this.items.filter(function (e) {
            return e.active && e.highlighted;
          });
        } }, { key: "choices", get: function get() {
          return this.state.choices;
        } }, { key: "activeChoices", get: function get() {
          return this.choices.filter(function (e) {
            return !0 === e.active;
          });
        } }, { key: "selectableChoices", get: function get() {
          return this.choices.filter(function (e) {
            return !0 !== e.disabled;
          });
        } }, { key: "searchableChoices", get: function get() {
          return this.selectableChoices.filter(function (e) {
            return !0 !== e.placeholder;
          });
        } }, { key: "placeholderChoice", get: function get() {
          return [].concat(this.choices).reverse().find(function (e) {
            return !0 === e.placeholder;
          });
        } }, { key: "groups", get: function get() {
          return this.state.groups;
        } }, { key: "activeGroups", get: function get() {
          var e = this.groups,
              t = this.choices;return e.filter(function (e) {
            var i = !0 === e.active && !1 === e.disabled,
                n = t.some(function (e) {
              return !0 === e.active && !1 === e.disabled;
            });return i && n;
          }, []);
        } }]) && x(t.prototype, i), n && x(t, n), e;
    }();function P(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }var D = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames;this.element = t, this.classNames = n, this.type = i, this.isActive = !1;
      }var t,
          i,
          n,
          s = e.prototype;return s.getChild = function (e) {
        return this.element.querySelector(e);
      }, s.show = function () {
        return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
      }, s.hide = function () {
        return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
      }, t = e, (i = [{ key: "distanceFromTopWindow", get: function get() {
          return this.element.getBoundingClientRect().bottom;
        } }]) && P(t.prototype, i), n && P(t, n), e;
    }(),
        M = { items: [], choices: [], silent: !1, renderChoiceLimit: -1, maxItemCount: -1, addItems: !0, addItemFilter: null, removeItems: !0, removeItemButton: !1, editItems: !1, duplicateItemsAllowed: !0, delimiter: ",", paste: !0, searchEnabled: !0, searchChoices: !0, searchFloor: 1, searchResultLimit: 4, searchFields: ["label", "value"], position: "auto", resetScrollPosition: !0, shouldSort: !0, shouldSortItems: !1, sorter: function sorter(e, t) {
        var i = e.value,
            n = e.label,
            s = void 0 === n ? i : n,
            r = t.value,
            o = t.label,
            a = void 0 === o ? r : o;return s.localeCompare(a, [], { sensitivity: "base", ignorePunctuation: !0, numeric: !0 });
      }, placeholder: !0, placeholderValue: null, searchPlaceholderValue: null, prependValue: null, appendValue: null, renderSelectedChoices: "auto", loadingText: "Loading...", noResultsText: "No results found", noChoicesText: "No choices to choose from", itemSelectText: "Press to select", uniqueItemText: "Only unique values can be added", customAddItemText: "Only values matching specific conditions can be added", addItemText: function addItemText(e) {
        return 'Press Enter to add <b>"' + S(e) + '"</b>';
      }, maxItemText: function maxItemText(e) {
        return "Only " + e + " values can be added";
      }, valueComparer: function valueComparer(e, t) {
        return e === t;
      }, fuseOptions: { includeScore: !0 }, callbackOnInit: null, callbackOnCreateTemplates: null, classNames: { containerOuter: "choices", containerInner: "choices__inner", input: "choices__input", inputCloned: "choices__input--cloned", list: "choices__list", listItems: "choices__list--multiple", listSingle: "choices__list--single", listDropdown: "choices__list--dropdown", item: "choices__item", itemSelectable: "choices__item--selectable", itemDisabled: "choices__item--disabled", itemChoice: "choices__item--choice", placeholder: "choices__placeholder", group: "choices__group", groupHeading: "choices__heading", button: "choices__button", activeState: "is-active", focusState: "is-focused", openState: "is-open", disabledState: "is-disabled", highlightedState: "is-highlighted", selectedState: "is-selected", flippedState: "is-flipped", loadingState: "is-loading", noResults: "has-no-results", noChoices: "has-no-choices" } },
        N = "showDropdown",
        F = "hideDropdown",
        j = "change",
        K = "choice",
        R = "search",
        H = "addItem",
        B = "removeItem",
        V = "highlightItem",
        G = "highlightChoice",
        q = "ADD_CHOICE",
        U = "FILTER_CHOICES",
        z = "ACTIVATE_CHOICES",
        W = "CLEAR_CHOICES",
        X = "ADD_GROUP",
        $ = "ADD_ITEM",
        J = "REMOVE_ITEM",
        Y = "HIGHLIGHT_ITEM",
        Z = 46,
        Q = 8,
        ee = 13,
        te = 65,
        ie = 27,
        ne = 38,
        se = 40,
        re = 33,
        oe = 34,
        ae = "text",
        ce = "select-one",
        le = "select-multiple",
        he = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.position;this.element = t, this.classNames = n, this.type = i, this.position = s, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }var t = e.prototype;return t.addEventListeners = function () {
        this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
      }, t.removeEventListeners = function () {
        this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
      }, t.shouldFlip = function (e) {
        if ("number" != typeof e) return !1;var t = !1;return "auto" === this.position ? t = !window.matchMedia("(min-height: " + (e + 1) + "px)").matches : "top" === this.position && (t = !0), t;
      }, t.setActiveDescendant = function (e) {
        this.element.setAttribute("aria-activedescendant", e);
      }, t.removeActiveDescendant = function () {
        this.element.removeAttribute("aria-activedescendant");
      }, t.open = function (e) {
        this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
      }, t.close = function () {
        this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
      }, t.focus = function () {
        this.isFocussed || this.element.focus();
      }, t.addFocusState = function () {
        this.element.classList.add(this.classNames.focusState);
      }, t.removeFocusState = function () {
        this.element.classList.remove(this.classNames.focusState);
      }, t.enable = function () {
        this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === ce && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
      }, t.disable = function () {
        this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === ce && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
      }, t.wrap = function (e) {
        !function (e, t) {
          void 0 === t && (t = document.createElement("div")), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e);
        }(e, this.element);
      }, t.unwrap = function (e) {
        this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element);
      }, t.addLoadingState = function () {
        this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
      }, t.removeLoadingState = function () {
        this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
      }, t._onFocus = function () {
        this.isFocussed = !0;
      }, t._onBlur = function () {
        this.isFocussed = !1;
      }, e;
    }();function ue(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }var de = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.preventPaste;this.element = t, this.type = i, this.classNames = n, this.preventPaste = s, this.isFocussed = this.element === document.activeElement, this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }var t,
          i,
          n,
          s = e.prototype;return s.addEventListeners = function () {
        this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, { passive: !0 }), this.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.element.addEventListener("blur", this._onBlur, { passive: !0 });
      }, s.removeEventListeners = function () {
        this.element.removeEventListener("input", this._onInput, { passive: !0 }), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus, { passive: !0 }), this.element.removeEventListener("blur", this._onBlur, { passive: !0 });
      }, s.enable = function () {
        this.element.removeAttribute("disabled"), this.isDisabled = !1;
      }, s.disable = function () {
        this.element.setAttribute("disabled", ""), this.isDisabled = !0;
      }, s.focus = function () {
        this.isFocussed || this.element.focus();
      }, s.blur = function () {
        this.isFocussed && this.element.blur();
      }, s.clear = function (e) {
        return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
      }, s.setWidth = function () {
        var e = this.element,
            t = e.style,
            i = e.value,
            n = e.placeholder;t.minWidth = n.length + 1 + "ch", t.width = i.length + 1 + "ch";
      }, s.setActiveDescendant = function (e) {
        this.element.setAttribute("aria-activedescendant", e);
      }, s.removeActiveDescendant = function () {
        this.element.removeAttribute("aria-activedescendant");
      }, s._onInput = function () {
        this.type !== ce && this.setWidth();
      }, s._onPaste = function (e) {
        this.preventPaste && e.preventDefault();
      }, s._onFocus = function () {
        this.isFocussed = !0;
      }, s._onBlur = function () {
        this.isFocussed = !1;
      }, t = e, (i = [{ key: "placeholder", set: function set(e) {
          this.element.placeholder = e;
        } }, { key: "value", get: function get() {
          return S(this.element.value);
        }, set: function set(e) {
          this.element.value = e;
        } }]) && ue(t.prototype, i), n && ue(t, n), e;
    }(),
        pe = function () {
      function e(e) {
        var t = e.element;this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight;
      }var t = e.prototype;return t.clear = function () {
        this.element.innerHTML = "";
      }, t.append = function (e) {
        this.element.appendChild(e);
      }, t.getChild = function (e) {
        return this.element.querySelector(e);
      }, t.hasChildren = function () {
        return this.element.hasChildNodes();
      }, t.scrollToTop = function () {
        this.element.scrollTop = 0;
      }, t.scrollToChildElement = function (e, t) {
        var i = this;if (e) {
          var n = this.element.offsetHeight,
              s = this.element.scrollTop + n,
              r = e.offsetHeight,
              o = e.offsetTop + r,
              a = t > 0 ? this.element.scrollTop + o - s : e.offsetTop;requestAnimationFrame(function () {
            i._animateScroll(a, t);
          });
        }
      }, t._scrollDown = function (e, t, i) {
        var n = (i - e) / t,
            s = n > 1 ? n : 1;this.element.scrollTop = e + s;
      }, t._scrollUp = function (e, t, i) {
        var n = (e - i) / t,
            s = n > 1 ? n : 1;this.element.scrollTop = e - s;
      }, t._animateScroll = function (e, t) {
        var i = this,
            n = this.element.scrollTop,
            s = !1;t > 0 ? (this._scrollDown(n, 4, e), n < e && (s = !0)) : (this._scrollUp(n, 4, e), n > e && (s = !0)), s && requestAnimationFrame(function () {
          i._animateScroll(e, t);
        });
      }, e;
    }();function me(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }var fe = function () {
      function e(e) {
        var t = e.element,
            i = e.classNames;if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");this.isDisabled = !1;
      }var t,
          i,
          n,
          s = e.prototype;return s.conceal = function () {
        this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;var e = this.element.getAttribute("style");e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
      }, s.reveal = function () {
        this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");var e = this.element.getAttribute("data-choice-orig-style");e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
      }, s.enable = function () {
        this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
      }, s.disable = function () {
        this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
      }, s.triggerEvent = function (e, t) {
        !function (e, t, i) {
          void 0 === i && (i = null);var n = new CustomEvent(t, { detail: i, bubbles: !0, cancelable: !0 });e.dispatchEvent(n);
        }(this.element, e, t);
      }, t = e, (i = [{ key: "isActive", get: function get() {
          return "active" === this.element.dataset.choice;
        } }, { key: "dir", get: function get() {
          return this.element.dir;
        } }, { key: "value", get: function get() {
          return this.element.value;
        }, set: function set(e) {
          this.element.value = e;
        } }]) && me(t.prototype, i), n && me(t, n), e;
    }();function ve(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }var ge = function (e) {
      var t, i, n, s, r;function o(t) {
        var i,
            n = t.element,
            s = t.classNames,
            r = t.delimiter;return (i = e.call(this, { element: n, classNames: s }) || this).delimiter = r, i;
      }return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, n = o, (s = [{ key: "value", get: function get() {
          return this.element.value;
        }, set: function set(e) {
          var t = e.map(function (e) {
            return e.value;
          }).join(this.delimiter);this.element.setAttribute("value", t), this.element.value = t;
        } }]) && ve(n.prototype, s), r && ve(n, r), o;
    }(fe);function _e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }var be = function (e) {
      var t, i, n, s, r;function o(t) {
        var i,
            n = t.element,
            s = t.classNames,
            r = t.template;return (i = e.call(this, { element: n, classNames: s }) || this).template = r, i;
      }return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, o.prototype.appendDocFragment = function (e) {
        this.element.innerHTML = "", this.element.appendChild(e);
      }, n = o, (s = [{ key: "placeholderOption", get: function get() {
          return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
        } }, { key: "optionGroups", get: function get() {
          return Array.from(this.element.getElementsByTagName("OPTGROUP"));
        } }, { key: "options", get: function get() {
          return Array.from(this.element.options);
        }, set: function set(e) {
          var t = this,
              i = document.createDocumentFragment();e.forEach(function (e) {
            return n = e, s = t.template(n), void i.appendChild(s);var n, s;
          }), this.appendDocFragment(i);
        } }]) && _e(n.prototype, s), r && _e(n, r), o;
    }(fe),
        ye = { containerOuter: function containerOuter(e, t, i, n, s, r) {
        var o = e.containerOuter,
            a = Object.assign(document.createElement("div"), { className: o });return a.dataset.type = r, t && (a.dir = t), n && (a.tabIndex = 0), i && (a.setAttribute("role", s ? "combobox" : "listbox"), s && a.setAttribute("aria-autocomplete", "list")), a.setAttribute("aria-haspopup", "true"), a.setAttribute("aria-expanded", "false"), a;
      }, containerInner: function containerInner(e) {
        var t = e.containerInner;return Object.assign(document.createElement("div"), { className: t });
      }, itemList: function itemList(e, t) {
        var i = e.list,
            n = e.listSingle,
            s = e.listItems;return Object.assign(document.createElement("div"), { className: i + " " + (t ? n : s) });
      }, placeholder: function placeholder(e, t) {
        var i = e.placeholder;return Object.assign(document.createElement("div"), { className: i, innerHTML: t });
      }, item: function item(e, t, i) {
        var n = e.item,
            s = e.button,
            r = e.highlightedState,
            o = e.itemSelectable,
            a = e.placeholder,
            c = t.id,
            l = t.value,
            h = t.label,
            u = t.customProperties,
            d = t.active,
            p = t.disabled,
            m = t.highlighted,
            f = t.placeholder,
            v = Object.assign(document.createElement("div"), { className: n, innerHTML: h });if (Object.assign(v.dataset, { item: "", id: c, value: l, customProperties: u }), d && v.setAttribute("aria-selected", "true"), p && v.setAttribute("aria-disabled", "true"), f && v.classList.add(a), v.classList.add(m ? r : o), i) {
          p && v.classList.remove(o), v.dataset.deletable = "";var g = Object.assign(document.createElement("button"), { type: "button", className: s, innerHTML: "Remove item" });g.setAttribute("aria-label", "Remove item: '" + l + "'"), g.dataset.button = "", v.appendChild(g);
        }return v;
      }, choiceList: function choiceList(e, t) {
        var i = e.list,
            n = Object.assign(document.createElement("div"), { className: i });return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n;
      }, choiceGroup: function choiceGroup(e, t) {
        var i = e.group,
            n = e.groupHeading,
            s = e.itemDisabled,
            r = t.id,
            o = t.value,
            a = t.disabled,
            c = Object.assign(document.createElement("div"), { className: i + " " + (a ? s : "") });return c.setAttribute("role", "group"), Object.assign(c.dataset, { group: "", id: r, value: o }), a && c.setAttribute("aria-disabled", "true"), c.appendChild(Object.assign(document.createElement("div"), { className: n, innerHTML: o })), c;
      }, choice: function choice(e, t, i) {
        var n = e.item,
            s = e.itemChoice,
            r = e.itemSelectable,
            o = e.selectedState,
            a = e.itemDisabled,
            c = e.placeholder,
            l = t.id,
            h = t.value,
            u = t.label,
            d = t.groupId,
            p = t.elementId,
            m = t.disabled,
            f = t.selected,
            v = t.placeholder,
            g = Object.assign(document.createElement("div"), { id: p, innerHTML: u, className: n + " " + s });return f && g.classList.add(o), v && g.classList.add(c), g.setAttribute("role", d > 0 ? "treeitem" : "option"), Object.assign(g.dataset, { choice: "", id: l, value: h, selectText: i }), m ? (g.classList.add(a), g.dataset.choiceDisabled = "", g.setAttribute("aria-disabled", "true")) : (g.classList.add(r), g.dataset.choiceSelectable = ""), g;
      }, input: function input(e, t) {
        var i = e.input,
            n = e.inputCloned,
            s = Object.assign(document.createElement("input"), { type: "text", className: i + " " + n, autocomplete: "off", autocapitalize: "off", spellcheck: !1 });return s.setAttribute("role", "textbox"), s.setAttribute("aria-autocomplete", "list"), s.setAttribute("aria-label", t), s;
      }, dropdown: function dropdown(e) {
        var t = e.list,
            i = e.listDropdown,
            n = document.createElement("div");return n.classList.add(t, i), n.setAttribute("aria-expanded", "false"), n;
      }, notice: function notice(e, t, i) {
        var n = e.item,
            s = e.itemChoice,
            r = e.noResults,
            o = e.noChoices;void 0 === i && (i = "");var a = [n, s];return "no-choices" === i ? a.push(o) : "no-results" === i && a.push(r), Object.assign(document.createElement("div"), { innerHTML: t, className: a.join(" ") });
      }, option: function option(e) {
        var t = e.label,
            i = e.value,
            n = e.customProperties,
            s = e.active,
            r = e.disabled,
            o = new Option(t, i, !1, s);return n && (o.dataset.customProperties = n), o.disabled = r, o;
      } },
        Ee = function Ee(e) {
      return void 0 === e && (e = !0), { type: z, active: e };
    },
        Ie = function Ie(e, t) {
      return { type: Y, id: e, highlighted: t };
    },
        Se = function Se(e) {
      var t = e.value,
          i = e.id,
          n = e.active,
          s = e.disabled;return { type: X, value: t, id: i, active: n, disabled: s };
    },
        we = function we(e) {
      return { type: "SET_IS_LOADING", isLoading: e };
    };function Oe(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }var Ce = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
        Ae = {},
        Le = function () {
      var e, t, i;function n(e, t) {
        var i = this;void 0 === e && (e = "[data-choice]"), void 0 === t && (t = {}), this.config = o.a.all([M, n.defaults.options, t], { arrayMerge: function arrayMerge(e, t) {
            return [].concat(t);
          } });var s = A(this.config, M);s.length && console.warn("Unknown config option(s) passed", s.join(", "));var r = "string" == typeof e ? document.querySelector(e) : e;if (!(r instanceof HTMLInputElement || r instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");if (this._isTextElement = r.type === ae, this._isSelectOneElement = r.type === ce, this._isSelectMultipleElement = r.type === le, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto"), t.addItemFilter && "function" != typeof t.addItemFilter) {
          var a = t.addItemFilter instanceof RegExp ? t.addItemFilter : new RegExp(t.addItemFilter);this.config.addItemFilter = a.test.bind(a);
        }if (this._isTextElement ? this.passedElement = new ge({ element: r, classNames: this.config.classNames, delimiter: this.config.delimiter }) : this.passedElement = new be({ element: r, classNames: this.config.classNames, template: function template(e) {
            return i._templates.option(e);
          } }), this.initialised = !1, this._store = new k(), this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = y(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
          var c = window.getComputedStyle(this.passedElement.element).direction;c !== window.getComputedStyle(document.documentElement).direction && (this._direction = c);
        }if (this._idNames = { itemChoice: "item-choice" }, this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this.passedElement.options && this.passedElement.options.forEach(function (e) {
          i._presetChoices.push({ value: e.value, label: e.innerHTML, selected: e.selected, disabled: e.disabled || e.parentNode.disabled, placeholder: "" === e.value || e.hasAttribute("placeholder"), customProperties: e.getAttribute("data-custom-properties") });
        }), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised"), void (this.initialised = !0);this.init();
      }e = n, i = [{ key: "defaults", get: function get() {
          return Object.preventExtensions({ get options() {
              return Ae;
            }, get templates() {
              return ye;
            } });
        } }], (t = null) && Oe(e.prototype, t), i && Oe(e, i);var r = n.prototype;return r.init = function () {
        if (!this.initialised) {
          this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = C(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;var e = this.config.callbackOnInit;e && "function" == typeof e && e.call(this);
        }
      }, r.destroy = function () {
        this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = null, this.initialised = !1);
      }, r.enable = function () {
        return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
      }, r.disable = function () {
        return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
      }, r.highlightItem = function (e, t) {
        if (void 0 === t && (t = !0), !e) return this;var i = e.id,
            n = e.groupId,
            s = void 0 === n ? -1 : n,
            r = e.value,
            o = void 0 === r ? "" : r,
            a = e.label,
            c = void 0 === a ? "" : a,
            l = s >= 0 ? this._store.getGroupById(s) : null;return this._store.dispatch(Ie(i, !0)), t && this.passedElement.triggerEvent(V, { id: i, value: o, label: c, groupValue: l && l.value ? l.value : null }), this;
      }, r.unhighlightItem = function (e) {
        if (!e) return this;var t = e.id,
            i = e.groupId,
            n = void 0 === i ? -1 : i,
            s = e.value,
            r = void 0 === s ? "" : s,
            o = e.label,
            a = void 0 === o ? "" : o,
            c = n >= 0 ? this._store.getGroupById(n) : null;return this._store.dispatch(Ie(t, !1)), this.passedElement.triggerEvent(V, { id: t, value: r, label: a, groupValue: c && c.value ? c.value : null }), this;
      }, r.highlightAll = function () {
        var e = this;return this._store.items.forEach(function (t) {
          return e.highlightItem(t);
        }), this;
      }, r.unhighlightAll = function () {
        var e = this;return this._store.items.forEach(function (t) {
          return e.unhighlightItem(t);
        }), this;
      }, r.removeActiveItemsByValue = function (e) {
        var t = this;return this._store.activeItems.filter(function (t) {
          return t.value === e;
        }).forEach(function (e) {
          return t._removeItem(e);
        }), this;
      }, r.removeActiveItems = function (e) {
        var t = this;return this._store.activeItems.filter(function (t) {
          return t.id !== e;
        }).forEach(function (e) {
          return t._removeItem(e);
        }), this;
      }, r.removeHighlightedItems = function (e) {
        var t = this;return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
          t._removeItem(i), e && t._triggerChange(i.value);
        }), this;
      }, r.showDropdown = function (e) {
        var t = this;return this.dropdown.isActive ? this : (requestAnimationFrame(function () {
          t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(N, {});
        }), this);
      }, r.hideDropdown = function (e) {
        var t = this;return this.dropdown.isActive ? (requestAnimationFrame(function () {
          t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(F, {});
        }), this) : this;
      }, r.getValue = function (e) {
        void 0 === e && (e = !1);var t = this._store.activeItems.reduce(function (t, i) {
          var n = e ? i.value : i;return t.push(n), t;
        }, []);return this._isSelectOneElement ? t[0] : t;
      }, r.setValue = function (e) {
        var t = this;return this.initialised ? (e.forEach(function (e) {
          return t._setChoiceOrItem(e);
        }), this) : this;
      }, r.setChoiceByValue = function (e) {
        var t = this;return !this.initialised || this._isTextElement ? this : ((Array.isArray(e) ? e : [e]).forEach(function (e) {
          return t._findAndSelectChoiceByValue(e);
        }), this);
      }, r.setChoices = function (e, t, i, n) {
        var s = this;if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");if (n && this.clearChoices(), "function" == typeof e) {
          var r = e(this);if ("function" == typeof Promise && r instanceof Promise) return new Promise(function (e) {
            return requestAnimationFrame(e);
          }).then(function () {
            return s._handleLoadingState(!0);
          }).then(function () {
            return r;
          }).then(function (e) {
            return s.setChoices(e, t, i, n);
          }).catch(function (e) {
            s.config.silent || console.error(e);
          }).then(function () {
            return s._handleLoadingState(!1);
          }).then(function () {
            return s;
          });if (!Array.isArray(r)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + (typeof r === "undefined" ? "undefined" : _typeof(r)));return this.setChoices(r, t, i, !1);
        }if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach(function (e) {
          e.choices ? s._addGroup({ id: parseInt(e.id, 10) || null, group: e, valueKey: t, labelKey: i }) : s._addChoice({ value: e[t], label: e[i], isSelected: e.selected, isDisabled: e.disabled, customProperties: e.customProperties, placeholder: e.placeholder });
        }), this._stopLoading(), this;
      }, r.clearChoices = function () {
        return this._store.dispatch({ type: W }), this;
      }, r.clearStore = function () {
        return this._store.dispatch({ type: "CLEAR_ALL" }), this;
      }, r.clearInput = function () {
        var e = !this._isSelectOneElement;return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch(Ee(!0))), this;
      }, r._render = function () {
        if (!this._store.isLoading()) {
          this._currentState = this._store.state;var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
              t = this._isSelectElement,
              i = this._currentState.items !== this._prevState.items;e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
        }
      }, r._renderChoices = function () {
        var e = this,
            t = this._store,
            i = t.activeGroups,
            n = t.activeChoices,
            s = document.createDocumentFragment();if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
          return e.choiceList.scrollToTop();
        }), i.length >= 1 && !this._isSearching) {
          var r = n.filter(function (e) {
            return !0 === e.placeholder && -1 === e.groupId;
          });r.length >= 1 && (s = this._createChoicesFragment(r, s)), s = this._createGroupsFragment(i, n, s);
        } else n.length >= 1 && (s = this._createChoicesFragment(n, s));if (s.childNodes && s.childNodes.length > 0) {
          var o = this._store.activeItems,
              a = this._canAddItem(o, this.input.value);a.response ? (this.choiceList.append(s), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", a.notice));
        } else {
          var c, l;this._isSearching ? (l = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, c = this._getTemplate("notice", l, "no-results")) : (l = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, c = this._getTemplate("notice", l, "no-choices")), this.choiceList.append(c);
        }
      }, r._renderItems = function () {
        var e = this._store.activeItems || [];this.itemList.clear();var t = this._createItemsFragment(e);t.childNodes && this.itemList.append(t);
      }, r._createGroupsFragment = function (e, t, i) {
        var n = this;void 0 === i && (i = document.createDocumentFragment());return this.config.shouldSort && e.sort(this.config.sorter), e.forEach(function (e) {
          var s = function (e) {
            return t.filter(function (t) {
              return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
            });
          }(e);if (s.length >= 1) {
            var r = n._getTemplate("choiceGroup", e);i.appendChild(r), n._createChoicesFragment(s, i, !0);
          }
        }), i;
      }, r._createChoicesFragment = function (e, t, i) {
        var n = this;void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);var s = this.config,
            r = s.renderSelectedChoices,
            o = s.searchResultLimit,
            a = s.renderChoiceLimit,
            c = this._isSearching ? O : this.config.sorter,
            l = function l(e) {
          if ("auto" !== r || n._isSelectOneElement || !e.selected) {
            var i = n._getTemplate("choice", e, n.config.itemSelectText);t.appendChild(i);
          }
        },
            h = e;"auto" !== r || this._isSelectOneElement || (h = e.filter(function (e) {
          return !e.selected;
        }));var u = h.reduce(function (e, t) {
          return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
        }, { placeholderChoices: [], normalChoices: [] }),
            d = u.placeholderChoices,
            p = u.normalChoices;(this.config.shouldSort || this._isSearching) && p.sort(c);var m = h.length,
            f = this._isSelectOneElement ? [].concat(d, p) : p;this._isSearching ? m = o : a && a > 0 && !i && (m = a);for (var v = 0; v < m; v += 1) {
          f[v] && l(f[v]);
        }return t;
      }, r._createItemsFragment = function (e, t) {
        var i = this;void 0 === t && (t = document.createDocumentFragment());var n = this.config,
            s = n.shouldSortItems,
            r = n.sorter,
            o = n.removeItemButton;s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e : this.passedElement.options = e;return e.forEach(function (e) {
          var n = i._getTemplate("item", e, o);t.appendChild(n);
        }), t;
      }, r._triggerChange = function (e) {
        null != e && this.passedElement.triggerEvent(j, { value: e });
      }, r._selectPlaceholderChoice = function () {
        var e = this._store.placeholderChoice;e && (this._addItem({ value: e.value, label: e.label, choiceId: e.id, groupId: e.groupId, placeholder: e.placeholder }), this._triggerChange(e.value));
      }, r._handleButtonAction = function (e, t) {
        if (e && t && this.config.removeItems && this.config.removeItemButton) {
          var i = t.parentNode.getAttribute("data-id"),
              n = e.find(function (e) {
            return e.id === parseInt(i, 10);
          });this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._selectPlaceholderChoice();
        }
      }, r._handleItemAction = function (e, t, i) {
        var n = this;if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
          var s = t.getAttribute("data-id");e.forEach(function (e) {
            e.id !== parseInt(s, 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
          }), this.input.focus();
        }
      }, r._handleChoiceAction = function (e, t) {
        if (e && t) {
          var i = t.dataset.id,
              n = this._store.getChoiceById(i);if (n) {
            var s = e[0] && e[0].keyCode ? e[0].keyCode : null,
                r = this.dropdown.isActive;if (n.keyCode = s, this.passedElement.triggerEvent(K, { choice: n }), !n.selected && !n.disabled) this._canAddItem(e, n.value).response && (this._addItem({ value: n.value, label: n.label, choiceId: n.id, groupId: n.groupId, customProperties: n.customProperties, placeholder: n.placeholder, keyCode: n.keyCode }), this._triggerChange(n.value));this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
          }
        }
      }, r._handleBackspace = function (e) {
        if (this.config.removeItems && e) {
          var t = e[e.length - 1],
              i = e.some(function (e) {
            return e.highlighted;
          });this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
        }
      }, r._startLoading = function () {
        this._store.dispatch(we(!0));
      }, r._stopLoading = function () {
        this._store.dispatch(we(!1));
      }, r._handleLoadingState = function (e) {
        void 0 === e && (e = !0);var t = this.itemList.getChild("." + this.config.classNames.placeholder);e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(t)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "");
      }, r._handleSearch = function (e) {
        if (e && this.input.isFocussed) {
          var t = this._store.choices,
              i = this.config,
              n = i.searchFloor,
              s = i.searchChoices,
              r = t.some(function (e) {
            return !e.active;
          });if (e && e.length >= n) {
            var o = s ? this._searchChoices(e) : 0;this.passedElement.triggerEvent(R, { value: e, resultCount: o });
          } else r && (this._isSearching = !1, this._store.dispatch(Ee(!0)));
        }
      }, r._canAddItem = function (e, t) {
        var i = !0,
            n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;if (!this._isSelectOneElement) {
          var s = function (e, t, i) {
            return void 0 === i && (i = "value"), e.some(function (e) {
              return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
            });
          }(e, t);this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && s && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText);
        }return { response: i, notice: n };
      }, r._searchChoices = function (e) {
        var t = "string" == typeof e ? e.trim() : e,
            i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;if (t.length < 1 && t === i + " ") return 0;var n = this._store.searchableChoices,
            r = t,
            o = [].concat(this.config.searchFields),
            a = Object.assign(this.config.fuseOptions, { keys: o }),
            c = new s.a(n, a).search(r);return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch(function (e) {
          return { type: U, results: e };
        }(c)), c.length;
      }, r._addEventListeners = function () {
        var e = document.documentElement;e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, { passive: !0 }), e.addEventListener("touchmove", this._onTouchMove, { passive: !0 }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, { passive: !0 }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.containerOuter.element.addEventListener("blur", this._onBlur, { passive: !0 })), this.input.element.addEventListener("keyup", this._onKeyUp, { passive: !0 }), this.input.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.input.element.addEventListener("blur", this._onBlur, { passive: !0 }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, { passive: !0 }), this.input.addEventListeners();
      }, r._removeEventListeners = function () {
        var e = document.documentElement;e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
      }, r._onKeyDown = function (e) {
        var t,
            i = e.target,
            n = e.keyCode,
            s = e.ctrlKey,
            r = e.metaKey,
            o = this._store.activeItems,
            a = this.input.isFocussed,
            c = this.dropdown.isActive,
            l = this.itemList.hasChildren(),
            h = String.fromCharCode(n),
            u = Z,
            d = Q,
            p = ee,
            m = te,
            f = ie,
            v = ne,
            g = se,
            _ = re,
            b = oe,
            y = s || r;!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(h) && this.showDropdown();var E = ((t = {})[m] = this._onAKey, t[p] = this._onEnterKey, t[f] = this._onEscapeKey, t[v] = this._onDirectionKey, t[_] = this._onDirectionKey, t[g] = this._onDirectionKey, t[b] = this._onDirectionKey, t[d] = this._onDeleteKey, t[u] = this._onDeleteKey, t);E[n] && E[n]({ event: e, target: i, keyCode: n, metaKey: r, activeItems: o, hasFocusedInput: a, hasActiveDropdown: c, hasItems: l, hasCtrlDownKeyPressed: y });
      }, r._onKeyUp = function (e) {
        var t = e.target,
            i = e.keyCode,
            n = this.input.value,
            s = this._store.activeItems,
            r = this._canAddItem(s, n),
            o = Z,
            a = Q;if (this._isTextElement) {
          if (r.notice && n) {
            var c = this._getTemplate("notice", r.notice);this.dropdown.element.innerHTML = c.outerHTML, this.showDropdown(!0);
          } else this.hideDropdown(!0);
        } else {
          var l = (i === o || i === a) && !t.value,
              h = !this._isTextElement && this._isSearching,
              u = this._canSearch && r.response;l && h ? (this._isSearching = !1, this._store.dispatch(Ee(!0))) : u && this._handleSearch(this.input.value);
        }this._canSearch = this.config.searchEnabled;
      }, r._onAKey = function (e) {
        var t = e.hasItems;e.hasCtrlDownKeyPressed && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
      }, r._onEnterKey = function (e) {
        var t = e.event,
            i = e.target,
            n = e.activeItems,
            s = e.hasActiveDropdown,
            r = ee,
            o = i.hasAttribute("data-button");if (this._isTextElement && i.value) {
          var a = this.input.value;this._canAddItem(n, a).response && (this.hideDropdown(!0), this._addItem({ value: a }), this._triggerChange(a), this.clearInput());
        }if (o && (this._handleButtonAction(n, i), t.preventDefault()), s) {
          var c = this.dropdown.getChild("." + this.config.classNames.highlightedState);c && (n[0] && (n[0].keyCode = r), this._handleChoiceAction(n, c)), t.preventDefault();
        } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault());
      }, r._onEscapeKey = function (e) {
        e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus());
      }, r._onDirectionKey = function (e) {
        var t,
            i,
            n,
            s = e.event,
            r = e.hasActiveDropdown,
            o = e.keyCode,
            a = e.metaKey,
            c = se,
            l = re,
            h = oe;if (r || this._isSelectOneElement) {
          this.showDropdown(), this._canSearch = !1;var u,
              d = o === c || o === h ? 1 : -1;if (a || o === h || o === l) u = d > 0 ? this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type") : this.dropdown.element.querySelector("[data-choice-selectable]");else {
            var p = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);u = p ? function (e, t, i) {
              if (void 0 === i && (i = 1), e instanceof Element && "string" == typeof t) {
                for (var n = (i > 0 ? "next" : "previous") + "ElementSibling", s = e[n]; s;) {
                  if (s.matches(t)) return s;s = s[n];
                }return s;
              }
            }(p, "[data-choice-selectable]", d) : this.dropdown.element.querySelector("[data-choice-selectable]");
          }u && (t = u, i = this.choiceList.element, void 0 === (n = d) && (n = 1), t && (n > 0 ? i.scrollTop + i.offsetHeight >= t.offsetTop + t.offsetHeight : t.offsetTop >= i.scrollTop) || this.choiceList.scrollToChildElement(u, d), this._highlightChoice(u)), s.preventDefault();
        }
      }, r._onDeleteKey = function (e) {
        var t = e.event,
            i = e.target,
            n = e.hasFocusedInput,
            s = e.activeItems;!n || i.value || this._isSelectOneElement || (this._handleBackspace(s), t.preventDefault());
      }, r._onTouchMove = function () {
        this._wasTap && (this._wasTap = !1);
      }, r._onTouchEnd = function (e) {
        var t = (e || e.touches[0]).target;this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation());this._wasTap = !0;
      }, r._onMouseDown = function (e) {
        var t = e.target;if (t instanceof HTMLElement) {
          if (Ce && this.choiceList.element.contains(t)) {
            var i = this.choiceList.element.firstElementChild,
                n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;this._isScrollingOnIe = n;
          }if (t !== this.input.element) {
            var s = t.closest("[data-button],[data-item],[data-choice]");if (s instanceof HTMLElement) {
              var r = e.shiftKey,
                  o = this._store.activeItems,
                  a = s.dataset;"button" in a ? this._handleButtonAction(o, s) : "item" in a ? this._handleItemAction(o, s, r) : "choice" in a && this._handleChoiceAction(o, s);
            }e.preventDefault();
          }
        }
      }, r._onMouseOver = function (e) {
        var t = e.target;t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
      }, r._onClick = function (e) {
        var t = e.target;this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
      }, r._onFocus = function (e) {
        var t,
            i = this,
            n = e.target;this.containerOuter.element.contains(n) && ((t = {})[ae] = function () {
          n === i.input.element && i.containerOuter.addFocusState();
        }, t[ce] = function () {
          i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
        }, t[le] = function () {
          n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
        }, t)[this.passedElement.element.type]();
      }, r._onBlur = function (e) {
        var t = this,
            i = e.target;if (this.containerOuter.element.contains(i) && !this._isScrollingOnIe) {
          var n,
              s = this._store.activeItems.some(function (e) {
            return e.highlighted;
          });((n = {})[ae] = function () {
            i === t.input.element && (t.containerOuter.removeFocusState(), s && t.unhighlightAll(), t.hideDropdown(!0));
          }, n[ce] = function () {
            t.containerOuter.removeFocusState(), (i === t.input.element || i === t.containerOuter.element && !t._canSearch) && t.hideDropdown(!0);
          }, n[le] = function () {
            i === t.input.element && (t.containerOuter.removeFocusState(), t.hideDropdown(!0), s && t.unhighlightAll());
          }, n)[this.passedElement.element.type]();
        } else this._isScrollingOnIe = !1, this.input.element.focus();
      }, r._onFormReset = function () {
        this._store.dispatch({ type: "RESET_TO", state: this._initialState });
      }, r._highlightChoice = function (e) {
        var t = this;void 0 === e && (e = null);var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if (i.length) {
          var n = e;Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)).forEach(function (e) {
            e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
          }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(G, { el: n }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
        }
      }, r._addItem = function (e) {
        var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.choiceId,
            r = void 0 === s ? -1 : s,
            o = e.groupId,
            a = void 0 === o ? -1 : o,
            c = e.customProperties,
            l = void 0 === c ? null : c,
            h = e.placeholder,
            u = void 0 !== h && h,
            d = e.keyCode,
            p = void 0 === d ? null : d,
            m = "string" == typeof t ? t.trim() : t,
            f = p,
            v = l,
            g = this._store.items,
            _ = n || m,
            b = r || -1,
            y = a >= 0 ? this._store.getGroupById(a) : null,
            E = g ? g.length + 1 : 1;return this.config.prependValue && (m = this.config.prependValue + m.toString()), this.config.appendValue && (m += this.config.appendValue.toString()), this._store.dispatch(function (e) {
          var t = e.value,
              i = e.label,
              n = e.id,
              s = e.choiceId,
              r = e.groupId,
              o = e.customProperties,
              a = e.placeholder,
              c = e.keyCode;return { type: $, value: t, label: i, id: n, choiceId: s, groupId: r, customProperties: o, placeholder: a, keyCode: c };
        }({ value: m, label: _, id: E, choiceId: b, groupId: a, customProperties: l, placeholder: u, keyCode: f })), this._isSelectOneElement && this.removeActiveItems(E), this.passedElement.triggerEvent(H, { id: E, value: m, label: _, customProperties: v, groupValue: y && y.value ? y.value : void 0, keyCode: f }), this;
      }, r._removeItem = function (e) {
        if (!e || !I("Object", e)) return this;var t = e.id,
            i = e.value,
            n = e.label,
            s = e.choiceId,
            r = e.groupId,
            o = r >= 0 ? this._store.getGroupById(r) : null;return this._store.dispatch(function (e, t) {
          return { type: J, id: e, choiceId: t };
        }(t, s)), o && o.value ? this.passedElement.triggerEvent(B, { id: t, value: i, label: n, groupValue: o.value }) : this.passedElement.triggerEvent(B, { id: t, value: i, label: n }), this;
      }, r._addChoice = function (e) {
        var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.isSelected,
            r = void 0 !== s && s,
            o = e.isDisabled,
            a = void 0 !== o && o,
            c = e.groupId,
            l = void 0 === c ? -1 : c,
            h = e.customProperties,
            u = void 0 === h ? null : h,
            d = e.placeholder,
            p = void 0 !== d && d,
            m = e.keyCode,
            f = void 0 === m ? null : m;if (null != t) {
          var v = this._store.choices,
              g = n || t,
              _ = v ? v.length + 1 : 1,
              b = this._baseId + "-" + this._idNames.itemChoice + "-" + _;this._store.dispatch(function (e) {
            var t = e.value,
                i = e.label,
                n = e.id,
                s = e.groupId,
                r = e.disabled,
                o = e.elementId,
                a = e.customProperties,
                c = e.placeholder,
                l = e.keyCode;return { type: q, value: t, label: i, id: n, groupId: s, disabled: r, elementId: o, customProperties: a, placeholder: c, keyCode: l };
          }({ id: _, groupId: l, elementId: b, value: t, label: g, disabled: a, customProperties: u, placeholder: p, keyCode: f })), r && this._addItem({ value: t, label: g, choiceId: _, customProperties: u, placeholder: p, keyCode: f });
        }
      }, r._addGroup = function (e) {
        var t = this,
            i = e.group,
            n = e.id,
            s = e.valueKey,
            r = void 0 === s ? "value" : s,
            o = e.labelKey,
            a = void 0 === o ? "label" : o,
            c = I("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
            l = n || Math.floor(new Date().valueOf() * Math.random()),
            h = !!i.disabled && i.disabled;if (c) {
          this._store.dispatch(Se({ value: i.label, id: l, active: !0, disabled: h }));c.forEach(function (e) {
            var i = e.disabled || e.parentNode && e.parentNode.disabled;t._addChoice({ value: e[r], label: I("Object", e) ? e[a] : e.innerHTML, isSelected: e.selected, isDisabled: i, groupId: l, customProperties: e.customProperties, placeholder: e.placeholder });
          });
        } else this._store.dispatch(Se({ value: i.label, id: i.id, active: !1, disabled: i.disabled }));
      }, r._getTemplate = function (e) {
        var t;if (!e) return null;for (var i = this.config.classNames, n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
          s[r - 1] = arguments[r];
        }return (t = this._templates[e]).call.apply(t, [this, i].concat(s));
      }, r._createTemplates = function () {
        var e = this.config.callbackOnCreateTemplates,
            t = {};e && "function" == typeof e && (t = e.call(this, w)), this._templates = o()(ye, t);
      }, r._createElements = function () {
        this.containerOuter = new he({ element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type), classNames: this.config.classNames, type: this.passedElement.element.type, position: this.config.position }), this.containerInner = new he({ element: this._getTemplate("containerInner"), classNames: this.config.classNames, type: this.passedElement.element.type, position: this.config.position }), this.input = new de({ element: this._getTemplate("input", this._placeholderValue), classNames: this.config.classNames, type: this.passedElement.element.type, preventPaste: !this.config.paste }), this.choiceList = new pe({ element: this._getTemplate("choiceList", this._isSelectOneElement) }), this.itemList = new pe({ element: this._getTemplate("itemList", this._isSelectOneElement) }), this.dropdown = new D({ element: this._getTemplate("dropdown"), classNames: this.config.classNames, type: this.passedElement.element.type });
      }, r._createStructure = function () {
        this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems);
      }, r._addPredefinedGroups = function (e) {
        var t = this,
            i = this.passedElement.placeholderOption;i && "SELECT" === i.parentNode.tagName && this._addChoice({ value: i.value, label: i.innerHTML, isSelected: i.selected, isDisabled: i.disabled, placeholder: !0 }), e.forEach(function (e) {
          return t._addGroup({ group: e, id: e.id || null });
        });
      }, r._addPredefinedChoices = function (e) {
        var t = this;this.config.shouldSort && e.sort(this.config.sorter);var i = e.some(function (e) {
          return e.selected;
        }),
            n = e.findIndex(function (e) {
          return void 0 === e.disabled || !e.disabled;
        });e.forEach(function (e, s) {
          var r = e.value,
              o = e.label,
              a = e.customProperties,
              c = e.placeholder;if (t._isSelectElement) {
            if (e.choices) t._addGroup({ group: e, id: e.id || null });else {
              var l = !!(t._isSelectOneElement && !i && s === n) || e.selected,
                  h = e.disabled;t._addChoice({ value: r, label: o, isSelected: l, isDisabled: h, customProperties: a, placeholder: c });
            }
          } else t._addChoice({ value: r, label: o, isSelected: e.selected, isDisabled: e.disabled, customProperties: a, placeholder: c });
        });
      }, r._addPredefinedItems = function (e) {
        var t = this;e.forEach(function (e) {
          "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.value && t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder }), "string" == typeof e && t._addItem({ value: e });
        });
      }, r._setChoiceOrItem = function (e) {
        var t = this;({ object: function object() {
            e.value && (t._isTextElement ? t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder }) : t._addChoice({ value: e.value, label: e.label, isSelected: !0, isDisabled: !1, customProperties: e.customProperties, placeholder: e.placeholder }));
          }, string: function string() {
            t._isTextElement ? t._addItem({ value: e }) : t._addChoice({ value: e, label: e, isSelected: !0, isDisabled: !1 });
          } })[E(e).toLowerCase()]();
      }, r._findAndSelectChoiceByValue = function (e) {
        var t = this,
            i = this._store.choices.find(function (i) {
          return t.config.valueComparer(i.value, e);
        });i && !i.selected && this._addItem({ value: i.value, label: i.label, choiceId: i.id, groupId: i.groupId, customProperties: i.customProperties, placeholder: i.placeholder, keyCode: i.keyCode });
      }, r._generatePlaceholderValue = function () {
        if (this._isSelectElement) {
          var e = this.passedElement.placeholderOption;return !!e && e.text;
        }var t = this.config,
            i = t.placeholder,
            n = t.placeholderValue,
            s = this.passedElement.element.dataset;if (i) {
          if (n) return n;if (s.placeholder) return s.placeholder;
        }return !1;
      }, n;
    }();t.default = Le;
  }]).default;;
  var element = document.getElementById("select-pricing");
  var link = $(".select-pricing-link");

  if ($("#select-pricing").length) {
    var choices = new Choices("#select-pricing", {
      searchEnabled: false,
      itemSelectText: ""
    });

    link.hide();

    element.addEventListener('showDropdown', function (event) {
      link.show();
      $(".choices__list.choices__list--dropdown").append(link);
    });

    element.addEventListener('hideDropdown', function (event) {
      $(".choices__list .select-pricing-link").remove();
    });
  }

  if ($('.js-request-select').length > 0) {
    $('.js-request-select').each(function (ind, el) {
      var choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: ""
      });
    });
  };
  if (!!$('.js-section-scroll-trigger').length) {
    var initScrollSection = function initScrollSection() {
      // global setting for scenes
      var controllerScrollSection = new ScrollMagic.Controller({
        globalSceneOptions: {
          duration: "100%"
        }
      });

      // get all sections
      var sections = $('.js-section-scroll-trigger');

      // create scene for every section
      for (var i = 0; i < sections.length; i++) {
        var mainSection = $(sections[i]);
        var img = $(mainSection).find('.section-advert__image');
        var sectionAdvert = $(mainSection).find('.section-advert');

        new ScrollMagic.Scene({
          triggerHook: 'onEnter',
          triggerElement: sections[i],
          duration: '100%'
        }).setTween(img, {
          scale: 1
        }).addTo(controllerScrollSection);

        new ScrollMagic.Scene({
          triggerElement: sections[i],
          duration: '100%'
        }).setClassToggle(".js-get-section[href^=\"#" + mainSection.attr('id') + "\"]", 'active').addTo(controllerScrollSection);

        new ScrollMagic.Scene({
          triggerHook: 'onLeave',
          triggerElement: sections[i],
          offset: 150
        }).setTween(sectionAdvert, {
          y: 200,
          opacity: 0,
          duration: '100%'
        }).addTo(controllerScrollSection);
      };

      controllerScrollSection.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, { scrollTo: { y: newpos } });
      });

      //  bind scroll to anchor links
      $(document).on("click", ".js-get-section[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
          e.preventDefault();

          // trigger scroll
          controllerScrollSection.scrollTo(id);

          // if supported by the browser we can even update the URL.
          if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
          }
        }
      });

      // destroy for mobile
      var breakpointDestroy = 768;
      var windowWidth = $(window).width();
      var isMobile = false;

      $(window).resize(function () {
        windowWidth = $(window).width();
      });

      function updateScrollSection() {
        if (windowWidth < breakpointDestroy && !isMobile) {
          isMobile = true;
          controllerScrollSection.destroy(true);
        } else if (windowWidth >= breakpointDestroy && isMobile) {
          isMobile = false;
          initScrollSection();
        }
      }
      updateScrollSection();

      $(window).resize(function () {
        updateScrollSection();
      });
    };

    initScrollSection();
  }

  if ($('.main__section-advert').length > 0) {
    var heightTrigger = $('.main__section-advert').height();
    var heightWindow = $(window).height();

    var controllerDots = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: parseInt(heightTrigger) - heightWindow / 2
      }
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: ".main__section-advert",
      duration: parseInt(heightTrigger) - heightWindow / 2
    }).setPin(".main__section-dots").addTo(controllerDots);

    var controllerDotsPadding = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: heightWindow / 2
      }
    });

    new ScrollMagic.Scene({
      triggerElement: ".main__section-advert",
      duration: heightWindow / 2
    }).setTween(".main__section-dots", 0.1, {
      paddingTop: 0,
      paddingBottom: 0
    }).addTo(controllerDotsPadding);
  }
  ;
  if ($('.js-color-word').length > 0) {

    var apocurelem = $('.js-color-word').find('h3');
    var apolet = apocurelem.text().split('');

    for (var i in apolet) {
      apolet[i] = '<span>' + apolet[i] + '</span>';
    };

    var text = apolet.join("");
    apocurelem.html(text);

    var apocolorarr = ['#6d7732', '#be9067', '#a1bd6c', '#ad6090', '#b2914f', '#505b23', '#379b9b', '#9da56a', '#afac3a', '#9a9e7e', '#6f9e73'];

    var min = 0;
    var max = apocolorarr.length - 1;
    var aporandom = 0;
    $('.js-color-word h3 span').each(function (index) {
      $(this).css('color', apocolorarr[aporandom]);
      aporandom++;
      if (aporandom > max) {
        aporandom = 0;
      };
    });
  };
  function slideshowCounter(slideshow) {

    var slideshowId = slideshow;

    function countActiveSlideNumber() {
      var slideshowCounterCurrentNav = parseInt($(slideshowId + " .uk-slideshow-nav li.uk-active").attr("uk-slideshow-item")) + 1;
      var slideshowCounterCurrent = $("" + slideshowId + " " + ".slideshow__counter .slideshow__current");

      slideshowCounterCurrent.text("0" + slideshowCounterCurrentNav);
    }

    function countTotalSlidesNumber() {
      var slideshowCounterTotalNav = parseInt($(slideshowId + " .uk-slideshow-nav li:last-child").attr("uk-slideshow-item")) + 1;
      var slideshowCounterTotal = $("" + slideshowId + " " + ".slideshow__counter .slideshow__total");

      slideshowCounterTotal.text("0" + slideshowCounterTotalNav);
    }

    countActiveSlideNumber();
    countTotalSlidesNumber();
  }

  $(document).on('itemshow', ".js-slideshow", function () {
    slideshowCounter(".js-slideshow");
    $(".js-slideshow .slideshow__caption .uk-overflow-hidden > div").addClass("slideInLeft");
  });
  ;
  var sliderReviews = new Swiper('.slider-reviews .swiper-container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    speed: 1500,
    autoHeight: true,
    breakpoints: {
      768: {
        spaceBetween: 50
      },
      1200: {
        spaceBetween: 100
      }
    }
  });
  ;
  var tabs = function () {
    var tabButtons = $(".tab-button");

    var isFirstTabActive = function isFirstTabActive() {
      var result = false;
      $(".tab-button").each(function (index) {
        if ($(this).hasClass("active") && index === 0) {
          result = true;
          return false;
        }
        return result;
      });
    };

    var isLastTabActive = function isLastTabActive() {
      $(".tab-button").each(function (index) {
        if ($(this).hasClass("active") && index === $(".tab-button")[$(".tab-button").length - 1]) {
          return true;
        }
        return false;
      });
    };

    var init = function init() {
      $(".tab-button").on("click", function (e) {
        $(this).addClass("active").next(".tab-content").addClass("active");
        $(this).siblings().removeClass("active");
      });
    };

    var nextTab = function nextTab() {
      var currentTab = $(".tab-button.active");
      // if (!currentTab.next().next(".tab-button")) {
      //     $(".tab-button:first-of-type").trigger("click")
      // }
      currentTab.next().next(".tab-button").trigger("click");
    };

    var prevTab = function prevTab() {
      var currentTab = $(".tab-button.active");
      // if (!currentTab.prev()) {
      //     $(".tab-button:last-of-type").trigger("click")
      // }
      currentTab.prev().prev(".tab-button").trigger("click");
    };

    var setFirstTab = function setFirstTab() {
      $(tabButtons[0]).trigger("click");
    };

    var setLastTab = function setLastTab() {
      $(tabButtons[tabButtons.length - 1]).trigger("click");
    };

    $(".swiper-controls-desktop .swiper-button-next").on("click", function () {
      if (isLastTabActive()) {
        setFirstTab();
      }
      nextTab();
    });

    $(".swiper-controls-desktop .swiper-button-prev").on("click", function () {
      if (isFirstTabActive() == true) {
        setLastTab();
      }
      prevTab();
    });

    return {
      init: init,
      nextTab: nextTab,
      prevTab: prevTab,
      setFirstTab: setFirstTab,
      setLastTab: setLastTab,
      isFirstTabActive: isFirstTabActive,
      isLastTabActive: isLastTabActive
    };
  }();
  ;
  tabs.init();
  function initMonthPricesSlider() {
    if ($(".month-prices-slider").length) {
      var slideDouble = function slideDouble(selector) {
        var monthPricesSliderElement = document.querySelector(selector + " .swiper-container").swiper;
        // workaround to slide two slides at once since "loopedSlides" doesn't work in vertical mode
        $(selector + " .swiper-button-next").on("click", function () {
          monthPricesSliderElement.slideNext();
        });
        $(selector + " .swiper-button-prev").on("click", function () {
          monthPricesSliderElement.slidePrev();
        });
      };

      'use strict';
      var breakpoint = window.matchMedia('(min-width:768px)');
      var monthPricesSlider1 = void 0;
      var breakpointChecker = function breakpointChecker() {
        if (breakpoint.matches === true) {
          if (monthPricesSlider1 !== undefined) monthPricesSlider1.destroy(true, true);
          return;
        } else if (breakpoint.matches === false) {
          enableSwiper1();
          enableSwiper2();
          enableSwiper3();
          return;
        }
      };

      var enableSwiper1 = function enableSwiper1() {
        var monthPricesSlider1 = new Swiper(".month-prices-slider1 .swiper-container", {
          spaceBetween: 40,
          direction: 'vertical',
          slidesPerView: 2,
          loopedSlides: 2,
          navigation: {
            nextEl: '.swiper-button-next.swiper-button-next1',
            prevEl: '.swiper-button-prev.swiper-button-prev1'
          },
          autoHeight: true
        });
        slideDouble(".month-prices-slider1");
      };
      var enableSwiper2 = function enableSwiper2() {
        var monthPricesSlider2 = new Swiper(".month-prices-slider2 .swiper-container", {
          spaceBetween: 40,
          direction: 'vertical',
          slidesPerView: 2,
          loopedSlides: 2,
          navigation: {
            nextEl: '.swiper-button-next.swiper-button-next2',
            prevEl: '.swiper-button-prev.swiper-button-prev2'
          },
          autoHeight: true
        });
        slideDouble(".month-prices-slider2");
      };
      var enableSwiper3 = function enableSwiper3() {
        var monthPricesSlider3 = new Swiper(".month-prices-slider3 .swiper-container", {
          spaceBetween: 40,
          direction: 'vertical',
          slidesPerView: 2,
          loopedSlides: 2,
          navigation: {
            nextEl: '.swiper-button-next.swiper-button-next3',
            prevEl: '.swiper-button-prev.swiper-button-prev3'
          },
          autoHeight: true
        });
        slideDouble(".month-prices-slider3");
      };
      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    }
  };
  ;
  initMonthPricesSlider();
  var dropdown = function () {
    var dropdownEl = ".dropdown";
    var dropdownToggle = ".dropdown__toggle";
    var dropdownContent = ".dropdown__content";
    var dropdownClose = ".dropdown__close";

    var init = function init() {
      $(dropdownEl).each(function () {
        $(this).children(dropdownToggle).on("click", function () {
          $(this).next(dropdownContent).slideToggle(250);
          $(this).parent(dropdownEl).toggleClass("is-open");
        });

        $(this).find(dropdownClose).on("click", function () {
          $(this).parents(dropdownContent).slideToggle(250);
          $(this).parents(dropdownEl).toggleClass("is-open");
        });
      });
    };

    return {
      init: init
    };
  }();
  ;
  dropdown.init();
  function animateLogos() {
    var logos = $(".slideshow__logos > div");
    logos.show().addClass("fadeInBlur");
  }

  $(document).on("itemshown", ".js-slideshow", function () {
    setTimeout(function () {
      animateLogos();
    }, 1000);
  });
  ;
  function headerScroll() {
    var header = $('.header'),
        hamburger = $('.menu__toggle-open'),
        hamburgerIcon = hamburger.find('.uk-icon'),
        breakpointScrollHeader = $(".header").height(),
        social = $('.header__social').find('.social__icon'),
        logo = $('.header__logo');

    $(window).scroll(function () {
      var $this = $(this);

      if ($this.width() >= 768) {
        var positionSrollWindow = $this.scrollTop();

        if (positionSrollWindow >= breakpointScrollHeader) {
          header.css({
            backgroundColor: '#fff',
            boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.5)"
          });

          hamburger.css({
            backgroundColor: '#30b298'
          });

          social.css({
            color: '#3b8a80'
          });

          hamburgerIcon.css({
            color: '#fff'
          });

          logo.addClass('show');
        } else {
          header.css({
            backgroundColor: '',
            boxShadow: ''
          });

          hamburger.css({
            backgroundColor: ''
          });

          social.css({
            color: ''
          });

          hamburgerIcon.css({
            color: ''
          });

          logo.removeClass('show');
        }
      }
    });

    $(window).resize(function () {
      if ($(this).width() < 768) {
        logo.show();
        header.css({
          backgroundColor: ''
        });

        hamburger.css({
          backgroundColor: ''
        });

        social.css({
          color: ''
        });

        hamburgerIcon.css({
          color: ''
        });
      }
    });

    $(document).on('shown', ".js-toggle-menu", function () {
      header.css({
        backgroundColor: '',
        boxShadow: ''
      });
    });

    $(document).on('hidden', ".js-toggle-menu", function () {
      if (window.pageYOffset >= $(".header").height()) {
        header.css({
          backgroundColor: '#fff',
          boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.5)"
        });
      }
    });
  }
  ;
  headerScroll();
  if ($('.js-trigger-hamburger').length > 0) {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({ triggerElement: ".js-trigger-hamburger", triggerHook: 'onEnter', offset: 100 }).setClassToggle(".float-hamburger", "show").addTo(controller);
  }
  ;
  if ($('.js-wedding-filter-slider').length > 0) {
    var enableSlider = function enableSlider() {
      if (windowWidth < breakpoint && !weddingFilterSlider) {
        weddingFilterSlider = new Swiper('.js-wedding-filter-slider', {
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      };
    };

    var destroySlider = function destroySlider() {
      if (windowWidth >= breakpoint && weddingFilterSlider) {
        weddingFilterSlider.destroy(true, true);
        weddingFilterSlider = null;
      }
    };

    var weddingFilterSlider = null;
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var breakpoint = 768;

    ;
    enableSlider();

    ;

    $window.resize(function () {
      windowWidth = $window.outerWidth();
      enableSlider();
      destroySlider();
    });
  };;
  if ($('.js-gallery-slider').length > 0) {
    var _enableSlider = function _enableSlider() {
      if (windowWidth < breakpoint && !weddingFilterSlider) {
        weddingFilterSlider = new Swiper('.js-gallery-slider', {
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      };
    };

    var _destroySlider = function _destroySlider() {
      if (windowWidth >= breakpoint && weddingFilterSlider) {
        weddingFilterSlider.destroy(true, true);
        weddingFilterSlider = null;
      }
    };

    var weddingFilterSlider = null;
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var breakpoint = 768;

    ;
    _enableSlider();

    ;

    $window.resize(function () {
      windowWidth = $window.outerWidth();
      _enableSlider();
      _destroySlider();
    });
  };;

  if ($('.js-choose-date').length > 0) {
    $('.js-choose-date').daterangepicker({
      opens: 'center',
      minDate: moment(),
      singleDatePicker: true,
      isInvalidDate: function isInvalidDate(date) {
        var nameDay = date.format('ddd');
        if (nameDay === 'Mon' || nameDay === 'Fri') {
          console.log(nameDay);
          return false;
        }

        return true;
      }
    });
  }

  if ($(".js-check-brochure-label").length > 0) {

    $(".js-check-brochure-label").on('click', function (e) {
      $('.js-check-brochure').removeAttr('checked');

      setTimeout(function () {
        $(e.target).find('input').attr('checked', true);
      }, 400);
    });
  };

  if ($('.js-toggle-input-search').length > 0) {
    $('.js-toggle-input-search').on('click', function () {
      var input = $(this).next();

      if (input.hasClass('active')) {
        input.removeClass('active');
      } else {
        input.addClass('active');
        input.focus();
      }
    });
  }

  if ($('.js-to-next-section').length > 0) {
    $('.js-to-next-section').on('click', function () {
      var parent = $(this).closest('.js-parent-to-next-section');
      var target = parent.next();
      var offsetTop = target.offset().top;
      $('html, body').animate({
        scrollTop: offsetTop
      }, 600);
    });
  }

  function disableMenuItemTogglers() {
    var $window = $(window);
    var windowWidth = $window.outerWidth();
    var breakpoint = 1024;

    if (windowWidth < breakpoint) {
      $(".nav__link").removeAttr("data-uk-toggle");
    }
  }

  disableMenuItemTogglers();

  $(window).resize(function () {
    disableMenuItemTogglers();
  });
});