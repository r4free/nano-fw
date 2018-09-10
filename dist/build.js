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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/on */ \"./src/modules/on.js\");\n/* harmony import */ var _modules_go__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/go */ \"./src/modules/go.js\");\n/* harmony import */ var _modules_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/value */ \"./src/modules/value.js\");\n/* harmony import */ var _modules_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/text */ \"./src/modules/text.js\");\n/* harmony import */ var _modules_add_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/add_class */ \"./src/modules/add_class.js\");\n/* harmony import */ var _modules_cordenates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cordenates */ \"./src/modules/cordenates.js\");\n/* harmony import */ var _modules_go_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/go_to */ \"./src/modules/go_to.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  on: _modules_on__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  go: _modules_go__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  val: _modules_value__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  text: _modules_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  addClass: _modules_add_class__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  cords: _modules_cordenates__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  goTo: _modules_go_to__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _plugins_data_goto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/data-goto */ \"./src/plugins/data-goto.js\");\n\n\n\nwindow.$ = function () {\n  var $param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var el = $param ? document.querySelector($param) : document;\n  for (var n in _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    el[n] = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"][n];\n  }\n\n  return el;\n};\n\n(function () {\n  Object(_plugins_data_goto__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/add_class.js":
/*!**********************************!*\
  !*** ./src/modules/add_class.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * set a new class to the element\r\n * @param {string} $class\r\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($class) {\n  this.className = $class + \" \" + this.className.split(\" \").map(function (c) {\n    try {\n      if (c == $class) throw new Error();\n      return c;\n    } catch (error) {\n      console.error(\"class \" + $class + \" already exists on element \");\n    }\n  }).join(\" \");\n\n  return this;\n});\n\n//# sourceURL=webpack:///./src/modules/add_class.js?");

/***/ }),

/***/ "./src/modules/cordenates.js":
/*!***********************************!*\
  !*** ./src/modules/cordenates.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var cords = $elem ? $($elem).getBoundingClientRect() : this.getBoundingClientRect();\n  return cords;\n});\n\n//# sourceURL=webpack:///./src/modules/cordenates.js?");

/***/ }),

/***/ "./src/modules/go.js":
/*!***************************!*\
  !*** ./src/modules/go.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (callback) {\n  callback.bind(this)();\n});\n\n//# sourceURL=webpack:///./src/modules/go.js?");

/***/ }),

/***/ "./src/modules/go_to.js":
/*!******************************!*\
  !*** ./src/modules/go_to.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var $time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n\n  console.log($elem);\n\n  var el = $elem ? $($elem) : this;\n  window.scrollTo(0, el.cords().y);\n  return this;\n});\n\n//# sourceURL=webpack:///./src/modules/go_to.js?");

/***/ }),

/***/ "./src/modules/on.js":
/*!***************************!*\
  !*** ./src/modules/on.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (event, callback) {\n  var _this = this;\n\n  if (typeof event === \"string\") {\n    this.addEventListener(event, callback);\n  } else {\n    event.forEach(function (e) {\n      _this.addEventListener(e, callback);\n    });\n  }\n  return this;\n});\n\n//# sourceURL=webpack:///./src/modules/on.js?");

/***/ }),

/***/ "./src/modules/text.js":
/*!*****************************!*\
  !*** ./src/modules/text.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  return $param ? this.innerText = $param : this.innerText;\n});\n\n//# sourceURL=webpack:///./src/modules/text.js?");

/***/ }),

/***/ "./src/modules/value.js":
/*!******************************!*\
  !*** ./src/modules/value.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  return $param ? this.value = $param : this.value;\n});\n\n//# sourceURL=webpack:///./src/modules/value.js?");

/***/ }),

/***/ "./src/plugins/data-goto.js":
/*!**********************************!*\
  !*** ./src/plugins/data-goto.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $(\"[data-goto]\").on(\"click\", function (e) {\n    e.preventDefault();\n    this.goTo(this.dataset.goto);\n  });\n});\n\n//# sourceURL=webpack:///./src/plugins/data-goto.js?");

/***/ })

/******/ });