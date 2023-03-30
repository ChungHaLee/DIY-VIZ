import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { energy, dataArray, analyser, pitchDetector, myNote, octave } from './audio.js'
import { bgColor, objColor1, objColor2 } from './colorpicker'




let controls;
let camera, scene, renderer;
let geometry, material, compoCenter;
let container;
let FrameRate = 0;


let backgroundColor;

let group;
let ambientLight, spotLight, pointLight;
var pitchInfo;



const circleButton = document.getElementById('shapeCircle');

// 시각화 구분자 단어
let identityVisualization = document.getElementById('identityVisual');




// init function
function init() {
    scene = new THREE.Scene();
    // canvas
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(800, 600);


    camera = new THREE.PerspectiveCamera(30, renderer.domElement.width/renderer.domElement.height, 2, 2000);
    camera.position.set(0, 10, 30);
  
    container = document.getElementById('shape-canvas')
    
    container.appendChild( renderer.domElement )
    
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputEncoding = THREE.sRGBEncoding;

    ambientLight = new THREE.AmbientLight(0xaaaaaa);
    scene.add(ambientLight);
  
    spotLight = new THREE.SpotLight(0xffffff);
    spotLight.intensity = 0.9;
    spotLight.position.set(-10, 40, 20);
  
    spotLight.castShadow = true;
    scene.add(spotLight);
    group = new THREE.Group();
    scene.add(group);
   

    controls = new OrbitControls( camera, container );
    controls.update();
    createCircle_Vanilla();
  
  };




function createCircle_Vanilla(){
    geometry = new THREE.CircleGeometry( 10, 60 );
    material = new THREE.MeshBasicMaterial();


    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    spotLight.lookAt(compoCenter);
    pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(200, 200, 200);
    scene.add(pointLight);

    group.add( compoCenter );
}


function createCircle(){
  let custom_energy = energy * 5;

  if(custom_energy > 15){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.CircleGeometry( size / 2, 80 );
  material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  material.transparent = false
  material.opacity = 0



  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  spotLight.lookAt(compoCenter);
  pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(200, 200, 200);
  scene.add(pointLight);

  group.add( compoCenter );
}





// 버튼 클릭에 따라 보여주는 시각화가 달라지는 함수
function optionalVisualization(){
    circleButton.addEventListener('click', function (){
      identityVisualization.innerText = 'circle';
    })

}








// 캔버스 리셋하는 함수 (최적화)
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
      // 안 그러면 에러남...
      
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

      // render();

      if (identityVisualization.innerText == 'circle'){
          // geometry rendering (firstly, delete the basic geometry in the base.)
          deleteBasics();
          createCircle();
          render();
      } 

  }
}


function deleteBasics(){
  group.parent.remove(group);
  group = new THREE.Group();
  scene.add(group);
  
  compoCenter.geometry.dispose();
  compoCenter.material.dispose();
};



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