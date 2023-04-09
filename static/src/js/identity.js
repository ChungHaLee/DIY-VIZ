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
const sphereButtonLine = document.getElementById('shapeSphere-Line');
const coneButtonLine = document.getElementById('shapeCone-Line');
const boxButtonLine = document.getElementById('shapeBox-Line');
const dodeButtonLine = document.getElementById('shapeDodecahedron-Line');


// Effect: Particles
const circleButtonParticles = document.getElementById('shapeCircle-Particles')
const triangleButtonParticles = document.getElementById('shapeTriangle-Particles')
const rectangleButtonParticles = document.getElementById('shapeRectangle-Particles')
const pentagonButtonParticles = document.getElementById('shapePentagon-Particles')
const sphereButtonParticles = document.getElementById('shapeSphere-Particles')
const coneButtonParticles = document.getElementById('shapeCone-Particles')
const boxButtonParticles = document.getElementById('shapeBox-Particles')
const dodeButtonParticles = document.getElementById('shapeDodecahedron-Particles')




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

  
  // Effect: Particles
  circleButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'circle-particles'
  })

  triangleButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'triangle-particles'
  })

  rectangleButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'rectangle-particles'
  })

  pentagonButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'pentagon-particles'
  })

  sphereButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'sphere-particles'
  })

  coneButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'cone-particles'
  })

  boxButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'box-particles'
  })

  dodeButtonParticles.addEventListener('click', function (){
    identityVisualization.innerText = 'dode-particles'
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


optionalVisualization();