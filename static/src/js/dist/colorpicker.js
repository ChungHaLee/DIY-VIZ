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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgColor\": () => (/* binding */ bgColor),\n/* harmony export */   \"objColor1\": () => (/* binding */ objColor1),\n/* harmony export */   \"objColor2\": () => (/* binding */ objColor2)\n/* harmony export */ });\nconst bgColorSaveButton = document.getElementById('backgroundColorSaveButton');\nconst objColor1SaveButton = document.getElementById('objectColor1SaveButton');\nconst objColor2SaveButton = document.getElementById('objectColor2SaveButton');\n\nvar bgColor, objColor1, objColor2\nvar bgColorArr, objColor1Arr, objColor2Arr\n\n\nfunction rgbToHex([r, g, b]) {\n  return \"#\" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);\n}\n\n\ndocument.querySelector('#backgroundColor').addEventListener('click', e => {\n  Coloris({\n    themeMode: 'light',\n    alpha: true,\n    formatToggle: false\n  });\n\n});\n\n\n\ndocument.querySelector('#objectColor1').addEventListener('click', e => {\n  Coloris({\n    themeMode: 'light',\n    alpha: true,\n    formatToggle: false\n  });\n\n});\n\n\ndocument.querySelector('#objectColor2').addEventListener('click', e => {\n  Coloris({\n    themeMode: 'light',\n    alpha: true,\n    formatToggle: false\n  });\n\n});\n\n\nfunction colortoList(colorpick){\n  let colors = colorpick.replace('rgb(', '').replace(')', '')\n  let colorArr = colors.split(',')\n  return colorArr\n}\n\n\nbgColorSaveButton.addEventListener('click', function (){\n    bgColor = document.getElementsByClassName('clr-field')[0].style.color\n    bgColorArr = colortoList(bgColor);\n    bgColor = rgbToHex(bgColorArr);\n})\n\n\nobjColor1SaveButton.addEventListener('click', function (){\n  objColor1 = document.getElementsByClassName('clr-field')[1].style.color\n  objColor1Arr = colortoList(objColor1);\n  objColor1 = rgbToHex(objColor1Arr);\n})\n\n\nobjColor2SaveButton.addEventListener('click', function(){\n  objColor2 = document.getElementsByClassName('clr-field')[2].style.color\n  objColor2Arr = colortoList(objColor2);\n  objColor2 = rgbToHex(objColor2Arr);\n})\n\n\n\n\n\n\n\n//# sourceURL=webpack://Synthesizer/./src/js/colorpicker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/colorpicker.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;