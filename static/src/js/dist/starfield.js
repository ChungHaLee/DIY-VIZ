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

/***/ "./src/js/starfield.js":
/*!*****************************!*\
  !*** ./src/js/starfield.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"draw\": () => (/* binding */ draw),\n/* harmony export */   \"starField_faster\": () => (/* binding */ starField_faster)\n/* harmony export */ });\n/* harmony import */ var _colorpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorpicker */ \"./src/js/colorpicker.js\");\n\n\n\nconst bgColorSaveButton = document.getElementById('backgroundColorSaveButton');\nconst objColor1SaveButton = document.getElementById('objectColor1SaveButton');\nconst objColor2SaveButton = document.getElementById('objectColor2SaveButton');\n\n\n\nconst canvas = document.getElementById('starfield-canvas');\nconst c = canvas.getContext('2d');\ncanvas.width = window.innerWidth; //screen width\ncanvas.height = window.innerHeight; //screem height\n\n\n\n// on mouse scroll changes speed and color\n// 이 부분 수정하기\n\n\nfunction starField_faster(){\n\n  bgColorSaveButton.addEventListener('click', function (){\n    c.fillStyle = _colorpicker__WEBPACK_IMPORTED_MODULE_0__.bgColor\n  })\n  \n  \n  objColor1SaveButton.addEventListener('click', function () {\n    c.strokeStyle= _colorpicker__WEBPACK_IMPORTED_MODULE_0__.objColor1\n  })\n  \n  speed = 0.5;\n\n}\n\n// function starField_plain(){\n//   bgColorSaveButton.addEventListener('click', function (){\n//     c.fillStyle = objColor2\n//   })\n  \n  \n//   objColor2SaveButton.addEventListener('click', function () {\n//     c.strokeStyle= bgColor\n//   })\n\n//   speed *= 0.2;\n// }\n\n// function starField_slower(){\n//     c.fillStyle = \"#27187e\";\n//     c.strokeStyle = '#ff8600';\n//     speed *= 0.5;\n// }\n\n\n// window.addEventListener('wheel', (event) => {\n//     c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n//     if (event.deltaY < 0) speed *= 1.1;\n//     else speed *= 0.9;\n//     if (speed < 0.01) speed = 0.01;\n//     else if (speed > 0.1) speed = 0.1;\n//   });\n\nclass Star {\n  constructor() {\n    //initializing\n    this.x = Math.random()*canvas.width-canvas.width/6;  //random x\n    this.y = Math.random()*canvas.height-canvas.height/6; //random y\n    this.px, this.py;\n    this.z = Math.random()*3; //random z    \n  }\n  \n  update() {\n    //stores previous x, y and z and generates new coordinates    \n    this.px = this.x;\n    this.py = this.y;\n    this.z += speed;\n    this.x += this.x*(speed*0.2)*this.z;\n    this.y += this.y*(speed*0.2)*this.z;\n    if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 ||\n        this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {\n      this.x = Math.random()*canvas.width-canvas.width/2;\n      this.y = Math.random()*canvas.height-canvas.height/2;\n      this.px = this.x;\n      this.py = this.y;\n      this.z = 0;\n    }\n  }\n  \n  //draws line from x,y to px,py\n  show() {    \n    c.lineWidth = this.z;\n    c.beginPath();\n    c.moveTo(this.x, this.y);\n    c.lineTo(this.px, this.py);\n    c.stroke();\n  }\n}\n\nlet speed = 0.04;\nlet stars = [];\n\n//create 1500 stars (objects)\nfor (let i = 0; i < 1500; i++) stars.push(new Star());\n\nc.fillStyle = 'rgba(0, 0, 0, 0.1)';\nc.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n\nc.translate(canvas.width/2, canvas.height/2);\n\nfunction draw() {\n  //create rectangle\n  c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);\n  for (let s of stars) {\n    s.update();\n    s.show();\n  }\n  //infinte call to draw\n  requestAnimationFrame(draw);\n}\n\n\n\n\n\n//# sourceURL=webpack://Synthesizer/./src/js/starfield.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/starfield.js");
/******/ 	
/******/ })()
;