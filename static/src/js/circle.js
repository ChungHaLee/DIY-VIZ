import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { sparkling, startFauxClicking, fauxClick } from './sparkle.js'
import { energy, dataArray, analyser, pitchDetector, myNote, octave } from './audio.js'
import { starField_faster, draw } from './starfield.js'
import { update } from './fluid.js'

const bgColorSaveButton = document.getElementById('backgroundColorSaveButton');
const objColor1SaveButton = document.getElementById('objectColor1SaveButton');
const objColor2SaveButton = document.getElementById('objectColor2SaveButton');


let controls;
let camera, scene, renderer;
let container;
let FrameRate = 0;

let group;
let ambientLight, spotLight;
var pitchInfo;


const sparkleButton = document.getElementById('sparkle');
const fluidButton = document.getElementById('fluid');


const sparkleCanvas = document.getElementById('sparkle-canvas');
const fluidCanvas = document.getElementById('fluid-canvas');


// 시각화 구분자 단어
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
  
    container = document.getElementById('fluid-canvas')
    
    container.appendChild( renderer.domElement )
    
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputEncoding = THREE.sRGBEncoding;
   

    controls = new OrbitControls( camera, container );
    // controls.update(); 요소가 움직이지 않게 함...
  
  };


// 버튼 클릭에 따라 보여주는 시각화가 달라지는 함수
function optionalVisualization(){
    sparkleButton.addEventListener('click', function (){
      identityVisualization.innerText = 'sparkle'
    })

    fluidButton.addEventListener('click', function (){
      identityVisualization.innerText = 'fluid'
    })
}




// 캔버스 리셋하는 함수
function clearCanvas(the_canvas)
{
    // canvas
    let cnvs = the_canvas
    // context
    let ctx = cnvs.getContext('2d');

    if (ctx != null){
      // 픽셀 정리
      ctx.clearRect(0, 0, cnvs.width, cnvs.height);
      // 컨텍스트 리셋
      ctx.beginPath();

    } else {
      // 이 경우 3D Canvas 이기 때문에 삭제하지 않고 걍 가만히 둔다
      
    }

}


function animate() {
  requestAnimationFrame(animate);
  // 여기를 기점으로 색깔 등 요소 변경을 추가하면됨
  FrameRate = FrameRate + 1
  

    // music rendering
    if (dataArray){
      analyser.getByteFrequencyData(dataArray);
      pitchDetector();
      // console.log(octave)


      render();

      if (identityVisualization.innerText == 'sparkle'){
        sparkleCanvas.style.display = 'inline-block';
        fluidCanvas.style.display = 'none';
        // fluidCanvas 는 3D CANVAS 라서 그냥 clear 하지 않고 따로 둠
        sparkling();
        if (energy > 20 ){
          startFauxClicking();
        }
      } 

        else if (identityVisualization.innerText == 'fluid'){
        // console.log('clicked!');
        fluidCanvas.style.display = 'inline-block';
        sparkleCanvas.style.display = 'none';

        clearCanvas(sparkleCanvas);
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


export { pitchInfo }