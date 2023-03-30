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

/***/ "./src/js/starfield.js":
/*!*****************************!*\
  !*** ./src/js/starfield.js ***!
  \*****************************/
/***/ (() => {

eval("// import { bgColor, objColor1, objColor2 } from './colorpicker'\n\n\n// const bgColorSaveButton = document.getElementById('backgroundColorSaveButton');\n// const objColor1SaveButton = document.getElementById('objectColor1SaveButton');\n// const objColor2SaveButton = document.getElementById('objectColor2SaveButton');\n\n\n\n// const canvas = document.getElementById('starfield-canvas');\n// const c = canvas.getContext('2d');\n// canvas.width = window.innerWidth; //screen width\n// canvas.height = window.innerHeight; //screem height\n\n\n\n// // on mouse scroll changes speed and color\n// // 이 부분 수정하기\n\n\n// function starField_faster(){\n\n//   bgColorSaveButton.addEventListener('click', function (){\n//     c.fillStyle = bgColor\n//   })\n  \n  \n//   objColor1SaveButton.addEventListener('click', function () {\n//     c.strokeStyle= objColor1\n//   })\n  \n//   speed = 0.5;\n\n// }\n\n// // function starField_plain(){\n// //   bgColorSaveButton.addEventListener('click', function (){\n// //     c.fillStyle = objColor2\n// //   })\n  \n  \n// //   objColor2SaveButton.addEventListener('click', function () {\n// //     c.strokeStyle= bgColor\n// //   })\n\n// //   speed *= 0.2;\n// // }\n\n// // function starField_slower(){\n// //     c.fillStyle = \"#27187e\";\n// //     c.strokeStyle = '#ff8600';\n// //     speed *= 0.5;\n// // }\n\n\n// // window.addEventListener('wheel', (event) => {\n// //     c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n// //     if (event.deltaY < 0) speed *= 1.1;\n// //     else speed *= 0.9;\n// //     if (speed < 0.01) speed = 0.01;\n// //     else if (speed > 0.1) speed = 0.1;\n// //   });\n\n// class Star {\n//   constructor() {\n//     //initializing\n//     this.x = Math.random()*canvas.width-canvas.width/6;  //random x\n//     this.y = Math.random()*canvas.height-canvas.height/6; //random y\n//     this.px, this.py;\n//     this.z = Math.random()*3; //random z    \n//   }\n  \n//   update() {\n//     //stores previous x, y and z and generates new coordinates    \n//     this.px = this.x;\n//     this.py = this.y;\n//     this.z += speed;\n//     this.x += this.x*(speed*0.2)*this.z;\n//     this.y += this.y*(speed*0.2)*this.z;\n//     if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 ||\n//         this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {\n//       this.x = Math.random()*canvas.width-canvas.width/2;\n//       this.y = Math.random()*canvas.height-canvas.height/2;\n//       this.px = this.x;\n//       this.py = this.y;\n//       this.z = 0;\n//     }\n//   }\n  \n//   //draws line from x,y to px,py\n//   show() {    \n//     c.lineWidth = this.z;\n//     c.beginPath();\n//     c.moveTo(this.x, this.y);\n//     c.lineTo(this.px, this.py);\n//     c.stroke();\n//   }\n// }\n\n// let speed = 0.04;\n// let stars = [];\n\n// //create 1500 stars (objects)\n// for (let i = 0; i < 1500; i++) stars.push(new Star());\n\n// c.fillStyle = 'rgba(0, 0, 0, 0.1)';\n// c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n\n// c.translate(canvas.width/2, canvas.height/2);\n\n// function draw() {\n//   //create rectangle\n//   c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);\n//   for (let s of stars) {\n//     s.update();\n//     s.show();\n//   }\n//   //infinte call to draw\n//   requestAnimationFrame(draw);\n// }\n\n\n\n// export { starField_faster, draw }\n\n//# sourceURL=webpack://Synthesizer/./src/js/starfield.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/starfield.js"]();
/******/ 	
/******/ })()
;