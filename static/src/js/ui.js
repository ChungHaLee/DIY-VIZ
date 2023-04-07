// 이펙트 버튼 요소
const effectButtonGroup = document.getElementsByClassName('effectButtonClass')
const effectScaleButton = document.getElementById('effectScale');
const effectBlinkButton = document.getElementById('effectBlink');
const effectLineButton = document.getElementById('effectLine')
const effectBloomButton = document.getElementById('effectBloom');
const effectGradientButton = document.getElementById('effectGradient');
const effectHorizontalButton = document.getElementById('effectHorizontal');


// 보여지는 메뉴
const wholeMenu = document.getElementsByClassName('customMenu')[0];

const shapemenuGroup = document.getElementsByClassName('shapeMenuClass');
const shapemenuScale = document.getElementById('shapeMenu-Scale');
const shapemenuLine = document.getElementById('shapeMenu-Line');
const shapemenuBlink = document.getElementById('shapeMenu-Blink');
const shapemenuBloom = document.getElementById('shapeMenu-Bloom');
const shapemenuGradient = document.getElementById('shapeMenu-Gradient');
const shapemenuHorizontal = document.getElementById('shapeMenu-Horizontal');



let clickList = []



// 색상 메뉴
const bloom2D = document.getElementsByClassName('shapeButtonClass_2D');
const bloom3D = document.getElementsByClassName('shapeButtonClass_3D');


const bgColor = document.getElementById('backgroundColor');
const objColor1 = document.getElementById('objectColor1');

const bgSave = document.getElementById('backgroundColorSaveButton')
const obj1Save = document.getElementById('objectColor1SaveButton')



function hideBG(){
    bgColor.style.visibility = 'hidden';
    bgSave.style.visibility = 'hidden';
    objColor1.style.visibility = 'visible';
    obj1Save.style.visibility = 'visible';
}


function hideOBJ(){
    objColor1.style.visibility = 'hidden';
    obj1Save.style.visibility = 'hidden';
    bgColor.style.visibility = 'visible';
    bgSave.style.visibility = 'visible';
}

function showALL(){
    objColor1.style.visibility = 'visible';
    obj1Save.style.visibility = 'visible';
    bgColor.style.visibility = 'visible';
    bgSave.style.visibility = 'visible';
}

var hideColorMenuBG = function() {
    if (clickList.slice(-1)[0] == 'Bloom'){
        hideBG();
    } 
}


var hideColorMenuOBJ1 = function() {
    console.log(clickList)
    if (clickList.slice(-1)[0] == 'Bloom'){
        hideOBJ();
    }
}







effectScaleButton.addEventListener('click', function(){
    clickList.push('Scale')
    changeDisplay('Scale');
    changeBorder('Scale');
    showALL();
});

effectBlinkButton.addEventListener('click', function(){
    clickList.push('Blink')
    changeDisplay('Blink');
    changeBorder('Blink');
    showALL();
});

effectLineButton.addEventListener('click', function(){
    clickList.push('Line')
    changeDisplay('Line');
    changeBorder('Line');
    showALL();
})


effectBloomButton.addEventListener('click', function(){
    clickList.push('Bloom')
    changeDisplay('Bloom');
    changeBorder('Bloom');
});

effectGradientButton.addEventListener('click', function(){
    clickList.push('Gradient')
    changeDisplay('Gradient');
    changeBorder('Gradient');
    showALL();
});

effectHorizontalButton.addEventListener('click', function(){
    clickList.push('Horizontal')
    changeDisplay('Horizontal');
    changeBorder('Horizontal');
    showALL();
})




function changeDisplay(identifier){
    for (let i=0; i < shapemenuGroup.length; i++ ){
        if (shapemenuGroup[i].id.slice(10, ) == identifier){
            shapemenuGroup[i].style.display = 'block'
        } else {
            shapemenuGroup[i].style.display = 'none'
        }
    }
}


function changeBorder(identifier){
    for (let i=0; i < effectButtonGroup.length; i++ ){
        if (effectButtonGroup[i].id.slice(6, ) == identifier){
            effectButtonGroup[i].style.border = '3px solid black';
        } else {
            effectButtonGroup[i].style.border = 'none';
        }
    }
}


for (let i = 0; i < bloom2D.length; i++) {
    bloom2D[i].addEventListener('click', hideColorMenuBG, false);
}


for (let i = 0; i < bloom3D.length; i++) {
    bloom3D[i].addEventListener('click', hideColorMenuOBJ1, false);
}