const bgColorSaveButton = document.getElementById('backgroundColorSaveButton');
const objColor1SaveButton = document.getElementById('objectColor1SaveButton');
// const objColor2SaveButton = document.getElementById('objectColor2SaveButton');

var bgColor, objColor1, objColor2
var bgColorArr, objColor1Arr, objColor2Arr

objColor1 = '#FFFFFF'
bgColor = '#FFFFFF'

function rgbToHex([r, g, b]) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}


document.querySelector('#backgroundColor').addEventListener('click', e => {
  Coloris({
    themeMode: 'light',
    alpha: true,
    formatToggle: false
  });

});



document.querySelector('#objectColor1').addEventListener('click', e => {
  Coloris({
    themeMode: 'light',
    alpha: true,
    formatToggle: false
  });

});


// document.querySelector('#objectColor2').addEventListener('click', e => {
//   Coloris({
//     themeMode: 'light',
//     alpha: true,
//     formatToggle: false
//   });

// });

function setBgColor(color){
  bgColor = color
}
function setObjColor1(color){
  objColor1 = color
}

function colortoList(colorpick){
  let colors = colorpick.replace('rgb(', '').replace(')', '')
  let colorArr = colors.split(',')
  return colorArr
}


bgColorSaveButton.addEventListener('click', function (){
    bgColor = document.getElementsByClassName('clr-field')[0].style.color
    bgColorArr = colortoList(bgColor);
    bgColor = rgbToHex(bgColorArr);
    
})


objColor1SaveButton.addEventListener('click', function (){
    objColor1 = document.getElementsByClassName('clr-field')[1].style.color
    objColor1Arr = colortoList(objColor1);
    objColor1 = rgbToHex(objColor1Arr);
})


// objColor2SaveButton.addEventListener('click', function(){
//     objColor2 = document.getElementsByClassName('clr-field')[2].style.color
//     objColor2Arr = colortoList(objColor2);
//     objColor2 = rgbToHex(objColor2Arr);
// })





export { bgColor, objColor1, setBgColor, setObjColor1 };