import { bgColor, objColor1, objColor2 } from './colorpicker'


const bgColorSaveButton = document.getElementById('backgroundColorSaveButton');
const objColor1SaveButton = document.getElementById('objectColor1SaveButton');
const objColor2SaveButton = document.getElementById('objectColor2SaveButton');



const birds = VANTA.BIRDS({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 600.00,
    minWidth: 600.00,
    scale: 1.00,
    scaleMobile: 1.00,
    
    colorMode: "lerpGradient",
    birdSize: 1.60,
    speedLimit: 7.00,
    separation: 1.00,
    alignment: 100.00,
    cohesion: 1.00
})



// 세이브하면 바꿔주기
bgColorSaveButton.addEventListener('click', function (){
    birds.setOptions({
        backgroundColor: bgColor
    })

})


objColor1SaveButton.addEventListener('click', function () {
    birds.setOptions({
        color1: objColor1
    })
})



objColor2SaveButton.addEventListener('click', function () {
    birds.setOptions({
        color2: objColor2
    })
})






