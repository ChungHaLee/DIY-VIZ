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

eval("// 이펙트 버튼 요소\nconst effectScaleButton = document.getElementById('effectScale');\nconst effectBlinkButton = document.getElementById('effectBlink');\n\nconst effectBloomButton = document.getElementById('effectBloom');\nconst effectGradientButton = document.getElementById('effectGradient');\n\n// 보여지는 메뉴\nconst wholeMenu = document.getElementsByClassName('customMenu')[0];\nconst shapemenuScale = document.getElementById('shapeMenu-Scale');\nconst shapemenuBlink = document.getElementById('shapeMenu-Blink');\nconst shapemenuBloom = document.getElementById('shapeMenu-Bloom');\nconst shapemenuGradient = document.getElementById('shapeMenu-Gradient');\n\n\n\nlet clickList = []\n\n\neffectScaleButton.addEventListener('click', function(){\n    clickList.push('scale')\n    changeDisplay();\n    changeBorder();\n});\n\neffectBlinkButton.addEventListener('click', function(){\n    clickList.push('blink')\n    changeDisplay();\n    changeBorder();\n});\n\n\neffectBloomButton.addEventListener('click', function(){\n    clickList.push('bloom')\n    changeDisplay();\n    changeBorder();\n});\n\neffectGradientButton.addEventListener('click', function(){\n    clickList.push('gradient')\n    changeDisplay();\n    changeBorder();\n});\n\n\n\n\n\n\n\n\n\n\nfunction changeDisplay(){\n    if (clickList.slice(-1)[0] == 'scale'){\n        shapemenuScale.style.display = 'block'\n        shapemenuBlink.style.display  = 'none';\n        shapemenuGradient.style.display  = 'none';\n        shapemenuBloom.style.display  = 'none';\n    } else if (clickList.slice(-1)[0] == 'blink'){\n        shapemenuBlink.style.display  = 'block';\n        shapemenuScale.style.display  = 'none';\n        shapemenuGradient.style.display  = 'none';\n        shapemenuBloom.style.display  = 'none';\n    } else if (clickList.slice(-1)[0] == 'bloom'){\n        shapemenuBloom.style.display  = 'block';\n        shapemenuGradient.style.display = 'none';\n        shapemenuScale.style.display  = 'none';\n        shapemenuBlink.style.display  = 'none';\n    } else if (clickList.slice(-1)[0] == 'gradient'){\n        shapemenuGradient.style.display  = 'block';\n        shapemenuScale.style.display  = 'none';\n        shapemenuBlink.style.display  = 'none';\n        shapemenuBloom.style.display  = 'none';\n    }\n}\n\n\n\nfunction changeBorder(){\n    if (clickList.slice(-1)[0] == 'scale'){\n        effectScaleButton.style.border = '3px solid black';\n        effectBlinkButton.style.border = 'none'\n        effectGradientButton.style.border = 'none';\n        effectBloomButton.style.border = 'none'\n\n    } else if (clickList.slice(-1)[0] == 'blink'){\n        effectBlinkButton.style.border = '3px solid black';\n        effectScaleButton.style.border = 'none'\n        effectGradientButton.style.border = 'none';\n        effectBloomButton.style.border = 'none'\n\n    } else if (clickList.slice(-1)[0] == 'bloom'){\n        effectBloomButton.style.border = '3px solid black';\n        effectScaleButton.style.border = 'none'\n        effectGradientButton.style.border = 'none'\n        effectBlinkButton.style.border = 'none'\n\n    } else if (clickList.slice(-1)[0] == 'gradient'){\n        effectGradientButton.style.border = '3px solid black';\n        effectScaleButton.style.border = 'none'\n        effectBloomButton.style.border = 'none'\n        effectBlinkButton.style.border = 'none'\n\n    }\n}\n\n//# sourceURL=webpack://Synthesizer/./src/js/ui.js?");

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