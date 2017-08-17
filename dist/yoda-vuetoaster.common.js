/*!
 * yoda-vuetoaster v1.0.0
 * (c) 2017 Junyu Pu
 * Released under the MIT License.
 */

module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(3)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(5),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  "5f8a26e9"
)
Component.options.__file = "/Users/Junyu/Documents/button3d/vue-toaster/src/toaster.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] toaster.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'global-toaster',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseTime: {
      type: Number,
      default: 3000
    },
    showToaster: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: 'Message'
    },
    types: {
      type: String,
      default: 'success'
    }
  },
  methods: {
    closeClick: function closeClick() {
      this.showToaster = false;
    }
  },
  computed: {
    visible: function visible() {
      var _this = this;

      if (this.autoClose) {
        setTimeout(function () {
          _this.showToaster = false;
        }, this.autoCloseTime);
      }
      return this.showToaster;
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.Toaster = undefined;

var _toaster = __webpack_require__(0);

var _toaster2 = _interopRequireDefault(_toaster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue) {
  Vue.component('yoda-vuetoaster', _toaster2.default);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.Toaster = _toaster2.default;
exports.version = version;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-up"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "global-toaster"
  }, [_c('div', {
    staticClass: "type",
    class: _vm.types
  }, [_c('span', [_c('svg', {
    attrs: {
      "width": "24px",
      "height": "24px",
      "viewBox": "0 0 24 24"
    }
  }, [_c('g', {
    attrs: {
      "fill": "#FFFFFF"
    }
  }, [_c('path', {
    attrs: {
      "d": "M18,15.1626667 L20,17.04 L20,18 L4,18 L4,17.04 L6,15.1599998 L5.87733333,\n          11 C5.87733333,10.0613286 6.07999797,9.17244864 6.48533333,8.33333333 C6.89066869,\n          7.49421803 7.45244085,6.78666955 8.17066667,6.21066667 C8.88889248,5.63466379 9.69599552,\n          5.24711211 10.592,5.048 L10.592,4.408 C10.592,4.00977579 10.7271098,3.67555691 10.9973333,\n          3.40533333 C11.2675569,3.13510976 11.6017758,3 12,3 C12.3982242,3 12.7324431,\n          3.13510976 13.0026667,3.40533333 C13.2728902,3.67555691 13.408,4.00977579 13.408,\n          4.408 L13.408,5.048 C14.3040045,5.24711211 15.1111075,5.63466379 15.8293333,\n          6.21066667 C16.5475591,6.78666955 17.1093313,7.49421803 17.5146667,\n          8.33333333 C17.920002,9.17244864 18.1226667,10.0613286 18.1226667,\n          11 L18,15.1626667 Z M10,19 L14,19 C14,19.5396852 13.80488,\n          20.0079345 13.4146341,20.4047619 C13.0243883,20.8015893 12.5528483,21 12,\n          21 C11.4471517,21 10.9756117,20.8015893 10.5853659,20.4047619 C10.19512,20.0079345 10,19.5396852 10,19 Z"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n      " + _vm._s(_vm.content) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "yoda-close",
    on: {
      "click": _vm.closeClick
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);