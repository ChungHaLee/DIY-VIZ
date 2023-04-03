/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ (() => {

eval("// 이펙트 버튼 요소\r\nconst effectScaleButton = document.getElementById('effectScale');\r\nconst effectBlinkButton = document.getElementById('effectBlink');\r\nconst effectGradientButton = document.getElementById('effectGradient');\r\n\r\n// 보여지는 메뉴\r\nconst wholeMenu = document.getElementsByClassName('customMenu')[0];\r\nconst shapemenuScale = document.getElementById('shapeMenu-Scale');\r\nconst shapemenuBlink = document.getElementById('shapeMenu-Blink');\r\nconst shapemenuGradient = document.getElementById('shapeMenu-Gradient');\r\n\r\n\r\n\r\nlet clickList = []\r\n\r\n\r\neffectScaleButton.addEventListener('click', function(){\r\n    clickList.push('scale')\r\n    changeDisplay();\r\n    changeBorder();\r\n});\r\n\r\neffectBlinkButton.addEventListener('click', function(){\r\n    clickList.push('blink')\r\n    changeDisplay();\r\n    changeBorder();\r\n});\r\n\r\neffectGradientButton.addEventListener('click', function(){\r\n    clickList.push('gradient')\r\n    changeDisplay();\r\n    changeBorder();\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction changeDisplay(){\r\n    if (clickList.slice(-1)[0] == 'scale'){\r\n        shapemenuScale.style.display = 'block'\r\n        shapemenuBlink.style.display  = 'none';\r\n        shapemenuGradient.style.display  = 'none';\r\n    } else if (clickList.slice(-1)[0] == 'blink'){\r\n        shapemenuBlink.style.display  = 'block';\r\n        shapemenuScale.style.display  = 'none';\r\n        shapemenuGradient.style.display  = 'none';\r\n    } else if (clickList.slice(-1)[0] == 'gradient'){\r\n        shapemenuGradient.style.display  = 'block';\r\n        shapemenuScale.style.display  = 'none';\r\n        shapemenuBlink.style.display  = 'none';\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction changeBorder(){\r\n    if (clickList.slice(-1)[0] == 'scale'){\r\n        effectScaleButton.style.border = '3px solid black';\r\n        effectBlinkButton.style.border = 'none'\r\n        effectGradientButton.style.border = 'none';\r\n\r\n    } else if (clickList.slice(-1)[0] == 'blink'){\r\n        effectBlinkButton.style.border = '3px solid black';\r\n        effectScaleButton.style.border = 'none'\r\n        effectGradientButton.style.border = 'none';\r\n        \r\n\r\n    } else if (clickList.slice(-1)[0] == 'gradient'){\r\n        effectGradientButton.style.border = '3px solid black';\r\n        effectScaleButton.style.border = 'none'\r\n        effectBlinkButton.style.border = 'none'\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://Synthesizer/./src/js/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/ui.js"]();
/******/ 	
/******/ })()
;