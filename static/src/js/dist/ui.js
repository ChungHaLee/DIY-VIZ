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

eval("// 이펙트 버튼 요소\nconst effectButtonGroup = document.getElementsByClassName('effectButtonClass')\nconst effectScaleButton = document.getElementById('effectScale');\nconst effectBlinkButton = document.getElementById('effectBlink');\nconst effectLineButton = document.getElementById('effectLine')\nconst effectBloomButton = document.getElementById('effectBloom');\nconst effectGradientButton = document.getElementById('effectGradient');\nconst effectHorizontalButton = document.getElementById('effectHorizontal');\n\n\n// 보여지는 메뉴\nconst wholeMenu = document.getElementsByClassName('customMenu')[0];\n\nconst shapemenuGroup = document.getElementsByClassName('shapeMenuClass');\nconst shapemenuScale = document.getElementById('shapeMenu-Scale');\nconst shapemenuLine = document.getElementById('shapeMenu-Line');\nconst shapemenuBlink = document.getElementById('shapeMenu-Blink');\nconst shapemenuBloom = document.getElementById('shapeMenu-Bloom');\nconst shapemenuGradient = document.getElementById('shapeMenu-Gradient');\nconst shapemenuHorizontal = document.getElementById('shapeMenu-Horizontal');\n\n\n\nlet clickList = []\n\n\n\n// 색상 메뉴\nconst bloom2D = document.getElementsByClassName('shapeButtonClass_2D');\nconst bloom3D = document.getElementsByClassName('shapeButtonClass_3D');\n\n\n\nconst bgColor = document.getElementById('backgroundColor');\nconst objColor1 = document.getElementById('objectColor1');\n\nconst bgSave = document.getElementById('backgroundColorSaveButton')\nconst obj1Save = document.getElementById('objectColor1SaveButton')\n\n\n\n\nvar hideColorMenuBG = function() {\n    if (clickList.slice(-1)[0] == 'Bloom'){\n        bgColor.style.visibility = 'hidden';\n        bgSave.style.visibility = 'hidden';\n        objColor1.style.visibility = 'visible';\n        obj1Save.style.visibility = 'visible';\n    }\n}\n\n\nvar hideColorMenuOBJ1 = function() {\n    if (clickList.slice(-1)[0] == 'Bloom'){\n        \n        objColor1.style.visibility = 'hidden';\n        obj1Save.style.visibility = 'hidden';\n        bgColor.style.visibility = 'visible';\n        bgSave.style.visibility = 'visible';\n    } \n}\n\n\n\n\n\n\n\neffectScaleButton.addEventListener('click', function(){\n    clickList.push('Scale')\n    changeDisplay('Scale');\n    changeBorder('Scale');\n});\n\neffectBlinkButton.addEventListener('click', function(){\n    clickList.push('Blink')\n    changeDisplay('Blink');\n    changeBorder('Blink');\n});\n\neffectLineButton.addEventListener('click', function(){\n    clickList.push('Line')\n    changeDisplay('Line');\n    changeBorder('Line');\n})\n\n\neffectBloomButton.addEventListener('click', function(){\n    clickList.push('Bloom')\n    changeDisplay('Bloom');\n    changeBorder('Bloom');\n});\n\neffectGradientButton.addEventListener('click', function(){\n    clickList.push('Gradient')\n    changeDisplay('Gradient');\n    changeBorder('Gradient');\n});\n\neffectHorizontalButton.addEventListener('click', function(){\n    clickList.push('Horizontal')\n    changeDisplay('Horizontal');\n    changeBorder('Horizontal');\n})\n\n\n\n\nfunction changeDisplay(identifier){\n    for (let i=0; i < shapemenuGroup.length; i++ ){\n        if (shapemenuGroup[i].id.slice(10, ) == identifier){\n            shapemenuGroup[i].style.display = 'block'\n        } else {\n            shapemenuGroup[i].style.display = 'none'\n        }\n    }\n}\n\n\nfunction changeBorder(identifier){\n    for (let i=0; i < effectButtonGroup.length; i++ ){\n        if (effectButtonGroup[i].id.slice(6, ) == identifier){\n            effectButtonGroup[i].style.border = '3px solid black';\n        } else {\n            effectButtonGroup[i].style.border = 'none';\n        }\n    }\n}\n\n\nfor (let i = 0; i < bloom2D.length; i++) {\n    bloom2D[i].addEventListener('click', hideColorMenuBG, false);\n}\n\n\nfor (let i = 0; i < bloom3D.length; i++) {\n    bloom3D[i].addEventListener('click', hideColorMenuOBJ1, false);\n}\n\n//# sourceURL=webpack://Synthesizer/./src/js/ui.js?");

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