/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(76)
  , defined = __webpack_require__(17);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(14);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(36)
  , toPrimitive    = __webpack_require__(27)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(25)('wks')
  , uid        = __webpack_require__(15)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(41)
  , enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Event = exports.router = undefined;

var _vue = __webpack_require__(134);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(129);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = __webpack_require__(128);

var _vueResource2 = _interopRequireDefault(_vueResource);

var _Main = __webpack_require__(108);

var _Main2 = _interopRequireDefault(_Main);

var _Home = __webpack_require__(106);

var _Home2 = _interopRequireDefault(_Home);

var _Post = __webpack_require__(110);

var _Post2 = _interopRequireDefault(_Post);

var _Posts = __webpack_require__(112);

var _Posts2 = _interopRequireDefault(_Posts);

var _Login = __webpack_require__(107);

var _Login2 = _interopRequireDefault(_Login);

var _Signup = __webpack_require__(114);

var _Signup2 = _interopRequireDefault(_Signup);

var _Profile = __webpack_require__(113);

var _Profile2 = _interopRequireDefault(_Profile);

var _CreatePost = __webpack_require__(104);

var _CreatePost2 = _interopRequireDefault(_CreatePost);

var _auth = __webpack_require__(32);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueRouter2.default);

var router = exports.router = new _vueRouter2.default({
	mode: 'history',
	linkActiveClass: 'active',
	scrollBehavior: function scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			setTimeout(function () {
				window.scrollTo(savedPosition.x, savedPosition.y);
			}, 200);
		} else if (to.hash) {
			setTimeout(function () {
				window.scrollTo(0, to.hash.offsetTop);
			}, 200);
		} else {
			setTimeout(function () {
				window.scrollTo(0, 0);
			}, 200);
		}
	},

	routes: [{
		name: 'home',
		path: '/',
		component: _Home2.default
	}, {
		path: '/login',
		component: _Login2.default
	}, {
		path: '/signup',
		component: _Signup2.default
	}, {
		path: '/posts',
		component: _Posts2.default
	}, {
		name: 'create-post',
		path: '/posts/create',
		component: _CreatePost2.default,
		meta: { auth: true }
	}, {
		name: 'post',
		path: '/posts/:href',
		component: _Post2.default,
		props: true
	}, {
		name: 'categories',
		path: '/posts/categories/:tag',
		component: _Posts2.default,
		props: true
	}, {
		name: 'profile',
		path: '/profile',
		component: _Profile2.default,
		props: true,
		meta: { auth: true }
	}, {
		path: '*',
		redirect: '/'
	}]
});

var Event = exports.Event = new _vue2.default({});

router.beforeEach(function (to, from, next) {
	if (to.meta.auth) {
		console.log('private route');
	}
	Event.$emit('changeState');
	next();
});

var app = new _vue2.default({
	el: '#app',
	router: router,
	render: function render(h) {
		return h(_Main2.default);
	}
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _keys = __webpack_require__(63);

var _keys2 = _interopRequireDefault(_keys);

var _isFrozen = __webpack_require__(62);

var _isFrozen2 = _interopRequireDefault(_isFrozen);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function (a, b) {
  "object" == ( false ? "undefined" : (0, _typeof3.default)(exports)) && "undefined" != typeof module ? module.exports = b() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.moment = b();
}(undefined, function () {
  "use strict";
  function a() {
    return re.apply(null, arguments);
  }function b(a) {
    re = a;
  }function c(a) {
    return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
  }function d(a) {
    return null != a && "[object Object]" === Object.prototype.toString.call(a);
  }function e(a) {
    var b;for (b in a) {
      return !1;
    }return !0;
  }function f(a) {
    return void 0 === a;
  }function g(a) {
    return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a);
  }function h(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
  }function i(a, b) {
    var c,
        d = [];for (c = 0; c < a.length; ++c) {
      d.push(b(a[c], c));
    }return d;
  }function j(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }function k(a, b) {
    for (var c in b) {
      j(b, c) && (a[c] = b[c]);
    }return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a;
  }function l(a, b, c, d) {
    return sb(a, b, c, d, !0).utc();
  }function m() {
    return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 };
  }function n(a) {
    return null == a._pf && (a._pf = m()), a._pf;
  }function o(a) {
    if (null == a._isValid) {
      var b = n(a),
          c = te.call(b.parsedDateParts, function (a) {
        return null != a;
      }),
          d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != _isFrozen2.default && (0, _isFrozen2.default)(a)) return d;a._isValid = d;
    }return a._isValid;
  }function p(a) {
    var b = l(NaN);return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b;
  }function q(a, b) {
    var c, d, e;if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), ue.length > 0) for (c = 0; c < ue.length; c++) {
      d = ue[c], e = b[d], f(e) || (a[d] = e);
    }return a;
  }function r(b) {
    q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ve === !1 && (ve = !0, a.updateOffset(this), ve = !1);
  }function s(a) {
    return a instanceof r || null != a && null != a._isAMomentObject;
  }function t(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }function u(a) {
    var b = +a,
        c = 0;return 0 !== b && isFinite(b) && (c = t(b)), c;
  }function v(a, b, c) {
    var d,
        e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;for (d = 0; d < e; d++) {
      (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
    }return g + f;
  }function w(b) {
    a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
  }function x(b, c) {
    var d = !0;return k(function () {
      if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (e = "", "object" == (0, _typeof3.default)(arguments[g])) {
            e += "\n[" + g + "] ";for (var h in arguments[0]) {
              e += h + ": " + arguments[0][h] + ", ";
            }e = e.slice(0, -2);
          } else e = arguments[g];f.push(e);
        }w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + new Error().stack), d = !1;
      }return c.apply(this, arguments);
    }, c);
  }function y(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c), we[b] || (w(c), we[b] = !0);
  }function z(a) {
    return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
  }function A(a) {
    var b, c;for (c in a) {
      b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
    }this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }function B(a, b) {
    var c,
        e = k({}, a);for (c in b) {
      j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
    }for (c in a) {
      j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
    }return e;
  }function C(a) {
    null != a && this.set(a);
  }function D(a, b, c) {
    var d = this._calendar[a] || this._calendar.sameElse;return z(d) ? d.call(b, c) : d;
  }function E(a) {
    var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
      return a.slice(1);
    }), this._longDateFormat[a]);
  }function F() {
    return this._invalidDate;
  }function G(a) {
    return this._ordinal.replace("%d", a);
  }function H(a, b, c, d) {
    var e = this._relativeTime[c];return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }function I(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];return z(c) ? c(b) : c.replace(/%s/i, b);
  }function J(a, b) {
    var c = a.toLowerCase();Ge[c] = Ge[c + "s"] = Ge[b] = a;
  }function K(a) {
    return "string" == typeof a ? Ge[a] || Ge[a.toLowerCase()] : void 0;
  }function L(a) {
    var b,
        c,
        d = {};for (c in a) {
      j(a, c) && (b = K(c), b && (d[b] = a[c]));
    }return d;
  }function M(a, b) {
    He[a] = b;
  }function N(a) {
    var b = [];for (var c in a) {
      b.push({ unit: c, priority: He[c] });
    }return b.sort(function (a, b) {
      return a.priority - b.priority;
    }), b;
  }function O(b, c) {
    return function (d) {
      return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b);
    };
  }function P(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }function Q(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }function R(a) {
    return a = K(a), z(this[a]) ? this[a]() : this;
  }function S(a, b) {
    if ("object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a))) {
      a = L(a);for (var c = N(a), d = 0; d < c.length; d++) {
        this[c[d].unit](a[c[d].unit]);
      }
    } else if (a = K(a), z(this[a])) return this[a](b);return this;
  }function T(a, b, c) {
    var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
  }function U(a, b, c, d) {
    var e = d;"string" == typeof d && (e = function e() {
      return this[d]();
    }), a && (Le[a] = e), b && (Le[b[0]] = function () {
      return T(e.apply(this, arguments), b[1], b[2]);
    }), c && (Le[c] = function () {
      return this.localeData().ordinal(e.apply(this, arguments), a);
    });
  }function V(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
  }function W(a) {
    var b,
        c,
        d = a.match(Ie);for (b = 0, c = d.length; b < c; b++) {
      Le[d[b]] ? d[b] = Le[d[b]] : d[b] = V(d[b]);
    }return function (b) {
      var e,
          f = "";for (e = 0; e < c; e++) {
        f += z(d[e]) ? d[e].call(b, a) : d[e];
      }return f;
    };
  }function X(a, b) {
    return a.isValid() ? (b = Y(b, a.localeData()), Ke[b] = Ke[b] || W(b), Ke[b](a)) : a.localeData().invalidDate();
  }function Y(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }var d = 5;for (Je.lastIndex = 0; d >= 0 && Je.test(a);) {
      a = a.replace(Je, c), Je.lastIndex = 0, d -= 1;
    }return a;
  }function Z(a, b, c) {
    bf[a] = z(b) ? b : function (a, d) {
      return a && c ? c : b;
    };
  }function $(a, b) {
    return j(bf, a) ? bf[a](b._strict, b._locale) : new RegExp(_(a));
  }function _(a) {
    return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e;
    }));
  }function aa(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }function ba(a, b) {
    var c,
        d = b;for ("string" == typeof a && (a = [a]), g(b) && (d = function d(a, c) {
      c[b] = u(a);
    }), c = 0; c < a.length; c++) {
      cf[a[c]] = d;
    }
  }function ca(a, b) {
    ba(a, function (a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e);
    });
  }function da(a, b, c) {
    null != b && j(cf, a) && cf[a](b, c._a, c, a);
  }function ea(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }function fa(a, b) {
    return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || of).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone;
  }function ga(a, b) {
    return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[of.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }function ha(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) {
      f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
    }return c ? "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null));
  }function ia(a, b, c) {
    var d, e, f;if (this._monthsParseExact) return ha.call(this, a, b, c);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
      if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;if (!c && this._monthsParse[d].test(a)) return d;
    }
  }function ja(a, b) {
    var c;if (!a.isValid()) return a;if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b);else if (b = a.localeData().monthsParse(b), !g(b)) return a;return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a;
  }function ka(b) {
    return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month");
  }function la() {
    return ea(this.year(), this.month());
  }function ma(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = rf), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }function na(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = sf), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
  }function oa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d = [],
        e = [],
        f = [];for (b = 0; b < 12; b++) {
      c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
    }for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) {
      d[b] = aa(d[b]), e[b] = aa(e[b]);
    }for (b = 0; b < 24; b++) {
      f[b] = aa(f[b]);
    }this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
  }function pa(a) {
    return qa(a) ? 366 : 365;
  }function qa(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
  }function ra() {
    return qa(this.year());
  }function sa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
  }function ta(a) {
    var b = new Date(Date.UTC.apply(null, arguments));return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b;
  }function ua(a, b, c) {
    var d = 7 + b - c,
        e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;return -e + d - 1;
  }function va(a, b, c, d, e) {
    var f,
        g,
        h = (7 + c - d) % 7,
        i = ua(a, d, e),
        j = 1 + 7 * (b - 1) + h + i;return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), { year: f, dayOfYear: g };
  }function wa(a, b, c) {
    var d,
        e,
        f = ua(a.year(), b, c),
        g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), { week: d, year: e };
  }function xa(a, b, c) {
    var d = ua(a, b, c),
        e = ua(a + 1, b, c);return (pa(a) - d + e) / 7;
  }function ya(a) {
    return wa(a, this._week.dow, this._week.doy).week;
  }function za() {
    return this._week.dow;
  }function Aa() {
    return this._week.doy;
  }function Ba(a) {
    var b = this.localeData().week(this);return null == a ? b : this.add(7 * (a - b), "d");
  }function Ca(a) {
    var b = wa(this, 1, 4).week;return null == a ? b : this.add(7 * (a - b), "d");
  }function Da(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
  }function Ea(a, b) {
    return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
  }function Fa(a, b) {
    return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }function Ga(a) {
    return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
  }function Ha(a) {
    return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
  }function Ia(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) {
      f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
    }return c ? "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)));
  }function Ja(a, b, c) {
    var d, e, f;if (this._weekdaysParseExact) return Ia.call(this, a, b, c);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
      if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }function Ka(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b;
  }function La(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == a ? b : this.add(a - b, "d");
  }function Ma(a) {
    if (!this.isValid()) return null != a ? this : NaN;if (null != a) {
      var b = Ea(a, this.localeData());return this.day(this.day() % 7 ? b : b - 7);
    }return this.day() || 7;
  }function Na(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = yf), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }function Oa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = zf), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }function Pa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Af), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }function Qa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d,
        e,
        f,
        g = [],
        h = [],
        i = [],
        j = [];for (b = 0; b < 7; b++) {
      c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
    }for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) {
      h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
    }this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i");
  }function Ra() {
    return this.hours() % 12 || 12;
  }function Sa() {
    return this.hours() || 24;
  }function Ta(a, b) {
    U(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }function Ua(a, b) {
    return b._meridiemParse;
  }function Va(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }function Wa(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
  }function Xa(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }function Ya(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = Za(e.slice(0, b).join("-"))) return d;if (c && c.length >= b && v(e, c, !0) >= b - 1) break;b--;
      }f++;
    }return null;
  }function Za(a) {
    var b = null;if (!Ff[a] && "undefined" != typeof module && module && module.exports) try {
      b = Bf._abbr, !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), $a(b);
    } catch (a) {}return Ff[a];
  }function $a(a, b) {
    var c;return a && (c = f(b) ? bb(a) : _a(a, b), c && (Bf = c)), Bf._abbr;
  }function _a(a, b) {
    if (null !== b) {
      var c = Ef;if (b.abbr = a, null != Ff[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Ff[a]._config;else if (null != b.parentLocale) {
        if (null == Ff[b.parentLocale]) return Gf[b.parentLocale] || (Gf[b.parentLocale] = []), Gf[b.parentLocale].push({ name: a, config: b }), null;c = Ff[b.parentLocale]._config;
      }return Ff[a] = new C(B(c, b)), Gf[a] && Gf[a].forEach(function (a) {
        _a(a.name, a.config);
      }), $a(a), Ff[a];
    }return delete Ff[a], null;
  }function ab(a, b) {
    if (null != b) {
      var c,
          d = Ef;null != Ff[a] && (d = Ff[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Ff[a], Ff[a] = c, $a(a);
    } else null != Ff[a] && (null != Ff[a].parentLocale ? Ff[a] = Ff[a].parentLocale : null != Ff[a] && delete Ff[a]);return Ff[a];
  }function bb(a) {
    var b;if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Bf;if (!c(a)) {
      if (b = Za(a)) return b;a = [a];
    }return Ya(a);
  }function cb() {
    return ze(Ff);
  }function db(a) {
    var b,
        c = a._a;return c && n(a).overflow === -2 && (b = c[ef] < 0 || c[ef] > 11 ? ef : c[ff] < 1 || c[ff] > ea(c[df], c[ef]) ? ff : c[gf] < 0 || c[gf] > 24 || 24 === c[gf] && (0 !== c[hf] || 0 !== c[jf] || 0 !== c[kf]) ? gf : c[hf] < 0 || c[hf] > 59 ? hf : c[jf] < 0 || c[jf] > 59 ? jf : c[kf] < 0 || c[kf] > 999 ? kf : -1, n(a)._overflowDayOfYear && (b < df || b > ff) && (b = ff), n(a)._overflowWeeks && b === -1 && (b = lf), n(a)._overflowWeekday && b === -1 && (b = mf), n(a).overflow = b), a;
  }function eb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = a._i,
        i = Hf.exec(h) || If.exec(h);if (i) {
      for (n(a).iso = !0, b = 0, c = Kf.length; b < c; b++) {
        if (Kf[b][1].exec(i[1])) {
          e = Kf[b][0], d = Kf[b][2] !== !1;break;
        }
      }if (null == e) return void (a._isValid = !1);if (i[3]) {
        for (b = 0, c = Lf.length; b < c; b++) {
          if (Lf[b][1].exec(i[3])) {
            f = (i[2] || " ") + Lf[b][0];break;
          }
        }if (null == f) return void (a._isValid = !1);
      }if (!d && null != f) return void (a._isValid = !1);if (i[4]) {
        if (!Jf.exec(i[4])) return void (a._isValid = !1);g = "Z";
      }a._f = e + (f || "") + (g || ""), lb(a);
    } else a._isValid = !1;
  }function fb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" },
        k = "YXWVUTSRQPONZABCDEFGHIKLM";if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Nf.exec(b)) {
      if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
        var l = new Date(c[2]),
            m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1);
      }switch (c[5].length) {case 2:
          0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");break;case 4:
          h = j[c[5]];break;default:
          h = j[" GMT"];}c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0;
    } else a._isValid = !1;
  }function gb(b) {
    var c = Mf.exec(b._i);return null !== c ? void (b._d = new Date(+c[1])) : (eb(b), void (b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))));
  }function hb(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }function ib(b) {
    var c = new Date(a.now());return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
  }function jb(a) {
    var b,
        c,
        d,
        e,
        f = [];if (!a._d) {
      for (d = ib(a), a._w && null == a._a[ff] && null == a._a[ef] && kb(a), null != a._dayOfYear && (e = hb(a._a[df], d[df]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[ef] = c.getUTCMonth(), a._a[ff] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) {
        a._a[b] = f[b] = d[b];
      }for (; b < 7; b++) {
        a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      }24 === a._a[gf] && 0 === a._a[hf] && 0 === a._a[jf] && 0 === a._a[kf] && (a._nextDay = !0, a._a[gf] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[gf] = 24);
    }
  }function kb(a) {
    var b, c, d, e, f, g, h, i;if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[df], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);else {
      f = a._locale._week.dow, g = a._locale._week.doy;var j = wa(tb(), f, g);c = hb(b.gg, a._a[df], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f;
    }d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[df] = h.year, a._dayOfYear = h.dayOfYear);
  }function lb(b) {
    if (b._f === a.ISO_8601) return void eb(b);if (b._f === a.RFC_2822) return void fb(b);b._a = [], n(b).empty = !0;var c,
        d,
        e,
        f,
        g,
        h = "" + b._i,
        i = h.length,
        j = 0;for (e = Y(b._f, b._locale).match(Ie) || [], c = 0; c < e.length; c++) {
      f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Le[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
    }n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[gf] <= 12 && n(b).bigHour === !0 && b._a[gf] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[gf] = mb(b._locale, b._a[gf], b._meridiem), jb(b), db(b);
  }function mb(a, b, c) {
    var d;return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b;
  }function nb(a) {
    var b, c, d, e, f;if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN));for (e = 0; e < a._f.length; e++) {
      f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
    }k(a, c || b);
  }function ob(a) {
    if (!a._d) {
      var b = L(a._i);a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
        return a && parseInt(a, 10);
      }), jb(a);
    }
  }function pb(a) {
    var b = new r(db(qb(a)));return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
  }function qb(a) {
    var b = a._i,
        d = a._f;return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({ nullInput: !0 }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a));
  }function rb(b) {
    var e = b._i;f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function (a) {
      return parseInt(a, 10);
    }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b);
  }function sb(a, b, f, g, h) {
    var i = {};return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i);
  }function tb(a, b, c, d) {
    return sb(a, b, c, d, !1);
  }function ub(a, b) {
    var d, e;if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();for (d = b[0], e = 1; e < b.length; ++e) {
      b[e].isValid() && !b[e][a](d) || (d = b[e]);
    }return d;
  }function vb() {
    var a = [].slice.call(arguments, 0);return ub("isBefore", a);
  }function wb() {
    var a = [].slice.call(arguments, 0);return ub("isAfter", a);
  }function xb(a) {
    for (var b in a) {
      if (Rf.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
    }for (var c = !1, d = 0; d < Rf.length; ++d) {
      if (a[Rf[d]]) {
        if (c) return !1;parseFloat(a[Rf[d]]) !== u(a[Rf[d]]) && (c = !0);
      }
    }return !0;
  }function yb() {
    return this._isValid;
  }function zb() {
    return Sb(NaN);
  }function Ab(a) {
    var b = L(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble();
  }function Bb(a) {
    return a instanceof Ab;
  }function Cb(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
  }function Db(a, b) {
    U(a, 0, 0, function () {
      var a = this.utcOffset(),
          c = "+";return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2);
    });
  }function Eb(a, b) {
    var c = (b || "").match(a);if (null === c) return null;var d = c[c.length - 1] || [],
        e = (d + "").match(Sf) || ["-", 0, 0],
        f = +(60 * e[1]) + u(e[2]);return 0 === f ? 0 : "+" === e[0] ? f : -f;
  }function Fb(b, c) {
    var d, e;return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local();
  }function Gb(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }function Hb(b, c, d) {
    var e,
        f = this._offset || 0;if (!this.isValid()) return null != b ? this : NaN;if (null != b) {
      if ("string" == typeof b) {
        if (b = Eb($e, b), null === b) return this;
      } else Math.abs(b) < 16 && !d && (b = 60 * b);return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this;
    }return this._isUTC ? f : Gb(this);
  }function Ib(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
  }function Jb(a) {
    return this.utcOffset(0, a);
  }function Kb(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this;
  }function Lb() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var a = Eb(Ze, this._i);null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
    }return this;
  }function Mb(a) {
    return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0);
  }function Nb() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }function Ob() {
    if (!f(this._isDSTShifted)) return this._isDSTShifted;var a = {};if (q(a, this), a = qb(a), a._a) {
      var b = a._isUTC ? l(a._a) : tb(a._a);this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  }function Pb() {
    return !!this.isValid() && !this._isUTC;
  }function Qb() {
    return !!this.isValid() && this._isUTC;
  }function Rb() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }function Sb(a, b) {
    var c,
        d,
        e,
        f = a,
        h = null;return Bb(a) ? f = { ms: a._milliseconds, d: a._days, M: a._months } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Tf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: 0, d: u(h[ff]) * c, h: u(h[gf]) * c, m: u(h[hf]) * c, s: u(h[jf]) * c, ms: u(Cb(1e3 * h[kf])) * c }) : (h = Uf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: Tb(h[2], c), M: Tb(h[3], c), w: Tb(h[4], c), d: Tb(h[5], c), h: Tb(h[6], c), m: Tb(h[7], c), s: Tb(h[8], c) }) : null == f ? f = {} : "object" == (typeof f === "undefined" ? "undefined" : (0, _typeof3.default)(f)) && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d;
  }function Tb(a, b) {
    var c = a && parseFloat(a.replace(",", "."));return (isNaN(c) ? 0 : c) * b;
  }function Ub(a, b) {
    var c = { milliseconds: 0, months: 0 };return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
  }function Vb(a, b) {
    var c;return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
  }function Wb(a, b) {
    return function (c, d) {
      var e, f;return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this;
    };
  }function Xb(b, c, d, e) {
    var f = c._milliseconds,
        g = Cb(c._days),
        h = Cb(c._months);b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h));
  }function Yb(a, b) {
    var c = a.diff(b, "days", !0);return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
  }function Zb(b, c) {
    var d = b || tb(),
        e = Fb(d, this).startOf("day"),
        f = a.calendarFormat(this, e) || "sameElse",
        g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);return this.format(g || this.localeData().calendar(f, this, tb(d)));
  }function $b() {
    return new r(this);
  }function _b(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf());
  }function ac(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf());
  }function bc(a, b, c, d) {
    return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c));
  }function cc(a, b) {
    var c,
        d = s(a) ? a : tb(a);return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()));
  }function dc(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }function ec(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }function fc(a, b, c) {
    var d, e, f, g;return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN;
  }function gc(a, b) {
    var c,
        d,
        e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0;
  }function hc() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }function ic() {
    if (!this.isValid()) return null;var a = this.clone().utc();return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }function jc() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var a = "moment",
        b = "";this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");var c = "[" + a + '("]',
        d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        e = "-MM-DD[T]HH:mm:ss.SSS",
        f = b + '[")]';return this.format(c + d + e + f);
  }function kc(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);var c = X(this, b);return this.localeData().postformat(c);
  }function lc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function mc(a) {
    return this.from(tb(), a);
  }function nc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function oc(a) {
    return this.to(tb(), a);
  }function pc(a) {
    var b;return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this);
  }function qc() {
    return this._locale;
  }function rc(a) {
    switch (a = K(a)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
  }function sc(a) {
    return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"));
  }function tc() {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }function uc() {
    return Math.floor(this.valueOf() / 1e3);
  }function vc() {
    return new Date(this.valueOf());
  }function wc() {
    var a = this;return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
  }function xc() {
    var a = this;return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() };
  }function yc() {
    return this.isValid() ? this.toISOString() : null;
  }function zc() {
    return o(this);
  }function Ac() {
    return k({}, n(this));
  }function Bc() {
    return n(this).overflow;
  }function Cc() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }function Dc(a, b) {
    U(0, [a, a.length], 0, b);
  }function Ec(a) {
    return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }function Fc(a) {
    return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }function Gc() {
    return xa(this.year(), 1, 4);
  }function Hc() {
    var a = this.localeData()._week;return xa(this.year(), a.dow, a.doy);
  }function Ic(a, b, c, d, e) {
    var f;return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e));
  }function Jc(a, b, c, d, e) {
    var f = va(a, b, c, d, e),
        g = ta(f.year, 0, f.dayOfYear);return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
  }function Kc(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
  }function Lc(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == a ? b : this.add(a - b, "d");
  }function Mc(a, b) {
    b[kf] = u(1e3 * ("0." + a));
  }function Nc() {
    return this._isUTC ? "UTC" : "";
  }function Oc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }function Pc(a) {
    return tb(1e3 * a);
  }function Qc() {
    return tb.apply(null, arguments).parseZone();
  }function Rc(a) {
    return a;
  }function Sc(a, b, c, d) {
    var e = bb(),
        f = l().set(d, b);return e[c](f, a);
  }function Tc(a, b, c) {
    if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");var d,
        e = [];for (d = 0; d < 12; d++) {
      e[d] = Sc(a, d, c, "month");
    }return e;
  }function Uc(a, b, c, d) {
    "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");var e = bb(),
        f = a ? e._week.dow : 0;if (null != c) return Sc(b, (c + f) % 7, d, "day");var h,
        i = [];for (h = 0; h < 7; h++) {
      i[h] = Sc(b, (h + f) % 7, d, "day");
    }return i;
  }function Vc(a, b) {
    return Tc(a, b, "months");
  }function Wc(a, b) {
    return Tc(a, b, "monthsShort");
  }function Xc(a, b, c) {
    return Uc(a, b, c, "weekdays");
  }function Yc(a, b, c) {
    return Uc(a, b, c, "weekdaysShort");
  }function Zc(a, b, c) {
    return Uc(a, b, c, "weekdaysMin");
  }function $c() {
    var a = this._data;return this._milliseconds = dg(this._milliseconds), this._days = dg(this._days), this._months = dg(this._months), a.milliseconds = dg(a.milliseconds), a.seconds = dg(a.seconds), a.minutes = dg(a.minutes), a.hours = dg(a.hours), a.months = dg(a.months), a.years = dg(a.years), this;
  }function _c(a, b, c, d) {
    var e = Sb(b, c);return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble();
  }function ad(a, b) {
    return _c(this, a, b, 1);
  }function bd(a, b) {
    return _c(this, a, b, -1);
  }function cd(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }function dd() {
    var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this;
  }function ed(a) {
    return 4800 * a / 146097;
  }function fd(a) {
    return 146097 * a / 4800;
  }function gd(a) {
    if (!this.isValid()) return NaN;var b,
        c,
        d = this._milliseconds;if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;switch (b = this._days + Math.round(fd(this._months)), a) {case "week":
        return b / 7 + d / 6048e5;case "day":
        return b + d / 864e5;case "hour":
        return 24 * b + d / 36e5;case "minute":
        return 1440 * b + d / 6e4;case "second":
        return 86400 * b + d / 1e3;case "millisecond":
        return Math.floor(864e5 * b) + d;default:
        throw new Error("Unknown unit " + a);}
  }function hd() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN;
  }function id(a) {
    return function () {
      return this.as(a);
    };
  }function jd(a) {
    return a = K(a), this.isValid() ? this[a + "s"]() : NaN;
  }function kd(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }function ld() {
    return t(this.days() / 7);
  }function md(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }function nd(a, b, c) {
    var d = Sb(a).abs(),
        e = tg(d.as("s")),
        f = tg(d.as("m")),
        g = tg(d.as("h")),
        h = tg(d.as("d")),
        i = tg(d.as("M")),
        j = tg(d.as("y")),
        k = e <= ug.ss && ["s", e] || e < ug.s && ["ss", e] || f <= 1 && ["m"] || f < ug.m && ["mm", f] || g <= 1 && ["h"] || g < ug.h && ["hh", g] || h <= 1 && ["d"] || h < ug.d && ["dd", h] || i <= 1 && ["M"] || i < ug.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k);
  }function od(a) {
    return void 0 === a ? tg : "function" == typeof a && (tg = a, !0);
  }function pd(a, b) {
    return void 0 !== ug[a] && (void 0 === b ? ug[a] : (ug[a] = b, "s" === a && (ug.ss = b - 1), !0));
  }function qd(a) {
    if (!this.isValid()) return this.localeData().invalidDate();var b = this.localeData(),
        c = nd(this, !a, b);return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }function rd() {
    if (!this.isValid()) return this.localeData().invalidDate();var a,
        b,
        c,
        d = vg(this._milliseconds) / 1e3,
        e = vg(this._days),
        f = vg(this._months);a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
  }
  //! moment.js locale configuration
  //! locale : Belarusian [be]
  //! author : Dmitry Demidov : https://github.com/demidov91
  //! author: Praleska: http://praleska.pro/
  //! Author : Menelion Elensúle : https://github.com/Oire
  function sd(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function td(a, b, c) {
    var d = { mm: b ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: b ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" };return "m" === c ? b ? "хвіліна" : "хвіліну" : "h" === c ? b ? "гадзіна" : "гадзіну" : a + " " + sd(d[c], +a);
  }
  //! moment.js locale configuration
  //! locale : Breton [br]
  //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
  function ud(a, b, c) {
    var d = { mm: "munutenn", MM: "miz", dd: "devezh" };return a + " " + xd(d[c], a);
  }function vd(a) {
    switch (wd(a)) {case 1:case 3:case 4:case 5:case 9:
        return a + " bloaz";default:
        return a + " vloaz";}
  }function wd(a) {
    return a > 9 ? wd(a % 10) : a;
  }function xd(a, b) {
    return 2 === b ? yd(a) : a;
  }function yd(a) {
    var b = { m: "v", b: "v", d: "z" };return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1);
  }
  //! moment.js locale configuration
  //! locale : Bosnian [bs]
  //! author : Nedim Cholich : https://github.com/frontyard
  //! based on (hr) translation by Bojan Marković
  function zd(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "jedna minuta" : "jedne minute";case "mm":
        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";case "h":
        return b ? "jedan sat" : "jednog sata";case "hh":
        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";case "dd":
        return d += 1 === a ? "dan" : "dana";case "MM":
        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";case "yy":
        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";}
  }function Ad(a) {
    return a > 1 && a < 5 && 1 !== ~~(a / 10);
  }function Bd(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "pár sekund" : "pár sekundami";case "m":
        return b ? "minuta" : d ? "minutu" : "minutou";case "mm":
        return b || d ? e + (Ad(a) ? "minuty" : "minut") : e + "minutami";break;case "h":
        return b ? "hodina" : d ? "hodinu" : "hodinou";case "hh":
        return b || d ? e + (Ad(a) ? "hodiny" : "hodin") : e + "hodinami";break;case "d":
        return b || d ? "den" : "dnem";case "dd":
        return b || d ? e + (Ad(a) ? "dny" : "dní") : e + "dny";break;case "M":
        return b || d ? "měsíc" : "měsícem";case "MM":
        return b || d ? e + (Ad(a) ? "měsíce" : "měsíců") : e + "měsíci";break;case "y":
        return b || d ? "rok" : "rokem";case "yy":
        return b || d ? e + (Ad(a) ? "roky" : "let") : e + "lety";}
  }
  //! moment.js locale configuration
  //! locale : German (Austria) [de-at]
  //! author : lluchs : https://github.com/lluchs
  //! author: Menelion Elensúle: https://github.com/Oire
  //! author : Martin Groller : https://github.com/MadMG
  //! author : Mikolaj Dadela : https://github.com/mik01aj
  function Cd(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : German (Switzerland) [de-ch]
  //! author : sschueller : https://github.com/sschueller
  function Dd(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : German [de]
  //! author : lluchs : https://github.com/lluchs
  //! author: Menelion Elensúle: https://github.com/Oire
  //! author : Mikolaj Dadela : https://github.com/mik01aj
  function Ed(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Estonian [et]
  //! author : Henry Kehlmann : https://github.com/madhenry
  //! improvements : Illimar Tambek : https://github.com/ragulka
  function Fd(a, b, c, d) {
    var e = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [a + " minuti", a + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [a + " tunni", a + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [a + " kuu", a + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [a + " aasta", a + " aastat"] };return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1];
  }function Gd(a, b, c, d) {
    var e = "";switch (c) {case "s":
        return d ? "muutaman sekunnin" : "muutama sekunti";case "m":
        return d ? "minuutin" : "minuutti";case "mm":
        e = d ? "minuutin" : "minuuttia";break;case "h":
        return d ? "tunnin" : "tunti";case "hh":
        e = d ? "tunnin" : "tuntia";break;case "d":
        return d ? "päivän" : "päivä";case "dd":
        e = d ? "päivän" : "päivää";break;case "M":
        return d ? "kuukauden" : "kuukausi";case "MM":
        e = d ? "kuukauden" : "kuukautta";break;case "y":
        return d ? "vuoden" : "vuosi";case "yy":
        e = d ? "vuoden" : "vuotta";}return e = Hd(a, d) + " " + e;
  }function Hd(a, b) {
    return a < 10 ? b ? $g[a] : Zg[a] : a;
  }
  //! moment.js locale configuration
  //! locale : Konkani Latin script [gom-latn]
  //! author : The Discoverer : https://github.com/WikiDiscoverer
  function Id(a, b, c, d) {
    var e = { s: ["thodde secondanim", "thodde second"], m: ["eka mintan", "ek minute"], mm: [a + " mintanim", a + " mintam"], h: ["eka horan", "ek hor"], hh: [a + " horanim", a + " hor"], d: ["eka disan", "ek dis"], dd: [a + " disanim", a + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [a + " mhoineanim", a + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [a + " vorsanim", a + " vorsam"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Croatian [hr]
  //! author : Bojan Marković : https://github.com/bmarkovic
  function Jd(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "jedna minuta" : "jedne minute";case "mm":
        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";case "h":
        return b ? "jedan sat" : "jednog sata";case "hh":
        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";case "dd":
        return d += 1 === a ? "dan" : "dana";case "MM":
        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";case "yy":
        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";}
  }function Kd(a, b, c, d) {
    var e = a;switch (c) {case "s":
        return d || b ? "néhány másodperc" : "néhány másodperce";case "m":
        return "egy" + (d || b ? " perc" : " perce");case "mm":
        return e + (d || b ? " perc" : " perce");case "h":
        return "egy" + (d || b ? " óra" : " órája");case "hh":
        return e + (d || b ? " óra" : " órája");case "d":
        return "egy" + (d || b ? " nap" : " napja");case "dd":
        return e + (d || b ? " nap" : " napja");case "M":
        return "egy" + (d || b ? " hónap" : " hónapja");case "MM":
        return e + (d || b ? " hónap" : " hónapja");case "y":
        return "egy" + (d || b ? " év" : " éve");case "yy":
        return e + (d || b ? " év" : " éve");}return "";
  }function Ld(a) {
    return (a ? "" : "[múlt] ") + "[" + ih[this.day()] + "] LT[-kor]";
  }
  //! moment.js locale configuration
  //! locale : Icelandic [is]
  //! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
  function Md(a) {
    return a % 100 === 11 || a % 10 !== 1;
  }function Nd(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum";case "m":
        return b ? "mínúta" : "mínútu";case "mm":
        return Md(a) ? e + (b || d ? "mínútur" : "mínútum") : b ? e + "mínúta" : e + "mínútu";case "hh":
        return Md(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";case "d":
        return b ? "dagur" : d ? "dag" : "degi";case "dd":
        return Md(a) ? b ? e + "dagar" : e + (d ? "daga" : "dögum") : b ? e + "dagur" : e + (d ? "dag" : "degi");case "M":
        return b ? "mánuður" : d ? "mánuð" : "mánuði";case "MM":
        return Md(a) ? b ? e + "mánuðir" : e + (d ? "mánuði" : "mánuðum") : b ? e + "mánuður" : e + (d ? "mánuð" : "mánuði");case "y":
        return b || d ? "ár" : "ári";case "yy":
        return Md(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári");}
  }
  //! moment.js locale configuration
  //! locale : Luxembourgish [lb]
  //! author : mweimerskirch : https://github.com/mweimerskirch
  //! author : David Raison : https://github.com/kwisatz
  function Od(a, b, c, d) {
    var e = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] };return b ? e[c][0] : e[c][1];
  }function Pd(a) {
    var b = a.substr(0, a.indexOf(" "));return Rd(b) ? "a " + a : "an " + a;
  }function Qd(a) {
    var b = a.substr(0, a.indexOf(" "));return Rd(b) ? "viru " + a : "virun " + a;
  }function Rd(a) {
    if (a = parseInt(a, 10), isNaN(a)) return !1;if (a < 0) return !0;if (a < 10) return 4 <= a && a <= 7;if (a < 100) {
      var b = a % 10,
          c = a / 10;return Rd(0 === b ? c : b);
    }if (a < 1e4) {
      for (; a >= 10;) {
        a /= 10;
      }return Rd(a);
    }return a /= 1e3, Rd(a);
  }function Sd(a, b, c, d) {
    return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes";
  }function Td(a, b, c, d) {
    return b ? Vd(c)[0] : d ? Vd(c)[1] : Vd(c)[2];
  }function Ud(a) {
    return a % 10 === 0 || a > 10 && a < 20;
  }function Vd(a) {
    return nh[a].split("_");
  }function Wd(a, b, c, d) {
    var e = a + " ";return 1 === a ? e + Td(a, b, c[0], d) : b ? e + (Ud(a) ? Vd(c)[1] : Vd(c)[0]) : d ? e + Vd(c)[1] : e + (Ud(a) ? Vd(c)[1] : Vd(c)[2]);
  }function Xd(a, b, c) {
    return c ? b % 10 === 1 && b % 100 !== 11 ? a[2] : a[3] : b % 10 === 1 && b % 100 !== 11 ? a[0] : a[1];
  }function Yd(a, b, c) {
    return a + " " + Xd(oh[c], a, b);
  }function Zd(a, b, c) {
    return Xd(oh[c], a, b);
  }function $d(a, b) {
    return b ? "dažas sekundes" : "dažām sekundēm";
  }function _d(a, b, c, d) {
    var e = "";if (b) switch (c) {case "s":
        e = "काही सेकंद";break;case "m":
        e = "एक मिनिट";break;case "mm":
        e = "%d मिनिटे";break;case "h":
        e = "एक तास";break;case "hh":
        e = "%d तास";break;case "d":
        e = "एक दिवस";break;case "dd":
        e = "%d दिवस";break;case "M":
        e = "एक महिना";break;case "MM":
        e = "%d महिने";break;case "y":
        e = "एक वर्ष";break;case "yy":
        e = "%d वर्षे";} else switch (c) {case "s":
        e = "काही सेकंदां";break;case "m":
        e = "एका मिनिटा";break;case "mm":
        e = "%d मिनिटां";break;case "h":
        e = "एका तासा";break;case "hh":
        e = "%d तासां";break;case "d":
        e = "एका दिवसा";break;case "dd":
        e = "%d दिवसां";break;case "M":
        e = "एका महिन्या";break;case "MM":
        e = "%d महिन्यां";break;case "y":
        e = "एका वर्षा";break;case "yy":
        e = "%d वर्षां";}return e.replace(/%d/i, a);
  }function ae(a) {
    return a % 10 < 5 && a % 10 > 1 && ~~(a / 10) % 10 !== 1;
  }function be(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "minuta" : "minutę";case "mm":
        return d + (ae(a) ? "minuty" : "minut");case "h":
        return b ? "godzina" : "godzinę";case "hh":
        return d + (ae(a) ? "godziny" : "godzin");case "MM":
        return d + (ae(a) ? "miesiące" : "miesięcy");case "yy":
        return d + (ae(a) ? "lata" : "lat");}
  }
  //! moment.js locale configuration
  //! locale : Romanian [ro]
  //! author : Vlad Gurdiga : https://github.com/gurdiga
  //! author : Valentin Agachi : https://github.com/avaly
  function ce(a, b, c) {
    var d = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" },
        e = " ";return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c];
  }
  //! moment.js locale configuration
  //! locale : Russian [ru]
  //! author : Viktorminator : https://github.com/Viktorminator
  //! Author : Menelion Elensúle : https://github.com/Oire
  //! author : Коренберг Марк : https://github.com/socketpair
  function de(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function ee(a, b, c) {
    var d = { mm: b ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" };return "m" === c ? b ? "минута" : "минуту" : a + " " + de(d[c], +a);
  }function fe(a) {
    return a > 1 && a < 5;
  }function ge(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "pár sekúnd" : "pár sekundami";case "m":
        return b ? "minúta" : d ? "minútu" : "minútou";case "mm":
        return b || d ? e + (fe(a) ? "minúty" : "minút") : e + "minútami";break;case "h":
        return b ? "hodina" : d ? "hodinu" : "hodinou";case "hh":
        return b || d ? e + (fe(a) ? "hodiny" : "hodín") : e + "hodinami";break;case "d":
        return b || d ? "deň" : "dňom";case "dd":
        return b || d ? e + (fe(a) ? "dni" : "dní") : e + "dňami";break;case "M":
        return b || d ? "mesiac" : "mesiacom";case "MM":
        return b || d ? e + (fe(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";break;case "y":
        return b || d ? "rok" : "rokom";case "yy":
        return b || d ? e + (fe(a) ? "roky" : "rokov") : e + "rokmi";}
  }
  //! moment.js locale configuration
  //! locale : Slovenian [sl]
  //! author : Robert Sedovšek : https://github.com/sedovsek
  function he(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "nekaj sekund" : "nekaj sekundami";case "m":
        return b ? "ena minuta" : "eno minuto";case "mm":
        return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : a < 5 ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";case "h":
        return b ? "ena ura" : "eno uro";case "hh":
        return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : a < 5 ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";case "d":
        return b || d ? "en dan" : "enim dnem";case "dd":
        return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";case "M":
        return b || d ? "en mesec" : "enim mesecem";case "MM":
        return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : a < 5 ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";case "y":
        return b || d ? "eno leto" : "enim letom";case "yy":
        return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : a < 5 ? b || d ? "leta" : "leti" : b || d ? "let" : "leti";}
  }function ie(a) {
    var b = a;return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "leS" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "waQ" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "nem" : b + " pIq";
  }function je(a) {
    var b = a;return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "Hu’" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "wen" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "ben" : b + " ret";
  }function ke(a, b, c, d) {
    var e = le(a);switch (c) {case "mm":
        return e + " tup";case "hh":
        return e + " rep";case "dd":
        return e + " jaj";case "MM":
        return e + " jar";case "yy":
        return e + " DIS";}
  }function le(a) {
    var b = Math.floor(a % 1e3 / 100),
        c = Math.floor(a % 100 / 10),
        d = a % 10,
        e = "";return b > 0 && (e += Rh[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + Rh[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + Rh[d]), "" === e ? "pagh" : e;
  }function me(a, b, c, d) {
    var e = { s: ["viensas secunds", "'iensas secunds"], m: ["'n míut", "'iens míut"], mm: [a + " míuts", "" + a + " míuts"], h: ["'n þora", "'iensa þora"], hh: [a + " þoras", "" + a + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [a + " ziuas", "" + a + " ziuas"], M: ["'n mes", "'iens mes"], MM: [a + " mesen", "" + a + " mesen"], y: ["'n ar", "'iens ar"], yy: [a + " ars", "" + a + " ars"] };return d ? e[c][0] : b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Ukrainian [uk]
  //! author : zemlanin : https://github.com/zemlanin
  //! Author : Menelion Elensúle : https://github.com/Oire
  function ne(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function oe(a, b, c) {
    var d = { mm: b ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: b ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" };return "m" === c ? b ? "хвилина" : "хвилину" : "h" === c ? b ? "година" : "годину" : a + " " + ne(d[c], +a);
  }function pe(a, b) {
    var c = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") };if (!a) return c.nominative;var d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";return c[d][a.day()];
  }function qe(a) {
    return function () {
      return a + "о" + (11 === this.hours() ? "б" : "") + "] LT";
    };
  }var re, se;se = Array.prototype.some ? Array.prototype.some : function (a) {
    for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++) {
      if (d in b && a.call(this, b[d], d, b)) return !0;
    }return !1;
  };var te = se,
      ue = a.momentProperties = [],
      ve = !1,
      we = {};a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;var xe;xe = _keys2.default ? _keys2.default : function (a) {
    var b,
        c = [];for (b in a) {
      j(a, b) && c.push(b);
    }return c;
  };var ye,
      ze = xe,
      Ae = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
      Be = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
      Ce = "Invalid date",
      De = "%d",
      Ee = /\d{1,2}/,
      Fe = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
      Ge = {},
      He = {},
      Ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Je = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      Ke = {},
      Le = {},
      Me = /\d/,
      Ne = /\d\d/,
      Oe = /\d{3}/,
      Pe = /\d{4}/,
      Qe = /[+-]?\d{6}/,
      Re = /\d\d?/,
      Se = /\d\d\d\d?/,
      Te = /\d\d\d\d\d\d?/,
      Ue = /\d{1,3}/,
      Ve = /\d{1,4}/,
      We = /[+-]?\d{1,6}/,
      Xe = /\d+/,
      Ye = /[+-]?\d+/,
      Ze = /Z|[+-]\d\d:?\d\d/gi,
      $e = /Z|[+-]\d\d(?::?\d\d)?/gi,
      _e = /[+-]?\d+(\.\d{1,3})?/,
      af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      bf = {},
      cf = {},
      df = 0,
      ef = 1,
      ff = 2,
      gf = 3,
      hf = 4,
      jf = 5,
      kf = 6,
      lf = 7,
      mf = 8;ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
    var b;for (b = 0; b < this.length; ++b) {
      if (this[b] === a) return b;
    }return -1;
  };var nf = ye;U("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), U("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a);
  }), U("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a);
  }), J("month", "M"), M("month", 8), Z("M", Re), Z("MM", Re, Ne), Z("MMM", function (a, b) {
    return b.monthsShortRegex(a);
  }), Z("MMMM", function (a, b) {
    return b.monthsRegex(a);
  }), ba(["M", "MM"], function (a, b) {
    b[ef] = u(a) - 1;
  }), ba(["MMM", "MMMM"], function (a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);null != e ? b[ef] = e : n(c).invalidMonth = a;
  });var of = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      pf = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      qf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      rf = af,
      sf = af;U("Y", 0, 0, function () {
    var a = this.year();return a <= 9999 ? "" + a : "+" + a;
  }), U(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Ye), Z("YY", Re, Ne), Z("YYYY", Ve, Pe), Z("YYYYY", We, Qe), Z("YYYYYY", We, Qe), ba(["YYYYY", "YYYYYY"], df), ba("YYYY", function (b, c) {
    c[df] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
  }), ba("YY", function (b, c) {
    c[df] = a.parseTwoDigitYear(b);
  }), ba("Y", function (a, b) {
    b[df] = parseInt(a, 10);
  }), a.parseTwoDigitYear = function (a) {
    return u(a) + (u(a) > 68 ? 1900 : 2e3);
  };var tf = O("FullYear", !0);U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Re), Z("ww", Re, Ne), Z("W", Re), Z("WW", Re, Ne), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
    b[d.substr(0, 1)] = u(a);
  });var uf = { dow: 0, doy: 6 };U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a);
  }), U("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a);
  }), U("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a);
  }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Re), Z("e", Re), Z("E", Re), Z("dd", function (a, b) {
    return b.weekdaysMinRegex(a);
  }), Z("ddd", function (a, b) {
    return b.weekdaysShortRegex(a);
  }), Z("dddd", function (a, b) {
    return b.weekdaysRegex(a);
  }), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
    var e = c._locale.weekdaysParse(a, d, c._strict);null != e ? b.d = e : n(c).invalidWeekday = a;
  }), ca(["d", "e", "E"], function (a, b, c, d) {
    b[d] = u(a);
  });var vf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      wf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      xf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      yf = af,
      zf = af,
      Af = af;U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2);
  }), U("hmmss", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), U("Hmm", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2);
  }), U("Hmmss", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Re), Z("h", Re), Z("k", Re), Z("HH", Re, Ne), Z("hh", Re, Ne), Z("kk", Re, Ne), Z("hmm", Se), Z("hmmss", Te), Z("Hmm", Se), Z("Hmmss", Te), ba(["H", "HH"], gf), ba(["k", "kk"], function (a, b, c) {
    var d = u(a);b[gf] = 24 === d ? 0 : d;
  }), ba(["a", "A"], function (a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a;
  }), ba(["h", "hh"], function (a, b, c) {
    b[gf] = u(a), n(c).bigHour = !0;
  }), ba("hmm", function (a, b, c) {
    var d = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d)), n(c).bigHour = !0;
  }), ba("hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e)), n(c).bigHour = !0;
  }), ba("Hmm", function (a, b, c) {
    var d = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d));
  }), ba("Hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e));
  });var Bf,
      Cf = /[ap]\.?m?\.?/i,
      Df = O("Hours", !0),
      Ef = { calendar: Ae, longDateFormat: Be, invalidDate: Ce, ordinal: De, dayOfMonthOrdinalParse: Ee, relativeTime: Fe, months: pf, monthsShort: qf, week: uf, weekdays: vf, weekdaysMin: xf, weekdaysShort: wf, meridiemParse: Cf },
      Ff = {},
      Gf = {},
      Hf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      If = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Jf = /Z|[+-]\d\d(?::?\d\d)?/,
      Kf = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      Lf = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      Mf = /^\/?Date\((\-?\d+)/i,
      Nf = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
  }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};var Of = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a < this ? this : a : p();
  }),
      Pf = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a > this ? this : a : p();
  }),
      Qf = function Qf() {
    return Date.now ? Date.now() : +new Date();
  },
      Rf = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];Db("Z", ":"), Db("ZZ", ""), Z("Z", $e), Z("ZZ", $e), ba(["Z", "ZZ"], function (a, b, c) {
    c._useUTC = !0, c._tzm = Eb($e, a);
  });var Sf = /([\+\-]|\d\d)/gi;a.updateOffset = function () {};var Tf = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Uf = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn = Ab.prototype, Sb.invalid = zb;var Vf = Wb(1, "add"),
      Wf = Wb(-1, "subtract");a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Xf = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
    return void 0 === a ? this.localeData() : this.locale(a);
  });U(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), U(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Ye), Z("g", Ye), Z("GG", Re, Ne), Z("gg", Re, Ne), Z("GGGG", Ve, Pe), Z("gggg", Ve, Pe), Z("GGGGG", We, Qe), Z("ggggg", We, Qe), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
    b[d.substr(0, 2)] = u(a);
  }), ca(["gg", "GG"], function (b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b);
  }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Me), ba("Q", function (a, b) {
    b[ef] = 3 * (u(a) - 1);
  }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Re), Z("DD", Re, Ne), Z("Do", function (a, b) {
    return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient;
  }), ba(["D", "DD"], ff), ba("Do", function (a, b) {
    b[ff] = u(a.match(Re)[0], 10);
  });var Yf = O("Date", !0);U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Ue), Z("DDDD", Oe), ba(["DDD", "DDDD"], function (a, b, c) {
    c._dayOfYear = u(a);
  }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Re), Z("mm", Re, Ne), ba(["m", "mm"], hf);var Zf = O("Minutes", !1);U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Re), Z("ss", Re, Ne), ba(["s", "ss"], jf);var $f = O("Seconds", !1);U("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), U(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), U(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), U(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), U(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), U(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), U(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Ue, Me), Z("SS", Ue, Ne), Z("SSS", Ue, Oe);var _f;for (_f = "SSSS"; _f.length <= 9; _f += "S") {
    Z(_f, Xe);
  }for (_f = "S"; _f.length <= 9; _f += "S") {
    ba(_f, Mc);
  }var ag = O("Milliseconds", !1);U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");var bg = r.prototype;bg.add = Vf, bg.calendar = Zb, bg.clone = $b, bg.diff = fc, bg.endOf = sc, bg.format = kc, bg.from = lc, bg.fromNow = mc, bg.to = nc, bg.toNow = oc, bg.get = R, bg.invalidAt = Bc, bg.isAfter = _b, bg.isBefore = ac, bg.isBetween = bc, bg.isSame = cc, bg.isSameOrAfter = dc, bg.isSameOrBefore = ec, bg.isValid = zc, bg.lang = Xf, bg.locale = pc, bg.localeData = qc, bg.max = Pf, bg.min = Of, bg.parsingFlags = Ac, bg.set = S, bg.startOf = rc, bg.subtract = Wf, bg.toArray = wc, bg.toObject = xc, bg.toDate = vc, bg.toISOString = ic, bg.inspect = jc, bg.toJSON = yc, bg.toString = hc, bg.unix = uc, bg.valueOf = tc, bg.creationData = Cc, bg.year = tf, bg.isLeapYear = ra, bg.weekYear = Ec, bg.isoWeekYear = Fc, bg.quarter = bg.quarters = Kc, bg.month = ka, bg.daysInMonth = la, bg.week = bg.weeks = Ba, bg.isoWeek = bg.isoWeeks = Ca, bg.weeksInYear = Hc, bg.isoWeeksInYear = Gc, bg.date = Yf, bg.day = bg.days = Ka, bg.weekday = La, bg.isoWeekday = Ma, bg.dayOfYear = Lc, bg.hour = bg.hours = Df, bg.minute = bg.minutes = Zf, bg.second = bg.seconds = $f, bg.millisecond = bg.milliseconds = ag, bg.utcOffset = Hb, bg.utc = Jb, bg.local = Kb, bg.parseZone = Lb, bg.hasAlignedHourOffset = Mb, bg.isDST = Nb, bg.isLocal = Pb, bg.isUtcOffset = Qb, bg.isUtc = Rb, bg.isUTC = Rb, bg.zoneAbbr = Nc, bg.zoneName = Oc, bg.dates = x("dates accessor is deprecated. Use date instead.", Yf), bg.months = x("months accessor is deprecated. Use month instead", ka), bg.years = x("years accessor is deprecated. Use year instead", tf), bg.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bg.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);var cg = C.prototype;cg.calendar = D, cg.longDateFormat = E, cg.invalidDate = F, cg.ordinal = G, cg.preparse = Rc, cg.postformat = Rc, cg.relativeTime = H, cg.pastFuture = I, cg.set = A, cg.months = fa, cg.monthsShort = ga, cg.monthsParse = ia, cg.monthsRegex = na, cg.monthsShortRegex = ma, cg.week = ya, cg.firstDayOfYear = Aa, cg.firstDayOfWeek = za, cg.weekdays = Fa, cg.weekdaysMin = Ha, cg.weekdaysShort = Ga, cg.weekdaysParse = Ja, cg.weekdaysRegex = Na, cg.weekdaysShortRegex = Oa, cg.weekdaysMinRegex = Pa, cg.isPM = Va, cg.meridiem = Wa, $a("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);var dg = Math.abs,
      eg = id("ms"),
      fg = id("s"),
      gg = id("m"),
      hg = id("h"),
      ig = id("d"),
      jg = id("w"),
      kg = id("M"),
      lg = id("y"),
      mg = kd("milliseconds"),
      ng = kd("seconds"),
      og = kd("minutes"),
      pg = kd("hours"),
      qg = kd("days"),
      rg = kd("months"),
      sg = kd("years"),
      tg = Math.round,
      ug = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      vg = Math.abs,
      wg = Ab.prototype;wg.isValid = yb, wg.abs = $c, wg.add = ad, wg.subtract = bd, wg.as = gd, wg.asMilliseconds = eg, wg.asSeconds = fg, wg.asMinutes = gg, wg.asHours = hg, wg.asDays = ig, wg.asWeeks = jg, wg.asMonths = kg, wg.asYears = lg, wg.valueOf = hd, wg._bubble = dd, wg.get = jd, wg.milliseconds = mg, wg.seconds = ng, wg.minutes = og, wg.hours = pg, wg.days = qg, wg.weeks = ld, wg.months = rg, wg.years = sg, wg.humanize = qd, wg.toISOString = rd, wg.toString = rd, wg.toJSON = rd, wg.locale = pc, wg.localeData = qc, wg.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), wg.lang = Xf, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Ye), Z("X", _e), ba("X", function (a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10));
  }), ba("x", function (a, b, c) {
    c._d = new Date(u(a));
  }),
  //! moment.js
  //! version : 2.18.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  a.version = "2.18.1", b(tb), a.fn = bg, a.min = vb, a.max = wb, a.now = Qf, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bg,
  //! moment.js locale configuration
  //! locale : Afrikaans [af]
  //! author : Werner Mollentze : https://github.com/wernerm
  a.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function isPM(a) {
      return (/^nm$/i.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c ? "vm" : "VM" : c ? "nm" : "NM";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Algeria) [ar-dz]
  //! author : Noureddine LOUAHEDJ : https://github.com/noureddineme
  a.defineLocale("ar-dz", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Kuwait) [ar-kw]
  //! author : Nusret Parlak: https://github.com/nusretparlak
  a.defineLocale("ar-kw", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Arabic (Lybia) [ar-ly]
  //! author : Ali Hmer: https://github.com/kikoanis
  var xg = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
      yg = function yg(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
  },
      zg = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
      Ag = function Ag(a) {
    return function (b, c, d, e) {
      var f = yg(b),
          g = zg[a][yg(b)];return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
    };
  },
      Bg = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];a.defineLocale("ar-ly", { months: Bg, monthsShort: Bg, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: Ag("s"), m: Ag("m"), mm: Ag("m"), h: Ag("h"), hh: Ag("h"), d: Ag("d"), dd: Ag("d"), M: Ag("M"), MM: Ag("M"), y: Ag("y"), yy: Ag("y") }, preparse: function preparse(a) {
      return a.replace(/\u200f/g, "").replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return xg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 6, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Morocco) [ar-ma]
  //! author : ElFadili Yassine : https://github.com/ElFadiliY
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Arabic (Saudi Arabia) [ar-sa]
  //! author : Suhail Alkowaileet : https://github.com/xsoh
  var Cg = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
      Dg = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };a.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function preparse(a) {
      return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
        return Dg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Cg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale  :  Arabic (Tunisia) [ar-tn]
  //! author : Nader Toukabri : https://github.com/naderio
  a.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Arabic [ar]
  //! author : Abdel Said: https://github.com/abdelsaid
  //! author : Ahmed Elkhatib
  //! author : forabi https://github.com/forabi
  var Eg = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
      Fg = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
      Gg = function Gg(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
  },
      Hg = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
      Ig = function Ig(a) {
    return function (b, c, d, e) {
      var f = Gg(b),
          g = Hg[a][Gg(b)];return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
    };
  },
      Jg = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];a.defineLocale("ar", { months: Jg, monthsShort: Jg, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: Ig("s"), m: Ig("m"), mm: Ig("m"), h: Ig("h"), hh: Ig("h"), d: Ig("d"), dd: Ig("d"), M: Ig("M"), MM: Ig("M"), y: Ig("y"), yy: Ig("y") }, preparse: function preparse(a) {
      return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
        return Fg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Eg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Azerbaijani [az]
  //! author : topchiyev : https://github.com/topchiyev
  var Kg = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };a.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function isPM(a) {
      return (/^(gündüz|axşam)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "gecə" : a < 12 ? "səhər" : a < 17 ? "gündüz" : "axşam";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function ordinal(a) {
      if (0 === a) return a + "-ıncı";var b = a % 10,
          c = a % 100 - b,
          d = a >= 100 ? 100 : null;return a + (Kg[b] || Kg[c] || Kg[d]);
    }, week: { dow: 1, doy: 7 } }), a.defineLocale("be", { months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") }, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/ }, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function nextWeek() {
        return "[У] dddd [ў] LT";
      }, lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return "[У мінулую] dddd [ў] LT";case 1:case 2:case 4:
            return "[У мінулы] dddd [ў] LT";}
      }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: td, mm: td, h: td, hh: td, d: "дзень", dd: td, M: "месяц", MM: td, y: "год", yy: td }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function isPM(a) {
      return (/^(дня|вечара)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночы" : a < 12 ? "раніцы" : a < 17 ? "дня" : "вечара";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":case "w":case "W":
          return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і";case "D":
          return a + "-га";default:
          return a;}
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Bulgarian [bg]
  //! author : Krasen Borisov : https://github.com/kraz
  a.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:
            return "[В изминалия] dddd [в] LT";}
      }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a % 100;return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Bengali [bn]
  //! author : Kaushik Gandhi : https://github.com/kaushikgandhi
  var Lg = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
      Mg = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };a.defineLocale("bn", { months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function preparse(a) {
      return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function (a) {
        return Mg[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Lg[a];
      });
    }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "রাত" === b && a >= 4 || "দুপুর" === b && a < 5 || "বিকাল" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "রাত" : a < 10 ? "সকাল" : a < 17 ? "দুপুর" : a < 20 ? "বিকাল" : "রাত";
    }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Tibetan [bo]
  //! author : Thupten N. Chakrishar : https://github.com/vajradog
  var Ng = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
      Og = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };a.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function preparse(a) {
      return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (a) {
        return Og[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Ng[a];
      });
    }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "མཚན་མོ" === b && a >= 4 || "ཉིན་གུང" === b && a < 5 || "དགོང་དག" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "མཚན་མོ" : a < 10 ? "ཞོགས་ཀས" : a < 17 ? "ཉིན་གུང" : a < 20 ? "དགོང་དག" : "མཚན་མོ";
    }, week: { dow: 0, doy: 6 } }), a.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: ud, h: "un eur", hh: "%d eur", d: "un devezh", dd: ud, M: "ur miz", MM: ud, y: "ur bloaz", yy: vd }, dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/, ordinal: function ordinal(a) {
      var b = 1 === a ? "añ" : "vet";return a + b;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[prošlu] dddd [u] LT";case 6:
            return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[prošli] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: zd, mm: zd, h: zd, hh: zd, d: "dan", dd: zd, M: "mjesec", MM: zd, y: "godinu", yy: zd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Catalan [ca]
  //! author : Juan G. Hurtado : https://github.com/juanghurtado
  a.defineLocale("ca", { months: { standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "[el] D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "[el] D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function sameDay() {
        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextDay: function nextDay() {
        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastDay: function lastDay() {
        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function ordinal(a, b) {
      var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";return "w" !== b && "W" !== b || (c = "a"), a + c;
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Czech [cs]
  //! author : petrbela : https://github.com/petrbela
  var Pg = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
      Qg = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");a.defineLocale("cs", { months: Pg, monthsShort: Qg, monthsParse: function (a, b) {
      var c,
          d = [];for (c = 0; c < 12; c++) {
        d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
      }return d;
    }(Pg, Qg), shortMonthsParse: function (a) {
      var b,
          c = [];for (b = 0; b < 12; b++) {
        c[b] = new RegExp("^" + a[b] + "$", "i");
      }return c;
    }(Qg), longMonthsParse: function (a) {
      var b,
          c = [];for (b = 0; b < 12; b++) {
        c[b] = new RegExp("^" + a[b] + "$", "i");
      }return c;
    }(Pg), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v neděli v] LT";case 1:case 2:
            return "[v] dddd [v] LT";case 3:
            return "[ve středu v] LT";case 4:
            return "[ve čtvrtek v] LT";case 5:
            return "[v pátek v] LT";case 6:
            return "[v sobotu v] LT";}
      }, lastDay: "[včera v] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minulou neděli v] LT";case 1:case 2:
            return "[minulé] dddd [v] LT";case 3:
            return "[minulou středu v] LT";case 4:case 5:
            return "[minulý] dddd [v] LT";case 6:
            return "[minulou sobotu v] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: Bd, m: Bd, mm: Bd, h: Bd, hh: Bd, d: Bd, dd: Bd, M: Bd, MM: Bd, y: Bd, yy: Bd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Chuvash [cv]
  //! author : Anatoly Mironov : https://github.com/mirontoli
  a.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function future(a) {
        var b = /сехет$/i.exec(a) ? "рен" : /ҫул$/i.exec(a) ? "тан" : "ран";return a + b;
      }, past: "%s каялла", s: "пӗр-ик ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, dayOfMonthOrdinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Welsh [cy]
  //! author : Robert Allen : https://github.com/robgallen
  //! author : https://github.com/ryangreaves
  a.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function ordinal(a) {
      var b = a,
          c = "",
          d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Danish [da]
  //! author : Ulrik Nielsen : https://github.com/mrbase
  a.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "på dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Cd, mm: "%d Minuten", h: Cd, hh: "%d Stunden", d: Cd, dd: Cd, M: Cd, MM: Cd, y: Cd, yy: Cd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de-ch", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH.mm", LLLL: "dddd, D. MMMM YYYY HH.mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Dd, mm: "%d Minuten", h: Dd, hh: "%d Stunden", d: Dd, dd: Dd, M: Dd, MM: Dd, y: Dd, yy: Dd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Ed, mm: "%d Minuten", h: Ed, hh: "%d Stunden", d: Ed, dd: Ed, M: Ed, MM: Ed, y: Ed, yy: Ed }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Maldivian [dv]
  //! author : Jawish Hameed : https://github.com/jawish
  var Rg = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
      Sg = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];a.defineLocale("dv", { months: Rg, monthsShort: Rg, weekdays: Sg, weekdaysShort: Sg, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function isPM(a) {
      return "މފ" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "މކ" : "މފ";
    }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 7, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Greek [el]
  //! author : Aggelos Karalias : https://github.com/mehiel
  a.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function months(a, b) {
      return a ? /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] : this._monthsNominativeEl;
    }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ";
    }, isPM: function isPM(a) {
      return "μ" === (a + "").toLowerCase()[0];
    }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 6:
            return "[το προηγούμενο] dddd [{}] LT";default:
            return "[την προηγούμενη] dddd [{}] LT";}
      }, sameElse: "L" }, calendar: function calendar(a, b) {
      var c = this._calendarEl[a],
          d = b && b.hours();return z(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις");
    }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, dayOfMonthOrdinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Australia) [en-au]
  //! author : Jared Morse : https://github.com/jarcoal
  a.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Canada) [en-ca]
  //! author : Jonathan Abourbih : https://github.com/jonbca
  a.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }),
  //! moment.js locale configuration
  //! locale : English (United Kingdom) [en-gb]
  //! author : Chris Gedrim : https://github.com/chrisgedrim
  a.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Ireland) [en-ie]
  //! author : Chris Cartlidge : https://github.com/chriscartlidge
  a.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (New Zealand) [en-nz]
  //! author : Luke McGregor : https://github.com/lukemcgregor
  a.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Esperanto [eo]
  //! author : Colin Dean : https://github.com/colindean
  //! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
  //! comment : miestasmia corrected the translation by colindean
  a.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function isPM(a) {
      return "p" === a.charAt(0).toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M.";
    }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Spanish (Dominican Republic) [es-do]
  var Tg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Ug = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");a.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Ug[a.month()] : Tg[a.month()] : Tg;
    }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Spanish [es]
  //! author : Julio Napurí : https://github.com/julionc
  var Vg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Wg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");a.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Wg[a.month()] : Vg[a.month()] : Vg;
    }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: Fd, m: Fd, mm: Fd, h: Fd, hh: Fd, d: Fd, dd: "%d päeva", M: Fd, MM: Fd, y: Fd, yy: Fd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Basque [eu]
  //! author : Eneko Illarramendi : https://github.com/eillarra
  a.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Persian [fa]
  //! author : Ebrahim Byagowi : https://github.com/ebraminio
  var Xg = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
      Yg = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };a.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function isPM(a) {
      return (/بعد از ظهر/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "قبل از ظهر" : "بعد از ظهر";
    }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/[۰-۹]/g, function (a) {
        return Yg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Xg[a];
      }).replace(/,/g, "،");
    }, dayOfMonthOrdinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Finnish [fi]
  //! author : Tarmo Aidantausta : https://github.com/bleadof
  var Zg = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
      $g = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Zg[7], Zg[8], Zg[9]];a.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: Gd, m: Gd, mm: Gd, h: Gd, hh: Gd, d: Gd, dd: Gd, M: Gd, MM: Gd, y: Gd, yy: Gd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Faroese [fo]
  //! author : Ragnar Johannesen : https://github.com/ragnar123
  a.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : French (Canada) [fr-ca]
  //! author : Jonathan Abourbih : https://github.com/jonbca
  a.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(a, b) {
      switch (b) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    } }),
  //! moment.js locale configuration
  //! locale : French (Switzerland) [fr-ch]
  //! author : Gaspard Bucher : https://github.com/gaspard
  a.defineLocale("fr-ch", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(a, b) {
      switch (b) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : French [fr]
  //! author : John Fischer : https://github.com/jfroffice
  a.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function ordinal(a, b) {
      switch (b) {case "D":
          return a + (1 === a ? "er" : "");default:case "M":case "Q":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Frisian [fy]
  //! author : Robin van der Vliet : https://github.com/robin0van0der0v
  var _g = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
      ah = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");a.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? ah[a.month()] : _g[a.month()] : _g;
    }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Scottish Gaelic [gd]
  //! author : Jon Ashdown : https://github.com/jonashdown
  var bh = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
      ch = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
      dh = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
      eh = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
      fh = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];a.defineLocale("gd", { months: bh, monthsShort: ch, monthsParseExact: !0, weekdays: dh, weekdaysShort: eh, weekdaysMin: fh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function ordinal(a) {
      var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh";return a + b;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Galician [gl]
  //! author : Juan G. Hurtado : https://github.com/juanghurtado
  a.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
      }, lastDay: function lastDay() {
        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: function future(a) {
        return 0 === a.indexOf("un") ? "n" + a : "en " + a;
      }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: Id, m: Id, mm: Id, h: Id, hh: Id, d: Id, dd: Id, M: Id, MM: Id, y: Id, yy: Id }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function ordinal(a, b) {
      switch (b) {case "D":
          return a + "er";default:case "M":case "Q":case "DDD":case "d":case "w":case "W":
          return a;}
    }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "rati" === b ? a < 4 ? a : a + 12 : "sokalli" === b ? a : "donparam" === b ? a > 12 ? a : a + 12 : "sanje" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "rati" : a < 12 ? "sokalli" : a < 16 ? "donparam" : a < 20 ? "sanje" : "rati";
    } }),
  //! moment.js locale configuration
  //! locale : Hebrew [he]
  //! author : Tomer Cohen : https://github.com/tomer
  //! author : Moshe Simantov : https://github.com/DevelopmentIL
  //! author : Tal Ater : https://github.com/TalAter
  a.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function hh(a) {
        return 2 === a ? "שעתיים" : a + " שעות";
      }, d: "יום", dd: function dd(a) {
        return 2 === a ? "יומיים" : a + " ימים";
      }, M: "חודש", MM: function MM(a) {
        return 2 === a ? "חודשיים" : a + " חודשים";
      }, y: "שנה", yy: function yy(a) {
        return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים";
      } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function isPM(a) {
      return (/^(אחה"צ|אחרי הצהריים|בערב)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 5 ? "לפנות בוקר" : a < 10 ? "בבוקר" : a < 12 ? c ? 'לפנה"צ' : "לפני הצהריים" : a < 18 ? c ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
    } });
  //! moment.js locale configuration
  //! locale : Hindi [hi]
  //! author : Mayank Singhal : https://github.com/mayanksinghal
  var gh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      hh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return hh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return gh[a];
      });
    }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "रात" === b ? a < 4 ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "रात" : a < 10 ? "सुबह" : a < 17 ? "दोपहर" : a < 20 ? "शाम" : "रात";
    }, week: { dow: 0, doy: 6 } }), a.defineLocale("hr", { months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[prošlu] dddd [u] LT";case 6:
            return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[prošli] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: Jd, mm: Jd, h: Jd, hh: Jd, d: "dan", dd: Jd, M: "mjesec", MM: Jd, y: "godinu", yy: Jd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Hungarian [hu]
  //! author : Adam Brunner : https://github.com/adambrunner
  var ih = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");a.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function isPM(a) {
      return "u" === a.charAt(1).toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU";
    }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function nextWeek() {
        return Ld.call(this, !0);
      }, lastDay: "[tegnap] LT[-kor]", lastWeek: function lastWeek() {
        return Ld.call(this, !1);
      }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: Kd, m: Kd, mm: Kd, h: Kd, hh: Kd, d: Kd, dd: Kd, M: Kd, MM: Kd, y: Kd, yy: Kd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Armenian [hy-am]
  //! author : Armendarabyan : https://github.com/armendarabyan
  a.defineLocale("hy-am", { months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") }, monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function nextWeek() {
        return "dddd [օրը ժամը] LT";
      }, lastWeek: function lastWeek() {
        return "[անցած] dddd [օրը ժամը] LT";
      }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function isPM(a) {
      return (/^(ցերեկվա|երեկոյան)$/.test(a)
      );
    }, meridiem: function meridiem(a) {
      return a < 4 ? "գիշերվա" : a < 12 ? "առավոտվա" : a < 17 ? "ցերեկվա" : "երեկոյան";
    }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function ordinal(a, b) {
      switch (b) {case "DDD":case "w":case "W":case "DDDo":
          return 1 === a ? a + "-ին" : a + "-րդ";default:
          return a;}
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Indonesian [id]
  //! author : Mohammad Satrio Utomo : https://github.com/tyok
  //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
  a.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "siang" : a < 19 ? "sore" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), a.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: Nd, m: Nd, mm: Nd, h: "klukkustund", hh: Nd, d: Nd, dd: Nd, M: Nd, MM: Nd, y: Nd, yy: Nd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Italian [it]
  //! author : Lorenzo : https://github.com/aliem
  //! author: Mattia Larentis: https://github.com/nostalgiaz
  a.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[la scorsa] dddd [alle] LT";default:
            return "[lo scorso] dddd [alle] LT";}
      }, sameElse: "L" }, relativeTime: { future: function future(a) {
        return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a;
      }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Japanese [ja]
  //! author : LI Long : https://github.com/baryon
  a.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 HH:mm dddd", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日 HH:mm dddd" }, meridiemParse: /午前|午後/i, isPM: function isPM(a) {
      return "午後" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "午前" : "午後";
    }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}日/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";default:
          return a;}
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }),
  //! moment.js locale configuration
  //! locale : Javanese [jv]
  //! author : Rony Lantip : https://github.com/lantip
  //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
  a.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "enjing" : a < 15 ? "siyang" : a < 19 ? "sonten" : "ndalu";
    }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Georgian [ka]
  //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
  a.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function future(a) {
        return (/(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში"
        );
      }, past: function past(a) {
        return (/(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის უკან") : void 0
        );
      }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function ordinal(a) {
      return 0 === a ? a : 1 === a ? a + "-ლი" : a < 20 || a <= 100 && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე";
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Kazakh [kk]
  //! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
  var jh = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };a.defineLocale("kk", { months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a >= 100 ? 100 : null;return a + (jh[a] || jh[b] || jh[c]);
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Cambodian [km]
  //! author : Kruy Vanna : https://github.com/kruyvanna
  a.defineLocale("km", { months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Kannada [kn]
  //! author : Rajeev Naik : https://github.com/rajeevnaikte
  var kh = { 1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦" },
      lh = { "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0" };a.defineLocale("kn", { months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"), monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"), monthsParseExact: !0, weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"), weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"), weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ" }, preparse: function preparse(a) {
      return a.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (a) {
        return lh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return kh[a];
      });
    }, meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ರಾತ್ರಿ" === b ? a < 4 ? a : a + 12 : "ಬೆಳಿಗ್ಗೆ" === b ? a : "ಮಧ್ಯಾಹ್ನ" === b ? a >= 10 ? a : a + 12 : "ಸಂಜೆ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ರಾತ್ರಿ" : a < 10 ? "ಬೆಳಿಗ್ಗೆ" : a < 17 ? "ಮಧ್ಯಾಹ್ನ" : a < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
    }, dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/, ordinal: function ordinal(a) {
      return a + "ನೇ";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Korean [ko]
  //! author : Kyungwook, Park : https://github.com/kyungw00k
  //! author : Jeeeyul Lee <jeeeyul@gmail.com>
  a.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" }, dayOfMonthOrdinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function isPM(a) {
      return "오후" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "오전" : "오후";
    } });
  //! moment.js locale configuration
  //! locale : Kyrgyz [ky]
  //! author : Chyngyz Arystan uulu : https://github.com/chyngyz
  var mh = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" };a.defineLocale("ky", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кече саат] LT", lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT", sameElse: "L" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a >= 100 ? 100 : null;return a + (mh[a] || mh[b] || mh[c]);
    }, week: { dow: 1, doy: 7 } }), a.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 2:case 4:
            return "[Leschten] dddd [um] LT";default:
            return "[Leschte] dddd [um] LT";}
      } }, relativeTime: { future: Pd, past: Qd, s: "e puer Sekonnen", m: Od, mm: "%d Minutten", h: Od, hh: "%d Stonnen", d: Od, dd: "%d Deeg", M: Od, MM: "%d Méint", y: Od, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Lao [lo]
  //! author : Ryan Hart : https://github.com/ryanhart2
  a.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function isPM(a) {
      return "ຕອນແລງ" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
    }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/, ordinal: function ordinal(a) {
      return "ທີ່" + a;
    } });
  //! moment.js locale configuration
  //! locale : Lithuanian [lt]
  //! author : Mindaugas Mozūras : https://github.com/mmozuras
  var nh = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };a.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: Sd, m: Td, mm: Wd, h: Td, hh: Wd, d: Td, dd: Wd, M: Td, MM: Wd, y: Td, yy: Wd }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function ordinal(a) {
      return a + "-oji";
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Latvian [lv]
  //! author : Kristaps Karlsons : https://github.com/skakri
  //! author : Jānis Elmeris : https://github.com/JanisE
  var oh = { m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };a.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: $d, m: Zd, mm: Yd, h: Zd, hh: Yd, d: Zd, dd: Yd, M: Zd, MM: Yd, y: Zd, yy: Yd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Montenegrin [me]
  //! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
  var ph = { words: { m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = ph.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + ph.correctGrammaticalCase(a, d);
    } };a.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
        var a = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", m: ph.translate, mm: ph.translate, h: ph.translate, hh: ph.translate, d: "dan", dd: ph.translate, M: "mjesec", MM: ph.translate, y: "godinu", yy: ph.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Maori [mi]
  //! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
  a.defineLocale("mi", { months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Macedonian [mk]
  //! author : Borislav Mickov : https://github.com/B0k0
  a.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "[Во] dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:
            return "[Изминатиот] dddd [во] LT";}
      }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a % 100;return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Malayalam [ml]
  //! author : Floyd Pink : https://github.com/floydpink
  a.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "രാത്രി" === b && a >= 4 || "ഉച്ച കഴിഞ്ഞ്" === b || "വൈകുന്നേരം" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "രാത്രി" : a < 12 ? "രാവിലെ" : a < 17 ? "ഉച്ച കഴിഞ്ഞ്" : a < 20 ? "വൈകുന്നേരം" : "രാത്രി";
    } });
  //! moment.js locale configuration
  //! locale : Marathi [mr]
  //! author : Harshad Kale : https://github.com/kalehv
  //! author : Vivek Athalye : https://github.com/vnathalye
  var qh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      rh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: _d, m: _d, mm: _d, h: _d, hh: _d, d: _d, dd: _d, M: _d, MM: _d, y: _d, yy: _d }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return rh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return qh[a];
      });
    }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "रात्री" === b ? a < 4 ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "रात्री" : a < 10 ? "सकाळी" : a < 17 ? "दुपारी" : a < 20 ? "सायंकाळी" : "रात्री";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Malay [ms-my]
  //! note : DEPRECATED, the correct one is [ms]
  //! author : Weldan Jamili : https://github.com/weldan
  a.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Malay [ms]
  //! author : Weldan Jamili : https://github.com/weldan
  a.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Burmese [my]
  //! author : Squar team, mysquar.com
  //! author : David Rossellat : https://github.com/gholadr
  //! author : Tin Aung Lin : https://github.com/thanyawzinmin
  var sh = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
      th = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };a.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function preparse(a) {
      return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (a) {
        return th[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return sh[a];
      });
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Norwegian Bokmål [nb]
  //! authors : Espen Hovlandsdal : https://github.com/rexxars
  //!           Sigurd Gartmann : https://github.com/sigurdga
  a.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Nepalese [ne]
  //! author : suvash : https://github.com/suvash
  var uh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      vh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return vh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return uh[a];
      });
    }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "राति" === b ? a < 4 ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "साँझ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 3 ? "राति" : a < 12 ? "बिहान" : a < 16 ? "दिउँसो" : a < 20 ? "साँझ" : "राति";
    }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Dutch (Belgium) [nl-be]
  //! author : Joris Röling : https://github.com/jorisroling
  //! author : Jacob Middag : https://github.com/middagj
  var wh = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      xh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      yh = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      zh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;a.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? xh[a.month()] : wh[a.month()] : wh;
    }, monthsRegex: zh, monthsShortRegex: zh, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: yh, longMonthsParse: yh, shortMonthsParse: yh, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Dutch [nl]
  //! author : Joris Röling : https://github.com/jorisroling
  //! author : Jacob Middag : https://github.com/middagj
  var Ah = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      Bh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      Ch = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      Dh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;a.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Bh[a.month()] : Ah[a.month()] : Ah;
    }, monthsRegex: Dh, monthsShortRegex: Dh, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: Ch, longMonthsParse: Ch, shortMonthsParse: Ch, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Nynorsk [nn]
  //! author : https://github.com/mechuwind
  a.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Punjabi (India) [pa-in]
  //! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
  var Eh = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
      Fh = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };a.defineLocale("pa-in", { months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function preparse(a) {
      return a.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (a) {
        return Fh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Eh[a];
      });
    }, meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ਰਾਤ" === b ? a < 4 ? a : a + 12 : "ਸਵੇਰ" === b ? a : "ਦੁਪਹਿਰ" === b ? a >= 10 ? a : a + 12 : "ਸ਼ਾਮ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ਰਾਤ" : a < 10 ? "ਸਵੇਰ" : a < 17 ? "ਦੁਪਹਿਰ" : a < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
    }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Polish [pl]
  //! author : Rafal Hirsz : https://github.com/evoL
  var Gh = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
      Hh = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");a.defineLocale("pl", { months: function months(a, b) {
      return a ? "" === b ? "(" + Hh[a.month()] + "|" + Gh[a.month()] + ")" : /D MMMM/.test(b) ? Hh[a.month()] : Gh[a.month()] : Gh;
    }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[W zeszłą niedzielę o] LT";case 3:
            return "[W zeszłą środę o] LT";case 6:
            return "[W zeszłą sobotę o] LT";default:
            return "[W zeszły] dddd [o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: be, mm: be, h: be, hh: be, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: be, y: "rok", yy: be }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Portuguese (Brazil) [pt-br]
  //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
  a.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº" }),
  //! moment.js locale configuration
  //! locale : Portuguese [pt]
  //! author : Jefferson : https://github.com/jalex79
  a.defineLocale("pt", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: ce, h: "o oră", hh: ce, d: "o zi", dd: ce, M: "o lună", MM: ce, y: "un an", yy: ce }, week: { dow: 1, doy: 7 } });var Ih = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];a.defineLocale("ru", { months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") }, monthsShort: { format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_") }, weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ }, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: Ih, longMonthsParse: Ih, shortMonthsParse: Ih, monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i, monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function nextWeek(a) {
        if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
            return "[В следующее] dddd [в] LT";case 1:case 2:case 4:
            return "[В следующий] dddd [в] LT";case 3:case 5:case 6:
            return "[В следующую] dddd [в] LT";}
      }, lastWeek: function lastWeek(a) {
        if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
            return "[В прошлое] dddd [в] LT";case 1:case 2:case 4:
            return "[В прошлый] dddd [в] LT";case 3:case 5:case 6:
            return "[В прошлую] dddd [в] LT";}
      }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: ee, mm: ee, h: "час", hh: ee, d: "день", dd: ee, M: "месяц", MM: ee, y: "год", yy: ee }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function isPM(a) {
      return (/^(дня|вечера)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночи" : a < 12 ? "утра" : a < 17 ? "дня" : "вечера";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":
          return a + "-й";case "D":
          return a + "-го";case "w":case "W":
          return a + "-я";default:
          return a;}
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Sindhi [sd]
  //! author : Narain Sagar : https://github.com/narainsagar
  var Jh = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
      Kh = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];a.defineLocale("sd", { months: Jh, monthsShort: Jh, weekdays: Kh, weekdaysShort: Kh, weekdaysMin: Kh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(a) {
      return "شام" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "صبح" : "شام";
    }, calendar: { sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Northern Sami [se]
  //! authors : Bård Rolstad Henriksen : https://github.com/karamell
  a.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Sinhalese [si]
  //! author : Sampath Sitinamaluwa : https://github.com/sampathsris
  a.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, dayOfMonthOrdinalParse: /\d{1,2} වැනි/, ordinal: function ordinal(a) {
      return a + " වැනි";
    }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function isPM(a) {
      return "ප.ව." === a || "පස් වරු" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "ප.ව." : "පස් වරු" : c ? "පෙ.ව." : "පෙර වරු";
    } });
  //! moment.js locale configuration
  //! locale : Slovak [sk]
  //! author : Martin Minka : https://github.com/k2s
  //! based on work of petrbela : https://github.com/petrbela
  var Lh = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
      Mh = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");a.defineLocale("sk", { months: Lh, monthsShort: Mh, weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v nedeľu o] LT";case 1:case 2:
            return "[v] dddd [o] LT";case 3:
            return "[v stredu o] LT";case 4:
            return "[vo štvrtok o] LT";case 5:
            return "[v piatok o] LT";case 6:
            return "[v sobotu o] LT";}
      }, lastDay: "[včera o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minulú nedeľu o] LT";case 1:case 2:
            return "[minulý] dddd [o] LT";case 3:
            return "[minulú stredu o] LT";case 4:case 5:
            return "[minulý] dddd [o] LT";case 6:
            return "[minulú sobotu o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: ge, m: ge, mm: ge, h: ge, hh: ge, d: ge, dd: ge, M: ge, MM: ge, y: ge, yy: ge }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v] [nedeljo] [ob] LT";case 3:
            return "[v] [sredo] [ob] LT";case 6:
            return "[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[v] dddd [ob] LT";}
      }, lastDay: "[včeraj ob] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[prejšnjo] [nedeljo] [ob] LT";case 3:
            return "[prejšnjo] [sredo] [ob] LT";case 6:
            return "[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[prejšnji] dddd [ob] LT";}
      }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "pred %s", s: he, m: he, mm: he, h: he, hh: he, d: he, dd: he, M: he, MM: he, y: he, yy: he }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Albanian [sq]
  //! author : Flakërim Ismani : https://github.com/flakerimi
  //! author : Menelion Elensúle : https://github.com/Oire
  //! author : Oerd Cukalla : https://github.com/oerd
  a.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function isPM(a) {
      return "M" === a.charAt(0);
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "PD" : "MD";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Serbian Cyrillic [sr-cyrl]
  //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
  var Nh = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = Nh.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + Nh.correctGrammaticalCase(a, d);
    } };a.defineLocale("sr-cyrl", { months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"), monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"), monthsParseExact: !0, weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"), weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[у] [недељу] [у] LT";case 3:
            return "[у] [среду] [у] LT";case 6:
            return "[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:
            return "[у] dddd [у] LT";}
      }, lastDay: "[јуче у] LT", lastWeek: function lastWeek() {
        var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: Nh.translate, mm: Nh.translate, h: Nh.translate, hh: Nh.translate, d: "дан", dd: Nh.translate, M: "месец", MM: Nh.translate, y: "годину", yy: Nh.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Serbian [sr]
  //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
  var Oh = { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = Oh.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + Oh.correctGrammaticalCase(a, d);
    } };a.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedelju] [u] LT";case 3:
            return "[u] [sredu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
        var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: Oh.translate, mm: Oh.translate, h: Oh.translate, hh: Oh.translate, d: "dan", dd: Oh.translate, M: "mesec", MM: Oh.translate, y: "godinu", yy: Oh.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : siSwati [ss]
  //! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
  a.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "ekuseni" : a < 15 ? "emini" : a < 19 ? "entsambama" : "ebusuku";
    }, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? a >= 11 ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 : a + 12 : void 0;
    }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Swedish [sv]
  //! author : Jens Alm : https://github.com/ulmus
  a.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Swahili [sw]
  //! author : Fahad Kassim : https://github.com/fadsel
  a.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Tamil [ta]
  //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
  var Ph = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
      Qh = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };a.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, dayOfMonthOrdinalParse: /\d{1,2}வது/, ordinal: function ordinal(a) {
      return a + "வது";
    }, preparse: function preparse(a) {
      return a.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (a) {
        return Qh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Ph[a];
      });
    }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function meridiem(a, b, c) {
      return a < 2 ? " யாமம்" : a < 6 ? " வைகறை" : a < 10 ? " காலை" : a < 14 ? " நண்பகல்" : a < 18 ? " எற்பாடு" : a < 22 ? " மாலை" : " யாமம்";
    }, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "யாமம்" === b ? a < 2 ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12;
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Telugu [te]
  //! author : Krishna Chaitanya Thota : https://github.com/kcthota
  a.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, dayOfMonthOrdinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "రాత్రి" === b ? a < 4 ? a : a + 12 : "ఉదయం" === b ? a : "మధ్యాహ్నం" === b ? a >= 10 ? a : a + 12 : "సాయంత్రం" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "రాత్రి" : a < 10 ? "ఉదయం" : a < 17 ? "మధ్యాహ్నం" : a < 20 ? "సాయంత్రం" : "రాత్రి";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Tetun Dili (East Timor) [tet]
  //! author : Joshua Brooks : https://github.com/joshbrooks
  //! author : Onorio De J. Afonso : https://github.com/marobo
  a.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", m: "minutu ida", mm: "minutus %d", h: "horas ida", hh: "horas %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Thai [th]
  //! author : Kridsada Thanabulpong : https://github.com/sirn
  a.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function isPM(a) {
      return "หลังเที่ยง" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
    }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } }),
  //! moment.js locale configuration
  //! locale : Tagalog (Philippines) [tl-ph]
  //! author : Dan Hagman : https://github.com/hagmandan
  a.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(a) {
      return a;
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Klingon [tlh]
  //! author : Dominika Kruk : https://github.com/amaranthrose
  var Rh = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");a.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: ie, past: je, s: "puS lup", m: "wa’ tup", mm: ke, h: "wa’ rep", hh: ke, d: "wa’ jaj", dd: ke, M: "wa’ jar", MM: ke, y: "wa’ DIS", yy: ke }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Turkish [tr]
  //! authors : Erhan Gundogan : https://github.com/erhangundogan,
  //!           Burak Yiğit Kaya: https://github.com/BYK
  var Sh = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };a.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function ordinal(a) {
      if (0 === a) return a + "'ıncı";var b = a % 10,
          c = a % 100 - b,
          d = a >= 100 ? 100 : null;return a + (Sh[b] || Sh[c] || Sh[d]);
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Talossan [tzl]
  //! author : Robin van der Vliet : https://github.com/robin0van0der0v
  //! author : Iustì Canun
  a.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function isPM(a) {
      return "d'o" === a.toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A";
    }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: me, m: me, mm: me, h: me, hh: me, d: me, dd: me, M: me, MM: me, y: me, yy: me }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Central Atlas Tamazight Latin [tzm-latn]
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Central Atlas Tamazight [tzm]
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } }), a.defineLocale("uk", { months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") }, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: pe, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" }, calendar: { sameDay: qe("[Сьогодні "), nextDay: qe("[Завтра "), lastDay: qe("[Вчора "), nextWeek: qe("[У] dddd ["), lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return qe("[Минулої] dddd [").call(this);case 1:case 2:case 4:
            return qe("[Минулого] dddd [").call(this);}
      }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: oe, mm: oe, h: "годину", hh: oe, d: "день", dd: oe, M: "місяць", MM: oe, y: "рік", yy: oe }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function isPM(a) {
      return (/^(дня|вечора)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночі" : a < 12 ? "ранку" : a < 17 ? "дня" : "вечора";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":case "w":case "W":
          return a + "-й";case "D":
          return a + "-го";default:
          return a;}
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Urdu [ur]
  //! author : Sawood Alam : https://github.com/ibnesayeed
  //! author : Zack : https://github.com/ZackVision
  var Th = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
      Uh = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
  //! moment.js locale configuration
  //! locale : Uzbek Latin [uz-latn]
  //! author : Rasulbek Mirzayev : github.com/Rasulbeeek
  //! moment.js locale configuration
  //! locale : Uzbek [uz]
  //! author : Sardor Muminov : https://github.com/muminoff
  //! moment.js locale configuration
  //! locale : Vietnamese [vi]
  //! author : Bang Nguyen : https://github.com/bangnk
  //! moment.js locale configuration
  //! locale : Pseudo [x-pseudo]
  //! author : Andrew Hood : https://github.com/andrewhood125
  //! moment.js locale configuration
  //! locale : Yoruba Nigeria [yo]
  //! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
  //! moment.js locale configuration
  //! locale : Chinese (China) [zh-cn]
  //! author : suupic : https://github.com/suupic
  //! author : Zeno Zeng : https://github.com/zenozeng
  //! moment.js locale configuration
  //! locale : Chinese (Hong Kong) [zh-hk]
  //! author : Ben : https://github.com/ben-lin
  //! author : Chris Lam : https://github.com/hehachris
  //! author : Konstantin : https://github.com/skfd
  //! moment.js locale configuration
  //! locale : Chinese (Taiwan) [zh-tw]
  //! author : Ben : https://github.com/ben-lin
  //! author : Chris Lam : https://github.com/hehachris
  return a.defineLocale("ur", { months: Th, monthsShort: Th, weekdays: Uh, weekdaysShort: Uh, weekdaysMin: Uh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(a) {
      return "شام" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "صبح" : "شام";
    }, calendar: { sameDay: "[آج بوقت] LT", nextDay: "[کل بوقت] LT", nextWeek: "dddd [بوقت] LT", lastDay: "[گذشتہ روز بوقت] LT", lastWeek: "[گذشتہ] dddd [بوقت] LT", sameElse: "L" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }), a.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }), a.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function isPM(a) {
      return (/^ch$/i.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c ? "sa" : "SA" : c ? "ch" : "CH";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(a) {
      return a;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("x-pseudo", { months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("yo", { months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: { dow: 1, doy: 4 } }), a.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah点mm分", LLLL: "YYYY年MMMD日ddddAh点mm分", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "周";default:
          return a;}
    }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, week: { dow: 1, doy: 4 } }), a.defineLocale("zh-hk", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "週";default:
          return a;}
    }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "週";default:
          return a;}
    }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.locale("en"), a;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(73)
  , hide      = __webpack_require__(6)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(2)
  , TAG = __webpack_require__(8)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys')
  , uid    = __webpack_require__(15);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(4)
  , LIBRARY        = __webpack_require__(21)
  , wksExt         = __webpack_require__(29)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(133)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	checkUser: function checkUser(context, callback) {}
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(65);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(64);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(9)(function(){
  return Object.defineProperty(__webpack_require__(35)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(21)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(43)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(2)
  , Iterators      = __webpack_require__(20)
  , $iterCreate    = __webpack_require__(78)
  , setToStringTag = __webpack_require__(23)
  , getPrototypeOf = __webpack_require__(85)
  , ITERATOR       = __webpack_require__(8)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(13)
  , dPs         = __webpack_require__(82)
  , enumBugKeys = __webpack_require__(18)
  , IE_PROTO    = __webpack_require__(24)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(35)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(75).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(41)
  , hiddenKeys = __webpack_require__(18).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(2)
  , toIObject    = __webpack_require__(3)
  , arrayIndexOf = __webpack_require__(72)(false)
  , IE_PROTO     = __webpack_require__(24)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(19)
  , core    = __webpack_require__(4)
  , fails   = __webpack_require__(9);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'comment',
	props: ['comment'],
	data: function () {
		return {};
	},
	filters: {
		formatDate: function (date) {
			return __WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js___default()(date).format('ll');
		}
	},
	methods: {}
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Comment_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'comments',
	components: {
		Comment: __WEBPACK_IMPORTED_MODULE_0__Comment_vue___default.a
	},
	props: ['comments', 'href', 'user'],
	data: function () {
		return {
			text: null,
			info: null,
			newComment: null,
			error: null
		};
	},
	methods: {
		sendComment: function (e) {
			e.preventDefault();
			this.$http.post('/api/posts/' + this.href + '/comments', {
				text: this.text
			}).then(function (response) {

				this.newComment = response.data.data; // add populate 

				this.comments.push(this.newComment);
			}, function (response) {
				// error callback
				console.log('error:', response.body.message);
				this.error = response.body.message;
			});
		}
	}
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			title: null,
			text: null,
			tags: null,
			info: null,
			location: null,
			error: null
		};
	},
	methods: {
		createPost: function (e) {
			e.preventDefault();
			this.tags = this.tags.trim().split(', '); // set 'var tags = ...'
			this.$http.post('/api/posts', {
				title: this.title,
				text: this.text,
				tags: this.tags
			}).then(function (response) {
				this.location = response.data.location;

				console.log('info:', this.info);

				this.$router.replace(this.location);
			}, function (response) {
				// error callback
				console.log('error:', response.body.message);
				this.error = response.body.message;
			});
		}
	}
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'blog-footer',
	data: function () {
		return {};
	},
	methods: {}
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PostPreview_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PostPreview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PostPreview_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PostPreview: __WEBPACK_IMPORTED_MODULE_0__PostPreview_vue___default.a },
	props: ['user'],
	data: function () {
		return {};
	},
	methods: {
		// getData: function(){
		// 	this.$http.get('/api/posts').then(function(response){
		// 	    // success callback
		// 	    console.log('data:', response.);
		// 	}, function(response){
		// 	    // error callback
		// 	    console.log('error:', response);
		// 	});
		// },
		// sendData: function(){
		// 	this.$http.post('/api', {info: this.info}).then(function(response){

		// 		console.log('sended:', response);

		// 	}, function(response){
		// 	    // error callback
		// 	    console.log('error:', response);
		// 	});
		// }
	},
	created: function () {}
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			username: null,
			password: null,
			info: null,
			error: null
		};
	},
	methods: {
		auth: function (e) {
			e.preventDefault();
			this.$http.post('/api/login', {
				username: this.username,
				password: this.password
			}).then(function (response) {

				this.info = response.data;

				console.log('info:', this.info);

				this.$router.replace('/profile');
			}, function (response) {
				// error callback
				console.log('error:', response.body.message);
				this.error = response.body.message;
			});
		}
	}
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Footer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_index_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		Navbar: __WEBPACK_IMPORTED_MODULE_0__Navbar_vue___default.a,
		BlogFooter: __WEBPACK_IMPORTED_MODULE_1__Footer_vue___default.a
	},
	data: function () {
		return {
			user: null,
			isAuth: false,
			error: null
		};
	},
	methods: {
		checkUser: function () {
			this.$http.get('/api/user').then(function (response) {
				this.user = response.data.user;
				if (this.user) {
					this.isAuth = true;
				} else {
					this.isAuth = false;
				}
			}, function (response) {
				// error callback
				console.log('error:', response.data.message);
				this.error = response.data.message;
			});
		}
	},
	created: function () {
		this.checkUser();
		__WEBPACK_IMPORTED_MODULE_2__js_index_js__["Event"].$on('changeState', this.checkUser);
	}
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_auth_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_auth_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_auth_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_index_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'navbar',
	props: ['user', 'isAuth'],
	data: function () {
		return {};
	},
	methods: {},
	created: function () {}
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comments_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comments_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Comments_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'post',
	props: ['href', 'user'],
	data: function () {
		return {
			post: null
		};
	},
	components: {
		Comments: __WEBPACK_IMPORTED_MODULE_1__Comments_vue___default.a
	},
	filters: {
		formatDate: function (date) {
			return __WEBPACK_IMPORTED_MODULE_0__bower_moment_min_moment_with_locales_min_js___default()(date).format('ll');
		}
	},
	methods: {
		getPost: function () {
			this.$http.get('/api/posts/' + this.href).then(function (response) {
				// success callback
				this.post = response.data.data;
			}, function (response) {
				// error callback
				console.log('error:', response);
			});
		},
		like: function () {
			var self = this;
			var elem = event.currentTarget;
			this.$http.get('/api/posts/' + this.post.href + '/like').then(function (response) {
				// success callback
				self.post.likes = response.data.data.post.likes;
				self.user.likes = response.data.data.user.likes;
			}, function (response) {
				// error callback
				console.log('error:', response);
			});
		}

	},
	computed: {
		checkLikes: function () {
			var self = this;

			if (this.user && this.user.likes) {

				var like = _.intersectionBy(this.user.likes, this.post.likes, '_id');

				if (like.length > 0) {
					return 'icon like';
				} else {
					return 'icon like-disabled';
				}
			} else {
				return 'icon like-disabled';
			}
		}
	},
	created: function () {
		this.getPost();
	}
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bower_lodash_dist_lodash_min_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bower_lodash_dist_lodash_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bower_lodash_dist_lodash_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bower_moment_min_moment_with_locales_min_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bower_moment_min_moment_with_locales_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__bower_moment_min_moment_with_locales_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_index_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'post-preview',
	props: ['user'],
	data: function () {
		return {
			posts: null,
			error: null
		};
	},
	computed: {
		chunk: function () {
			return __WEBPACK_IMPORTED_MODULE_0__bower_lodash_dist_lodash_min_js___default.a.chunk(this.posts, 3);
		}
	},
	filters: {
		formatDate: function (date) {
			return __WEBPACK_IMPORTED_MODULE_1__bower_moment_min_moment_with_locales_min_js___default()(date).format('ll');
		}
	},
	methods: {
		getPosts: function () {
			this.$http.get('/api/posts').then(function (response) {
				// success callback

				var posts = response.data.data;

				this.posts = posts;

				// var self = this;
				// setTimeout(function(){

				// 	self.posts = response.data.data;

				// }, 3000);
			}, function (response) {
				// error callback
				// this.error = response.body.message;
				this.error = 'AJAX Request failed';
			});
		},
		like: function (post, event) {
			var post = post;
			var self = this;
			var elem = event.currentTarget;
			this.$http.get('/api/posts/' + post.href + '/like').then(function (response) {
				// success callback
				post.likes = response.data.data.post.likes;
				self.user.likes = response.data.data.user.likes;
			}, function (response) {
				// error callback
				console.log('error:', response);
			});
		},
		checkLikes: function (likes) {
			var self = this;

			if (this.user && this.user.likes) {

				var like = __WEBPACK_IMPORTED_MODULE_0__bower_lodash_dist_lodash_min_js___default.a.intersectionBy(this.user.likes, likes, '_id');

				if (like.length > 0) {
					return 'icon like';
				} else {
					return 'icon like-disabled';
				}
			} else {
				return 'icon like-disabled';
			}
		},
		popular: function () {
			this.posts.sort(function (a, b) {
				return b.views - a.views;
			});
		},
		topRated: function () {
			this.posts.sort(function (a, b) {
				return b.likes.length - a.likes.length;
			});
		},
		latest: function () {
			console.log('latest');
		}
	},
	created: function () {
		this.getPosts();
	}
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {};
	},
	methods: {}
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'profile',
	data: function () {
		return {};
	},
	methods: {
		logout: function () {
			this.$http.get('/api/logout').then(function (response) {
				this.$router.replace('/');
			}, function (response) {
				// error callback
				console.log('error:', response.body.message);
				this.error = response.body.message;
			});
		}
	}
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			username: null,
			password: null,
			confirm_password: null,
			email: null,
			user_info: null,
			info: null,
			error: null
		};
	},
	methods: {
		signup: function (e) {
			e.preventDefault();
			this.$http.post('/api/signup', {
				username: this.username,
				password: this.password,
				email: this.email,
				info: this.user_info
			}).then(function (response) {

				this.info = response.data;

				console.log('info:', this.info);

				this.$router.replace('/');
			}, function (response) {
				// error callback
				console.log('error:', response.body.message);
				this.error = response.body.message;
			});
		}
	}
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function () {
  function n(n, t) {
    return n.set(t[0], t[1]), n;
  }function t(n, t) {
    return n.add(t), n;
  }function r(n, t, r) {
    switch (r.length) {case 0:
        return n.call(t);case 1:
        return n.call(t, r[0]);case 2:
        return n.call(t, r[0], r[1]);case 3:
        return n.call(t, r[0], r[1], r[2]);}return n.apply(t, r);
  }function e(n, t, r, e) {
    for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
      var o = n[u];t(e, o, r(o), n);
    }return e;
  }function u(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e && false !== t(n[r], r, n);) {}return n;
  }function i(n, t) {
    for (var r = null == n ? 0 : n.length; r-- && false !== t(n[r], r, n);) {}
    return n;
  }function o(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) {
      if (!t(n[r], r, n)) return false;
    }return true;
  }function f(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
      var o = n[r];t(o, r, n) && (i[u++] = o);
    }return i;
  }function c(n, t) {
    return !(null == n || !n.length) && -1 < d(n, t, 0);
  }function a(n, t, r) {
    for (var e = -1, u = null == n ? 0 : n.length; ++e < u;) {
      if (r(t, n[e])) return true;
    }return false;
  }function l(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) {
      u[r] = t(n[r], r, n);
    }return u;
  }function s(n, t) {
    for (var r = -1, e = t.length, u = n.length; ++r < e;) {
      n[u + r] = t[r];
    }return n;
  }function h(n, t, r, e) {
    var u = -1,
        i = null == n ? 0 : n.length;for (e && i && (r = n[++u]); ++u < i;) {
      r = t(r, n[u], u, n);
    }return r;
  }function p(n, t, r, e) {
    var u = null == n ? 0 : n.length;for (e && u && (r = n[--u]); u--;) {
      r = t(r, n[u], u, n);
    }return r;
  }function _(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) {
      if (t(n[r], r, n)) return true;
    }return false;
  }function v(n, t, r) {
    var e;return r(n, function (n, r, u) {
      if (t(n, r, u)) return e = r, false;
    }), e;
  }function g(n, t, r, e) {
    var u = n.length;for (r += e ? 1 : -1; e ? r-- : ++r < u;) {
      if (t(n[r], r, n)) return r;
    }return -1;
  }function d(n, t, r) {
    if (t === t) n: {
      --r;for (var e = n.length; ++r < e;) {
        if (n[r] === t) {
          n = r;break n;
        }
      }n = -1;
    } else n = g(n, b, r);return n;
  }function y(n, t, r, e) {
    --r;for (var u = n.length; ++r < u;) {
      if (e(n[r], t)) return r;
    }return -1;
  }function b(n) {
    return n !== n;
  }function x(n, t) {
    var r = null == n ? 0 : n.length;return r ? k(n, t) / r : P;
  }function j(n) {
    return function (t) {
      return null == t ? F : t[n];
    };
  }function w(n) {
    return function (t) {
      return null == n ? F : n[t];
    };
  }function m(n, t, r, e, u) {
    return u(n, function (n, u, i) {
      r = e ? (e = false, n) : t(r, n, u, i);
    }), r;
  }function A(n, t) {
    var r = n.length;for (n.sort(t); r--;) {
      n[r] = n[r].c;
    }return n;
  }function k(n, t) {
    for (var r, e = -1, u = n.length; ++e < u;) {
      var i = t(n[e]);i !== F && (r = r === F ? i : r + i);
    }return r;
  }function E(n, t) {
    for (var r = -1, e = Array(n); ++r < n;) {
      e[r] = t(r);
    }return e;
  }function O(n, t) {
    return l(t, function (t) {
      return [t, n[t]];
    });
  }function S(n) {
    return function (t) {
      return n(t);
    };
  }function I(n, t) {
    return l(t, function (t) {
      return n[t];
    });
  }function R(n, t) {
    return n.has(t);
  }function z(n, t) {
    for (var r = -1, e = n.length; ++r < e && -1 < d(t, n[r], 0);) {}return r;
  }function W(n, t) {
    for (var r = n.length; r-- && -1 < d(t, n[r], 0);) {}return r;
  }function B(n) {
    return "\\" + Tn[n];
  }function L(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n, e) {
      r[++t] = [e, n];
    }), r;
  }function U(n, t) {
    return function (r) {
      return n(t(r));
    };
  }function C(n, t) {
    for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
      var o = n[r];o !== t && "__lodash_placeholder__" !== o || (n[r] = "__lodash_placeholder__", i[u++] = r);
    }return i;
  }function D(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n) {
      r[++t] = n;
    }), r;
  }function M(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n) {
      r[++t] = [n, n];
    }), r;
  }function T(n) {
    if (Bn.test(n)) {
      for (var t = zn.lastIndex = 0; zn.test(n);) {
        ++t;
      }n = t;
    } else n = tt(n);return n;
  }function $(n) {
    return Bn.test(n) ? n.match(zn) || [] : n.split("");
  }var F,
      N = 1 / 0,
      P = NaN,
      Z = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
      q = /\b__p\+='';/g,
      V = /\b(__p\+=)''\+/g,
      K = /(__e\(.*?\)|\b__t\))\+'';/g,
      G = /&(?:amp|lt|gt|quot|#39);/g,
      H = /[&<>"']/g,
      J = RegExp(G.source),
      Y = RegExp(H.source),
      Q = /<%-([\s\S]+?)%>/g,
      X = /<%([\s\S]+?)%>/g,
      nn = /<%=([\s\S]+?)%>/g,
      tn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      rn = /^\w*$/,
      en = /^\./,
      un = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      on = /[\\^$.*+?()[\]{}|]/g,
      fn = RegExp(on.source),
      cn = /^\s+|\s+$/g,
      an = /^\s+/,
      ln = /\s+$/,
      sn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      hn = /\{\n\/\* \[wrapped with (.+)\] \*/,
      pn = /,? & /,
      _n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      vn = /\\(\\)?/g,
      gn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      dn = /\w*$/,
      yn = /^[-+]0x[0-9a-f]+$/i,
      bn = /^0b[01]+$/i,
      xn = /^\[object .+?Constructor\]$/,
      jn = /^0o[0-7]+$/i,
      wn = /^(?:0|[1-9]\d*)$/,
      mn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      An = /($^)/,
      kn = /['\n\r\u2028\u2029\\]/g,
      En = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
      On = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + En,
      Sn = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
      In = RegExp("['\u2019]", "g"),
      Rn = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
      zn = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Sn + En, "g"),
      Wn = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+", On].join("|"), "g"),
      Bn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
      Ln = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Un = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
      Cn = {};
  Cn["[object Float32Array]"] = Cn["[object Float64Array]"] = Cn["[object Int8Array]"] = Cn["[object Int16Array]"] = Cn["[object Int32Array]"] = Cn["[object Uint8Array]"] = Cn["[object Uint8ClampedArray]"] = Cn["[object Uint16Array]"] = Cn["[object Uint32Array]"] = true, Cn["[object Arguments]"] = Cn["[object Array]"] = Cn["[object ArrayBuffer]"] = Cn["[object Boolean]"] = Cn["[object DataView]"] = Cn["[object Date]"] = Cn["[object Error]"] = Cn["[object Function]"] = Cn["[object Map]"] = Cn["[object Number]"] = Cn["[object Object]"] = Cn["[object RegExp]"] = Cn["[object Set]"] = Cn["[object String]"] = Cn["[object WeakMap]"] = false;
  var Dn = {};Dn["[object Arguments]"] = Dn["[object Array]"] = Dn["[object ArrayBuffer]"] = Dn["[object DataView]"] = Dn["[object Boolean]"] = Dn["[object Date]"] = Dn["[object Float32Array]"] = Dn["[object Float64Array]"] = Dn["[object Int8Array]"] = Dn["[object Int16Array]"] = Dn["[object Int32Array]"] = Dn["[object Map]"] = Dn["[object Number]"] = Dn["[object Object]"] = Dn["[object RegExp]"] = Dn["[object Set]"] = Dn["[object String]"] = Dn["[object Symbol]"] = Dn["[object Uint8Array]"] = Dn["[object Uint8ClampedArray]"] = Dn["[object Uint16Array]"] = Dn["[object Uint32Array]"] = true, Dn["[object Error]"] = Dn["[object Function]"] = Dn["[object WeakMap]"] = false;var Mn,
      Tn = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
      $n = parseFloat,
      Fn = parseInt,
      Nn = (typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) == "object" && global && global.Object === Object && global,
      Pn = (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) == "object" && self && self.Object === Object && self,
      Zn = Nn || Pn || Function("return this")(),
      qn = ( false ? "undefined" : (0, _typeof3.default)(exports)) == "object" && exports && !exports.nodeType && exports,
      Vn = qn && ( false ? "undefined" : (0, _typeof3.default)(module)) == "object" && module && !module.nodeType && module,
      Kn = Vn && Vn.exports === qn,
      Gn = Kn && Nn.process;
  n: {
    try {
      Mn = Gn && Gn.binding && Gn.binding("util");break n;
    } catch (n) {}Mn = void 0;
  }var Hn = Mn && Mn.isArrayBuffer,
      Jn = Mn && Mn.isDate,
      Yn = Mn && Mn.isMap,
      Qn = Mn && Mn.isRegExp,
      Xn = Mn && Mn.isSet,
      nt = Mn && Mn.isTypedArray,
      tt = j("length"),
      rt = w({ "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I",
    "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C",
    "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i",
    "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S",
    "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe",
    "\u0149": "'n", "\u017F": "s" }),
      et = w({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }),
      ut = w({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }),
      it = function w(En) {
    function On(n) {
      if (xu(n) && !af(n) && !(n instanceof Mn)) {
        if (n instanceof zn) return n;if (ci.call(n, "__wrapped__")) return Pe(n);
      }return new zn(n);
    }function Sn() {}function zn(n, t) {
      this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = F;
    }function Mn(n) {
      this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
    }function Tn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.clear(); ++t < r;) {
        var e = n[t];this.set(e[0], e[1]);
      }
    }function Nn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.clear(); ++t < r;) {
        var e = n[t];this.set(e[0], e[1]);
      }
    }function Pn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.clear(); ++t < r;) {
        var e = n[t];this.set(e[0], e[1]);
      }
    }function qn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.__data__ = new Pn(); ++t < r;) {
        this.add(n[t]);
      }
    }function Vn(n) {
      this.size = (this.__data__ = new Nn(n)).size;
    }function Gn(n, t) {
      var r,
          e = af(n),
          u = !e && cf(n),
          i = !e && !u && sf(n),
          o = !e && !u && !i && gf(n),
          u = (e = e || u || i || o) ? E(n.length, ri) : [],
          f = u.length;for (r in n) {
        !t && !ci.call(n, r) || e && ("length" == r || i && ("offset" == r || "parent" == r) || o && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || Re(r, f)) || u.push(r);
      }return u;
    }function tt(n) {
      var t = n.length;return t ? n[cr(0, t - 1)] : F;
    }function ot(n, t) {
      return Te(Mr(n), gt(t, 0, n.length));
    }function ft(n) {
      return Te(Mr(n));
    }function ct(n, t, r) {
      (r === F || hu(n[t], r)) && (r !== F || t in n) || _t(n, t, r);
    }function at(n, t, r) {
      var e = n[t];ci.call(n, t) && hu(e, r) && (r !== F || t in n) || _t(n, t, r);
    }function lt(n, t) {
      for (var r = n.length; r--;) {
        if (hu(n[r][0], t)) return r;
      }return -1;
    }function st(n, t, r, e) {
      return oo(n, function (n, u, i) {
        t(e, n, r(n), i);
      }), e;
    }function ht(n, t) {
      return n && Tr(t, Lu(t), n);
    }function pt(n, t) {
      return n && Tr(t, Uu(t), n);
    }function _t(n, t, r) {
      "__proto__" == t && Ei ? Ei(n, t, { configurable: true, enumerable: true, value: r, writable: true }) : n[t] = r;
    }function vt(n, t) {
      for (var r = -1, e = t.length, u = Hu(e), i = null == n; ++r < e;) {
        u[r] = i ? F : Wu(n, t[r]);
      }return u;
    }function gt(n, t, r) {
      return n === n && (r !== F && (n = n <= r ? n : r), t !== F && (n = n >= t ? n : t)), n;
    }function dt(n, t, r, e, i, o) {
      var f,
          c = 1 & t,
          a = 2 & t,
          l = 4 & t;if (r && (f = i ? r(n, e, i, o) : r(n)), f !== F) return f;if (!bu(n)) return n;if (e = af(n)) {
        if (f = Ee(n), !c) return Mr(n, f);
      } else {
        var s = yo(n),
            h = "[object Function]" == s || "[object GeneratorFunction]" == s;if (sf(n)) return Wr(n, c);if ("[object Object]" == s || "[object Arguments]" == s || h && !i) {
          if (f = a || h ? {} : Oe(n), !c) return a ? Fr(n, pt(f, n)) : $r(n, ht(f, n));
        } else {
          if (!Dn[s]) return i ? n : {};f = Se(n, s, dt, c);
        }
      }if (o || (o = new Vn()), i = o.get(n)) return i;o.set(n, f);var a = l ? a ? ye : de : a ? Uu : Lu,
          p = e ? F : a(n);return u(p || n, function (e, u) {
        p && (u = e, e = n[u]), at(f, u, dt(e, t, r, u, n, o));
      }), f;
    }function yt(n) {
      var t = Lu(n);return function (r) {
        return bt(r, n, t);
      };
    }function bt(n, t, r) {
      var e = r.length;if (null == n) return !e;for (n = ni(n); e--;) {
        var u = r[e],
            i = t[u],
            o = n[u];if (o === F && !(u in n) || !i(o)) return false;
      }return true;
    }function xt(n, t, r) {
      if (typeof n != "function") throw new ei("Expected a function");return jo(function () {
        n.apply(F, r);
      }, t);
    }function jt(n, t, r, e) {
      var u = -1,
          i = c,
          o = true,
          f = n.length,
          s = [],
          h = t.length;
      if (!f) return s;r && (t = l(t, S(r))), e ? (i = a, o = false) : 200 <= t.length && (i = R, o = false, t = new qn(t));n: for (; ++u < f;) {
        var p = n[u],
            _ = null == r ? p : r(p),
            p = e || 0 !== p ? p : 0;if (o && _ === _) {
          for (var v = h; v--;) {
            if (t[v] === _) continue n;
          }s.push(p);
        } else i(t, _, e) || s.push(p);
      }return s;
    }function wt(n, t) {
      var r = true;return oo(n, function (n, e, u) {
        return r = !!t(n, e, u);
      }), r;
    }function mt(n, t, r) {
      for (var e = -1, u = n.length; ++e < u;) {
        var i = n[e],
            o = t(i);if (null != o && (f === F ? o === o && !Au(o) : r(o, f))) var f = o,
            c = i;
      }return c;
    }function At(n, t) {
      var r = [];return oo(n, function (n, e, u) {
        t(n, e, u) && r.push(n);
      }), r;
    }function kt(n, t, r, e, u) {
      var i = -1,
          o = n.length;for (r || (r = Ie), u || (u = []); ++i < o;) {
        var f = n[i];0 < t && r(f) ? 1 < t ? kt(f, t - 1, r, e, u) : s(u, f) : e || (u[u.length] = f);
      }return u;
    }function Et(n, t) {
      return n && co(n, t, Lu);
    }function Ot(n, t) {
      return n && ao(n, t, Lu);
    }function St(n, t) {
      return f(t, function (t) {
        return gu(n[t]);
      });
    }function It(n, t) {
      t = Rr(t, n);for (var r = 0, e = t.length; null != n && r < e;) {
        n = n[$e(t[r++])];
      }return r && r == e ? n : F;
    }function Rt(n, t, r) {
      return t = t(n), af(n) ? t : s(t, r(n));
    }function zt(n) {
      if (null == n) n = n === F ? "[object Undefined]" : "[object Null]";else if (ki && ki in ni(n)) {
        var t = ci.call(n, ki),
            r = n[ki];try {
          n[ki] = F;var e = true;
        } catch (n) {}var u = si.call(n);e && (t ? n[ki] = r : delete n[ki]), n = u;
      } else n = si.call(n);return n;
    }function Wt(n, t) {
      return n > t;
    }function Bt(n, t) {
      return null != n && ci.call(n, t);
    }function Lt(n, t) {
      return null != n && t in ni(n);
    }function Ut(n, t, r) {
      for (var e = r ? a : c, u = n[0].length, i = n.length, o = i, f = Hu(i), s = 1 / 0, h = []; o--;) {
        var p = n[o];o && t && (p = l(p, S(t))), s = Mi(p.length, s), f[o] = !r && (t || 120 <= u && 120 <= p.length) ? new qn(o && p) : F;
      }var p = n[0],
          _ = -1,
          v = f[0];n: for (; ++_ < u && h.length < s;) {
        var g = p[_],
            d = t ? t(g) : g,
            g = r || 0 !== g ? g : 0;
        if (v ? !R(v, d) : !e(h, d, r)) {
          for (o = i; --o;) {
            var y = f[o];if (y ? !R(y, d) : !e(n[o], d, r)) continue n;
          }v && v.push(d), h.push(g);
        }
      }return h;
    }function Ct(n, t, r) {
      var e = {};return Et(n, function (n, u, i) {
        t(e, r(n), u, i);
      }), e;
    }function Dt(n, t, e) {
      return t = Rr(t, n), n = 2 > t.length ? n : It(n, vr(t, 0, -1)), t = null == n ? n : n[$e(Ge(t))], null == t ? F : r(t, n, e);
    }function Mt(n) {
      return xu(n) && "[object Arguments]" == zt(n);
    }function Tt(n) {
      return xu(n) && "[object ArrayBuffer]" == zt(n);
    }function $t(n) {
      return xu(n) && "[object Date]" == zt(n);
    }function Ft(n, t, r, e, u) {
      if (n === t) t = true;else if (null == n || null == t || !xu(n) && !xu(t)) t = n !== n && t !== t;else n: {
        var i = af(n),
            o = af(t),
            f = i ? "[object Array]" : yo(n),
            c = o ? "[object Array]" : yo(t),
            f = "[object Arguments]" == f ? "[object Object]" : f,
            c = "[object Arguments]" == c ? "[object Object]" : c,
            a = "[object Object]" == f,
            o = "[object Object]" == c;if ((c = f == c) && sf(n)) {
          if (!sf(t)) {
            t = false;break n;
          }i = true, a = false;
        }if (c && !a) u || (u = new Vn()), t = i || gf(n) ? _e(n, t, r, e, Ft, u) : ve(n, t, f, r, e, Ft, u);else {
          if (!(1 & r) && (i = a && ci.call(n, "__wrapped__"), f = o && ci.call(t, "__wrapped__"), i || f)) {
            n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Vn()), t = Ft(n, t, r, e, u);break n;
          }if (c) {
            t: if (u || (u = new Vn()), i = 1 & r, f = de(n), o = f.length, c = de(t).length, o == c || i) {
              for (a = o; a--;) {
                var l = f[a];if (!(i ? l in t : ci.call(t, l))) {
                  t = false;break t;
                }
              }if ((c = u.get(n)) && u.get(t)) t = c == t;else {
                c = true, u.set(n, t), u.set(t, n);for (var s = i; ++a < o;) {
                  var l = f[a],
                      h = n[l],
                      p = t[l];if (e) var _ = i ? e(p, h, l, t, n, u) : e(h, p, l, n, t, u);if (_ === F ? h !== p && !Ft(h, p, r, e, u) : !_) {
                    c = false;break;
                  }s || (s = "constructor" == l);
                }c && !s && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u.delete(n), u.delete(t), t = c;
              }
            } else t = false;
          } else t = false;
        }
      }return t;
    }function Nt(n) {
      return xu(n) && "[object Map]" == yo(n);
    }function Pt(n, t, r, e) {
      var u = r.length,
          i = u,
          o = !e;if (null == n) return !i;for (n = ni(n); u--;) {
        var f = r[u];if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return false;
      }for (; ++u < i;) {
        var f = r[u],
            c = f[0],
            a = n[c],
            l = f[1];if (o && f[2]) {
          if (a === F && !(c in n)) return false;
        } else {
          if (f = new Vn(), e) var s = e(a, l, c, n, t, f);if (s === F ? !Ft(l, a, 3, e, f) : !s) return false;
        }
      }return true;
    }function Zt(n) {
      return !(!bu(n) || li && li in n) && (gu(n) ? _i : xn).test(Fe(n));
    }function qt(n) {
      return xu(n) && "[object RegExp]" == zt(n);
    }function Vt(n) {
      return xu(n) && "[object Set]" == yo(n);
    }function Kt(n) {
      return xu(n) && yu(n.length) && !!Cn[zt(n)];
    }function Gt(n) {
      return typeof n == "function" ? n : null == n ? Nu : (typeof n === "undefined" ? "undefined" : (0, _typeof3.default)(n)) == "object" ? af(n) ? Xt(n[0], n[1]) : Qt(n) : Vu(n);
    }function Ht(n) {
      if (!Le(n)) return Ci(n);var t,
          r = [];for (t in ni(n)) {
        ci.call(n, t) && "constructor" != t && r.push(t);
      }return r;
    }function Jt(n, t) {
      return n < t;
    }function Yt(n, t) {
      var r = -1,
          e = pu(n) ? Hu(n.length) : [];return oo(n, function (n, u, i) {
        e[++r] = t(n, u, i);
      }), e;
    }function Qt(n) {
      var t = me(n);return 1 == t.length && t[0][2] ? Ue(t[0][0], t[0][1]) : function (r) {
        return r === n || Pt(r, n, t);
      };
    }function Xt(n, t) {
      return We(n) && t === t && !bu(t) ? Ue($e(n), t) : function (r) {
        var e = Wu(r, n);return e === F && e === t ? Bu(r, n) : Ft(t, e, 3);
      };
    }function nr(n, t, r, e, u) {
      n !== t && co(t, function (i, o) {
        if (bu(i)) {
          u || (u = new Vn());var f = u,
              c = n[o],
              a = t[o],
              l = f.get(a);if (l) ct(n, o, l);else {
            var l = e ? e(c, a, o + "", n, t, f) : F,
                s = l === F;if (s) {
              var h = af(a),
                  p = !h && sf(a),
                  _ = !h && !p && gf(a),
                  l = a;h || p || _ ? af(c) ? l = c : _u(c) ? l = Mr(c) : p ? (s = false, l = Wr(a, true)) : _ ? (s = false, l = Lr(a, true)) : l = [] : wu(a) || cf(a) ? (l = c, cf(c) ? l = Ru(c) : (!bu(c) || r && gu(c)) && (l = Oe(a))) : s = false;
            }s && (f.set(a, l), nr(l, a, r, e, f), f.delete(a)), ct(n, o, l);
          }
        } else f = e ? e(n[o], i, o + "", n, t, u) : F, f === F && (f = i), ct(n, o, f);
      }, Uu);
    }function tr(n, t) {
      var r = n.length;if (r) return t += 0 > t ? r : 0, Re(t, r) ? n[t] : F;
    }function rr(n, t, r) {
      var e = -1;return t = l(t.length ? t : [Nu], S(je())), n = Yt(n, function (n) {
        return { a: l(t, function (t) {
            return t(n);
          }), b: ++e, c: n };
      }), A(n, function (n, t) {
        var e;n: {
          e = -1;for (var u = n.a, i = t.a, o = u.length, f = r.length; ++e < o;) {
            var c = Ur(u[e], i[e]);if (c) {
              e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);
              break n;
            }
          }e = n.b - t.b;
        }return e;
      });
    }function er(n, t) {
      return ur(n, t, function (t, r) {
        return Bu(n, r);
      });
    }function ur(n, t, r) {
      for (var e = -1, u = t.length, i = {}; ++e < u;) {
        var o = t[e],
            f = It(n, o);r(f, o) && pr(i, Rr(o, n), f);
      }return i;
    }function ir(n) {
      return function (t) {
        return It(t, n);
      };
    }function or(n, t, r, e) {
      var u = e ? y : d,
          i = -1,
          o = t.length,
          f = n;for (n === t && (t = Mr(t)), r && (f = l(n, S(r))); ++i < o;) {
        for (var c = 0, a = t[i], a = r ? r(a) : a; -1 < (c = u(f, a, c, e));) {
          f !== n && wi.call(f, c, 1), wi.call(n, c, 1);
        }
      }return n;
    }function fr(n, t) {
      for (var r = n ? t.length : 0, e = r - 1; r--;) {
        var u = t[r];
        if (r == e || u !== i) {
          var i = u;Re(u) ? wi.call(n, u, 1) : mr(n, u);
        }
      }
    }function cr(n, t) {
      return n + zi(Fi() * (t - n + 1));
    }function ar(n, t) {
      var r = "";if (!n || 1 > t || 9007199254740991 < t) return r;do {
        t % 2 && (r += n), (t = zi(t / 2)) && (n += n);
      } while (t);return r;
    }function lr(n, t) {
      return wo(Ce(n, t, Nu), n + "");
    }function sr(n) {
      return tt(Du(n));
    }function hr(n, t) {
      var r = Du(n);return Te(r, gt(t, 0, r.length));
    }function pr(n, t, r, e) {
      if (!bu(n)) return n;t = Rr(t, n);for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
        var c = $e(t[u]),
            a = r;if (u != o) {
          var l = f[c],
              a = e ? e(l, c, f) : F;
          a === F && (a = bu(l) ? l : Re(t[u + 1]) ? [] : {});
        }at(f, c, a), f = f[c];
      }return n;
    }function _r(n) {
      return Te(Du(n));
    }function vr(n, t, r) {
      var e = -1,
          u = n.length;for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Hu(u); ++e < u;) {
        r[e] = n[e + t];
      }return r;
    }function gr(n, t) {
      var r;return oo(n, function (n, e, u) {
        return r = t(n, e, u), !r;
      }), !!r;
    }function dr(n, t, r) {
      var e = 0,
          u = null == n ? e : n.length;if (typeof t == "number" && t === t && 2147483647 >= u) {
        for (; e < u;) {
          var i = e + u >>> 1,
              o = n[i];null !== o && !Au(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i;
        }return u;
      }return yr(n, t, Nu, r);
    }function yr(n, t, r, e) {
      t = r(t);for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = Au(t), a = t === F; u < i;) {
        var l = zi((u + i) / 2),
            s = r(n[l]),
            h = s !== F,
            p = null === s,
            _ = s === s,
            v = Au(s);(o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1 : i = l;
      }return Mi(i, 4294967294);
    }function br(n, t) {
      for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
        var o = n[r],
            f = t ? t(o) : o;if (!r || !hu(f, c)) {
          var c = f;i[u++] = 0 === o ? 0 : o;
        }
      }return i;
    }function xr(n) {
      return typeof n == "number" ? n : Au(n) ? P : +n;
    }function jr(n) {
      if (typeof n == "string") return n;
      if (af(n)) return l(n, jr) + "";if (Au(n)) return uo ? uo.call(n) : "";var t = n + "";return "0" == t && 1 / n == -N ? "-0" : t;
    }function wr(n, t, r) {
      var e = -1,
          u = c,
          i = n.length,
          o = true,
          f = [],
          l = f;if (r) o = false, u = a;else if (200 <= i) {
        if (u = t ? null : po(n)) return D(u);o = false, u = R, l = new qn();
      } else l = t ? [] : f;n: for (; ++e < i;) {
        var s = n[e],
            h = t ? t(s) : s,
            s = r || 0 !== s ? s : 0;if (o && h === h) {
          for (var p = l.length; p--;) {
            if (l[p] === h) continue n;
          }t && l.push(h), f.push(s);
        } else u(l, h, r) || (l !== f && l.push(h), f.push(s));
      }return f;
    }function mr(n, t) {
      return t = Rr(t, n), n = 2 > t.length ? n : It(n, vr(t, 0, -1)), null == n || delete n[$e(Ge(t))];
    }function Ar(n, t, r, e) {
      for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n);) {}return r ? vr(n, e ? 0 : i, e ? i + 1 : u) : vr(n, e ? i + 1 : 0, e ? u : i);
    }function kr(n, t) {
      var r = n;return r instanceof Mn && (r = r.value()), h(t, function (n, t) {
        return t.func.apply(t.thisArg, s([n], t.args));
      }, r);
    }function Er(n, t, r) {
      var e = n.length;if (2 > e) return e ? wr(n[0]) : [];for (var u = -1, i = Hu(e); ++u < e;) {
        for (var o = n[u], f = -1; ++f < e;) {
          f != u && (i[u] = jt(i[u] || o, n[f], t, r));
        }
      }return wr(kt(i, 1), t, r);
    }function Or(n, t, r) {
      for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) {
        r(o, n[e], e < i ? t[e] : F);
      }return o;
    }function Sr(n) {
      return _u(n) ? n : [];
    }function Ir(n) {
      return typeof n == "function" ? n : Nu;
    }function Rr(n, t) {
      return af(n) ? n : We(n, t) ? [n] : mo(zu(n));
    }function zr(n, t, r) {
      var e = n.length;return r = r === F ? e : r, !t && r >= e ? n : vr(n, t, r);
    }function Wr(n, t) {
      if (t) return n.slice();var r = n.length,
          r = yi ? yi(r) : new n.constructor(r);return n.copy(r), r;
    }function Br(n) {
      var t = new n.constructor(n.byteLength);return new di(t).set(new di(n)), t;
    }function Lr(n, t) {
      return new n.constructor(t ? Br(n.buffer) : n.buffer, n.byteOffset, n.length);
    }function Ur(n, t) {
      if (n !== t) {
        var r = n !== F,
            e = null === n,
            u = n === n,
            i = Au(n),
            o = t !== F,
            f = null === t,
            c = t === t,
            a = Au(t);if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1;
      }return 0;
    }function Cr(n, t, r, e) {
      var u = -1,
          i = n.length,
          o = r.length,
          f = -1,
          c = t.length,
          a = Di(i - o, 0),
          l = Hu(c + a);for (e = !e; ++f < c;) {
        l[f] = t[f];
      }for (; ++u < o;) {
        (e || u < i) && (l[r[u]] = n[u]);
      }for (; a--;) {
        l[f++] = n[u++];
      }return l;
    }function Dr(n, t, r, e) {
      var u = -1,
          i = n.length,
          o = -1,
          f = r.length,
          c = -1,
          a = t.length,
          l = Di(i - f, 0),
          s = Hu(l + a);
      for (e = !e; ++u < l;) {
        s[u] = n[u];
      }for (l = u; ++c < a;) {
        s[l + c] = t[c];
      }for (; ++o < f;) {
        (e || u < i) && (s[l + r[o]] = n[u++]);
      }return s;
    }function Mr(n, t) {
      var r = -1,
          e = n.length;for (t || (t = Hu(e)); ++r < e;) {
        t[r] = n[r];
      }return t;
    }function Tr(n, t, r, e) {
      var u = !r;r || (r = {});for (var i = -1, o = t.length; ++i < o;) {
        var f = t[i],
            c = e ? e(r[f], n[f], f, r, n) : F;c === F && (c = n[f]), u ? _t(r, f, c) : at(r, f, c);
      }return r;
    }function $r(n, t) {
      return Tr(n, vo(n), t);
    }function Fr(n, t) {
      return Tr(n, go(n), t);
    }function Nr(n, t) {
      return function (r, u) {
        var i = af(r) ? e : st,
            o = t ? t() : {};return i(r, n, je(u, 2), o);
      };
    }function Pr(n) {
      return lr(function (t, r) {
        var e = -1,
            u = r.length,
            i = 1 < u ? r[u - 1] : F,
            o = 2 < u ? r[2] : F,
            i = 3 < n.length && typeof i == "function" ? (u--, i) : F;for (o && ze(r[0], r[1], o) && (i = 3 > u ? F : i, u = 1), t = ni(t); ++e < u;) {
          (o = r[e]) && n(t, o, e, i);
        }return t;
      });
    }function Zr(n, t) {
      return function (r, e) {
        if (null == r) return r;if (!pu(r)) return n(r, e);for (var u = r.length, i = t ? u : -1, o = ni(r); (t ? i-- : ++i < u) && false !== e(o[i], i, o);) {}return r;
      };
    }function qr(n) {
      return function (t, r, e) {
        var u = -1,
            i = ni(t);e = e(t);for (var o = e.length; o--;) {
          var f = e[n ? o : ++u];if (false === r(i[f], f, i)) break;
        }return t;
      };
    }function Vr(n, t, r) {
      function e() {
        return (this && this !== Zn && this instanceof e ? i : n).apply(u ? r : this, arguments);
      }var u = 1 & t,
          i = Hr(n);return e;
    }function Kr(n) {
      return function (t) {
        t = zu(t);var r = Bn.test(t) ? $(t) : F,
            e = r ? r[0] : t.charAt(0);return t = r ? zr(r, 1).join("") : t.slice(1), e[n]() + t;
      };
    }function Gr(n) {
      return function (t) {
        return h($u(Tu(t).replace(In, "")), n, "");
      };
    }function Hr(n) {
      return function () {
        var t = arguments;switch (t.length) {case 0:
            return new n();case 1:
            return new n(t[0]);case 2:
            return new n(t[0], t[1]);case 3:
            return new n(t[0], t[1], t[2]);case 4:
            return new n(t[0], t[1], t[2], t[3]);case 5:
            return new n(t[0], t[1], t[2], t[3], t[4]);case 6:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);case 7:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);}var r = io(n.prototype),
            t = n.apply(r, t);return bu(t) ? t : r;
      };
    }function Jr(n, t, e) {
      function u() {
        for (var o = arguments.length, f = Hu(o), c = o, a = xe(u); c--;) {
          f[c] = arguments[c];
        }return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : C(f, a), o -= c.length, o < e ? fe(n, t, Xr, u.placeholder, F, f, c, F, F, e - o) : r(this && this !== Zn && this instanceof u ? i : n, this, f);
      }var i = Hr(n);return u;
    }function Yr(n) {
      return function (t, r, e) {
        var u = ni(t);if (!pu(t)) {
          var i = je(r, 3);t = Lu(t), r = function r(n) {
            return i(u[n], n, u);
          };
        }return r = n(t, r, e), -1 < r ? u[i ? t[r] : r] : F;
      };
    }function Qr(n) {
      return ge(function (t) {
        var r = t.length,
            e = r,
            u = zn.prototype.thru;for (n && t.reverse(); e--;) {
          var i = t[e];if (typeof i != "function") throw new ei("Expected a function");if (u && !o && "wrapper" == be(i)) var o = new zn([], true);
        }for (e = o ? e : r; ++e < r;) {
          var i = t[e],
              u = be(i),
              f = "wrapper" == u ? _o(i) : F,
              o = f && Be(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[be(f[0])].apply(o, f[3]) : 1 == i.length && Be(i) ? o[u]() : o.thru(i);
        }return function () {
          var n = arguments,
              e = n[0];if (o && 1 == n.length && af(e)) return o.plant(e).value();for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;) {
            n = t[u].call(this, n);
          }return n;
        };
      });
    }function Xr(n, t, r, e, u, i, o, f, c, a) {
      function l() {
        for (var d = arguments.length, y = Hu(d), b = d; b--;) {
          y[b] = arguments[b];
        }if (_) {
          var x,
              j = xe(l),
              b = y.length;for (x = 0; b--;) {
            y[b] === j && ++x;
          }
        }if (e && (y = Cr(y, e, u, _)), i && (y = Dr(y, i, o, _)), d -= x, _ && d < a) return j = C(y, j), fe(n, t, Xr, l.placeholder, r, y, j, f, c, a - d);if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
          x = y.length;for (var w = Mi(f.length, x), m = Mr(y); w--;) {
            var A = f[w];y[w] = Re(A, x) ? m[A] : F;
          }
        } else v && 1 < d && y.reverse();return s && c < d && (y.length = c), this && this !== Zn && this instanceof l && (b = g || Hr(b)), b.apply(j, y);
      }var s = 128 & t,
          h = 1 & t,
          p = 2 & t,
          _ = 24 & t,
          v = 512 & t,
          g = p ? F : Hr(n);return l;
    }function ne(n, t) {
      return function (r, e) {
        return Ct(r, n, t(e));
      };
    }function te(n, t) {
      return function (r, e) {
        var u;if (r === F && e === F) return t;if (r !== F && (u = r), e !== F) {
          if (u === F) return e;typeof r == "string" || typeof e == "string" ? (r = jr(r), e = jr(e)) : (r = xr(r), e = xr(e)), u = n(r, e);
        }return u;
      };
    }function re(n) {
      return ge(function (t) {
        return t = l(t, S(je())), lr(function (e) {
          var u = this;return n(t, function (n) {
            return r(n, u, e);
          });
        });
      });
    }function ee(n, t) {
      t = t === F ? " " : jr(t);var r = t.length;return 2 > r ? r ? ar(t, n) : t : (r = ar(t, Ri(n / T(t))), Bn.test(t) ? zr($(r), 0, n).join("") : r.slice(0, n));
    }function ue(n, t, e, u) {
      function i() {
        for (var t = -1, c = arguments.length, a = -1, l = u.length, s = Hu(l + c), h = this && this !== Zn && this instanceof i ? f : n; ++a < l;) {
          s[a] = u[a];
        }for (; c--;) {
          s[a++] = arguments[++t];
        }return r(h, o ? e : this, s);
      }var o = 1 & t,
          f = Hr(n);return i;
    }function ie(n) {
      return function (t, r, e) {
        e && typeof e != "number" && ze(t, r, e) && (r = e = F), t = Eu(t), r === F ? (r = t, t = 0) : r = Eu(r), e = e === F ? t < r ? 1 : -1 : Eu(e);var u = -1;r = Di(Ri((r - t) / (e || 1)), 0);for (var i = Hu(r); r--;) {
          i[n ? r : ++u] = t, t += e;
        }return i;
      };
    }function oe(n) {
      return function (t, r) {
        return typeof t == "string" && typeof r == "string" || (t = Iu(t), r = Iu(r)), n(t, r);
      };
    }function fe(n, t, r, e, u, i, o, f, c, a) {
      var l = 8 & t,
          s = l ? o : F;o = l ? F : o;var h = l ? i : F;return i = l ? F : i, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), u = [n, t, u, h, s, i, o, f, c, a], r = r.apply(F, u), Be(n) && xo(r, u), r.placeholder = e, De(r, n, t);
    }function ce(n) {
      var t = Xu[n];return function (n, r) {
        if (n = Iu(n), r = null == r ? 0 : Mi(Ou(r), 292)) {
          var e = (zu(n) + "e").split("e"),
              e = t(e[0] + "e" + (+e[1] + r)),
              e = (zu(e) + "e").split("e");return +(e[0] + "e" + (+e[1] - r));
        }return t(n);
      };
    }function ae(n) {
      return function (t) {
        var r = yo(t);return "[object Map]" == r ? L(t) : "[object Set]" == r ? M(t) : O(t, n(t));
      };
    }function le(n, t, r, e, u, i, o, f) {
      var c = 2 & t;if (!c && typeof n != "function") throw new ei("Expected a function");var a = e ? e.length : 0;if (a || (t &= -97, e = u = F), o = o === F ? o : Di(Ou(o), 0), f = f === F ? f : Ou(f), a -= u ? u.length : 0, 64 & t) {
        var l = e,
            s = u;e = u = F;
      }var h = c ? F : _o(n);return i = [n, t, r, e, u, l, s, i, o, f], h && (r = i[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Cr(e, r, h[4]) : r, i[4] = e ? C(i[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Dr(e, r, h[6]) : r, i[6] = e ? C(i[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Mi(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = t), n = i[0], t = i[1], r = i[2], e = i[3], u = i[4], f = i[9] = i[9] === F ? c ? 0 : n.length : Di(i[9] - a, 0), !f && 24 & t && (t &= -25), De((h ? lo : xo)(t && 1 != t ? 8 == t || 16 == t ? Jr(n, t, f) : 32 != t && 33 != t || u.length ? Xr.apply(F, i) : ue(n, t, r, e) : Vr(n, t, r), i), n, t);
    }function se(n, t, r, e) {
      return n === F || hu(n, ii[r]) && !ci.call(e, r) ? t : n;
    }function he(n, t, r, e, u, i) {
      return bu(n) && bu(t) && (i.set(t, n), nr(n, t, F, he, i), i.delete(t)), n;
    }function pe(n) {
      return wu(n) ? F : n;
    }function _e(n, t, r, e, u, i) {
      var o = 1 & r,
          f = n.length,
          c = t.length;if (f != c && !(o && c > f)) return false;if ((c = i.get(n)) && i.get(t)) return c == t;var c = -1,
          a = true,
          l = 2 & r ? new qn() : F;
      for (i.set(n, t), i.set(t, n); ++c < f;) {
        var s = n[c],
            h = t[c];if (e) var p = o ? e(h, s, c, t, n, i) : e(s, h, c, n, t, i);if (p !== F) {
          if (p) continue;a = false;break;
        }if (l) {
          if (!_(t, function (n, t) {
            if (!R(l, t) && (s === n || u(s, n, r, e, i))) return l.push(t);
          })) {
            a = false;break;
          }
        } else if (s !== h && !u(s, h, r, e, i)) {
          a = false;break;
        }
      }return i.delete(n), i.delete(t), a;
    }function ve(n, t, r, e, u, i, o) {
      switch (r) {case "[object DataView]":
          if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) break;n = n.buffer, t = t.buffer;case "[object ArrayBuffer]":
          if (n.byteLength != t.byteLength || !i(new di(n), new di(t))) break;
          return true;case "[object Boolean]":case "[object Date]":case "[object Number]":
          return hu(+n, +t);case "[object Error]":
          return n.name == t.name && n.message == t.message;case "[object RegExp]":case "[object String]":
          return n == t + "";case "[object Map]":
          var f = L;case "[object Set]":
          if (f || (f = D), n.size != t.size && !(1 & e)) break;return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = _e(f(n), f(t), e, u, i, o), o.delete(n), t);case "[object Symbol]":
          if (eo) return eo.call(n) == eo.call(t);}return false;
    }function ge(n) {
      return wo(Ce(n, F, Ve), n + "");
    }function de(n) {
      return Rt(n, Lu, vo);
    }function ye(n) {
      return Rt(n, Uu, go);
    }function be(n) {
      for (var t = n.name + "", r = Ji[t], e = ci.call(Ji, t) ? r.length : 0; e--;) {
        var u = r[e],
            i = u.func;if (null == i || i == n) return u.name;
      }return t;
    }function xe(n) {
      return (ci.call(On, "placeholder") ? On : n).placeholder;
    }function je() {
      var n = On.iteratee || Pu,
          n = n === Pu ? Gt : n;return arguments.length ? n(arguments[0], arguments[1]) : n;
    }function we(n, t) {
      var r = n.__data__,
          e = typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t);return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }function me(n) {
      for (var t = Lu(n), r = t.length; r--;) {
        var e = t[r],
            u = n[e];t[r] = [e, u, u === u && !bu(u)];
      }return t;
    }function Ae(n, t) {
      var r = null == n ? F : n[t];return Zt(r) ? r : F;
    }function ke(n, t, r) {
      t = Rr(t, n);for (var e = -1, u = t.length, i = false; ++e < u;) {
        var o = $e(t[e]);if (!(i = null != n && r(n, o))) break;n = n[o];
      }return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && yu(u) && Re(o, u) && (af(n) || cf(n)));
    }function Ee(n) {
      var t = n.length,
          r = n.constructor(t);return t && "string" == typeof n[0] && ci.call(n, "index") && (r.index = n.index, r.input = n.input), r;
    }function Oe(n) {
      return typeof n.constructor != "function" || Le(n) ? {} : io(bi(n));
    }function Se(r, e, u, i) {
      var o = r.constructor;switch (e) {case "[object ArrayBuffer]":
          return Br(r);case "[object Boolean]":case "[object Date]":
          return new o(+r);case "[object DataView]":
          return e = i ? Br(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":case "[object Uint32Array]":
          return Lr(r, i);case "[object Map]":
          return e = i ? u(L(r), 1) : L(r), h(e, n, new r.constructor());case "[object Number]":case "[object String]":
          return new o(r);case "[object RegExp]":
          return e = new r.constructor(r.source, dn.exec(r)), e.lastIndex = r.lastIndex, e;case "[object Set]":
          return e = i ? u(D(r), 1) : D(r), h(e, t, new r.constructor());case "[object Symbol]":
          return eo ? ni(eo.call(r)) : {};}
    }function Ie(n) {
      return af(n) || cf(n) || !!(mi && n && n[mi]);
    }function Re(n, t) {
      return t = null == t ? 9007199254740991 : t, !!t && (typeof n == "number" || wn.test(n)) && -1 < n && 0 == n % 1 && n < t;
    }function ze(n, t, r) {
      if (!bu(r)) return false;var e = typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t);return !!("number" == e ? pu(r) && Re(t, r.length) : "string" == e && t in r) && hu(r[t], n);
    }function We(n, t) {
      if (af(n)) return false;var r = typeof n === "undefined" ? "undefined" : (0, _typeof3.default)(n);return !("number" != r && "symbol" != r && "boolean" != r && null != n && !Au(n)) || rn.test(n) || !tn.test(n) || null != t && n in ni(t);
    }function Be(n) {
      var t = be(n),
          r = On[t];return typeof r == "function" && t in Mn.prototype && (n === r || (t = _o(r), !!t && n === t[0]));
    }function Le(n) {
      var t = n && n.constructor;
      return n === (typeof t == "function" && t.prototype || ii);
    }function Ue(n, t) {
      return function (r) {
        return null != r && r[n] === t && (t !== F || n in ni(r));
      };
    }function Ce(n, t, e) {
      return t = Di(t === F ? n.length - 1 : t, 0), function () {
        for (var u = arguments, i = -1, o = Di(u.length - t, 0), f = Hu(o); ++i < o;) {
          f[i] = u[t + i];
        }for (i = -1, o = Hu(t + 1); ++i < t;) {
          o[i] = u[i];
        }return o[t] = e(f), r(n, this, o);
      };
    }function De(n, t, r) {
      var e = t + "";t = wo;var u,
          i = Ne;return u = (u = e.match(hn)) ? u[1].split(pn) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? "& " : "") + r[u], r = r.join(2 < i ? ", " : " "), e = e.replace(sn, "{\n/* [wrapped with " + r + "] */\n")), t(n, e);
    }function Me(n) {
      var t = 0,
          r = 0;return function () {
        var e = Ti(),
            u = 16 - (e - r);if (r = e, 0 < u) {
          if (800 <= ++t) return arguments[0];
        } else t = 0;return n.apply(F, arguments);
      };
    }function Te(n, t) {
      var r = -1,
          e = n.length,
          u = e - 1;for (t = t === F ? e : t; ++r < t;) {
        var e = cr(r, u),
            i = n[e];n[e] = n[r], n[r] = i;
      }return n.length = t, n;
    }function $e(n) {
      if (typeof n == "string" || Au(n)) return n;var t = n + "";return "0" == t && 1 / n == -N ? "-0" : t;
    }function Fe(n) {
      if (null != n) {
        try {
          return fi.call(n);
        } catch (n) {}return n + "";
      }return "";
    }function Ne(n, t) {
      return u(Z, function (r) {
        var e = "_." + r[0];t & r[1] && !c(n, e) && n.push(e);
      }), n.sort();
    }function Pe(n) {
      if (n instanceof Mn) return n.clone();var t = new zn(n.__wrapped__, n.__chain__);return t.__actions__ = Mr(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
    }function Ze(n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (r = null == r ? 0 : Ou(r), 0 > r && (r = Di(e + r, 0)), g(n, je(t, 3), r)) : -1;
    }function qe(n, t, r) {
      var e = null == n ? 0 : n.length;if (!e) return -1;var u = e - 1;return r !== F && (u = Ou(r), u = 0 > r ? Di(e + u, 0) : Mi(u, e - 1)), g(n, je(t, 3), u, true);
    }function Ve(n) {
      return (null == n ? 0 : n.length) ? kt(n, 1) : [];
    }function Ke(n) {
      return n && n.length ? n[0] : F;
    }function Ge(n) {
      var t = null == n ? 0 : n.length;return t ? n[t - 1] : F;
    }function He(n, t) {
      return n && n.length && t && t.length ? or(n, t) : n;
    }function Je(n) {
      return null == n ? n : Ni.call(n);
    }function Ye(n) {
      if (!n || !n.length) return [];var t = 0;return n = f(n, function (n) {
        if (_u(n)) return t = Di(n.length, t), true;
      }), E(t, function (t) {
        return l(n, j(t));
      });
    }function Qe(n, t) {
      if (!n || !n.length) return [];var e = Ye(n);return null == t ? e : l(e, function (n) {
        return r(t, F, n);
      });
    }function Xe(n) {
      return n = On(n), n.__chain__ = true, n;
    }function nu(n, t) {
      return t(n);
    }function tu() {
      return this;
    }function ru(n, t) {
      return (af(n) ? u : oo)(n, je(t, 3));
    }function eu(n, t) {
      return (af(n) ? i : fo)(n, je(t, 3));
    }function uu(n, t) {
      return (af(n) ? l : Yt)(n, je(t, 3));
    }function iu(n, t, r) {
      return t = r ? F : t, t = n && null == t ? n.length : t, le(n, 128, F, F, F, F, t);
    }function ou(n, t) {
      var r;if (typeof t != "function") throw new ei("Expected a function");return n = Ou(n), function () {
        return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = F), r;
      };
    }function fu(n, t, r) {
      return t = r ? F : t, n = le(n, 8, F, F, F, F, F, t), n.placeholder = fu.placeholder, n;
    }function cu(n, t, r) {
      return t = r ? F : t, n = le(n, 16, F, F, F, F, F, t), n.placeholder = cu.placeholder, n;
    }function au(n, t, r) {
      function e(t) {
        var r = c,
            e = a;return c = a = F, _ = t, s = n.apply(e, r);
      }function u(n) {
        var r = n - p;return n -= _, p === F || r >= t || 0 > r || g && n >= l;
      }function i() {
        var n = Jo();if (u(n)) return o(n);var r,
            e = jo;r = n - _, n = t - (n - p), r = g ? Mi(n, l - r) : n, h = e(i, r);
      }function o(n) {
        return h = F, d && c ? e(n) : (c = a = F, s);
      }function f() {
        var n = Jo(),
            r = u(n);if (c = arguments, a = this, p = n, r) {
          if (h === F) return _ = n = p, h = jo(i, t), v ? e(n) : s;if (g) return h = jo(i, t), e(p);
        }return h === F && (h = jo(i, t)), s;
      }var c,
          a,
          l,
          s,
          h,
          p,
          _ = 0,
          v = false,
          g = false,
          d = true;if (typeof n != "function") throw new ei("Expected a function");return t = Iu(t) || 0, bu(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? Di(Iu(r.maxWait) || 0, t) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function () {
        h !== F && ho(h), _ = 0, c = p = a = h = F;
      }, f.flush = function () {
        return h === F ? s : o(Jo());
      }, f;
    }function lu(n, t) {
      function r() {
        var e = arguments,
            u = t ? t.apply(this, e) : e[0],
            i = r.cache;return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e) || i, e);
      }if (typeof n != "function" || null != t && typeof t != "function") throw new ei("Expected a function");return r.cache = new (lu.Cache || Pn)(), r;
    }function su(n) {
      if (typeof n != "function") throw new ei("Expected a function");return function () {
        var t = arguments;switch (t.length) {case 0:
            return !n.call(this);case 1:
            return !n.call(this, t[0]);case 2:
            return !n.call(this, t[0], t[1]);case 3:
            return !n.call(this, t[0], t[1], t[2]);}return !n.apply(this, t);
      };
    }function hu(n, t) {
      return n === t || n !== n && t !== t;
    }function pu(n) {
      return null != n && yu(n.length) && !gu(n);
    }function _u(n) {
      return xu(n) && pu(n);
    }function vu(n) {
      if (!xu(n)) return false;var t = zt(n);return "[object Error]" == t || "[object DOMException]" == t || typeof n.message == "string" && typeof n.name == "string" && !wu(n);
    }function gu(n) {
      return !!bu(n) && (n = zt(n), "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n);
    }function du(n) {
      return typeof n == "number" && n == Ou(n);
    }function yu(n) {
      return typeof n == "number" && -1 < n && 0 == n % 1 && 9007199254740991 >= n;
    }function bu(n) {
      var t = typeof n === "undefined" ? "undefined" : (0, _typeof3.default)(n);return null != n && ("object" == t || "function" == t);
    }function xu(n) {
      return null != n && (typeof n === "undefined" ? "undefined" : (0, _typeof3.default)(n)) == "object";
    }function ju(n) {
      return typeof n == "number" || xu(n) && "[object Number]" == zt(n);
    }function wu(n) {
      return !(!xu(n) || "[object Object]" != zt(n)) && (n = bi(n), null === n || (n = ci.call(n, "constructor") && n.constructor, typeof n == "function" && n instanceof n && fi.call(n) == hi));
    }function mu(n) {
      return typeof n == "string" || !af(n) && xu(n) && "[object String]" == zt(n);
    }function Au(n) {
      return (typeof n === "undefined" ? "undefined" : (0, _typeof3.default)(n)) == "symbol" || xu(n) && "[object Symbol]" == zt(n);
    }function ku(n) {
      if (!n) return [];if (pu(n)) return mu(n) ? $(n) : Mr(n);
      if (Ai && n[Ai]) {
        n = n[Ai]();for (var t, r = []; !(t = n.next()).done;) {
          r.push(t.value);
        }return r;
      }return t = yo(n), ("[object Map]" == t ? L : "[object Set]" == t ? D : Du)(n);
    }function Eu(n) {
      return n ? (n = Iu(n), n === N || n === -N ? 1.7976931348623157e308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0;
    }function Ou(n) {
      n = Eu(n);var t = n % 1;return n === n ? t ? n - t : n : 0;
    }function Su(n) {
      return n ? gt(Ou(n), 0, 4294967295) : 0;
    }function Iu(n) {
      if (typeof n == "number") return n;if (Au(n)) return P;if (bu(n) && (n = typeof n.valueOf == "function" ? n.valueOf() : n, n = bu(n) ? n + "" : n), typeof n != "string") return 0 === n ? n : +n;
      n = n.replace(cn, "");var t = bn.test(n);return t || jn.test(n) ? Fn(n.slice(2), t ? 2 : 8) : yn.test(n) ? P : +n;
    }function Ru(n) {
      return Tr(n, Uu(n));
    }function zu(n) {
      return null == n ? "" : jr(n);
    }function Wu(n, t, r) {
      return n = null == n ? F : It(n, t), n === F ? r : n;
    }function Bu(n, t) {
      return null != n && ke(n, t, Lt);
    }function Lu(n) {
      return pu(n) ? Gn(n) : Ht(n);
    }function Uu(n) {
      if (pu(n)) n = Gn(n, true);else if (bu(n)) {
        var t,
            r = Le(n),
            e = [];for (t in n) {
          ("constructor" != t || !r && ci.call(n, t)) && e.push(t);
        }n = e;
      } else {
        if (t = [], null != n) for (r in ni(n)) {
          t.push(r);
        }n = t;
      }return n;
    }function Cu(n, t) {
      if (null == n) return {};var r = l(ye(n), function (n) {
        return [n];
      });return t = je(t), ur(n, r, function (n, r) {
        return t(n, r[0]);
      });
    }function Du(n) {
      return null == n ? [] : I(n, Lu(n));
    }function Mu(n) {
      return Nf(zu(n).toLowerCase());
    }function Tu(n) {
      return (n = zu(n)) && n.replace(mn, rt).replace(Rn, "");
    }function $u(n, t, r) {
      return n = zu(n), t = r ? F : t, t === F ? Ln.test(n) ? n.match(Wn) || [] : n.match(_n) || [] : n.match(t) || [];
    }function Fu(n) {
      return function () {
        return n;
      };
    }function Nu(n) {
      return n;
    }function Pu(n) {
      return Gt(typeof n == "function" ? n : dt(n, 1));
    }function Zu(n, t, r) {
      var e = Lu(t),
          i = St(t, e);null != r || bu(t) && (i.length || !e.length) || (r = t, t = n, n = this, i = St(t, Lu(t)));var o = !(bu(r) && "chain" in r && !r.chain),
          f = gu(n);return u(i, function (r) {
        var e = t[r];n[r] = e, f && (n.prototype[r] = function () {
          var t = this.__chain__;if (o || t) {
            var r = n(this.__wrapped__);return (r.__actions__ = Mr(this.__actions__)).push({ func: e, args: arguments, thisArg: n }), r.__chain__ = t, r;
          }return e.apply(n, s([this.value()], arguments));
        });
      }), n;
    }function qu() {}function Vu(n) {
      return We(n) ? j($e(n)) : ir(n);
    }function Ku() {
      return [];
    }function Gu() {
      return false;
    }En = null == En ? Zn : it.defaults(Zn.Object(), En, it.pick(Zn, Un));var Hu = En.Array,
        Ju = En.Date,
        Yu = En.Error,
        Qu = En.Function,
        Xu = En.Math,
        ni = En.Object,
        ti = En.RegExp,
        ri = En.String,
        ei = En.TypeError,
        ui = Hu.prototype,
        ii = ni.prototype,
        oi = En["__core-js_shared__"],
        fi = Qu.prototype.toString,
        ci = ii.hasOwnProperty,
        ai = 0,
        li = function () {
      var n = /[^.]+$/.exec(oi && oi.keys && oi.keys.IE_PROTO || "");return n ? "Symbol(src)_1." + n : "";
    }(),
        si = ii.toString,
        hi = fi.call(ni),
        pi = Zn._,
        _i = ti("^" + fi.call(ci).replace(on, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        vi = Kn ? En.Buffer : F,
        gi = En.Symbol,
        di = En.Uint8Array,
        yi = vi ? vi.f : F,
        bi = U(ni.getPrototypeOf, ni),
        xi = ni.create,
        ji = ii.propertyIsEnumerable,
        wi = ui.splice,
        mi = gi ? gi.isConcatSpreadable : F,
        Ai = gi ? gi.iterator : F,
        ki = gi ? gi.toStringTag : F,
        Ei = function () {
      try {
        var n = Ae(ni, "defineProperty");return n({}, "", {}), n;
      } catch (n) {}
    }(),
        Oi = En.clearTimeout !== Zn.clearTimeout && En.clearTimeout,
        Si = Ju && Ju.now !== Zn.Date.now && Ju.now,
        Ii = En.setTimeout !== Zn.setTimeout && En.setTimeout,
        Ri = Xu.ceil,
        zi = Xu.floor,
        Wi = ni.getOwnPropertySymbols,
        Bi = vi ? vi.isBuffer : F,
        Li = En.isFinite,
        Ui = ui.join,
        Ci = U(ni.keys, ni),
        Di = Xu.max,
        Mi = Xu.min,
        Ti = Ju.now,
        $i = En.parseInt,
        Fi = Xu.random,
        Ni = ui.reverse,
        Pi = Ae(En, "DataView"),
        Zi = Ae(En, "Map"),
        qi = Ae(En, "Promise"),
        Vi = Ae(En, "Set"),
        Ki = Ae(En, "WeakMap"),
        Gi = Ae(ni, "create"),
        Hi = Ki && new Ki(),
        Ji = {},
        Yi = Fe(Pi),
        Qi = Fe(Zi),
        Xi = Fe(qi),
        no = Fe(Vi),
        to = Fe(Ki),
        ro = gi ? gi.prototype : F,
        eo = ro ? ro.valueOf : F,
        uo = ro ? ro.toString : F,
        io = function () {
      function n() {}return function (t) {
        return bu(t) ? xi ? xi(t) : (n.prototype = t, t = new n(), n.prototype = F, t) : {};
      };
    }();On.templateSettings = { escape: Q, evaluate: X, interpolate: nn, variable: "", imports: { _: On } }, On.prototype = Sn.prototype, On.prototype.constructor = On, zn.prototype = io(Sn.prototype), zn.prototype.constructor = zn, Mn.prototype = io(Sn.prototype), Mn.prototype.constructor = Mn, Tn.prototype.clear = function () {
      this.__data__ = Gi ? Gi(null) : {}, this.size = 0;
    }, Tn.prototype.delete = function (n) {
      return n = this.has(n) && delete this.__data__[n], this.size -= n ? 1 : 0, n;
    }, Tn.prototype.get = function (n) {
      var t = this.__data__;return Gi ? (n = t[n], "__lodash_hash_undefined__" === n ? F : n) : ci.call(t, n) ? t[n] : F;
    }, Tn.prototype.has = function (n) {
      var t = this.__data__;return Gi ? t[n] !== F : ci.call(t, n);
    }, Tn.prototype.set = function (n, t) {
      var r = this.__data__;return this.size += this.has(n) ? 0 : 1, r[n] = Gi && t === F ? "__lodash_hash_undefined__" : t, this;
    }, Nn.prototype.clear = function () {
      this.__data__ = [], this.size = 0;
    }, Nn.prototype.delete = function (n) {
      var t = this.__data__;return n = lt(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : wi.call(t, n, 1), --this.size, true);
    }, Nn.prototype.get = function (n) {
      var t = this.__data__;return n = lt(t, n), 0 > n ? F : t[n][1];
    }, Nn.prototype.has = function (n) {
      return -1 < lt(this.__data__, n);
    }, Nn.prototype.set = function (n, t) {
      var r = this.__data__,
          e = lt(r, n);return 0 > e ? (++this.size, r.push([n, t])) : r[e][1] = t, this;
    }, Pn.prototype.clear = function () {
      this.size = 0, this.__data__ = { hash: new Tn(), map: new (Zi || Nn)(), string: new Tn() };
    }, Pn.prototype.delete = function (n) {
      return n = we(this, n).delete(n), this.size -= n ? 1 : 0, n;
    }, Pn.prototype.get = function (n) {
      return we(this, n).get(n);
    }, Pn.prototype.has = function (n) {
      return we(this, n).has(n);
    }, Pn.prototype.set = function (n, t) {
      var r = we(this, n),
          e = r.size;return r.set(n, t), this.size += r.size == e ? 0 : 1, this;
    }, qn.prototype.add = qn.prototype.push = function (n) {
      return this.__data__.set(n, "__lodash_hash_undefined__"), this;
    }, qn.prototype.has = function (n) {
      return this.__data__.has(n);
    }, Vn.prototype.clear = function () {
      this.__data__ = new Nn(), this.size = 0;
    }, Vn.prototype.delete = function (n) {
      var t = this.__data__;return n = t.delete(n), this.size = t.size, n;
    }, Vn.prototype.get = function (n) {
      return this.__data__.get(n);
    }, Vn.prototype.has = function (n) {
      return this.__data__.has(n);
    }, Vn.prototype.set = function (n, t) {
      var r = this.__data__;if (r instanceof Nn) {
        var e = r.__data__;if (!Zi || 199 > e.length) return e.push([n, t]), this.size = ++r.size, this;r = this.__data__ = new Pn(e);
      }return r.set(n, t), this.size = r.size, this;
    };var oo = Zr(Et),
        fo = Zr(Ot, true),
        co = qr(),
        ao = qr(true),
        lo = Hi ? function (n, t) {
      return Hi.set(n, t), n;
    } : Nu,
        so = Ei ? function (n, t) {
      return Ei(n, "toString", { configurable: true, enumerable: false, value: Fu(t), writable: true });
    } : Nu,
        ho = Oi || function (n) {
      return Zn.clearTimeout(n);
    },
        po = Vi && 1 / D(new Vi([, -0]))[1] == N ? function (n) {
      return new Vi(n);
    } : qu,
        _o = Hi ? function (n) {
      return Hi.get(n);
    } : qu,
        vo = Wi ? function (n) {
      return null == n ? [] : (n = ni(n), f(Wi(n), function (t) {
        return ji.call(n, t);
      }));
    } : Ku,
        go = Wi ? function (n) {
      for (var t = []; n;) {
        s(t, vo(n)), n = bi(n);
      }return t;
    } : Ku,
        yo = zt;(Pi && "[object DataView]" != yo(new Pi(new ArrayBuffer(1))) || Zi && "[object Map]" != yo(new Zi()) || qi && "[object Promise]" != yo(qi.resolve()) || Vi && "[object Set]" != yo(new Vi()) || Ki && "[object WeakMap]" != yo(new Ki())) && (yo = function yo(n) {
      var t = zt(n);if (n = (n = "[object Object]" == t ? n.constructor : F) ? Fe(n) : "") switch (n) {case Yi:
          return "[object DataView]";case Qi:
          return "[object Map]";case Xi:
          return "[object Promise]";case no:
          return "[object Set]";case to:
          return "[object WeakMap]";}return t;
    });var bo = oi ? gu : Gu,
        xo = Me(lo),
        jo = Ii || function (n, t) {
      return Zn.setTimeout(n, t);
    },
        wo = Me(so),
        mo = function (n) {
      n = lu(n, function (n) {
        return 500 === t.size && t.clear(), n;
      });var t = n.cache;return n;
    }(function (n) {
      var t = [];return en.test(n) && t.push(""), n.replace(un, function (n, r, e, u) {
        t.push(e ? u.replace(vn, "$1") : r || n);
      }), t;
    }),
        Ao = lr(function (n, t) {
      return _u(n) ? jt(n, kt(t, 1, _u, true)) : [];
    }),
        ko = lr(function (n, t) {
      var r = Ge(t);return _u(r) && (r = F), _u(n) ? jt(n, kt(t, 1, _u, true), je(r, 2)) : [];
    }),
        Eo = lr(function (n, t) {
      var r = Ge(t);return _u(r) && (r = F), _u(n) ? jt(n, kt(t, 1, _u, true), F, r) : [];
    }),
        Oo = lr(function (n) {
      var t = l(n, Sr);return t.length && t[0] === n[0] ? Ut(t) : [];
    }),
        So = lr(function (n) {
      var t = Ge(n),
          r = l(n, Sr);return t === Ge(r) ? t = F : r.pop(), r.length && r[0] === n[0] ? Ut(r, je(t, 2)) : [];
    }),
        Io = lr(function (n) {
      var t = Ge(n),
          r = l(n, Sr);return (t = typeof t == "function" ? t : F) && r.pop(), r.length && r[0] === n[0] ? Ut(r, F, t) : [];
    }),
        Ro = lr(He),
        zo = ge(function (n, t) {
      var r = null == n ? 0 : n.length,
          e = vt(n, t);return fr(n, l(t, function (n) {
        return Re(n, r) ? +n : n;
      }).sort(Ur)), e;
    }),
        Wo = lr(function (n) {
      return wr(kt(n, 1, _u, true));
    }),
        Bo = lr(function (n) {
      var t = Ge(n);return _u(t) && (t = F), wr(kt(n, 1, _u, true), je(t, 2));
    }),
        Lo = lr(function (n) {
      var t = Ge(n),
          t = typeof t == "function" ? t : F;return wr(kt(n, 1, _u, true), F, t);
    }),
        Uo = lr(function (n, t) {
      return _u(n) ? jt(n, t) : [];
    }),
        Co = lr(function (n) {
      return Er(f(n, _u));
    }),
        Do = lr(function (n) {
      var t = Ge(n);return _u(t) && (t = F), Er(f(n, _u), je(t, 2));
    }),
        Mo = lr(function (n) {
      var t = Ge(n),
          t = typeof t == "function" ? t : F;return Er(f(n, _u), F, t);
    }),
        To = lr(Ye),
        $o = lr(function (n) {
      var t = n.length,
          t = 1 < t ? n[t - 1] : F,
          t = typeof t == "function" ? (n.pop(), t) : F;return Qe(n, t);
    }),
        Fo = ge(function (n) {
      function t(t) {
        return vt(t, n);
      }var r = n.length,
          e = r ? n[0] : 0,
          u = this.__wrapped__;return !(1 < r || this.__actions__.length) && u instanceof Mn && Re(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({ func: nu, args: [t], thisArg: F }), new zn(u, this.__chain__).thru(function (n) {
        return r && !n.length && n.push(F), n;
      })) : this.thru(t);
    }),
        No = Nr(function (n, t, r) {
      ci.call(n, r) ? ++n[r] : _t(n, r, 1);
    }),
        Po = Yr(Ze),
        Zo = Yr(qe),
        qo = Nr(function (n, t, r) {
      ci.call(n, r) ? n[r].push(t) : _t(n, r, [t]);
    }),
        Vo = lr(function (n, t, e) {
      var u = -1,
          i = typeof t == "function",
          o = pu(n) ? Hu(n.length) : [];return oo(n, function (n) {
        o[++u] = i ? r(t, n, e) : Dt(n, t, e);
      }), o;
    }),
        Ko = Nr(function (n, t, r) {
      _t(n, r, t);
    }),
        Go = Nr(function (n, t, r) {
      n[r ? 0 : 1].push(t);
    }, function () {
      return [[], []];
    }),
        Ho = lr(function (n, t) {
      if (null == n) return [];var r = t.length;return 1 < r && ze(n, t[0], t[1]) ? t = [] : 2 < r && ze(t[0], t[1], t[2]) && (t = [t[0]]), rr(n, kt(t, 1), []);
    }),
        Jo = Si || function () {
      return Zn.Date.now();
    },
        Yo = lr(function (n, t, r) {
      var e = 1;if (r.length) var u = C(r, xe(Yo)),
          e = 32 | e;return le(n, e, t, r, u);
    }),
        Qo = lr(function (n, t, r) {
      var e = 3;if (r.length) var u = C(r, xe(Qo)),
          e = 32 | e;return le(t, e, n, r, u);
    }),
        Xo = lr(function (n, t) {
      return xt(n, 1, t);
    }),
        nf = lr(function (n, t, r) {
      return xt(n, Iu(t) || 0, r);
    });lu.Cache = Pn;var tf = lr(function (n, t) {
      t = 1 == t.length && af(t[0]) ? l(t[0], S(je())) : l(kt(t, 1), S(je()));var e = t.length;return lr(function (u) {
        for (var i = -1, o = Mi(u.length, e); ++i < o;) {
          u[i] = t[i].call(this, u[i]);
        }return r(n, this, u);
      });
    }),
        rf = lr(function (n, t) {
      return le(n, 32, F, t, C(t, xe(rf)));
    }),
        ef = lr(function (n, t) {
      return le(n, 64, F, t, C(t, xe(ef)));
    }),
        uf = ge(function (n, t) {
      return le(n, 256, F, F, F, t);
    }),
        of = oe(Wt),
        ff = oe(function (n, t) {
      return n >= t;
    }),
        cf = Mt(function () {
      return arguments;
    }()) ? Mt : function (n) {
      return xu(n) && ci.call(n, "callee") && !ji.call(n, "callee");
    },
        af = Hu.isArray,
        lf = Hn ? S(Hn) : Tt,
        sf = Bi || Gu,
        hf = Jn ? S(Jn) : $t,
        pf = Yn ? S(Yn) : Nt,
        _f = Qn ? S(Qn) : qt,
        vf = Xn ? S(Xn) : Vt,
        gf = nt ? S(nt) : Kt,
        df = oe(Jt),
        yf = oe(function (n, t) {
      return n <= t;
    }),
        bf = Pr(function (n, t) {
      if (Le(t) || pu(t)) Tr(t, Lu(t), n);else for (var r in t) {
        ci.call(t, r) && at(n, r, t[r]);
      }
    }),
        xf = Pr(function (n, t) {
      Tr(t, Uu(t), n);
    }),
        jf = Pr(function (n, t, r, e) {
      Tr(t, Uu(t), n, e);
    }),
        wf = Pr(function (n, t, r, e) {
      Tr(t, Lu(t), n, e);
    }),
        mf = ge(vt),
        Af = lr(function (n) {
      return n.push(F, se), r(jf, F, n);
    }),
        kf = lr(function (n) {
      return n.push(F, he), r(Rf, F, n);
    }),
        Ef = ne(function (n, t, r) {
      n[t] = r;
    }, Fu(Nu)),
        Of = ne(function (n, t, r) {
      ci.call(n, t) ? n[t].push(r) : n[t] = [r];
    }, je),
        Sf = lr(Dt),
        If = Pr(function (n, t, r) {
      nr(n, t, r);
    }),
        Rf = Pr(function (n, t, r, e) {
      nr(n, t, r, e);
    }),
        zf = ge(function (n, t) {
      var r = {};if (null == n) return r;var e = false;t = l(t, function (t) {
        return t = Rr(t, n), e || (e = 1 < t.length), t;
      }), Tr(n, ye(n), r), e && (r = dt(r, 7, pe));for (var u = t.length; u--;) {
        mr(r, t[u]);
      }return r;
    }),
        Wf = ge(function (n, t) {
      return null == n ? {} : er(n, t);
    }),
        Bf = ae(Lu),
        Lf = ae(Uu),
        Uf = Gr(function (n, t, r) {
      return t = t.toLowerCase(), n + (r ? Mu(t) : t);
    }),
        Cf = Gr(function (n, t, r) {
      return n + (r ? "-" : "") + t.toLowerCase();
    }),
        Df = Gr(function (n, t, r) {
      return n + (r ? " " : "") + t.toLowerCase();
    }),
        Mf = Kr("toLowerCase"),
        Tf = Gr(function (n, t, r) {
      return n + (r ? "_" : "") + t.toLowerCase();
    }),
        $f = Gr(function (n, t, r) {
      return n + (r ? " " : "") + Nf(t);
    }),
        Ff = Gr(function (n, t, r) {
      return n + (r ? " " : "") + t.toUpperCase();
    }),
        Nf = Kr("toUpperCase"),
        Pf = lr(function (n, t) {
      try {
        return r(n, F, t);
      } catch (n) {
        return vu(n) ? n : new Yu(n);
      }
    }),
        Zf = ge(function (n, t) {
      return u(t, function (t) {
        t = $e(t), _t(n, t, Yo(n[t], n));
      }), n;
    }),
        qf = Qr(),
        Vf = Qr(true),
        Kf = lr(function (n, t) {
      return function (r) {
        return Dt(r, n, t);
      };
    }),
        Gf = lr(function (n, t) {
      return function (r) {
        return Dt(n, r, t);
      };
    }),
        Hf = re(l),
        Jf = re(o),
        Yf = re(_),
        Qf = ie(),
        Xf = ie(true),
        nc = te(function (n, t) {
      return n + t;
    }, 0),
        tc = ce("ceil"),
        rc = te(function (n, t) {
      return n / t;
    }, 1),
        ec = ce("floor"),
        uc = te(function (n, t) {
      return n * t;
    }, 1),
        ic = ce("round"),
        oc = te(function (n, t) {
      return n - t;
    }, 0);return On.after = function (n, t) {
      if (typeof t != "function") throw new ei("Expected a function");return n = Ou(n), function () {
        if (1 > --n) return t.apply(this, arguments);
      };
    }, On.ary = iu, On.assign = bf, On.assignIn = xf, On.assignInWith = jf, On.assignWith = wf, On.at = mf, On.before = ou, On.bind = Yo, On.bindAll = Zf, On.bindKey = Qo, On.castArray = function () {
      if (!arguments.length) return [];var n = arguments[0];return af(n) ? n : [n];
    }, On.chain = Xe, On.chunk = function (n, t, r) {
      if (t = (r ? ze(n, t, r) : t === F) ? 1 : Di(Ou(t), 0), r = null == n ? 0 : n.length, !r || 1 > t) return [];for (var e = 0, u = 0, i = Hu(Ri(r / t)); e < r;) {
        i[u++] = vr(n, e, e += t);
      }return i;
    }, On.compact = function (n) {
      for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
        var i = n[t];i && (u[e++] = i);
      }return u;
    }, On.concat = function () {
      var n = arguments.length;if (!n) return [];for (var t = Hu(n - 1), r = arguments[0]; n--;) {
        t[n - 1] = arguments[n];
      }return s(af(r) ? Mr(r) : [r], kt(t, 1));
    }, On.cond = function (n) {
      var t = null == n ? 0 : n.length,
          e = je();return n = t ? l(n, function (n) {
        if ("function" != typeof n[1]) throw new ei("Expected a function");return [e(n[0]), n[1]];
      }) : [], lr(function (e) {
        for (var u = -1; ++u < t;) {
          var i = n[u];if (r(i[0], this, e)) return r(i[1], this, e);
        }
      });
    }, On.conforms = function (n) {
      return yt(dt(n, 1));
    }, On.constant = Fu, On.countBy = No, On.create = function (n, t) {
      var r = io(n);return null == t ? r : ht(r, t);
    }, On.curry = fu, On.curryRight = cu, On.debounce = au, On.defaults = Af, On.defaultsDeep = kf, On.defer = Xo, On.delay = nf, On.difference = Ao, On.differenceBy = ko, On.differenceWith = Eo, On.drop = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (t = r || t === F ? 1 : Ou(t), vr(n, 0 > t ? 0 : t, e)) : [];
    }, On.dropRight = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (t = r || t === F ? 1 : Ou(t), t = e - t, vr(n, 0, 0 > t ? 0 : t)) : [];
    }, On.dropRightWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3), true, true) : [];
    }, On.dropWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3), true) : [];
    }, On.fill = function (n, t, r, e) {
      var u = null == n ? 0 : n.length;if (!u) return [];for (r && typeof r != "number" && ze(n, t, r) && (r = 0, e = u), u = n.length, r = Ou(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === F || e > u ? u : Ou(e), 0 > e && (e += u), e = r > e ? 0 : Su(e); r < e;) {
        n[r++] = t;
      }return n;
    }, On.filter = function (n, t) {
      return (af(n) ? f : At)(n, je(t, 3));
    }, On.flatMap = function (n, t) {
      return kt(uu(n, t), 1);
    }, On.flatMapDeep = function (n, t) {
      return kt(uu(n, t), N);
    }, On.flatMapDepth = function (n, t, r) {
      return r = r === F ? 1 : Ou(r), kt(uu(n, t), r);
    }, On.flatten = Ve, On.flattenDeep = function (n) {
      return (null == n ? 0 : n.length) ? kt(n, N) : [];
    }, On.flattenDepth = function (n, t) {
      return null != n && n.length ? (t = t === F ? 1 : Ou(t), kt(n, t)) : [];
    }, On.flip = function (n) {
      return le(n, 512);
    }, On.flow = qf, On.flowRight = Vf, On.fromPairs = function (n) {
      for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
        var u = n[t];e[u[0]] = u[1];
      }return e;
    }, On.functions = function (n) {
      return null == n ? [] : St(n, Lu(n));
    }, On.functionsIn = function (n) {
      return null == n ? [] : St(n, Uu(n));
    }, On.groupBy = qo, On.initial = function (n) {
      return (null == n ? 0 : n.length) ? vr(n, 0, -1) : [];
    }, On.intersection = Oo, On.intersectionBy = So, On.intersectionWith = Io, On.invert = Ef, On.invertBy = Of, On.invokeMap = Vo, On.iteratee = Pu, On.keyBy = Ko, On.keys = Lu, On.keysIn = Uu, On.map = uu, On.mapKeys = function (n, t) {
      var r = {};return t = je(t, 3), Et(n, function (n, e, u) {
        _t(r, t(n, e, u), n);
      }), r;
    }, On.mapValues = function (n, t) {
      var r = {};return t = je(t, 3), Et(n, function (n, e, u) {
        _t(r, e, t(n, e, u));
      }), r;
    }, On.matches = function (n) {
      return Qt(dt(n, 1));
    }, On.matchesProperty = function (n, t) {
      return Xt(n, dt(t, 1));
    }, On.memoize = lu, On.merge = If, On.mergeWith = Rf, On.method = Kf, On.methodOf = Gf, On.mixin = Zu, On.negate = su, On.nthArg = function (n) {
      return n = Ou(n), lr(function (t) {
        return tr(t, n);
      });
    }, On.omit = zf, On.omitBy = function (n, t) {
      return Cu(n, su(je(t)));
    }, On.once = function (n) {
      return ou(2, n);
    }, On.orderBy = function (n, t, r, e) {
      return null == n ? [] : (af(t) || (t = null == t ? [] : [t]), r = e ? F : r, af(r) || (r = null == r ? [] : [r]), rr(n, t, r));
    }, On.over = Hf, On.overArgs = tf, On.overEvery = Jf, On.overSome = Yf, On.partial = rf, On.partialRight = ef, On.partition = Go, On.pick = Wf, On.pickBy = Cu, On.property = Vu, On.propertyOf = function (n) {
      return function (t) {
        return null == n ? F : It(n, t);
      };
    }, On.pull = Ro, On.pullAll = He, On.pullAllBy = function (n, t, r) {
      return n && n.length && t && t.length ? or(n, t, je(r, 2)) : n;
    }, On.pullAllWith = function (n, t, r) {
      return n && n.length && t && t.length ? or(n, t, F, r) : n;
    }, On.pullAt = zo, On.range = Qf, On.rangeRight = Xf, On.rearg = uf, On.reject = function (n, t) {
      return (af(n) ? f : At)(n, su(je(t, 3)));
    }, On.remove = function (n, t) {
      var r = [];if (!n || !n.length) return r;var e = -1,
          u = [],
          i = n.length;for (t = je(t, 3); ++e < i;) {
        var o = n[e];t(o, e, n) && (r.push(o), u.push(e));
      }return fr(n, u), r;
    }, On.rest = function (n, t) {
      if (typeof n != "function") throw new ei("Expected a function");return t = t === F ? t : Ou(t), lr(n, t);
    }, On.reverse = Je, On.sampleSize = function (n, t, r) {
      return t = (r ? ze(n, t, r) : t === F) ? 1 : Ou(t), (af(n) ? ot : hr)(n, t);
    }, On.set = function (n, t, r) {
      return null == n ? n : pr(n, t, r);
    }, On.setWith = function (n, t, r, e) {
      return e = typeof e == "function" ? e : F, null == n ? n : pr(n, t, r, e);
    }, On.shuffle = function (n) {
      return (af(n) ? ft : _r)(n);
    }, On.slice = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (r && typeof r != "number" && ze(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Ou(t), r = r === F ? e : Ou(r)), vr(n, t, r)) : [];
    }, On.sortBy = Ho, On.sortedUniq = function (n) {
      return n && n.length ? br(n) : [];
    }, On.sortedUniqBy = function (n, t) {
      return n && n.length ? br(n, je(t, 2)) : [];
    }, On.split = function (n, t, r) {
      return r && typeof r != "number" && ze(n, t, r) && (t = r = F), r = r === F ? 4294967295 : r >>> 0, r ? (n = zu(n)) && (typeof t == "string" || null != t && !_f(t)) && (t = jr(t), !t && Bn.test(n)) ? zr($(n), 0, r) : n.split(t, r) : [];
    }, On.spread = function (n, t) {
      if (typeof n != "function") throw new ei("Expected a function");return t = null == t ? 0 : Di(Ou(t), 0), lr(function (e) {
        var u = e[t];return e = zr(e, 0, t), u && s(e, u), r(n, this, e);
      });
    }, On.tail = function (n) {
      var t = null == n ? 0 : n.length;return t ? vr(n, 1, t) : [];
    }, On.take = function (n, t, r) {
      return n && n.length ? (t = r || t === F ? 1 : Ou(t), vr(n, 0, 0 > t ? 0 : t)) : [];
    }, On.takeRight = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (t = r || t === F ? 1 : Ou(t), t = e - t, vr(n, 0 > t ? 0 : t, e)) : [];
    }, On.takeRightWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3), false, true) : [];
    }, On.takeWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3)) : [];
    }, On.tap = function (n, t) {
      return t(n), n;
    }, On.throttle = function (n, t, r) {
      var e = true,
          u = true;if (typeof n != "function") throw new ei("Expected a function");return bu(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), au(n, t, { leading: e, maxWait: t, trailing: u });
    }, On.thru = nu, On.toArray = ku, On.toPairs = Bf, On.toPairsIn = Lf, On.toPath = function (n) {
      return af(n) ? l(n, $e) : Au(n) ? [n] : Mr(mo(zu(n)));
    }, On.toPlainObject = Ru, On.transform = function (n, t, r) {
      var e = af(n),
          i = e || sf(n) || gf(n);if (t = je(t, 4), null == r) {
        var o = n && n.constructor;r = i ? e ? new o() : [] : bu(n) && gu(o) ? io(bi(n)) : {};
      }return (i ? u : Et)(n, function (n, e, u) {
        return t(r, n, e, u);
      }), r;
    }, On.unary = function (n) {
      return iu(n, 1);
    }, On.union = Wo, On.unionBy = Bo, On.unionWith = Lo, On.uniq = function (n) {
      return n && n.length ? wr(n) : [];
    }, On.uniqBy = function (n, t) {
      return n && n.length ? wr(n, je(t, 2)) : [];
    }, On.uniqWith = function (n, t) {
      return t = typeof t == "function" ? t : F, n && n.length ? wr(n, F, t) : [];
    }, On.unset = function (n, t) {
      return null == n || mr(n, t);
    }, On.unzip = Ye, On.unzipWith = Qe, On.update = function (n, t, r) {
      return null == n ? n : pr(n, t, Ir(r)(It(n, t)), void 0);
    }, On.updateWith = function (n, t, r, e) {
      return e = typeof e == "function" ? e : F, null != n && (n = pr(n, t, Ir(r)(It(n, t)), e)), n;
    }, On.values = Du, On.valuesIn = function (n) {
      return null == n ? [] : I(n, Uu(n));
    }, On.without = Uo, On.words = $u, On.wrap = function (n, t) {
      return rf(Ir(t), n);
    }, On.xor = Co, On.xorBy = Do, On.xorWith = Mo, On.zip = To, On.zipObject = function (n, t) {
      return Or(n || [], t || [], at);
    }, On.zipObjectDeep = function (n, t) {
      return Or(n || [], t || [], pr);
    }, On.zipWith = $o, On.entries = Bf, On.entriesIn = Lf, On.extend = xf, On.extendWith = jf, Zu(On, On), On.add = nc, On.attempt = Pf, On.camelCase = Uf, On.capitalize = Mu, On.ceil = tc, On.clamp = function (n, t, r) {
      return r === F && (r = t, t = F), r !== F && (r = Iu(r), r = r === r ? r : 0), t !== F && (t = Iu(t), t = t === t ? t : 0), gt(Iu(n), t, r);
    }, On.clone = function (n) {
      return dt(n, 4);
    }, On.cloneDeep = function (n) {
      return dt(n, 5);
    }, On.cloneDeepWith = function (n, t) {
      return t = typeof t == "function" ? t : F, dt(n, 5, t);
    }, On.cloneWith = function (n, t) {
      return t = typeof t == "function" ? t : F, dt(n, 4, t);
    }, On.conformsTo = function (n, t) {
      return null == t || bt(n, t, Lu(t));
    }, On.deburr = Tu, On.defaultTo = function (n, t) {
      return null == n || n !== n ? t : n;
    }, On.divide = rc, On.endsWith = function (n, t, r) {
      n = zu(n), t = jr(t);var e = n.length,
          e = r = r === F ? e : gt(Ou(r), 0, e);return r -= t.length, 0 <= r && n.slice(r, e) == t;
    }, On.eq = hu, On.escape = function (n) {
      return (n = zu(n)) && Y.test(n) ? n.replace(H, et) : n;
    }, On.escapeRegExp = function (n) {
      return (n = zu(n)) && fn.test(n) ? n.replace(on, "\\$&") : n;
    }, On.every = function (n, t, r) {
      var e = af(n) ? o : wt;return r && ze(n, t, r) && (t = F), e(n, je(t, 3));
    }, On.find = Po, On.findIndex = Ze, On.findKey = function (n, t) {
      return v(n, je(t, 3), Et);
    }, On.findLast = Zo, On.findLastIndex = qe, On.findLastKey = function (n, t) {
      return v(n, je(t, 3), Ot);
    }, On.floor = ec, On.forEach = ru, On.forEachRight = eu, On.forIn = function (n, t) {
      return null == n ? n : co(n, je(t, 3), Uu);
    }, On.forInRight = function (n, t) {
      return null == n ? n : ao(n, je(t, 3), Uu);
    }, On.forOwn = function (n, t) {
      return n && Et(n, je(t, 3));
    }, On.forOwnRight = function (n, t) {
      return n && Ot(n, je(t, 3));
    }, On.get = Wu, On.gt = of, On.gte = ff, On.has = function (n, t) {
      return null != n && ke(n, t, Bt);
    }, On.hasIn = Bu, On.head = Ke, On.identity = Nu, On.includes = function (n, t, r, e) {
      return n = pu(n) ? n : Du(n), r = r && !e ? Ou(r) : 0, e = n.length, 0 > r && (r = Di(e + r, 0)), mu(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < d(n, t, r);
    }, On.indexOf = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (r = null == r ? 0 : Ou(r), 0 > r && (r = Di(e + r, 0)), d(n, t, r)) : -1;
    }, On.inRange = function (n, t, r) {
      return t = Eu(t), r === F ? (r = t, t = 0) : r = Eu(r), n = Iu(n), n >= Mi(t, r) && n < Di(t, r);
    }, On.invoke = Sf, On.isArguments = cf, On.isArray = af, On.isArrayBuffer = lf, On.isArrayLike = pu, On.isArrayLikeObject = _u, On.isBoolean = function (n) {
      return true === n || false === n || xu(n) && "[object Boolean]" == zt(n);
    }, On.isBuffer = sf, On.isDate = hf, On.isElement = function (n) {
      return xu(n) && 1 === n.nodeType && !wu(n);
    }, On.isEmpty = function (n) {
      if (null == n) return true;if (pu(n) && (af(n) || typeof n == "string" || typeof n.splice == "function" || sf(n) || gf(n) || cf(n))) return !n.length;var t = yo(n);if ("[object Map]" == t || "[object Set]" == t) return !n.size;if (Le(n)) return !Ht(n).length;for (var r in n) {
        if (ci.call(n, r)) return false;
      }return true;
    }, On.isEqual = function (n, t) {
      return Ft(n, t);
    }, On.isEqualWith = function (n, t, r) {
      var e = (r = typeof r == "function" ? r : F) ? r(n, t) : F;return e === F ? Ft(n, t, F, r) : !!e;
    }, On.isError = vu, On.isFinite = function (n) {
      return typeof n == "number" && Li(n);
    }, On.isFunction = gu, On.isInteger = du, On.isLength = yu, On.isMap = pf, On.isMatch = function (n, t) {
      return n === t || Pt(n, t, me(t));
    }, On.isMatchWith = function (n, t, r) {
      return r = typeof r == "function" ? r : F, Pt(n, t, me(t), r);
    }, On.isNaN = function (n) {
      return ju(n) && n != +n;
    }, On.isNative = function (n) {
      if (bo(n)) throw new Yu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
      return Zt(n);
    }, On.isNil = function (n) {
      return null == n;
    }, On.isNull = function (n) {
      return null === n;
    }, On.isNumber = ju, On.isObject = bu, On.isObjectLike = xu, On.isPlainObject = wu, On.isRegExp = _f, On.isSafeInteger = function (n) {
      return du(n) && -9007199254740991 <= n && 9007199254740991 >= n;
    }, On.isSet = vf, On.isString = mu, On.isSymbol = Au, On.isTypedArray = gf, On.isUndefined = function (n) {
      return n === F;
    }, On.isWeakMap = function (n) {
      return xu(n) && "[object WeakMap]" == yo(n);
    }, On.isWeakSet = function (n) {
      return xu(n) && "[object WeakSet]" == zt(n);
    }, On.join = function (n, t) {
      return null == n ? "" : Ui.call(n, t);
    }, On.kebabCase = Cf, On.last = Ge, On.lastIndexOf = function (n, t, r) {
      var e = null == n ? 0 : n.length;if (!e) return -1;var u = e;if (r !== F && (u = Ou(r), u = 0 > u ? Di(e + u, 0) : Mi(u, e - 1)), t === t) {
        for (r = u + 1; r-- && n[r] !== t;) {}n = r;
      } else n = g(n, b, u, true);return n;
    }, On.lowerCase = Df, On.lowerFirst = Mf, On.lt = df, On.lte = yf, On.max = function (n) {
      return n && n.length ? mt(n, Nu, Wt) : F;
    }, On.maxBy = function (n, t) {
      return n && n.length ? mt(n, je(t, 2), Wt) : F;
    }, On.mean = function (n) {
      return x(n, Nu);
    }, On.meanBy = function (n, t) {
      return x(n, je(t, 2));
    }, On.min = function (n) {
      return n && n.length ? mt(n, Nu, Jt) : F;
    }, On.minBy = function (n, t) {
      return n && n.length ? mt(n, je(t, 2), Jt) : F;
    }, On.stubArray = Ku, On.stubFalse = Gu, On.stubObject = function () {
      return {};
    }, On.stubString = function () {
      return "";
    }, On.stubTrue = function () {
      return true;
    }, On.multiply = uc, On.nth = function (n, t) {
      return n && n.length ? tr(n, Ou(t)) : F;
    }, On.noConflict = function () {
      return Zn._ === this && (Zn._ = pi), this;
    }, On.noop = qu, On.now = Jo, On.pad = function (n, t, r) {
      n = zu(n);var e = (t = Ou(t)) ? T(n) : 0;return !t || e >= t ? n : (t = (t - e) / 2, ee(zi(t), r) + n + ee(Ri(t), r));
    }, On.padEnd = function (n, t, r) {
      n = zu(n);var e = (t = Ou(t)) ? T(n) : 0;return t && e < t ? n + ee(t - e, r) : n;
    }, On.padStart = function (n, t, r) {
      n = zu(n);var e = (t = Ou(t)) ? T(n) : 0;return t && e < t ? ee(t - e, r) + n : n;
    }, On.parseInt = function (n, t, r) {
      return r || null == t ? t = 0 : t && (t = +t), $i(zu(n).replace(an, ""), t || 0);
    }, On.random = function (n, t, r) {
      if (r && typeof r != "boolean" && ze(n, t, r) && (t = r = F), r === F && (typeof t == "boolean" ? (r = t, t = F) : typeof n == "boolean" && (r = n, n = F)), n === F && t === F ? (n = 0, t = 1) : (n = Eu(n), t === F ? (t = n, n = 0) : t = Eu(t)), n > t) {
        var e = n;n = t, t = e;
      }return r || n % 1 || t % 1 ? (r = Fi(), Mi(n + r * (t - n + $n("1e-" + ((r + "").length - 1))), t)) : cr(n, t);
    }, On.reduce = function (n, t, r) {
      var e = af(n) ? h : m,
          u = 3 > arguments.length;return e(n, je(t, 4), r, u, oo);
    }, On.reduceRight = function (n, t, r) {
      var e = af(n) ? p : m,
          u = 3 > arguments.length;return e(n, je(t, 4), r, u, fo);
    }, On.repeat = function (n, t, r) {
      return t = (r ? ze(n, t, r) : t === F) ? 1 : Ou(t), ar(zu(n), t);
    }, On.replace = function () {
      var n = arguments,
          t = zu(n[0]);return 3 > n.length ? t : t.replace(n[1], n[2]);
    }, On.result = function (n, t, r) {
      t = Rr(t, n);var e = -1,
          u = t.length;for (u || (u = 1, n = F); ++e < u;) {
        var i = null == n ? F : n[$e(t[e])];i === F && (e = u, i = r), n = gu(i) ? i.call(n) : i;
      }return n;
    }, On.round = ic, On.runInContext = w, On.sample = function (n) {
      return (af(n) ? tt : sr)(n);
    }, On.size = function (n) {
      if (null == n) return 0;if (pu(n)) return mu(n) ? T(n) : n.length;var t = yo(n);return "[object Map]" == t || "[object Set]" == t ? n.size : Ht(n).length;
    }, On.snakeCase = Tf, On.some = function (n, t, r) {
      var e = af(n) ? _ : gr;return r && ze(n, t, r) && (t = F), e(n, je(t, 3));
    }, On.sortedIndex = function (n, t) {
      return dr(n, t);
    }, On.sortedIndexBy = function (n, t, r) {
      return yr(n, t, je(r, 2));
    }, On.sortedIndexOf = function (n, t) {
      var r = null == n ? 0 : n.length;if (r) {
        var e = dr(n, t);if (e < r && hu(n[e], t)) return e;
      }return -1;
    }, On.sortedLastIndex = function (n, t) {
      return dr(n, t, true);
    }, On.sortedLastIndexBy = function (n, t, r) {
      return yr(n, t, je(r, 2), true);
    }, On.sortedLastIndexOf = function (n, t) {
      if (null == n ? 0 : n.length) {
        var r = dr(n, t, true) - 1;if (hu(n[r], t)) return r;
      }return -1;
    }, On.startCase = $f, On.startsWith = function (n, t, r) {
      return n = zu(n), r = null == r ? 0 : gt(Ou(r), 0, n.length), t = jr(t), n.slice(r, r + t.length) == t;
    }, On.subtract = oc, On.sum = function (n) {
      return n && n.length ? k(n, Nu) : 0;
    }, On.sumBy = function (n, t) {
      return n && n.length ? k(n, je(t, 2)) : 0;
    }, On.template = function (n, t, r) {
      var e = On.templateSettings;r && ze(n, t, r) && (t = F), n = zu(n), t = jf({}, t, e, se), r = jf({}, t.imports, e.imports, se);var u,
          i,
          o = Lu(r),
          f = I(r, o),
          c = 0;r = t.interpolate || An;var a = "__p+='";r = ti((t.escape || An).source + "|" + r.source + "|" + (r === nn ? gn : An).source + "|" + (t.evaluate || An).source + "|$", "g");var l = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";if (n.replace(r, function (t, r, e, o, f, l) {
        return e || (e = o), a += n.slice(c, l).replace(kn, B), r && (u = true, a += "'+__e(" + r + ")+'"), f && (i = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + t.length, t;
      }), a += "';", (t = t.variable) || (a = "with(obj){" + a + "}"), a = (i ? a.replace(q, "") : a).replace(V, "$1").replace(K, "$1;"), a = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", t = Pf(function () {
        return Qu(o, l + "return " + a).apply(F, f);
      }), t.source = a, vu(t)) throw t;return t;
    }, On.times = function (n, t) {
      if (n = Ou(n), 1 > n || 9007199254740991 < n) return [];
      var r = 4294967295,
          e = Mi(n, 4294967295);for (t = je(t), n -= 4294967295, e = E(e, t); ++r < n;) {
        t(r);
      }return e;
    }, On.toFinite = Eu, On.toInteger = Ou, On.toLength = Su, On.toLower = function (n) {
      return zu(n).toLowerCase();
    }, On.toNumber = Iu, On.toSafeInteger = function (n) {
      return n ? gt(Ou(n), -9007199254740991, 9007199254740991) : 0 === n ? n : 0;
    }, On.toString = zu, On.toUpper = function (n) {
      return zu(n).toUpperCase();
    }, On.trim = function (n, t, r) {
      return (n = zu(n)) && (r || t === F) ? n.replace(cn, "") : n && (t = jr(t)) ? (n = $(n), r = $(t), t = z(n, r), r = W(n, r) + 1, zr(n, t, r).join("")) : n;
    }, On.trimEnd = function (n, t, r) {
      return (n = zu(n)) && (r || t === F) ? n.replace(ln, "") : n && (t = jr(t)) ? (n = $(n), t = W(n, $(t)) + 1, zr(n, 0, t).join("")) : n;
    }, On.trimStart = function (n, t, r) {
      return (n = zu(n)) && (r || t === F) ? n.replace(an, "") : n && (t = jr(t)) ? (n = $(n), t = z(n, $(t)), zr(n, t).join("")) : n;
    }, On.truncate = function (n, t) {
      var r = 30,
          e = "...";if (bu(t)) var u = "separator" in t ? t.separator : u,
          r = "length" in t ? Ou(t.length) : r,
          e = "omission" in t ? jr(t.omission) : e;n = zu(n);var i = n.length;if (Bn.test(n)) var o = $(n),
          i = o.length;if (r >= i) return n;if (i = r - T(e), 1 > i) return e;
      if (r = o ? zr(o, 0, i).join("") : n.slice(0, i), u === F) return r + e;if (o && (i += r.length - i), _f(u)) {
        if (n.slice(i).search(u)) {
          var f = r;for (u.global || (u = ti(u.source, zu(dn.exec(u)) + "g")), u.lastIndex = 0; o = u.exec(f);) {
            var c = o.index;
          }r = r.slice(0, c === F ? i : c);
        }
      } else n.indexOf(jr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));return r + e;
    }, On.unescape = function (n) {
      return (n = zu(n)) && J.test(n) ? n.replace(G, ut) : n;
    }, On.uniqueId = function (n) {
      var t = ++ai;return zu(n) + t;
    }, On.upperCase = Ff, On.upperFirst = Nf, On.each = ru, On.eachRight = eu, On.first = Ke, Zu(On, function () {
      var n = {};return Et(On, function (t, r) {
        ci.call(On.prototype, r) || (n[r] = t);
      }), n;
    }(), { chain: false }), On.VERSION = "4.17.4", u("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
      On[n].placeholder = On;
    }), u(["drop", "take"], function (n, t) {
      Mn.prototype[n] = function (r) {
        r = r === F ? 1 : Di(Ou(r), 0);var e = this.__filtered__ && !t ? new Mn(this) : this.clone();return e.__filtered__ ? e.__takeCount__ = Mi(r, e.__takeCount__) : e.__views__.push({ size: Mi(r, 4294967295), type: n + (0 > e.__dir__ ? "Right" : "") }), e;
      }, Mn.prototype[n + "Right"] = function (t) {
        return this.reverse()[n](t).reverse();
      };
    }), u(["filter", "map", "takeWhile"], function (n, t) {
      var r = t + 1,
          e = 1 == r || 3 == r;Mn.prototype[n] = function (n) {
        var t = this.clone();return t.__iteratees__.push({ iteratee: je(n, 3), type: r }), t.__filtered__ = t.__filtered__ || e, t;
      };
    }), u(["head", "last"], function (n, t) {
      var r = "take" + (t ? "Right" : "");Mn.prototype[n] = function () {
        return this[r](1).value()[0];
      };
    }), u(["initial", "tail"], function (n, t) {
      var r = "drop" + (t ? "" : "Right");Mn.prototype[n] = function () {
        return this.__filtered__ ? new Mn(this) : this[r](1);
      };
    }), Mn.prototype.compact = function () {
      return this.filter(Nu);
    }, Mn.prototype.find = function (n) {
      return this.filter(n).head();
    }, Mn.prototype.findLast = function (n) {
      return this.reverse().find(n);
    }, Mn.prototype.invokeMap = lr(function (n, t) {
      return typeof n == "function" ? new Mn(this) : this.map(function (r) {
        return Dt(r, n, t);
      });
    }), Mn.prototype.reject = function (n) {
      return this.filter(su(je(n)));
    }, Mn.prototype.slice = function (n, t) {
      n = Ou(n);var r = this;return r.__filtered__ && (0 < n || 0 > t) ? new Mn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== F && (t = Ou(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r);
    }, Mn.prototype.takeRightWhile = function (n) {
      return this.reverse().takeWhile(n).reverse();
    }, Mn.prototype.toArray = function () {
      return this.take(4294967295);
    }, Et(Mn.prototype, function (n, t) {
      var r = /^(?:filter|find|map|reject)|While$/.test(t),
          e = /^(?:head|last)$/.test(t),
          u = On[e ? "take" + ("last" == t ? "Right" : "") : t],
          i = e || /^find/.test(t);u && (On.prototype[t] = function () {
        function t(n) {
          return n = u.apply(On, s([n], f)), e && h ? n[0] : n;
        }var o = this.__wrapped__,
            f = e ? [1] : arguments,
            c = o instanceof Mn,
            a = f[0],
            l = c || af(o);
        l && r && typeof a == "function" && 1 != a.length && (c = l = false);var h = this.__chain__,
            p = !!this.__actions__.length,
            a = i && !h,
            c = c && !p;return !i && l ? (o = c ? o : new Mn(this), o = n.apply(o, f), o.__actions__.push({ func: nu, args: [t], thisArg: F }), new zn(o, h)) : a && c ? n.apply(this, f) : (o = this.thru(t), a ? e ? o.value()[0] : o.value() : o);
      });
    }), u("pop push shift sort splice unshift".split(" "), function (n) {
      var t = ui[n],
          r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
          e = /^(?:pop|shift)$/.test(n);On.prototype[n] = function () {
        var n = arguments;if (e && !this.__chain__) {
          var u = this.value();return t.apply(af(u) ? u : [], n);
        }return this[r](function (r) {
          return t.apply(af(r) ? r : [], n);
        });
      };
    }), Et(Mn.prototype, function (n, t) {
      var r = On[t];if (r) {
        var e = r.name + "";(Ji[e] || (Ji[e] = [])).push({ name: t, func: r });
      }
    }), Ji[Xr(F, 2).name] = [{ name: "wrapper", func: F }], Mn.prototype.clone = function () {
      var n = new Mn(this.__wrapped__);return n.__actions__ = Mr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Mr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Mr(this.__views__), n;
    }, Mn.prototype.reverse = function () {
      if (this.__filtered__) {
        var n = new Mn(this);n.__dir__ = -1, n.__filtered__ = true;
      } else n = this.clone(), n.__dir__ *= -1;return n;
    }, Mn.prototype.value = function () {
      var n,
          t = this.__wrapped__.value(),
          r = this.__dir__,
          e = af(t),
          u = 0 > r,
          i = e ? t.length : 0;n = i;for (var o = this.__views__, f = 0, c = -1, a = o.length; ++c < a;) {
        var l = o[c],
            s = l.size;switch (l.type) {case "drop":
            f += s;break;case "dropRight":
            n -= s;break;case "take":
            n = Mi(n, f + s);break;case "takeRight":
            f = Di(f, n - s);}
      }if (n = { start: f, end: n }, o = n.start, f = n.end, n = f - o, o = u ? f : o - 1, f = this.__iteratees__, c = f.length, a = 0, l = Mi(n, this.__takeCount__), !e || !u && i == n && l == n) return kr(t, this.__actions__);e = [];n: for (; n-- && a < l;) {
        for (o += r, u = -1, i = t[o]; ++u < c;) {
          var h = f[u],
              s = h.type,
              h = (0, h.iteratee)(i);if (2 == s) i = h;else if (!h) {
            if (1 == s) continue n;break n;
          }
        }e[a++] = i;
      }return e;
    }, On.prototype.at = Fo, On.prototype.chain = function () {
      return Xe(this);
    }, On.prototype.commit = function () {
      return new zn(this.value(), this.__chain__);
    }, On.prototype.next = function () {
      this.__values__ === F && (this.__values__ = ku(this.value()));
      var n = this.__index__ >= this.__values__.length;return { done: n, value: n ? F : this.__values__[this.__index__++] };
    }, On.prototype.plant = function (n) {
      for (var t, r = this; r instanceof Sn;) {
        var e = Pe(r);e.__index__ = 0, e.__values__ = F, t ? u.__wrapped__ = e : t = e;var u = e,
            r = r.__wrapped__;
      }return u.__wrapped__ = n, t;
    }, On.prototype.reverse = function () {
      var n = this.__wrapped__;return n instanceof Mn ? (this.__actions__.length && (n = new Mn(this)), n = n.reverse(), n.__actions__.push({ func: nu, args: [Je], thisArg: F }), new zn(n, this.__chain__)) : this.thru(Je);
    }, On.prototype.toJSON = On.prototype.valueOf = On.prototype.value = function () {
      return kr(this.__wrapped__, this.__actions__);
    }, On.prototype.first = On.prototype.head, Ai && (On.prototype[Ai] = tu), On;
  }();"function" == "function" && (0, _typeof3.default)(__webpack_require__(45)) == "object" && __webpack_require__(45) ? (Zn._ = it, !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return it;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : Vn ? ((Vn.exports = it)._ = it, qn._ = it) : Zn._ = it;
}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46), __webpack_require__(47)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
module.exports = __webpack_require__(4).Object.isFrozen;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
module.exports = __webpack_require__(4).Object.keys;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
__webpack_require__(92);
__webpack_require__(95);
__webpack_require__(96);
module.exports = __webpack_require__(4).Symbol;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
__webpack_require__(97);
module.exports = __webpack_require__(29).f('iterator');

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(3)
  , toLength  = __webpack_require__(88)
  , toIndex   = __webpack_require__(87);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(70);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11)
  , gOPS    = __webpack_require__(40)
  , pIE     = __webpack_require__(22);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(34);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(34);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(38)
  , descriptor     = __webpack_require__(14)
  , setToStringTag = __webpack_require__(23)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(8)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(11)
  , toIObject = __webpack_require__(3);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(15)('meta')
  , isObject = __webpack_require__(10)
  , has      = __webpack_require__(2)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(9)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(13)
  , getKeys  = __webpack_require__(11);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(22)
  , createDesc     = __webpack_require__(14)
  , toIObject      = __webpack_require__(3)
  , toPrimitive    = __webpack_require__(27)
  , has            = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(36)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(3)
  , gOPN      = __webpack_require__(39).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(2)
  , toObject    = __webpack_require__(44)
  , IE_PROTO    = __webpack_require__(24)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26)
  , defined   = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(26)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(71)
  , step             = __webpack_require__(79)
  , Iterators        = __webpack_require__(20)
  , toIObject        = __webpack_require__(3);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(37)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(10);

__webpack_require__(42)('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(44)
  , $keys    = __webpack_require__(11);

__webpack_require__(42)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 92 */
/***/ (function(module, exports) {



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(86)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(37)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(2)
  , DESCRIPTORS    = __webpack_require__(5)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(43)
  , META           = __webpack_require__(81).KEY
  , $fails         = __webpack_require__(9)
  , shared         = __webpack_require__(25)
  , setToStringTag = __webpack_require__(23)
  , uid            = __webpack_require__(15)
  , wks            = __webpack_require__(8)
  , wksExt         = __webpack_require__(29)
  , wksDefine      = __webpack_require__(28)
  , keyOf          = __webpack_require__(80)
  , enumKeys       = __webpack_require__(74)
  , isArray        = __webpack_require__(77)
  , anObject       = __webpack_require__(13)
  , toIObject      = __webpack_require__(3)
  , toPrimitive    = __webpack_require__(27)
  , createDesc     = __webpack_require__(14)
  , _create        = __webpack_require__(38)
  , gOPNExt        = __webpack_require__(84)
  , $GOPD          = __webpack_require__(83)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(11)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(39).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f  = $propertyIsEnumerable;
  __webpack_require__(40).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(21)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('asyncIterator');

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('observable');

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(6)
  , Iterators     = __webpack_require__(20)
  , TO_STRING_TAG = __webpack_require__(8)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(124),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8febd23e", Component.options)
  } else {
    hotAPI.reload("data-v-8febd23e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(117),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Comments.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comments.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ce46662", Component.options)
  } else {
    hotAPI.reload("data-v-4ce46662", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(119),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/CreatePost.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CreatePost.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58cc96aa", Component.options)
  } else {
    hotAPI.reload("data-v-58cc96aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(120),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b41dfee", Component.options)
  } else {
    hotAPI.reload("data-v-5b41dfee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(127),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3412a66", Component.options)
  } else {
    hotAPI.reload("data-v-e3412a66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(121),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b72d56b", Component.options)
  } else {
    hotAPI.reload("data-v-5b72d56b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa4d02b2", Component.options)
  } else {
    hotAPI.reload("data-v-aa4d02b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(123),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-711133fe", Component.options)
  } else {
    hotAPI.reload("data-v-711133fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(118),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Post.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Post.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f0d73e4", Component.options)
  } else {
    hotAPI.reload("data-v-4f0d73e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(126),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/PostPreview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PostPreview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cb6253ec", Component.options)
  } else {
    hotAPI.reload("data-v-cb6253ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(115),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Posts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Posts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a5b1cd5", Component.options)
  } else {
    hotAPI.reload("data-v-3a5b1cd5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(116),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-453ffd2b", Component.options)
  } else {
    hotAPI.reload("data-v-453ffd2b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(122),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/home/Робочий стіл/www/bloging_app/Blog-App/public/components/Signup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Signup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f41c506", Component.options)
  } else {
    hotAPI.reload("data-v-5f41c506", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "posts-managing box"
  }, [_vm._v("\n\t\t\t\t\tPosts categories\n\t\t\t\t")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a5b1cd5", module.exports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "profile"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "profile-controll box"
  }, [_c('router-link', {
    staticClass: "button profile-controll-button",
    attrs: {
      "to": "/posts/create",
      "tag": "a"
    }
  }, [_vm._v("Create post")]), _vm._v(" "), _c('button', {
    staticClass: "button profile-controll-button",
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("Logout")])], 1)])]), _vm._v(" "), _vm._m(1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "profile-avatar box"
  }, [_c('h2', [_vm._v("\n\t\t\t\t\t\tAvatar\n\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-8"
  }, [_c('div', {
    staticClass: "profile-info box"
  }, [_c('h2', [_vm._v("\n\t\t\t\t\t\tInfo\n\t\t\t\t\t")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "profile-content box"
  }, [_c('h2', [_vm._v("\n\t\t\t\t\t\tContent\n\t\t\t\t\t")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-453ffd2b", module.exports)
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "comments"
    }
  }, [_c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-8"
  }, [_c('div', {
    staticClass: "comment-form"
  }, [_c('h3', [_vm._v("Add comment")]), _vm._v(" "), _c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.text),
      expression: "text"
    }],
    attrs: {
      "name": "text",
      "id": "",
      "cols": "30",
      "rows": "10"
    },
    domProps: {
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.text = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "button primary",
    on: {
      "click": _vm.sendComment
    }
  }, [_vm._v("Send comment")])])])])])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-8"
  }, _vm._l((_vm.comments), function(comment) {
    return _c('div', {
      staticClass: "comments-list"
    }, [_c('comment', {
      attrs: {
        "comment": comment
      }
    })], 1)
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ce46662", module.exports)
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.post) ? _c('div', [_c('div', {
    staticClass: "post-wrap"
  }, [_c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-8"
  }, [_c('div', {
    staticClass: "post"
  }, [_c('div', {
    staticClass: "post-header"
  }, [_c('div', {
    staticClass: "main-post-info"
  }, [_c('div', {
    staticClass: "main-post-author"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('div', {
    staticClass: "main-post-author-avatar",
    style: ({
      'background-image': 'url(../img/' + _vm.post.author.profile_img + ');'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "main-post-author-name"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.post.author.username) + "\n\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "main-post-date"
  }, [_c('p', [_c('span', {
    staticClass: "icon calendar"
  }), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("formatDate")(_vm.post.date)) + "\n\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('h1', [_vm._v(_vm._s(_vm.post.title))]), _vm._v(" "), _c('div', {
    staticClass: "post-tags"
  }, _vm._l((_vm.post.tags), function(tag) {
    return _c('span', {
      staticClass: "tag"
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'categories',
          params: {
            tag: tag
          }
        },
        "tag": "a",
        "exact": ""
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(tag) + "\n\t\t\t\t\t\t\t\t\t\t")])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "main-post-cover"
  })]), _vm._v(" "), _c('div', {
    staticClass: "main-post-text"
  }, [_c('p', [_vm._v(_vm._s(_vm.post.text))])]), _vm._v(" "), _c('div', {
    staticClass: "main-post-controll"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "post-views"
  }, [_c('span', {
    staticClass: "icon view-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "views-count"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.post.views) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "post-like",
    on: {
      "click": _vm.like
    }
  }, [_c('span', {
    class: _vm.checkLikes
  }), _vm._v(" "), _c('div', {
    staticClass: "like-count"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.post.likes.length) + "\n\t\t\t\t\t\t\t\t\t")])])])])]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('comments', {
    attrs: {
      "comments": _vm.post.comments,
      "href": _vm.post.href,
      "user": _vm.user
    }
  })], 1)]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "author-info"
  }, [_c('p', [_c('em', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nisi?")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "post-bookmark"
  }, [_c('a', {
    staticClass: "button",
    attrs: {
      "href": ""
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tAdd to bookmarks\n\t\t\t\t\t\t\t\t\t")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-4"
  }, [_c('aside', [_c('div', {
    staticClass: "sidebar"
  }, [_c('h1', [_vm._v("Sidebar")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f0d73e4", module.exports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "create-post box"
  }, [_c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('h1', [_vm._v("Create post")]), _vm._v(" "), _c('h3', [_vm._v("Title")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Text")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.text),
      expression: "text"
    }],
    attrs: {
      "name": "text",
      "id": "",
      "cols": "30",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.text = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.tags),
      expression: "tags"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.tags)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.tags = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "button primary",
    on: {
      "click": _vm.createPost
    }
  }, [_vm._v("Create")]), _vm._v(" "), (_vm.error) ? _c('p', {
    staticClass: "post-creating-error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e()])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58cc96aa", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_c('section', [_c('div', {
    staticClass: "footer-info-wrap"
  }, [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-8"
  }, [_c('div', {
    staticClass: "footer_info"
  }, [_c('ul', {
    staticClass: "footer_map"
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": "/",
      "tag": "a",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/posts",
      "tag": "a"
    }
  }, [_vm._v("Posts")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/contacts",
      "tag": "a"
    }
  }, [_vm._v("Contacts")])], 1)])])]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _vm._m(1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "footer_info"
  }, [_c('p', [_vm._v("Blog Application")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "copy"
  }, [_c('p', [_vm._v("© 2017")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b41dfee", module.exports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "login-form"
  }, [_c('h1', [_vm._v("Enter login and password")]), _vm._v(" "), _c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Login"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "Password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "button primary",
    on: {
      "click": _vm.auth
    }
  }, [_vm._v("Login")]), _vm._v(" "), (_vm.error) ? _c('p', {
    staticClass: "login-error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e()])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b72d56b", module.exports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "signup-form"
  }, [_c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('h1', [_vm._v("Sign Up")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Login"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "Password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Email "
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.confirm_password),
      expression: "confirm_password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "Confirm password"
    },
    domProps: {
      "value": (_vm.confirm_password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.confirm_password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Write some information about you...")]), _vm._v(" "), _c('textarea', {
    attrs: {
      "name": "user-ifo",
      "id": "",
      "cols": "30",
      "rows": "3"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "button primary",
    on: {
      "click": _vm.signup
    }
  }, [_vm._v("Sign Up")]), _vm._v(" "), (_vm.error) ? _c('p', {
    staticClass: "signup-error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e()])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f41c506", module.exports)
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "fixed_menu"
  }, [_c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "desktop_menu"
  }, [_c('ul', [_vm._m(0), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/",
      "tag": "a",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/posts",
      "tag": "a"
    }
  }, [_vm._v("Posts")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/contacts",
      "tag": "a"
    }
  }, [_vm._v("Contacts")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mobile_menu"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "open_header"
  }, [_vm._v("Menu")]), _vm._v(" "), _c('ul', {
    staticClass: "menu hidden"
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": "/",
      "tag": "a",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/posts",
      "tag": "a"
    }
  }, [_vm._v("Posts")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/contacts",
      "tag": "a"
    }
  }, [_vm._v("Contacts")])], 1), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), (_vm.user) ? _c('li', {
    staticClass: "hidden_button"
  }, [_c('router-link', {
    staticClass: "profile-button",
    attrs: {
      "to": "/profile",
      "tag": "a"
    }
  }, [_c('div', {
    staticClass: "user-avatar",
    style: ({
      'background-image': 'url(../img/' + _vm.user.profile_img + ');'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "button main-button"
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.user.username) + "\n\t\t\t\t\t\t")])])], 1) : (!_vm.isAuth) ? _c('li', {
    staticClass: "hidden_button"
  }, [_c('router-link', {
    staticClass: "button",
    attrs: {
      "to": "/login",
      "tag": "a"
    }
  }, [_vm._v("Login")]), _vm._v(" "), _c('router-link', {
    staticClass: "button main-button",
    attrs: {
      "to": "/signup",
      "tag": "a"
    }
  }, [_vm._v("Sign Up")])], 1) : _vm._e()])]), _vm._v(" "), (_vm.user) ? _c('ul', {
    staticClass: "navbar_buttons"
  }, [_c('li', [_c('router-link', {
    staticClass: "profile-button",
    attrs: {
      "to": "/profile",
      "tag": "a"
    }
  }, [_c('div', {
    staticClass: "user-avatar",
    style: ({
      'background-image': 'url(../img/' + _vm.user.profile_img + ');'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "button main-button"
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.user.username) + "\n\t\t\t\t\t")])])], 1)]) : (!_vm.isAuth) ? _c('ul', {
    staticClass: "navbar_buttons"
  }, [_c('li', [_c('router-link', {
    staticClass: "button",
    attrs: {
      "to": "/login",
      "tag": "a"
    }
  }, [_vm._v("Login")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "button main-button",
    attrs: {
      "to": "/signup",
      "tag": "a"
    }
  }, [_vm._v("Sign Up")])], 1)]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "logo"
  }, [_c('h2', [_vm._v("WebDev")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "logo"
  }, [_c('h2', [_vm._v("WebDev")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "open_button"
  }, [_c('img', {
    attrs: {
      "src": "img/list-menu-black.png",
      "alt": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-711133fe", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "comment-info"
  }, [_c('div', {
    staticClass: "comment-author"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('div', {
    staticClass: "comment-author-avatar"
  }), _vm._v(" "), _c('div', {
    staticClass: "comment-author-name"
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.comment.author.username) + "\n\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "comment-date"
  }, [_c('p', [_c('span', {
    staticClass: "icon calendar"
  }), _vm._v(_vm._s(_vm._f("formatDate")(_vm.comment.date)))])])]), _vm._v(" "), _c('div', {
    staticClass: "comment-text"
  }, [_c('p', [_vm._v(_vm._s(_vm.comment.text))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8febd23e", module.exports)
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "dimm"
  }), _vm._v(" "), _c('navbar', {
    attrs: {
      "user": _vm.user,
      "isAuth": _vm.isAuth
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-container"
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('transition', {
    attrs: {
      "name": "component-fade",
      "mode": "out-in"
    }
  }, [_c('router-view', {
    attrs: {
      "user": _vm.user
    }
  })], 1)], 1), _vm._v(" "), _c('blog-footer')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aa4d02b2", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.posts) ? _c('div', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "posts-preview-filter"
  }, [_c('button', {
    staticClass: "button",
    on: {
      "click": _vm.popular
    }
  }, [_vm._v("Popular")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.latest
    }
  }, [_vm._v("Latest")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.topRated
    }
  }, [_vm._v("Top rated")])])])]), _vm._v(" "), _c('div', {
    staticClass: "posts-preview"
  }, _vm._l((_vm.chunk), function(row) {
    return _c('div', {
      staticClass: "grid-row"
    }, _vm._l((row), function(post) {
      return _c('div', {
        staticClass: "col-4"
      }, [_c('div', {
        staticClass: "post-preview-wrap"
      }, [_c('div', {
        staticClass: "post-preview box"
      }, [_c('div', {
        staticClass: "post-info"
      }, [_c('div', {
        staticClass: "post-author"
      }, [_c('a', {
        attrs: {
          "href": ""
        }
      }, [_c('div', {
        staticClass: "post-author-avatar",
        style: ({
          'background-image': 'url(../img/' + post.author.profile_img + ');'
        })
      }), _vm._v(" "), _c('div', {
        staticClass: "post-author-name"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(post.author.username) + "\t\n\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
        staticClass: "post-date"
      }, [_c('p', [_c('span', {
        staticClass: "icon calendar"
      }), _vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("formatDate")(post.date)) + "\n\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _c('div', {
        staticClass: "post-preview-info"
      }, [_c('div', {
        staticClass: "post-preview-header"
      }, [_c('h1', [_c('router-link', {
        attrs: {
          "to": {
            name: 'post',
            params: {
              href: post.href
            }
          },
          "tag": "a",
          "exact": ""
        }
      }, [_vm._v(_vm._s(post.title))])], 1)]), _vm._v(" "), _c('div', {
        staticClass: "post-preview-content"
      }, [_c('div', {
        staticClass: "post-preview-tags"
      }, _vm._l((post.tags), function(tag) {
        return _c('span', {
          staticClass: "tag"
        }, [_c('router-link', {
          attrs: {
            "to": {
              name: 'categories',
              params: {
                tag: tag
              }
            },
            "tag": "a",
            "exact": ""
          }
        }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(tag) + "\n\t\t\t\t\t\t\t\t\t\t\t")])], 1)
      })), _vm._v(" "), _c('div', {
        staticClass: "post-preview-controll"
      }, [_c('div', {
        staticClass: "post-views"
      }, [_c('span', {
        staticClass: "icon view-icon"
      }), _vm._v(" "), _c('div', {
        staticClass: "views-count"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(post.views) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
        staticClass: "post-comment-icon"
      }, [_c('router-link', {
        attrs: {
          "to": "/posts",
          "tag": "a"
        }
      }, [_c('span', {
        staticClass: "icon comment-icon"
      }), _vm._v(" "), _c('div', {
        staticClass: "comment-icon-count"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(post.comments.length) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('div', {
        staticClass: "post-like",
        on: {
          "click": function($event) {
            _vm.like(post, $event)
          }
        }
      }, [_c('span', {
        class: _vm.checkLikes(post.likes)
      }), _vm._v(" "), _c('div', {
        staticClass: "like-count"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(post.likes.length) + "\n\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])])
    }))
  }))]) : _c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "preloader"
  }, [(!_vm.error) ? _c('div', {
    staticClass: "preloader-cover"
  }) : _c('div', [_c('h1', [_vm._v("Connection error")]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.error))])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "post-preview-img"
  }, [_c('div', {
    staticClass: "post-preview-head"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cb6253ec", module.exports)
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('section', [_c('post-preview', {
    attrs: {
      "user": _vm.user
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-page-header"
  }, [_c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "page-top"
  }, [_c('h1', [_vm._v("Home page")]), _vm._v(" "), _c('a', {
    staticClass: "button big white",
    attrs: {
      "href": ""
    }
  }, [_vm._v("Get Started")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-article"
  }, [_c('section', [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h1', [_vm._v("Posts")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e3412a66", module.exports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/*!
 * vue-resource v1.3.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING  = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p$1 = Promise$1.prototype;

p$1.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p$1.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p$1.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p$1.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p$1.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p = PromiseObj.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p.finally = function (callback) {

    return this.then(function (value) {
            callback.call(this);
            return value;
        }, function (reason) {
            callback.call(this);
            return Promise.reject(reason);
        }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;

var ref$1 = [];
var slice = ref$1.slice;
var debug = false;
var ntick;

var inBrowser = typeof window !== 'undefined';

var Util = function (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
};

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}



function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

var root = function (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !url.match(/^(https?:)?\//)) {
        url = options$$1.root + '/' + url;
    }

    return url;
};

/**
 * Query Parameter Transform.
 */

var query = function (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
};

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

var template = function (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
};

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

var xdrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load') {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            resolve(request.respondWith(xdr.responseText, {status: status}));
        };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
};

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

var cors = function (request, next) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

    next();
};

/**
 * Body Interceptor.
 */

var body = function (request, next) {

    if (isFormData(request.body)) {

        request.headers.delete('Content-Type');

    } else if (isObject(request.body) || isArray(request.body)) {

        if (request.emulateJSON) {
            request.body = Url.params(request.body);
            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        } else {
            request.body = JSON.stringify(request.body);
        }
    }

    next(function (response) {

        Object.defineProperty(response, 'data', {

            get: function get() {
                return this.body;
            },

            set: function set(body) {
                this.body = body;
            }

        });

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    });
};

function isJson(str) {

    var start = str.match(/^\[|^\{(?!\{)/), end = {'[': /]$/, '{': /}$/};

    return start && end[start[0]].test(str);
}

/**
 * JSONP client (Browser).
 */

var jsonpClient = function (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
};

/**
 * JSONP Interceptor.
 */

var jsonp = function (request, next) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

    next();
};

/**
 * Before Interceptor.
 */

var before = function (request, next) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

    next();
};

/**
 * HTTP method override Interceptor.
 */

var method = function (request, next) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

    next();
};

/**
 * Header Interceptor.
 */

var header = function (request, next) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

    next();
};

/**
 * XMLHttp client (Browser).
 */

var xhrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

            var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                }
            );

            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
            });

            resolve(response);
        };

        request.abort = function () { return xhr.abort(); };

        if (request.progress) {
            if (request.method === 'GET') {
                xhr.addEventListener('progress', request.progress);
            } else if (/^(POST|PUT)$/i.test(request.method)) {
                xhr.upload.addEventListener('progress', request.progress);
            }
        }

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
};

/**
 * Http client (Node).
 */

var nodeClient = function (request) {

    var client = __webpack_require__(135);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                    status: resp.statusCode,
                    statusText: trim(resp.statusMessage)
                }
            );

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
};

/**
 * Base client.
 */

var Client = function (context) {

    var reqHandlers = [sendRequest], resHandlers = [], handler;

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        return new PromiseObj(function (resolve) {

            function exec() {

                handler = reqHandlers.pop();

                if (isFunction(handler)) {
                    handler.call(context, request, next);
                } else {
                    warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
                    next();
                }
            }

            function next(response) {

                if (isFunction(response)) {

                    resHandlers.unshift(response);

                } else if (isObject(response)) {

                    resHandlers.forEach(function (handler) {
                        response = when(response, function (response) {
                            return handler.call(context, response) || response;
                        });
                    });

                    when(response, resolve);

                    return;
                }

                exec();
            }

            exec();

        }, context);
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
};

function sendRequest(request, resolve) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    resolve(client(request));
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value){

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name){
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll (){
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl (){
    return Url(this);
};

Request.prototype.getBody = function getBody (){
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, body: body, jsonp: jsonp, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'body', 'jsonp', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body$$1, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body$$1}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);



/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path) {
  var regex = index(path);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.5.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(101)))

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(31)("4b5ae164", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f0d73e4\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f0d73e4\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(31)("5f1375f4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aa4d02b2\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aa4d02b2\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(31)("3080e6d0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3412a66\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3412a66\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}
/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    } )); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdateHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdateHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = {
  key: 1,
  ref: 1,
  slot: 1
};

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      if (isReservedProp[key] || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "development" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var result = Object.create(null);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (isUndef(Ctor.cid)) {
    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
    if (Ctor === undefined) {
      // return nothing if this is indeed an async component
      // wait for the callback to trigger parent update.
      return
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return this
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode.ssrContext
  }
});

Vue$3.version = '2.3.3';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (isUndef(value)) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  var res = '';
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(value[i])) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
      "if (!Array.isArray($$exp)){" +
        value + "=" + assignment + "}" +
      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number || type === 'number') {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\">";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var decoder;

function decode (html) {
  decoder = decoder || document.createElement('div');
  decoder.innerHTML = html;
  return decoder.textContent
}

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = (void 0), rest$1 = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest$1 = html.slice(textEnd);
        while (
          !endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest$1.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;
  platformGetTagNamespace = options.getTagNamespace || no;
  platformMustUseProp = options.mustUseProp || no;
  platformIsPreTag = options.isPreTag || no;
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      walkThroughConditionsBlocks(node.ifConditions, isInFor);
    }
  }
}

function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
    markStaticRoots(conditionBlocks[i].block, isInFor);
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  bind: bind$1,
  cloak: noop
};

/*  */

// configurable state
var warn$3;
var transforms$1;
var dataGenFns;
var platformDirectives$1;
var isPlatformReservedTag$1;
var staticRenderFns;
var onceCount;
var currentOptions;

function generate (
  ast,
  options
) {
  // save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns = staticRenderFns;
  var currentStaticRenderFns = staticRenderFns = [];
  var prevOnceCount = onceCount;
  onceCount = 0;
  currentOptions = options;
  warn$3 = options.warn || baseWarn;
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
  dataGenFns = pluckModuleFunction(options.modules, 'genData');
  platformDirectives$1 = options.directives || {};
  isPlatformReservedTag$1 = options.isReservedTag || no;
  var code = ast ? genElement(ast) : '_c("div")';
  staticRenderFns = prevStaticRenderFns;
  onceCount = prevOnceCount;
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: currentStaticRenderFns
  }
}

function genElement (el) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el)
  } else if (el.for && !el.forProcessed) {
    return genFor(el)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el);
    } else {
      var data = el.plain ? undefined : genData(el);

      var children = el.inlineTemplate ? null : genChildren(el, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el) {
  el.staticProcessed = true;
  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && warn$3(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el)
    }
    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el)
  }
}

function genIf (el) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice())
}

function genIfConditions (conditions) {
  if (!conditions.length) {
    return '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return el.once ? genOnce(el) : genElement(el)
  }
}

function genFor (el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (
    "development" !== 'production' &&
    maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key
  ) {
    warn$3(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
    '})'
}

function genData (el) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, warn$3)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, warn$3)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  return data
}

function genDirectives (el) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, warn$3);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    warn$3('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, currentOptions);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (slots) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "])")
}

function genScopedSlot (key, el) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el) || 'void 0'
      : genElement(el)) + "}}"
}

function genForScopedSlot (key, el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el)) +
    '})'
}

function genChildren (el, checkSkip) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return genElement(el$1)
    }
    var normalizationType = checkSkip ? getNormalizationType(children) : 0;
    return ("[" + (children.map(genNode).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (children) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function maybeComponent (el) {
  return !isPlatformReservedTag$1(el.tag)
}

function genNode (node) {
  if (node.type === 1) {
    return genElement(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genSlot (el) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (componentName, el) {
  var children = el.inlineTemplate ? null : genChildren(el, true);
  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

function makeFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompiler (baseOptions) {
  var functionCompileCache = Object.create(null);

  function compile (
    template,
    options
  ) {
    var finalOptions = Object.create(baseOptions);
    var errors = [];
    var tips = [];
    finalOptions.warn = function (msg, tip$$1) {
      (tip$$1 ? tips : errors).push(msg);
    };

    if (options) {
      // merge custom modules
      if (options.modules) {
        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
      }
      // merge custom directives
      if (options.directives) {
        finalOptions.directives = extend(
          Object.create(baseOptions.directives),
          options.directives
        );
      }
      // copy other options
      for (var key in options) {
        if (key !== 'modules' && key !== 'directives') {
          finalOptions[key] = options[key];
        }
      }
    }

    var compiled = baseCompile(template, finalOptions);
    {
      errors.push.apply(errors, detectErrors(compiled.ast));
    }
    compiled.errors = errors;
    compiled.tips = tips;
    return compiled
  }

  function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (functionCompileCache[key]) {
      return functionCompileCache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = makeFunction(compiled.render, fnGenErrors);
    var l = compiled.staticRenderFns.length;
    res.staticRenderFns = new Array(l);
    for (var i = 0; i < l; i++) {
      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
    }

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (functionCompileCache[key] = res)
  }

  return {
    compile: compile,
    compileToFunctions: compileToFunctions
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$2 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$2
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 135 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })
/******/ ]);