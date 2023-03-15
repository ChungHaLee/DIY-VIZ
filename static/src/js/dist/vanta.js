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

/***/ "./src/js/colorpicker.js":
/*!*******************************!*\
  !*** ./src/js/colorpicker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgColor\": () => (/* binding */ bgColor),\n/* harmony export */   \"objColor1\": () => (/* binding */ objColor1),\n/* harmony export */   \"objColor2\": () => (/* binding */ objColor2)\n/* harmony export */ });\nconst bgColorSaveButton = document.getElementById('backgroundColorSaveButton');\nconst objColor1SaveButton = document.getElementById('objectColor1SaveButton');\nconst objColor2SaveButton = document.getElementById('objectColor2SaveButton');\n\nvar bgColor, objColor1, objColor2\nvar bgColorArr, objColor1Arr, objColor2Arr\n\n\nfunction rgbToHex([r, g, b]) {\n  return \"#\" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);\n}\n\n\ndocument.querySelector('#backgroundColor').addEventListener('click', e => {\n  Coloris({\n    themeMode: 'light',\n    alpha: true,\n    formatToggle: false\n  });\n\n});\n\n\n\ndocument.querySelector('#objectColor1').addEventListener('click', e => {\n  Coloris({\n    themeMode: 'light',\n    alpha: true,\n    formatToggle: false\n  });\n\n});\n\n\ndocument.querySelector('#objectColor2').addEventListener('click', e => {\n  Coloris({\n    themeMode: 'light',\n    alpha: true,\n    formatToggle: false\n  });\n\n});\n\n\nfunction colortoList(colorpick){\n  let colors = colorpick.replace('rgb(', '').replace(')', '')\n  let colorArr = colors.split(',')\n  return colorArr\n}\n\n\nbgColorSaveButton.addEventListener('click', function (){\n    bgColor = document.getElementsByClassName('clr-field')[0].style.color\n    bgColorArr = colortoList(bgColor);\n    bgColor = rgbToHex(bgColorArr);\n    \n})\n\n\nobjColor1SaveButton.addEventListener('click', function (){\n    objColor1 = document.getElementsByClassName('clr-field')[1].style.color\n    objColor1Arr = colortoList(objColor1);\n    objColor1 = rgbToHex(objColor1Arr);\n})\n\n\nobjColor2SaveButton.addEventListener('click', function(){\n    objColor2 = document.getElementsByClassName('clr-field')[2].style.color\n    objColor2Arr = colortoList(objColor2);\n    objColor2 = rgbToHex(objColor2Arr);\n})\n\n\n\n\n\n\n\n//# sourceURL=webpack://Synthesizer/./src/js/colorpicker.js?");

/***/ }),

/***/ "./src/js/vanta.js":
/*!*************************!*\
  !*** ./src/js/vanta.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colorpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorpicker */ \"./src/js/colorpicker.js\");\n\n\n\nconst bgColorSaveButton = document.getElementById('backgroundColorSaveButton');\nconst objColor1SaveButton = document.getElementById('objectColor1SaveButton');\nconst objColor2SaveButton = document.getElementById('objectColor2SaveButton');\n\n\n\n\nlet birds = VANTA.BIRDS({\n    el: \"#vanta-background\",\n    mouseControls: true,\n    touchControls: true,\n    gyroControls: false,\n    minHeight: 600.00,\n    minWidth: 600.00,\n    scale: 1.00,\n    backgroundColor: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.bgColor,\n    color1: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor1,\n    color2: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor2,\n    scaleMobile: 1.00,\n    colorMode: \"lerpGradient\",\n    birdSize: 1.60,\n    speedLimit: 7.00,\n    separation: 1.00,\n    alignment: 100.00,\n    cohesion: 1.00\n})\n\n\n\n\n\n// 세이브하면 바꿔주기\nbgColorSaveButton.addEventListener('click', function (){\n\n    // birds.setOptions({\n    //     backgroundColor: bgColor\n    // })\n    let birds = VANTA.BIRDS({\n        el: \"#vanta-background\",\n        mouseControls: true,\n        touchControls: true,\n        gyroControls: false,\n        minHeight: 600.00,\n        minWidth: 600.00,\n        scale: 1.00,\n        backgroundColor: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.bgColor,\n        color1: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor1,\n        color2: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor2,\n        scaleMobile: 1.00,\n        colorMode: \"lerpGradient\",\n        birdSize: 1.60,\n        speedLimit: 7.00,\n        separation: 1.00,\n        alignment: 100.00,\n        cohesion: 1.00\n    })\n\n\n})\n\n\nobjColor1SaveButton.addEventListener('click', function () {\n\n    // birds.setOptions({\n    //     color1: objColor1\n    // })\n    birds = VANTA.BIRDS({\n        el: \"#vanta-background\",\n        mouseControls: true,\n        touchControls: true,\n        gyroControls: false,\n        minHeight: 600.00,\n        minWidth: 600.00,\n        scale: 1.00,\n        backgroundColor: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.bgColor,\n        color1: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor1,\n        color2: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor2,\n        scaleMobile: 1.00,\n        colorMode: \"lerpGradient\",\n        birdSize: 1.60,\n        speedLimit: 7.00,\n        separation: 1.00,\n        alignment: 100.00,\n        cohesion: 1.00\n    })\n \n    \n})\n\n\n\nobjColor2SaveButton.addEventListener('click', function () {\n\n    // birds.setOptions({\n    //     color2: objColor2\n    // })\n\n    birds = VANTA.BIRDS({\n        el: \"#vanta-background\",\n        mouseControls: true,\n        touchControls: true,\n        gyroControls: false,\n        minHeight: 600.00,\n        minWidth: 600.00,\n        scale: 1.00,\n        backgroundColor: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.bgColor,\n        color1: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor1,\n        color2: _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor2,\n        scaleMobile: 1.00,\n        colorMode: \"lerpGradient\",\n        birdSize: 1.60,\n        speedLimit: 7.00,\n        separation: 1.00,\n        alignment: 100.00,\n        cohesion: 1.00\n    })\n \n})\n\n\n\n\n\n\n//# sourceURL=webpack://Synthesizer/./src/js/vanta.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/vanta.js");
/******/ 	
/******/ })()
;