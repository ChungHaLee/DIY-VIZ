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



// Effect: Gradient
const circleButtonGradient = document.getElementById('shapeCircle-Gradient');
const triangleButtonGradient = document.getElementById('shapeTriangle-Gradient');
const rectangleButtonGradient= document.getElementById('shapeRectangle-Gradient');
const pentagonButtonGradient = document.getElementById('shapePentagon-Gradient');
const sphereButtonGradient = document.getElementById('shapeSphere-Gradient');
const coneButtonGradient = document.getElementById('shapeCone-Gradient');
const boxButtonGradient = document.getElementById('shapeBox-Gradient');
const dodeButtonGradient = document.getElementById('shapeDodecahedron-Gradient');



const templateSaveButton = document.getElementById("templateSave");
const AudioObject = document.getElementById("audio");
const filepath = document.getElementById("filepath");
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
  
  
  
function createPentagonBlink(){

    scene.background = new THREE.Color( bgColor );

    geometry = new THREE.CircleGeometry(  10, 5 );
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
  
  
  
  
// 3D 도형

function createSphereBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.SphereGeometry(  10, 64, 32 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
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

    scene.add(pointLight);

    group.add( compoCenter );
}
  
  
function createConeBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.ConeGeometry( 10, 10, 3 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
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

    scene.add(pointLight);

    group.add( compoCenter );

}
  
function createBoxBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.BoxGeometry(  10,  10,  10 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
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

    scene.add(pointLight);

    group.add( compoCenter );


}
  
  
function createDodecahedronBlink(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.DodecahedronGeometry( 10, 0);
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
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

    scene.add(pointLight);

    group.add( compoCenter );
}



// Effect 4: Gradient
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
    material = new THREE.ShaderMaterial({
      });

    compoCenter = new THREE.Mesh(geometry, material);
    compoCenter.position.set(1, 0, 0);

    scene.add(pointLight);

    group.add( compoCenter );
}
  
  
function createConeGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.ConeGeometry( 10, 10, 3 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
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

    scene.add(pointLight);

    group.add( compoCenter );

}
  
function createBoxGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.BoxGeometry(  10,  10,  10 );
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
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

    scene.add(pointLight);

    group.add( compoCenter );


}
  
  
function createDodecahedronGradient(){

    scene.background = new THREE.Color( bgColor );
    geometry = new THREE.DodecahedronGeometry( 10, 0);
    material = new THREE.MeshPhongMaterial( { color: objColor1, emissive: objColor1, specular: objColor1, shininess: 30 } );
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

    scene.add(pointLight);

    group.add( compoCenter );
}




















let visualizationList = []
let backgroundColorList = []
let objectColorList = []
let objectPositionXList = []
let objectPositionYList = []
let objectPositionZList = []
let timeTableList = []




function loadTemplate(buttonId){
  console.log("Load Button Id : ",buttonId);
  identityVisualization.innerText = visualizationList[buttonId-1];
  setBgColor(backgroundColorList[buttonId-1]);
  setObjColor1(objectColorList[buttonId-1]);
  camera.position.x = objectPositionXList[buttonId-1];
  camera.position.y = objectPositionYList[buttonId-1];
  camera.position.z = objectPositionZList[buttonId-1];
  $("#slider-range").slider("values", timeTableList[buttonId-1]);
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
  let timeVector = $("#slider-range").slider("values");
  timeTableList.push(timeVector);
  $("#slider-range").slider("values", [timeVector[1], musicDuration]);
  console.log($("#slider-range").slider("values"));
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
  if(identityVisualization.innerText != "" && AudioObject.src != ""){
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

function sec2Timer(time){
  let m = String(parseInt(parseFloat(time)/60))
  let s = String(parseInt(parseFloat(time)%60))
  let _s = String(parseInt((parseFloat(time)-parseInt(time))*100))
  if(s.length <2){s = "0" + s}
  if(_s.length <2){_s = "0" + _s}
  return m + ":" +  s + ":" + _s
}

// AudioObject.addEventListener("change", function (){
//   console.log("Audio Changed", AudioObject.src)
// })

// AudioObject.addEventListener('click', function (){
//   console.log("test", AudioObject.currentTime)
// })
AudioObject.addEventListener("change", function (){
  musicDuration = AudioObject.duration;
  console.log("test", musicDuration);
})




// 음악 시간 컨트롤용 슬라이더
$("#slider").slider({
  value:0,
  min: 0,
  max: musicDuration,
  step: 0.01,
  slide: function( event, ui ) {
      $( "#rangeTime" ).val(sec2Timer(ui.value));
      console.log("test", AudioObject.currentTime);
      console.log("duration", AudioObject.duration);
      //AudioObject.currentTime = parseFloat(ui.value);
  }
});
$("#rangeTime").val(sec2Timer($( "#slider" ).slider( "value" )));

// 음악 Template 범위 지정용 슬라이더랑 연결
$("#slider-range").slider({
    range: true,
    min: 0,
    max: musicDuration,
    values: [0, musicDuration],
    step: 0.01,
    slide: function(event, ui) {
        $("#playTime").val(sec2Timer(ui.values[0]) + " - " + sec2Timer(ui.values[1]));
    }
  });
  $("#playTime").val(sec2Timer($("#slider-range").slider("values", 0)) + " - " + sec2Timer($("#slider-range").slider("values", 1)));












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