import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { energy, dataArray, analyser, pitchDetector, myNote, octave } from './audio.js'
import { bgColor, objColor1, objColor2, setBgColor, setObjColor1 } from './colorpicker'




let controls;
let camera, scene, renderer;
let geometry, material, compoCenter;
let container;
let FrameRate = 0;

// let backgroundColor;

let group;
let ambientLight, spotLight, pointLight;
var pitchInfo;

let currentTempleteNumber = 0;
const saveButtonColorList = ["#FFCC99", "#FFCC00","#99FF99", "#9999FF", "#666699", "#FF66FF", "#FF9999"]

// html 버튼 요소
const circleButtonScale = document.getElementById('shapeCircle-Scale');
const triangleButtonScale = document.getElementById('shapeTriangle-Scale');
const rectangleButtonScale = document.getElementById('shapeRectangle-Scale');
const pentagonButtonScale = document.getElementById('shapePentagon-Scale');
const sphereButtonScale = document.getElementById('shapeSphere-Scale');
const coneButtonScale = document.getElementById('shapeCone-Scale');
const boxButtonScale = document.getElementById('shapeBox-Scale');
const dodeButtonScale = document.getElementById('shapeDodecahedron-Scale');


const templateSaveButton = document.getElementById("templateSave")
const templateButton1 = document.getElementById("template1")


// 시각화 구분자 단어
let identityVisualization = document.getElementById('identityVisual');


// 버튼 클릭에 따라 보여주는 시각화가 달라지는 함수
function optionalVisualization(){
  circleButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'circle';
  })

  triangleButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle';
  })

  rectangleButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle';
  })

  pentagonButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon';
  })

  sphereButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'sphere';
  })

  coneButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'cone'
  })

  boxButtonScale.addEventListener('click', function( ){
    identityVisualization.innerText = 'box'
  })

  dodeButtonScale.addEventListener('click', function (){
    identityVisualization.innerText = 'dode'
  })
}




// init function
function init() {
    scene = new THREE.Scene();
    // canvas
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(800, 600);


    camera = new THREE.PerspectiveCamera(70, renderer.domElement.width/renderer.domElement.height, 2, 2000);
    camera.position.set(0, 10, 30);
  
    container = document.getElementById('shape-canvas')
    
    container.appendChild( renderer.domElement )
    
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputEncoding = THREE.sRGBEncoding;

    // ambientLight = new THREE.AmbientLight(0xaaaaaa);
    // scene.add(ambientLight);
  
    // spotLight = new THREE.SpotLight(0xffffff);
    // spotLight.intensity = 0.9;
    // spotLight.position.set(-10, 40, 20);
  
    // spotLight.castShadow = true;
    // scene.add(spotLight);

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


// 2D 도형


function createCircle(){
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
  material.opacity = 0


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  group.add( compoCenter );
}


function createTriangle(){
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
  material.opacity = 0


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );

}


function createRectangle(){

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
  material.opacity = 0


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );

}



function createPentagon(){

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
  material.opacity = 0


  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);


  group.add( compoCenter );
  
}




// 3D 도형

function createSphere(){
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
  material.opacity = 0

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  scene.add(pointLight);

  group.add( compoCenter );
}


function createCone(){
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

function createBox(){
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
  material.opacity = 0

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  scene.add(pointLight);

  group.add( compoCenter );


}


function createDodecahedron(){

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
  material.opacity = 0

  compoCenter = new THREE.Mesh(geometry, material);
  compoCenter.position.set(1, 0, 0);

  scene.add(pointLight);

  group.add( compoCenter );
}

let visualizationList = []
let backgroundColorList = []
let objectColorList = []
let objectPositionXList = []
let objectPositionYList = []
let objectPositionZList = []


function loadTemplate(buttonId){
  console.log("Load Button Id : ",buttonId);
  identityVisualization.innerText = visualizationList[buttonId-1];
  setBgColor(backgroundColorList[buttonId-1]);
  setObjColor1(objectColorList[buttonId-1]);
  camera.position.x = objectPositionXList[buttonId-1];
  camera.position.y = objectPositionYList[buttonId-1];
  camera.position.z = objectPositionZList[buttonId-1];
  console.log(camera.position.x);
  console.log(camera.position.y);
  console.log(camera.position.z);

  //console.log("Load Button Id : ",buttonId);
  //console.log("-------load Template-------");
  //console.log("visualization Type: ", identityVisualization.innerText);
  //console.log("background Color : ", bgColor);
  //console.log("object Color : ", objColor1);
  //console.log(controls.object.position);
  //console.log("---------------------------");
}

function saveTemplate(){
  visualizationList.push(identityVisualization.innerText);
  backgroundColorList.push(bgColor);
  objectColorList.push(objColor1);
  objectPositionXList.push(camera.position.x);
  objectPositionYList.push(camera.position.y);
  objectPositionZList.push(camera.position.z);
  console.log(objectPositionXList);
  console.log(objectPositionYList);
  console.log(objectPositionZList);
  //console.log("-------Save Template-------");
  //console.log("visualization Type: ", identityVisualization.innerText);
  //console.log("background Color : ", bgColor);
  //console.log("object Color : ", objColor1);
  //console.log(controls.object.position);
  //console.log("---------------------------");
}

templateSaveButton.addEventListener('click', function (){
  if(identityVisualization.innerText != "" && document.getElementById("audio").src != ""){
    currentTempleteNumber += 1
    console.log("Template Save Button Click")
    var button = document.createElement('button');
    button.type = 'button';
    button.style = "font-size: 1.4em;" + "background-color: " + saveButtonColorList[(currentTempleteNumber%(saveButtonColorList.length+1))]
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
})














function animate() {
  requestAnimationFrame(animate);
  // 여기를 기점으로 색깔 등 요소 변경을 추가하면됨
  FrameRate = FrameRate + 1
  
  if (FrameRate % 4 == 0){

        // music rendering
        if (dataArray){
          analyser.getByteFrequencyData(dataArray);
          pitchDetector();
    
    
          if (identityVisualization.innerText == 'circle'){
            // geometry rendering (firstly, delete the basic geometry in the base.)
              deleteBasics();
              createCircle();
              render();
          } else if (identityVisualization.innerText == 'triangle'){
              deleteBasics();
              createTriangle();
              render();
          } else if (identityVisualization.innerText == 'rectangle'){
              deleteBasics();
              createRectangle();
              render();
          } else if (identityVisualization.innerText == 'pentagon'){
              deleteBasics();
              createPentagon();
              render();
          } else if (identityVisualization.innerText == 'sphere'){
              deleteBasics();
              createSphere();
              render();
          } else if (identityVisualization.innerText == 'cone'){
              deleteBasics()
              createCone();
              render();
          } else if (identityVisualization.innerText == 'box'){
              deleteBasics();
              createBox();
              render();
          } else if (identityVisualization.innerText == 'dode'){
              deleteBasics();
              createDodecahedron();
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