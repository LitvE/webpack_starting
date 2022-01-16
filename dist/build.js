/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./greeting.js":
/*!*********************!*\
  !*** ./greeting.js ***!
  \*********************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (msg) {\n  //debugger;\n  if (true) {\n    console.log(`Hello ${msg}`);\n  }\n\n  alert('Hello!!!');\n};\n\n//# sourceURL=webpack://webpack_learn/./greeting.js?");

/***/ }),

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval(" //import greeting from './greeting';\n\nlet greeting = __webpack_require__(/*! ./greeting */ \"./greeting.js\");\n\ngreeting('Webpack');\nexports.greeting = greeting;\n\n//# sourceURL=webpack://webpack_learn/./home.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./home.js");
/******/ 	
/******/ })()
;