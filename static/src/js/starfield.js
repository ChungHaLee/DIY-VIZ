import { bgColor, objColor1, objColor2 } from './colorpicker'


const bgColorSaveButton = document.getElementById('backgroundColorSaveButton');
const objColor1SaveButton = document.getElementById('objectColor1SaveButton');
const objColor2SaveButton = document.getElementById('objectColor2SaveButton');



const canvas = document.getElementById('starfield-canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth; //screen width
canvas.height = window.innerHeight; //screem height



// on mouse scroll changes speed and color
// 이 부분 수정하기


function starField_faster(){

  bgColorSaveButton.addEventListener('click', function (){
    c.fillStyle = bgColor
  })
  
  
  objColor1SaveButton.addEventListener('click', function () {
    c.strokeStyle= objColor1
  })
  
  speed = 0.5;

}

// function starField_plain(){
//   bgColorSaveButton.addEventListener('click', function (){
//     c.fillStyle = objColor2
//   })
  
  
//   objColor2SaveButton.addEventListener('click', function () {
//     c.strokeStyle= bgColor
//   })

//   speed *= 0.2;
// }

// function starField_slower(){
//     c.fillStyle = "#27187e";
//     c.strokeStyle = '#ff8600';
//     speed *= 0.5;
// }


// window.addEventListener('wheel', (event) => {
//     c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';
//     if (event.deltaY < 0) speed *= 1.1;
//     else speed *= 0.9;
//     if (speed < 0.01) speed = 0.01;
//     else if (speed > 0.1) speed = 0.1;
//   });

class Star {
  constructor() {
    //initializing
    this.x = Math.random()*canvas.width-canvas.width/6;  //random x
    this.y = Math.random()*canvas.height-canvas.height/6; //random y
    this.px, this.py;
    this.z = Math.random()*3; //random z    
  }
  
  update() {
    //stores previous x, y and z and generates new coordinates    
    this.px = this.x;
    this.py = this.y;
    this.z += speed;
    this.x += this.x*(speed*0.2)*this.z;
    this.y += this.y*(speed*0.2)*this.z;
    if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 ||
        this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {
      this.x = Math.random()*canvas.width-canvas.width/2;
      this.y = Math.random()*canvas.height-canvas.height/2;
      this.px = this.x;
      this.py = this.y;
      this.z = 0;
    }
  }
  
  //draws line from x,y to px,py
  show() {    
    c.lineWidth = this.z;
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.px, this.py);
    c.stroke();
  }
}

let speed = 0.04;
let stars = [];

//create 1500 stars (objects)
for (let i = 0; i < 1500; i++) stars.push(new Star());

// c.fillStyle = 'rgba(0, 0, 0, 0.1)';
// c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';

c.translate(canvas.width/2, canvas.height/2);

function draw() {
  //create rectangle
  c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  for (let s of stars) {
    s.update();
    s.show();
  }
  //infinte call to draw
  requestAnimationFrame(draw);
}



export { starField_faster, draw }