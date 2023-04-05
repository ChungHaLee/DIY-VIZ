import * as THREE from 'three';

import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass'
import { RenderPass } from 'three/addons/postprocessing/RenderPass'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { energy, dataArray, analyser, pitchDetector, myNote, octave } from './audio.js'
import { bgColor, objColor1, objColor2, setBgColor, setObjColor1 } from './colorpicker'




let controls, bloomComposer;
let camera, scene, renderer;
let geometry, material, material1, material2, material3;
let compoCenter, compoCenter1, compoCenter2, compoCenter3;
let container;
let FrameRate = 0;

// let backgroundColor;

let group;
let ambientLight, spotLight, pointLight;
var pitchInfo;

let currentTempleteNumber = 0;
const saveButtonColorList = ["#FFCC99", "#FFCC00","#99FF99", "#9999FF", "#666699", "#FF66FF", "#FF9999"]

// html 버튼 요소

// Effect: Scale
const circleButtonScale = document.getElementById('shapeCircle-Scale');
const triangleButtonScale = document.getElementById('shapeTriangle-Scale');
const rectangleButtonScale = document.getElementById('shapeRectangle-Scale');
const pentagonButtonScale = document.getElementById('shapePentagon-Scale');
const sphereButtonScale = document.getElementById('shapeSphere-Scale');
const coneButtonScale = document.getElementById('shapeCone-Scale');
const boxButtonScale = document.getElementById('shapeBox-Scale');
const dodeButtonScale = document.getElementById('shapeDodecahedron-Scale');


// Effect: Blink
const circleButtonBlink = document.getElementById('shapeCircle-Blink');
const triangleButtonBlink = document.getElementById('shapeTriangle-Blink');
const rectangleButtonBlink = document.getElementById('shapeRectangle-Blink');
const pentagonButtonBlink = document.getElementById('shapePentagon-Blink');
const sphereButtonBlink = document.getElementById('shapeSphere-Blink');
const coneButtonBlink = document.getElementById('shapeCone-Blink');
const boxButtonBlink = document.getElementById('shapeBox-Blink');
const dodeButtonBlink = document.getElementById('shapeDodecahedron-Blink');


// Effect: Line
const circleButtonLine = document.getElementById('shapeCircle-Line');
const triangleButtonLine = document.getElementById('shapeTriangle-Line');
const rectangleButtonLine = document.getElementById('shapeRectangle-Line');
const pentagonButtonLine = document.getElementById('shapePentagon-Line');
// const sphereButtonLine = document.getElementById('shapeSphere-Line');
// const coneButtonLine = document.getElementById('shapeCone-Line');
// const boxButtonLine = document.getElementById('shapeBox-Line');
// const dodeButtonLine = document.getElementById('shapeDodecahedron-Line');


// Effect: Bloom
const circleButtonBloom = document.getElementById('shapeCircle-Bloom');
const triangleButtonBloom = document.getElementById('shapeTriangle-Bloom');
const rectangleButtonBloom= document.getElementById('shapeRectangle-Bloom');
const pentagonButtonBloom = document.getElementById('shapePentagon-Bloom');
const sphereButtonBloom = document.getElementById('shapeSphere-Bloom');
const coneButtonBloom = document.getElementById('shapeCone-Bloom');
const boxButtonBloom = document.getElementById('shapeBox-Bloom');
const dodeButtonBloom = document.getElementById('shapeDodecahedron-Bloom');


// Effect: Gradient
const circleButtonGradient = document.getElementById('shapeCircle-Gradient');
const triangleButtonGradient = document.getElementById('shapeTriangle-Gradient');
const rectangleButtonGradient= document.getElementById('shapeRectangle-Gradient');
const pentagonButtonGradient = document.getElementById('shapePentagon-Gradient');
const sphereButtonGradient = document.getElementById('shapeSphere-Gradient');
const coneButtonGradient = document.getElementById('shapeCone-Gradient');
const boxButtonGradient = document.getElementById('shapeBox-Gradient');
const dodeButtonGradient = document.getElementById('shapeDodecahedron-Gradient');


// Effect: Horizontal
const circleButtonHorizontal = document.getElementById('shapeCircle-Horizontal');
const triangleButtonHorizontal = document.getElementById('shapeTriangle-Horizontal');
const rectangleButtonHorizontal = document.getElementById('shapeRectangle-Horizontal');
const pentagonButtonHorizontal = document.getElementById('shapePentagon-Horizontal');
const sphereButtonHorizontal = document.getElementById('shapeSphere-Horizontal');
const coneButtonHorizontal = document.getElementById('shapeCone-Horizontal');
const boxButtonHorizontal = document.getElementById('shapeBox-Horizontal');
const dodeButtonHorizontal = document.getElementById('shapeDodecahedron-Horizontal');



const templateSaveButton = document.getElementById("templateSave");
let AudioObject = document.getElementById("audio");
let playButton  = document.getElementById("playButton")
let musicDuration = 60;



// 시각화 구분자 단어
let identityVisualization = document.getElementById('identityVisual');





// 버튼 클릭에 따라 보여주는 시각화가 달라지는 함수
function optionalVisualization(){
// Effect: Scale
  circleButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'circle-scale';
  })

  triangleButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle-scale';
  })

  rectangleButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle-scale';
  })

  pentagonButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon-scale';
  })

  sphereButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'sphere-scale';
  })

  coneButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'cone-scale'
  })

  boxButtonScale.addEventListener('click', function( ){
    identityVisualization.innerText = 'box-scale'
  })

  dodeButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'dode-scale'
  })



  // Effect: Blink
  circleButtonBlink.addEventListener('click', function (){
    identityVisualization.innerText = 'circle-blink';
  })

  triangleButtonBlink.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle-blink';
  })

  rectangleButtonBlink.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle-blink';
  })

  pentagonButtonBlink.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon-blink';
  })

  sphereButtonBlink.addEventListener('click', function (){
    identityVisualization.innerText = 'sphere-blink';
  })

  coneButtonBlink.addEventListener('click', function (){
    identityVisualization.innerText = 'cone-blink'
  })

  boxButtonBlink.addEventListener('click', function( ){
    identityVisualization.innerText = 'box-blink'
  })

  dodeButtonBlink.addEventListener('click', function (){
    identityVisualization.innerText = 'dode-blink'
  })


   // Effect: Line
   circleButtonLine.addEventListener('click', function (){
    identityVisualization.innerText = 'circle-line';
  })

  triangleButtonLine.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle-line';
  })

  rectangleButtonLine.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle-line';
  })

  pentagonButtonLine.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon-line';
  })


  // Effect: Bloom
  circleButtonBloom.addEventListener('click', function (){
    identityVisualization.innerText = 'circle-bloom';
  })

  triangleButtonBloom.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle-bloom';
  })

  rectangleButtonBloom.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle-bloom';
  })

  pentagonButtonBloom.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon-bloom';
  })

  sphereButtonBloom.addEventListener('click', function (){
    identityVisualization.innerText = 'sphere-bloom';
  })

  coneButtonBloom.addEventListener('click', function (){
    identityVisualization.innerText = 'cone-bloom'
  })

  boxButtonBloom.addEventListener('click', function( ){
    identityVisualization.innerText = 'box-bloom'
  })

  dodeButtonBloom.addEventListener('click', function (){
    identityVisualization.innerText = 'dode-bloom'
  })


   // Effect: Gradient
   circleButtonGradient.addEventListener('click', function (){
    identityVisualization.innerText = 'circle-gradient';
  })

  triangleButtonGradient.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle-gradient';
  })

  rectangleButtonGradient.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle-gradient';
  })

  pentagonButtonGradient.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon-gradient';
  })

  sphereButtonGradient.addEventListener('click', function (){
    identityVisualization.innerText = 'sphere-gradient';
  })

  coneButtonGradient.addEventListener('click', function (){
    identityVisualization.innerText = 'cone-gradient'
  })

  boxButtonGradient.addEventListener('click', function( ){
    identityVisualization.innerText = 'box-gradient'
  })

  dodeButtonGradient.addEventListener('click', function (){
    identityVisualization.innerText = 'dode-gradient'
  })


  // Effect: Horizontal

  circleButtonHorizontal.addEventListener('click', function (){
    identityVisualization.innerText = 'circle-horizontal';
  })

  triangleButtonHorizontal.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle-horizontal';
  })

  rectangleButtonHorizontal.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle-horizontal';
  })

  pentagonButtonHorizontal.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon-horizontal';
  })

  sphereButtonHorizontal.addEventListener('click', function (){
    identityVisualization.innerText = 'sphere-horizontal';
  })

  coneButtonHorizontal.addEventListener('click', function (){
    identityVisualization.innerText = 'cone-horizontal'
  })

  boxButtonHorizontal.addEventListener('click', function( ){
    identityVisualization.innerText = 'box-horizontal'
  })

  dodeButtonHorizontal.addEventListener('click', function (){
    identityVisualization.innerText = 'dode-horizontal'
  })


}




// init function
function init() {
    scene = new THREE.Scene();
    // canvas
    renderer = new THREE.WebGLRenderer( { antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(800, 600);


    camera = new THREE.PerspectiveCamera(70, renderer.domElement.width/renderer.domElement.height, 2, 2000);
    camera.position.set(0, 10, 30);
  
    container = document.getElementById('shape-canvas')
    
    container.appendChild( renderer.domElement )
    renderer.autoClear = false;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputEncoding = THREE.sRGBEncoding;



    group = new THREE.Group();
    scene.add(group);
   

    controls = new OrbitControls( camera, container );
    controls.update();
    createCircle_Vanilla();
  
  };



// 베이스 도형

function createCircle_Vanilla(){
    geometry = new THREE.CircleGeometry( 10, 60 );
    material = new THREE.MeshBasicMaterial();


    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);
    // spotLight.lookAt(compoCenter);
    pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(200, 200, 200);
    scene.add(pointLight);

    group.add( compoCenter );
}



// Effect 1: Scale
// 2D 도형


function createCircleScale(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.CircleGeometry( size / 2, 80 );
  material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  group.add( compoCenter );
}


function createTriangleScale(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.CircleGeometry( size / 2, 0 );
  material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );

}


function createRectangleScale(){

  let custom_energy = energy * 2;
  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );

  geometry = new THREE.PlaneGeometry( size/2, size/2 );
  material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );

}



function createPentagonScale(){

  let custom_energy = energy * 2;
  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );

  geometry = new THREE.CircleGeometry( size / 2, 5 );
  material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  
}




// 3D 도형

function createSphereScale(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.SphereGeometry( size/2, 64, 32 );
  material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
  material.transparent = false
  material.opacity = 1

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  scene.add(pointLight);

  group.add( compoCenter );
}


function createConeScale(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.ConeGeometry( size/2, size/2, 3 );
  material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
  material.transparent = false
  material.opacity = 0

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  scene.add(pointLight);

  group.add( compoCenter );

}

function createBoxScale(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.BoxGeometry( size/2, size/2, size/2 );
  material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
  material.transparent = false
  material.opacity = 1

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  scene.add(pointLight);

  group.add( compoCenter );


}


function createDodecahedronScale(){

  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.DodecahedronGeometry( size/2, 0);
  material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
  material.transparent = false
  material.opacity = 1

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  scene.add(pointLight);

  group.add( compoCenter );
}



// Effect 2: Blink
// 2D 도형

function createCircleBlink(){
    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.CircleGeometry( 10, 80 );
    material = new THREE.MeshBasicMaterial( { color: objColor1 } );
    // material.transparent = false
    material.opacity = 1

    let custom_energy = energy * 5;
    if(custom_energy > 50){
        material.visible = true
    } else {
        material.visible = false
    }
  
  
    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);
  
    group.add( compoCenter );

  }
  

  
function createTriangleBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.CircleGeometry(  10, 0 );
    material = new THREE.MeshBasicMaterial( { color: objColor1 } );
    material.transparent = false
    material.opacity = 1

    let custom_energy = energy * 2;
    if(custom_energy > 100){
        material.visible = true
    } else {
        material.visible = false
    }


    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);


    group.add( compoCenter );

}
  
  
function createRectangleBlink(){
    scene.background = new THREE.Color( bgColor );

    geometry = new THREE.PlaneGeometry(  10,  10);
    material = new THREE.MeshBasicMaterial( { color: objColor1 } );
    material.transparent = false

    material.opacity = 1

    let custom_energy = energy * 5;
    if(custom_energy > 50){
        material.visible = true
    } else {
        material.visible = false
    }


    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);


    group.add( compoCenter );

}
  
  
  
function createPentagonBlink(){

    scene.background = new THREE.Color( bgColor );

    geometry = new THREE.CircleGeometry(  10, 5 );
    material = new THREE.MeshBasicMaterial( { color: objColor1 } );
    material.transparent = false
    material.opacity = 1

    let custom_energy = energy * 5;
    if(custom_energy > 50){
        material.visible = true
    } else {
        material.visible = false
    }


    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);


    group.add( compoCenter );

}
  
  
  
  
// 3D 도형

function createSphereBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.SphereGeometry(  10, 64, 32 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
    material.transparent = false
    material.opacity = 1

    let custom_energy = energy * 5;
    if(custom_energy > 50){
        material.visible = true
    } else {
        material.visible = false
    }

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );
}
  
  
function createConeBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.ConeGeometry( 10, 10, 3 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
    material.transparent = false
    material.opacity = 1

    let custom_energy = energy * 5;
    if(custom_energy > 50){
        material.visible = true
    } else {
        material.visible = false
    }

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );

}
  
function createBoxBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.BoxGeometry(  10,  10,  10 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
    material.transparent = false
    material.opacity = 1

    let custom_energy = energy * 5;
    if(custom_energy > 50){
        material.visible = true
    } else {
        material.visible = false
    }

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );


}
  
  
function createDodecahedronBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.DodecahedronGeometry( 10, 0);
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
    material.transparent = false
    material.opacity = 1

    let custom_energy = energy * 5;
    if(custom_energy > 50){
        material.visible = true
    } else {
        material.visible = false
    }

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );
}



// Effect 3: Line

function createCircleLine(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
 
  geometry = new THREE.TorusGeometry( size / 3, 0.1, 30, 200);
  material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  
}


function createTriangleLine(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
 
  geometry = new THREE.TorusGeometry( size / 3, 0.1, 30, 3);
  material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  
}



function createRectangleLine(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
 
  geometry = new THREE.TorusGeometry( size / 3, 0.1, 30, 4);
  material = new THREE.MeshBasicMaterial( { color: objColor1, side: THREE.DoubleSide } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  
}



function createPentagonLine(){
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
 
  geometry = new THREE.TorusGeometry( size / 3, 0.1, 30, 5);
  material = new THREE.MeshBasicMaterial( { color: objColor1, side: THREE.DoubleSide } );
  material.transparent = false
  material.opacity = 1


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  
}








// Effect 4: Bloom


function createCircleBloom(){

  //bloom renderer
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );

  
  bloomPass.threshold = 0.5;

  let custom_energy = energy * 5;
  if(custom_energy > 50){
    bloomPass.strength = 10
    bloomPass.exposure = 0.8
    bloomPass.radius = 1;
  } else {
    bloomPass.radius = 0;
    bloomPass.strength = 1
    bloomPass.exposure = 0.8
  }


  let size = custom_energy;
  scene.background = new THREE.Color( '#FFFFFF' );
  geometry = new THREE.CircleGeometry( size / 6, 80 );

  if (objColor1 == '#FFFFFF'){
    material = new THREE.MeshBasicMaterial( { color: '#000000' } );
  } else {
    material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  }

  // material = new THREE.MeshBasicMaterial( { color: objColor1 } );

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  const pointLight = new THREE.PointLight( 0xffffff, 1);
  camera.add(pointLight);

  
  bloomComposer = new EffectComposer(renderer);
  bloomComposer.setSize(window.innerWidth, window.innerHeight);
  bloomComposer.renderToScreen = true;
  bloomComposer.addPass(renderScene);
  bloomComposer.addPass(bloomPass);


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  bloomComposer.render();

}



function createTriangleBloom(){

    //bloom renderer
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
  
    
    bloomPass.threshold = 0.5;
  
    let custom_energy = energy * 5;
    if(custom_energy > 50){
      bloomPass.strength = 10
      bloomPass.exposure = 0.8
      bloomPass.radius = 1;
    } else {
      bloomPass.radius = 0;
      bloomPass.strength = 1
      bloomPass.exposure = 0.8
    }
  
    let size = custom_energy;
    scene.background = new THREE.Color( '#FFFFFF' );
    geometry = new THREE.CircleGeometry( size / 6, 0 );
  
    if (objColor1 == '#FFFFFF'){
      material = new THREE.MeshBasicMaterial( { color: '#000000' } );
    } else {
      material = new THREE.MeshBasicMaterial( { color: objColor1 } );
    }
  
    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);
  
    const pointLight = new THREE.PointLight( 0xffffff, 1);
    camera.add(pointLight);
  
    
    bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);
  
  
    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);
  
  
    group.add( compoCenter );
    bloomComposer.render();

 

}


function createRectangleBloom(){

      //bloom renderer
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
      );
    
      
      bloomPass.threshold = 0.5;
    
      let custom_energy = energy * 5;
      if(custom_energy > 50){
        bloomPass.strength = 10
        bloomPass.exposure = 0.8
        bloomPass.radius = 1;
      } else {
        bloomPass.radius = 0;
        bloomPass.strength = 1
        bloomPass.exposure = 0.8
      }
    
      let size = custom_energy;
      scene.background = new THREE.Color( '#FFFFFF' );
      geometry = new THREE.PlaneGeometry( size/6, size/6 );
    
      if (objColor1 == '#FFFFFF'){
        material = new THREE.MeshBasicMaterial( { color: '#000000' } );
      } else {
        material = new THREE.MeshBasicMaterial( { color: objColor1 } );
      }
    
      compoCenter = new THREE.Mesh(geometry, material);
      compoCenter.position.set(1, 0, 0);
    
      const pointLight = new THREE.PointLight( 0xffffff, 1);
      camera.add(pointLight);
    
      
      bloomComposer = new EffectComposer(renderer);
      bloomComposer.setSize(window.innerWidth, window.innerHeight);
      bloomComposer.renderToScreen = true;
      bloomComposer.addPass(renderScene);
      bloomComposer.addPass(bloomPass);
    
    
      compoCenter = new THREE.Mesh(geometry, material);
      compoCenter.position.set(1, 0, 0);
    
    
      group.add( compoCenter );
      bloomComposer.render();

}



function createPentagonBloom(){

  //bloom renderer
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );

  
  bloomPass.threshold = 0.5;

  let custom_energy = energy * 5;
  if(custom_energy > 50){
    bloomPass.strength = 10
    bloomPass.exposure = 0.8
    bloomPass.radius = 1;
  } else {
    bloomPass.radius = 0;
    bloomPass.strength = 1
    bloomPass.exposure = 0.8
  }

  let size = custom_energy;
  scene.background = new THREE.Color( '#FFFFFF' );
  geometry = new THREE.CircleGeometry( size/6, 5 );

  if (objColor1 == '#FFFFFF'){
    material = new THREE.MeshBasicMaterial( { color: '#000000' } );
  } else {
    material = new THREE.MeshBasicMaterial( { color: objColor1 } );
  }

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  const pointLight = new THREE.PointLight( 0xffffff, 1);
  camera.add(pointLight);

  
  bloomComposer = new EffectComposer(renderer);
  bloomComposer.setSize(window.innerWidth, window.innerHeight);
  bloomComposer.renderToScreen = true;
  bloomComposer.addPass(renderScene);
  bloomComposer.addPass(bloomPass);


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  bloomComposer.render();


  

}




// 3D 도형

function createSphereBloom(){

    //bloom renderer
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
  
    
    bloomPass.threshold = 0.5;
  
    let custom_energy = energy * 5;
    if(custom_energy > 50){
      bloomPass.strength = 10
      bloomPass.exposure = 0.8
      bloomPass.radius = 1;
    } else {
      bloomPass.radius = 0;
      bloomPass.strength = 1
      bloomPass.exposure = 0.8
    }
  
    let size = custom_energy;

    if (bgColor == '#FFFFFF'){
      scene.background = new THREE.Color( '#000000' );
    } else {
      scene.background = new THREE.Color( bgColor );
    }

    geometry = new THREE.SphereGeometry( size/5, 64, 32 );

    material = new THREE.MeshPhongMaterial( { emissive: '#FFFFFF', shininess: 80, vertexColors: true} )
  
    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);
  
    const pointLight = new THREE.PointLight( 0xffffff, 1);
    camera.add(pointLight);
  
    
    bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);
  
  
    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);
  
  
    group.add( compoCenter );
    bloomComposer.render();

  
}



function createConeBloom(){

  //bloom renderer
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );

  
  bloomPass.threshold = 0.5;

  let custom_energy = energy * 5;
  if(custom_energy > 50){
    bloomPass.strength = 10
    bloomPass.exposure = 0.8
    bloomPass.radius = 1;
  } else {
    bloomPass.radius = 0;
    bloomPass.strength = 1
    bloomPass.exposure = 0.8
  }

  let size = custom_energy;
    if (bgColor == '#FFFFFF'){
    scene.background = new THREE.Color( '#000000' );
  } else {
    scene.background = new THREE.Color( bgColor );
  }
  geometry = new THREE.ConeGeometry( size/5, size/5, 3 );
  material = new THREE.MeshPhongMaterial( { emissive: '#FFFFFF', shininess: 80, vertexColors: true} )

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  const pointLight = new THREE.PointLight( 0xffffff, 1);
  camera.add(pointLight);

  
  bloomComposer = new EffectComposer(renderer);
  bloomComposer.setSize(window.innerWidth, window.innerHeight);
  bloomComposer.renderToScreen = true;
  bloomComposer.addPass(renderScene);
  bloomComposer.addPass(bloomPass);


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  bloomComposer.render();

  
}





function createBoxBloom(){

   //bloom renderer
   const renderScene = new RenderPass(scene, camera);
   const bloomPass = new UnrealBloomPass(
     new THREE.Vector2(window.innerWidth, window.innerHeight),
     1.5,
     0.4,
     0.85
   );
 
   
   bloomPass.threshold = 0.5;
 
   let custom_energy = energy * 5;
   if(custom_energy > 50){
     bloomPass.strength = 10
     bloomPass.exposure = 0.8
     bloomPass.radius = 1;
   } else {
     bloomPass.radius = 0;
     bloomPass.strength = 1
     bloomPass.exposure = 0.8
   }
 
   let size = custom_energy;
   if (bgColor == '#FFFFFF'){
    scene.background = new THREE.Color( '#000000' );
  } else {
    scene.background = new THREE.Color( bgColor );
  }
   geometry = new THREE.BoxGeometry( size/5, size/5, size/5 );
   material = new THREE.MeshPhongMaterial( { emissive: '#FFFFFF', shininess: 80, vertexColors: true} )
 
   compoCenter = new THREE.Mesh(geometry, material);
   compoCenter.position.set(1, 0, 0);
 
   const pointLight = new THREE.PointLight( 0xffffff, 1);
   camera.add(pointLight);
 
   
   bloomComposer = new EffectComposer(renderer);
   bloomComposer.setSize(window.innerWidth, window.innerHeight);
   bloomComposer.renderToScreen = true;
   bloomComposer.addPass(renderScene);
   bloomComposer.addPass(bloomPass);
 
 
   compoCenter = new THREE.Mesh(geometry, material);
   compoCenter.position.set(1, 0, 0);
 
 
   group.add( compoCenter );
   bloomComposer.render();

 

}


function createDodecahedronBloom(){

     //bloom renderer
     const renderScene = new RenderPass(scene, camera);
     const bloomPass = new UnrealBloomPass(
       new THREE.Vector2(window.innerWidth, window.innerHeight),
       1.5,
       0.4,
       0.85
     );
   
     
     bloomPass.threshold = 0.5;
   
     let custom_energy = energy * 5;
     if(custom_energy > 50){
       bloomPass.strength = 10
       bloomPass.exposure = 0.8
       bloomPass.radius = 1;
     } else {
       bloomPass.radius = 0;
       bloomPass.strength = 1
       bloomPass.exposure = 0.8
     }
   
     let size = custom_energy;
     if (bgColor == '#FFFFFF'){
      scene.background = new THREE.Color( '#000000' );
    } else {
      scene.background = new THREE.Color( bgColor );
    }
     geometry = new THREE.DodecahedronGeometry( size/5, 0);
     material = new THREE.MeshPhongMaterial( { emissive: '#FFFFFF', shininess: 80, vertexColors: true} )
   
     compoCenter = new THREE.Mesh(geometry, material);
     compoCenter.position.set(1, 0, 0);
   
     const pointLight = new THREE.PointLight( 0xffffff, 1);
     camera.add(pointLight);
   
     
     bloomComposer = new EffectComposer(renderer);
     bloomComposer.setSize(window.innerWidth, window.innerHeight);
     bloomComposer.renderToScreen = true;
     bloomComposer.addPass(renderScene);
     bloomComposer.addPass(bloomPass);
   
   
     compoCenter = new THREE.Mesh(geometry, material);
     compoCenter.position.set(1, 0, 0);
   
   
     group.add( compoCenter );
     bloomComposer.render();


}






// Effect 5: Gradient
// 2D 도형

function colorByPitch(){
    let pitchColor;
    if (myNote.name == 'C' || myNote.name == 'C#'){
        pitchColor = '#ff0000'
    } else if (myNote.name == 'D' || myNote.name == 'D#' || myNote.name == 'D♭'){
        pitchColor = '#ffa500'
    } else if (myNote.name == 'E' || myNote.name == 'E♭'){
        pitchColor = '#ffff00'
    } else if (myNote.name == 'F' || myNote.name == 'F#'){
        pitchColor = '#008000'
    } else if (myNote.name == 'G' || myNote.name == 'G#' || myNote.name == 'G♭'){
        pitchColor = '#0000ff'
    } else if (myNote.name == 'A' || myNote.name == 'A#' || myNote.name == 'A♭'){
        pitchColor = '#4b0082'
    } else if (myNote.name == 'B' || myNote.name == 'B♭'){
        pitchColor = '#ee82ee'
    }
    return pitchColor;
}

function createCircleGradient(){
    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.CircleGeometry( 10, 80 );
    let pitchColor = colorByPitch();
    material = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color(pitchColor)
          },
          color2: {
            value: new THREE.Color(objColor1)
          }
        },
        vertexShader: `
          varying vec2 vUv;
      
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
        
          varying vec2 vUv;
          
          void main() {
            
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `,
        wireframe: false
      });
  
    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);
  
    group.add( compoCenter );

  }
  

  
function createTriangleGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.CircleGeometry(  10, 0 );
    let pitchColor = colorByPitch();
    material = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color(pitchColor)
          },
          color2: {
            value: new THREE.Color(objColor1)
          }
        },
        vertexShader: `
          varying vec2 vUv;
      
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
        
          varying vec2 vUv;
          
          void main() {
            
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `,
        wireframe: false
      });



    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);


    group.add( compoCenter );

}
  
  
function createRectangleGradient(){
    scene.background = new THREE.Color( bgColor );

    geometry = new THREE.PlaneGeometry(  10,  10);
    let pitchColor = colorByPitch();
    material = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color(pitchColor)
          },
          color2: {
            value: new THREE.Color(objColor1)
          }
        },
        vertexShader: `
          varying vec2 vUv;
      
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
        
          varying vec2 vUv;
          
          void main() {
            
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `,
        wireframe: false
      });


    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);


    group.add( compoCenter );

}
  
  
  
function createPentagonGradient(){

    scene.background = new THREE.Color( bgColor );

    geometry = new THREE.CircleGeometry(  10, 5 );
    let pitchColor = colorByPitch();
    material = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color(pitchColor)
          },
          color2: {
            value: new THREE.Color(objColor1)
          }
        },
        vertexShader: `
          varying vec2 vUv;
      
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
        
          varying vec2 vUv;
          
          void main() {
            
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `,
        wireframe: false
      });

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);


    group.add( compoCenter );

}
  
  
  
  
// 3D 도형

function createSphereGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.SphereGeometry(  10, 64, 32 );
    let pitchColor = colorByPitch();
    material = new THREE.MeshPhongMaterial( {color: objColor1, emissive: pitchColor, specular: pitchColor, shininess: 50, vertexColors: true} )

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );
}
  
  
function createConeGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.ConeGeometry( 10, 10, 3 );
    let pitchColor = colorByPitch();
    material = new THREE.MeshPhongMaterial( {color: objColor1, emissive: pitchColor, specular: pitchColor, shininess: 50} )

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );

}
  
function createBoxGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.BoxGeometry(  10,  10,  10 );
    let pitchColor = colorByPitch();
    material = new THREE.MeshPhongMaterial( {color: objColor1, emissive: pitchColor, specular: pitchColor, shininess: 50} )

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );


}
  
  
function createDodecahedronGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.DodecahedronGeometry( 10, 0);
    let pitchColor = colorByPitch();
    material = new THREE.MeshPhongMaterial( {color: objColor1, emissive: pitchColor, specular: pitchColor, shininess: 50} )

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );
}


// Effect 6: Horizontal

function colorByPitchMulti(){
  let multipitchColor;
  if (myNote.name == 'C' || myNote.name == 'C#'){
      multipitchColor = '#FA2E2E'
  } else if (myNote.name == 'D' || myNote.name == 'D#' || myNote.name == 'D♭'){
      multipitchColor = '#FF9319'
  } else if (myNote.name == 'E' || myNote.name == 'E♭'){
      multipitchColor = '#FFFC19'
  } else if (myNote.name == 'F' || myNote.name == 'F#'){
      multipitchColor = '#66FF19'
  } else if (myNote.name == 'G' || myNote.name == 'G#' || myNote.name == 'G♭'){
      multipitchColor = '#1951FF'
  } else if (myNote.name == 'A' || myNote.name == 'A#' || myNote.name == 'A♭'){
      multipitchColor = '#8C19FF'
  } else if (myNote.name == 'B' || myNote.name == 'B♭'){
      multipitchColor = '#FF19DC'
  }
  return multipitchColor;
}


function createCircleHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.CircleGeometry( 5, 80 );
  let geometryCenter = new THREE.CircleGeometry( size/3, 80 );


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-20, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(20, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}



function createTriangleHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.CircleGeometry( 5, 0 );
  let geometryCenter = new THREE.CircleGeometry( size/3, 0 );


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-20, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(20, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}



function createRectangleHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.PlaneGeometry( 5, 5 );
  let geometryCenter = new THREE.PlaneGeometry( size/3, size/3);


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-20, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(20, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}


function createPentagonHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.CircleGeometry( 5, 5 );
  let geometryCenter = new THREE.CircleGeometry( size/3, 5 );


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-20, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(20, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}


function createSphereHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.SphereGeometry( size/3, 64, 32 );
  let geometryCenter = new THREE.SphereGeometry( size/2, 64, 32 );


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-25, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(25, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}




function createConeHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.ConeGeometry( size/2, size/2, 3 );
  let geometryCenter = geometry = new THREE.ConeGeometry( size/3, size/3, 3 );


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-25, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(25, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}



function createBoxHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.BoxGeometry( size/3, size/3, size/3 );
  let geometryCenter = new THREE.BoxGeometry( size/2, size/2, size/2 );


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-20, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(20, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}




function createDodecahedronHorizontal(){
  
  let custom_energy = energy * 5;

  if(custom_energy > 50){
    custom_energy = 15;
  } else if(custom_energy < 10){
    custom_energy = custom_energy / 2 + 5
  }

  let size = custom_energy;

  scene.background = new THREE.Color( bgColor );
  geometry = new THREE.DodecahedronGeometry( size/3, 0);
  let geometryCenter = new THREE.DodecahedronGeometry( size/2.5, 0);


  let multiColor = colorByPitchMulti();
  let pitchColor = colorByPitch();

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material2 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(pitchColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });

  material3 = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(multiColor)
      },
      color2: {
        value: new THREE.Color(objColor1)
      }
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    wireframe: false
  });



  compoCenter1 = new THREE.Mesh(geometry, material1);
  compoCenter1.position.set(-23, 0, 0);

  compoCenter2 = new THREE.Mesh(geometryCenter , material2);
  compoCenter2.position.set(0, 0, 0);

  compoCenter3 = new THREE.Mesh(geometry, material3);
  compoCenter3.position.set(23, 0, 0);

  group.add( compoCenter1 );
  group.add( compoCenter2 );
  group.add( compoCenter3 );
}


let musicName = document.getElementById("thefile")
let templateFile = document.getElementById("TemplateFile")

let visualizationList = []
let backgroundColorList = []
let objectColorList = []
let objectPositionXList = []
let objectPositionYList = []
let objectPositionZList = []
let timeTableList = [0]
let volumeList =[]

function loadTemplate(buttonId){
  identityVisualization.innerText = visualizationList[buttonId-1];
  setBgColor(backgroundColorList[buttonId-1]);
  setObjColor1(objectColorList[buttonId-1]);
  camera.position.x = objectPositionXList[buttonId-1];
  camera.position.y = objectPositionYList[buttonId-1];
  camera.position.z = objectPositionZList[buttonId-1];
  $("#slider-range").slider("values", [timeTableList[buttonId-1], timeTableList[buttonId]]);
  $("#playTime").val(sec2Timer(timeTableList[buttonId-1])+ " - "+sec2Timer(timeTableList[buttonId]));
  $("#volume").slider("value", volumeList[buttonId-1]);
  currentTempleteNumber = buttonId-1;
  //AudioObject.currentTime = timeTableList[buttonId-1];
}

function saveTemplate(){

  visualizationList.push(identityVisualization.innerText);
  backgroundColorList.push(bgColor);
  objectColorList.push(objColor1);
  objectPositionXList.push(camera.position.x);
  objectPositionYList.push(camera.position.y);
  objectPositionZList.push(camera.position.z);
  let finishedTime = $("#slider-range").slider("values")[1];
  timeTableList.push(finishedTime);
  $("#slider-range").slider("values", [finishedTime, finishedTime]);
  volumeList.push($("#volume").slider("value"))
}

templateSaveButton.addEventListener('click', function (){
  //console.log("check the template", currentTempleteNumber, visualizationList.length);
  if(identityVisualization.innerText != "" && AudioObject.src != ""){
    if(currentTempleteNumber == visualizationList.length){
      currentTempleteNumber += 1
      //console.log("check the template", currentTempleteNumber, visualizationList.length);
      console.log("Template Save Button Click")
      var button = document.createElement('button');
      button.type = 'button';
      button.style = "font-size: 1.4em;" + "background-color: " + saveButtonColorList[(currentTempleteNumber%(saveButtonColorList.length+1))]
      console.log("Finished Time:", timeTableList[currentTempleteNumber])
      
      if(currentTempleteNumber < 10){
        button.innerHTML = "0" + String(currentTempleteNumber);
      }
      else{
        button.innerHTML = String(currentTempleteNumber);
      }
      button.onclick = function() {
        loadTemplate(parseInt(button.innerHTML));
      };
      var container = document.getElementById('templateContainer');
      container.appendChild(button);
      saveTemplate()
    }
    else{
      visualizationList[currentTempleteNumber] = identityVisualization.innerText;
      backgroundColorList[currentTempleteNumber] = bgColor;
      objectColorList[currentTempleteNumber] = objColor1;
      objectPositionXList[currentTempleteNumber] = camera.position.x;
      objectPositionYList[currentTempleteNumber] = camera.position.y;
      objectPositionZList[currentTempleteNumber] = camera.position.z;
      volumeList[currentTempleteNumber] = $("#volume").slider("value");
      alert("Template Resaved");
    }
  }
})
function ButtonMaker(index){
  var button = document.createElement('button');
  button.type = 'button';
  button.style = "font-size: 1.4em;" + "background-color: " + saveButtonColorList[(index%(saveButtonColorList.length+1))]
  if(index < 10){
    button.innerHTML = "0" + String(index);
  }
  else{
    button.innerHTML = String(index);
  }
  button.onclick = function() {
    loadTemplate(parseInt(button.innerHTML));
  };
  var container = document.getElementById('templateContainer');
  container.appendChild(button);
}

function InitializeAllSetting(){
  //모든 버튼 내용 삭제
  var container = document.getElementById('templateContainer');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  currentTempleteNumber = 0;
  AudioObject.currentTime = 0;
  visualizationList = [];
  backgroundColorList = [];
  objectColorList = [];
  objectPositionXList = [];
  objectPositionYList = [];
  objectPositionZList = [];
  timeTableList = [0];
  volumeList = [];
  AudioObject.currentTime = 0;
}

// 객체를 JSON 파일로 다운로드하는 함수
function downloadJsonFile(filename, data) {
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

document.getElementById("TemplateJsonSave").addEventListener('click', function(){
  let JsonObject = {
    "music": musicName.files[0].name,
    "visualization" : visualizationList,
    "backgroundColorList" : backgroundColorList, 
    "objectColor" : objectColorList, 
    "objectPositionX" : objectPositionXList, 
    "objectPositionY" : objectPositionYList, 
    "objectPositionZ" : objectPositionZList,
    "timeTable" : timeTableList,
    "volume" : volumeList
  }
  downloadJsonFile("Template_file", JsonObject);
})


document.getElementById("TemplateJsonLoad").addEventListener('click', function(){
  templateFile.click();
})
templateFile.addEventListener('change', function(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const contents = event.target.result;
      const jsonObject = JSON.parse(contents);
      if(AudioObject.src == ""){
        alert("First, Need to input the music")
      }
      else if(musicName.files[0].name != jsonObject["music"]){
        alert("It doesn't match the music in this template.")
      }
      else{
        InitializeAllSetting();
        visualizationList = jsonObject["visualization"];
        backgroundColorList = jsonObject["backgroundColorList"];
        objectColorList = jsonObject["objectColor"];
        objectPositionXList = jsonObject["objectPositionX"];
        objectPositionYList = jsonObject["objectPositionY"];
        objectPositionZList = jsonObject["objectPositionZ"];
        timeTableList = jsonObject["timeTable"];
        volumeList = jsonObject["volume"];
        for(var i =1; i< visualizationList.length+1; i++){
          ButtonMaker(i)
        }
        loadTemplate(1);
      }
    };
    reader.readAsText(file);
  })

function sec2Timer(time){
  let m = String(parseInt(parseFloat(time)/60))
  let s = String(parseInt(parseFloat(time)%60))
  let _s = String(parseInt((parseFloat(time)-parseInt(time))*100))
  if(s.length <2){s = "0" + s}
  if(_s.length <2){_s = "0" + _s}
  return m + ":" +  s + ":" + _s
}

playButton.addEventListener("click", function(){
  var musicDuration = AudioObject.duration;
  var currentPlayTime = AudioObject.currentTime;
  $("#slider").slider("option", "max", musicDuration);
  $("#slider").slider("value", currentPlayTime);
  $("#rangeTime").val(sec2Timer(currentPlayTime));

  $("#slider-range").slider("option", "max", musicDuration);

  if(playButton.innerHTML == "Play"){
    playButton.innerHTML = "Pause"
    console.log("music play");
    audio.play();
  }
  else{
    playButton.innerHTML = "Play"
    console.log("music pause");
    audio.pause();
  }
})

AudioObject.addEventListener("timeupdate", function(){
  var currentPlayTime = AudioObject.currentTime;
  $("#slider").slider("value", currentPlayTime);
  $("#rangeTime").val(sec2Timer(currentPlayTime));
  if(currentPlayTime > timeTableList[timeTableList.length-1]){
    $("#slider-range").slider("values", [timeTableList[currentTempleteNumber], currentPlayTime]);
    $("#playTime").val(sec2Timer(timeTableList[currentTempleteNumber])+ " - "+sec2Timer(currentPlayTime));
    currentTempleteNumber = timeTableList.length-1
    //console.log(currentTempleteNumber);
  }
  else{
    

    for(let i=0; i<timeTableList.length; i++){
      if(currentPlayTime < timeTableList[i]){

        if(i-1 != currentTempleteNumber){
          loadTemplate(i);
          //console.log(currentTempleteNumber);
        }
        break;
      }
      //loadTemplate(i+2);
    }
  }
})


$("#slider").slider({
  value:0,
  min: 0,
  max: 0,
  step: 0.01,
  slide: function( event, ui ) {
      $( "#rangeTime" ).val(sec2Timer(ui.value));
      AudioObject.currentTime = ui.value;
      // console.log("test", AudioObject.currentTime);
      // console.log("duration", AudioObject.duration);
      // AudioObject.currentTime = parseFloat(ui.value);
  }
});
$("#rangeTime").val(sec2Timer($( "#slider" ).slider( "value" )));

// 음악 Template 범위 지정용 슬라이더랑 연결
$("#slider-range").slider({
    range: true,
    min: 0,
    max: 0,
    values: [0, 0],
    step: 0.01,
    slide: function(event, ui) {
      if(ui.values[0] != timeTableList[currentTempleteNumber]){
        $(this).slider("values", timeTableList[currentTempleteNumber], ui.values[1]);
        console.log("detected")
      }
      $("#playTime").val(sec2Timer(timeTableList[currentTempleteNumber]) + " - " + sec2Timer(ui.values[1]));
    }
  });
  $("#playTime").val(sec2Timer($("#slider-range").slider("values", 0)) + " - " + sec2Timer($("#slider-range").slider("values", 1)));


// volume control

$("#volume").slider({
  min: 0,
  max: 100,
  value: 0,
    range: "min",
  slide: function(event, ui) {
    setVolume(ui.value / 100);
  }
});

var myMedia = document.createElement('audio');
$('#player').append(myMedia);
myMedia.id = "myMedia";

//   playAudio(audio, 0);

//   function playAudio(fileName, myVolume) {
//           myMedia.src = fileName;
//           myMedia.setAttribute('loop', 'loop');
//       setVolume(myVolume);
//       myMedia.play();
//   }

function setVolume(myVolume) {
var myMedia = document.getElementById('audio');
myMedia.volume = myVolume;
}

















function animate() {
  requestAnimationFrame(animate);
  // 여기를 기점으로 색깔 등 요소 변경을 추가하면됨
  FrameRate = FrameRate + 1
  
  if (FrameRate % 4 == 0){

        // music rendering
        if (dataArray){
          analyser.getByteFrequencyData(dataArray);
          pitchDetector();

          // effect: Scale
          if (identityVisualization.innerText == 'circle-scale'){
              deleteBasics();
              createCircleScale();
              render();
          } else if (identityVisualization.innerText == 'triangle-scale'){
              deleteBasics();
              createTriangleScale();
              render();
          } else if (identityVisualization.innerText == 'rectangle-scale'){
              deleteBasics();
              createRectangleScale();
              render();
          } else if (identityVisualization.innerText == 'pentagon-scale'){
              deleteBasics();
              createPentagonScale();
              render();
          } else if (identityVisualization.innerText == 'sphere-scale'){
              deleteBasics();
              createSphereScale();
              render();
          } else if (identityVisualization.innerText == 'cone-scale'){
              deleteBasics()
              createConeScale();
              render();
          } else if (identityVisualization.innerText == 'box-scale'){
              deleteBasics();
              createBoxScale();
              render();
          } else if (identityVisualization.innerText == 'dode-scale'){
              deleteBasics();
              createDodecahedronScale();
              render();
          }

          // effect: Blink
          if (identityVisualization.innerText == 'circle-blink'){
              deleteBasics();
              createCircleBlink();
              render();
          } else if (identityVisualization.innerText == 'triangle-blink'){
              deleteBasics();
              createTriangleBlink();
              render();
          } else if (identityVisualization.innerText == 'rectangle-blink'){
              deleteBasics();
              createRectangleBlink();
              render();
          } else if (identityVisualization.innerText == 'pentagon-blink'){
              deleteBasics();
              createPentagonBlink();
              render();
          } else if (identityVisualization.innerText == 'sphere-blink'){
              deleteBasics();
              createSphereBlink();
              render();
          } else if (identityVisualization.innerText == 'cone-blink'){
              deleteBasics()
              createConeBlink();
              render();
          } else if (identityVisualization.innerText == 'box-blink'){
              deleteBasics();
              createBoxBlink();
              render();
          } else if (identityVisualization.innerText == 'dode-blink'){
              deleteBasics();
              createDodecahedronBlink();
              render();
          }

          // effect: line
          if (identityVisualization.innerText == 'circle-line'){
            deleteBasics();
            createCircleLine();
            render();
        } else if (identityVisualization.innerText == 'triangle-line'){
            deleteBasics();
            createTriangleLine();
            render();
        } else if (identityVisualization.innerText == 'rectangle-line'){
            deleteBasics();
            createRectangleLine();
            render();
        } else if (identityVisualization.innerText == 'pentagon-line'){
            deleteBasics();
            createPentagonLine();
            render();
        } 



        // effect: Bloom
        if (identityVisualization.innerText == 'circle-bloom'){
            deleteBasics();
            createCircleBloom();
            render();
            bloomComposer.render();
        } else if (identityVisualization.innerText == 'triangle-bloom'){
            deleteBasics();
            createTriangleBloom();
            render();
            bloomComposer.render();
        } else if (identityVisualization.innerText == 'rectangle-bloom'){
            deleteBasics();
            createRectangleBloom();
            render();
            bloomComposer.render();
        } else if (identityVisualization.innerText == 'pentagon-bloom'){
            deleteBasics();
            createPentagonBloom();
            render();
            bloomComposer.render();
        } else if (identityVisualization.innerText == 'sphere-bloom'){
            deleteBasics();
            createSphereBloom();
            render();
            bloomComposer.render();
        } else if (identityVisualization.innerText == 'cone-bloom'){
            deleteBasics()
            createConeBloom();
            render();
            bloomComposer.render();
        } else if (identityVisualization.innerText == 'box-bloom'){
            deleteBasics();
            createBoxBloom();
            render();
            bloomComposer.render();
        } else if (identityVisualization.innerText == 'dode-bloom'){
            deleteBasics();
            createDodecahedronBloom();
            render();
            bloomComposer.render();
        }


        // effect: Gradient
        if (identityVisualization.innerText == 'circle-gradient'){
            deleteBasics();
            createCircleGradient();
            render();
        } else if (identityVisualization.innerText == 'triangle-gradient'){
            deleteBasics();
            createTriangleGradient();
            render();
        } else if (identityVisualization.innerText == 'rectangle-gradient'){
            deleteBasics();
            createRectangleGradient();
            render();
        } else if (identityVisualization.innerText == 'pentagon-gradient'){
            deleteBasics();
            createPentagonGradient();
            render();
        } else if (identityVisualization.innerText == 'sphere-gradient'){
            deleteBasics();
            createSphereGradient();
            render();
        } else if (identityVisualization.innerText == 'cone-gradient'){
            deleteBasics()
            createConeGradient();
            render();
        } else if (identityVisualization.innerText == 'box-gradient'){
            deleteBasics();
            createBoxGradient();
            render();
        } else if (identityVisualization.innerText == 'dode-gradient'){
            deleteBasics();
            createDodecahedronGradient();
            render();
        }


        // effect: Horizontal
        if (identityVisualization.innerText == 'circle-horizontal'){
          deleteBasics();
          createCircleHorizontal();
          render();
        } else if (identityVisualization.innerText == 'triangle-horizontal'){
            deleteBasics();
            createTriangleHorizontal();
            render();
        } else if (identityVisualization.innerText == 'rectangle-horizontal'){
            deleteBasics();
            createRectangleHorizontal();
            render();
        } else if (identityVisualization.innerText == 'pentagon-horizontal'){
            deleteBasics();
            createPentagonHorizontal();
            render();
        } else if (identityVisualization.innerText == 'sphere-horizontal'){
            deleteBasics();
            createSphereHorizontal();
            render();
        } else if (identityVisualization.innerText == 'cone-horizontal'){
            deleteBasics()
            createConeHorizontal();
            render();
        } else if (identityVisualization.innerText == 'box-horizontal'){
            deleteBasics();
            createBoxHorizontal();
            render();
        } else if (identityVisualization.innerText == 'dode-horizontal'){
            deleteBasics();
            createDodecahedronHorizontal();
            render();
        }

    
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