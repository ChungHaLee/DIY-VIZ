import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { sparkling, startFauxClicking, fauxClick } from './sparkle.js'
import { energy, dataArray, analyser, pitchDetector } from './audio.js'
import { starField_faster, starField_slower, starField_plain, draw } from './starfield.js'

let controls;
let camera, scene, renderer;
let container;
let FrameRate = 0;

let group;
let ambientLight, spotLight;


const sparkleButton = document.getElementById('sparkle');
const starfieldButton = document.getElementById('starfield');


const sparkleCanvas = document.getElementById('sparkle-canvas');
const starfieldCanvas = document.getElementById('starfield-canvas');

let identityVisualization = document.getElementById('identityVisual');


// init function
function init() {
    scene = new THREE.Scene();
    // canvas
    renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(900, 700);
    
    camera = new THREE.PerspectiveCamera(30, renderer.domElement.width/renderer.domElement.height, 2, 2000);
    camera.position.set(1, 10, 30);
  
    container = document.getElementById( "sparkle-canvas" );
    
    container.appendChild( renderer.domElement )
    
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputEncoding = THREE.sRGBEncoding;
  

    controls = new OrbitControls( camera, container );
    // controls.update(); 요소가 움직이지 않게 함...
  
  };



function optionalVisualization(){
    sparkleButton.addEventListener('click', function (){
      identityVisualization.innerText = 'sparkle'
    })

    starfieldButton.addEventListener('click', function () {
      identityVisualization.innerText = 'starfield'
    })
}



function animate() {
  requestAnimationFrame(animate);
  // 여기를 기점으로 색깔 등 요소 변경을 추가하면됨
  FrameRate = FrameRate + 1

    // music rendering
    if (dataArray){
      analyser.getByteFrequencyData(dataArray);
      pitchDetector();
      render();

      if (identityVisualization.innerText == 'sparkle'){
        sparkleCanvas.style.display = 'inline-block';
        starfieldCanvas.style.display = 'none';
        sparkling();
        if (energy > 20 ){
          startFauxClicking();
        }
      } else if (identityVisualization.innerText == 'starfield'){
        starfieldCanvas.style.display = 'inline-block'
        sparkleCanvas.style.display = 'none'; // 여기 나중에 함수화 시키기
        draw();

          if (FrameRate % 150 < 40){        
            starField_plain();
        } else if (FrameRate % 120 < 80){
            starField_slower();
        } else {
            starField_faster();
        }

      } 
  }
}




// render function
function render() {
    controls.update();
    renderer.render(scene, camera);
  }



optionalVisualization();



// BASIC EVENTS
init();
animate();