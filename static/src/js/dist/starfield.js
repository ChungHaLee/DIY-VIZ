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

/***/ "./src/js/starfield.js":
/*!*****************************!*\
  !*** ./src/js/starfield.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"draw\": () => (/* binding */ draw),\n/* harmony export */   \"starField_faster\": () => (/* binding */ starField_faster),\n/* harmony export */   \"starField_plain\": () => (/* binding */ starField_plain),\n/* harmony export */   \"starField_slower\": () => (/* binding */ starField_slower)\n/* harmony export */ });\nconst canvas = document.getElementById('starfield-canvas');\nconst c = canvas.getContext('2d');\ncanvas.width = window.innerWidth; //screen width\ncanvas.height = window.innerHeight; //screem height\n\n\n\n//on mouse scroll changes speed and color\n// 이 부분 수정하기\n\nfunction starField_faster(){\n    c.fillStyle = \"#861388\";\n    c.strokeStyle = '#ff3562';\n    speed = 0.8;\n}\n\nfunction starField_plain(){\n    c.fillStyle = \"#f0c808\";\n    c.strokeStyle = '#086788';\n    speed *= 0.2;\n}\n\nfunction starField_slower(){\n    c.fillStyle = \"#27187e\";\n    c.strokeStyle = '#ff8600';\n    speed *= 0.01;\n}\n\n\n// window.addEventListener('wheel', (event) => {\n//     c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n//     if (event.deltaY < 0) speed *= 1.1;\n//     else speed *= 0.9;\n//     if (speed < 0.01) speed = 0.01;\n//     else if (speed > 0.1) speed = 0.1;\n//   });\n\nclass Star {\n  constructor() {\n    //initializing\n    this.x = Math.random()*canvas.width-canvas.width/2;  //random x\n    this.y = Math.random()*canvas.height-canvas.height/2; //random y\n    this.px, this.py;\n    this.z = Math.random()*4; //random z    \n  }\n  \n  update() {\n    //stores previous x, y and z and generates new coordinates    \n    this.px = this.x;\n    this.py = this.y;\n    this.z += speed;\n    this.x += this.x*(speed*0.2)*this.z;\n    this.y += this.y*(speed*0.2)*this.z;\n    if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 ||\n        this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {\n      this.x = Math.random()*canvas.width-canvas.width/2;\n      this.y = Math.random()*canvas.height-canvas.height/2;\n      this.px = this.x;\n      this.py = this.y;\n      this.z = 0;\n    }\n  }\n  \n  //draws line from x,y to px,py\n  show() {    \n    c.lineWidth = this.z;\n    c.beginPath();\n    c.moveTo(this.x, this.y);\n    c.lineTo(this.px, this.py);\n    c.stroke();\n  }\n}\n\nlet speed = 0.04;\nlet stars = [];\n\n//create 1500 stars (objects)\nfor (let i = 0; i < 1500; i++) stars.push(new Star());\n\nc.fillStyle = 'rgba(0, 0, 0, 0.1)';\nc.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n\nc.translate(canvas.width/2, canvas.height/2);\n\nfunction draw() {\n  //create rectangle\n  c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);\n  for (let s of stars) {\n    s.update();\n    s.show();\n  }\n  //infinte call to draw\n  requestAnimationFrame(draw);\n\n  \n}\n\n\n\n\n\n//# sourceURL=webpack://Synthesizer/./src/js/starfield.js?");

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
/******/ 	__webpack_modules__["./src/js/starfield.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;