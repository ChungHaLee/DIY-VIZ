// 이펙트 버튼 요소
const effectScaleButton = document.getElementById('effectScale');
const effectBlinkButton = document.getElementById('effectBlink');
const effectLineButton = document.getElementById('effectLine')
const effectBloomButton = document.getElementById('effectBloom');
const effectGradientButton = document.getElementById('effectGradient');

// 보여지는 메뉴
const wholeMenu = document.getElementsByClassName('customMenu')[0];

const shapemenuScale = document.getElementById('shapeMenu-Scale');
const shapemenuLine = document.getElementById('shapeMenu-Line');
const shapemenuBlink = document.getElementById('shapeMenu-Blink');
const shapemenuBloom = document.getElementById('shapeMenu-Bloom');
const shapemenuGradient = document.getElementById('shapeMenu-Gradient');



// 색상 메뉴
const bloom2D = document.getElementsByClassName('shapeButtonClass_2D');
const bloom3D = document.getElementsByClassName('shapeButtonClass_3D');



const bgColor = document.getElementById('backgroundColor');
const objColor1 = document.getElementById('objectColor1');

const bgSave = document.getElementById('backgroundColorSaveButton')
const obj1Save = document.getElementById('objectColor1SaveButton')




var hideColorMenuBG = function() {
    bgColor.style.visibility = 'hidden';
    bgSave.style.visibility = 'hidden';
    objColor1.style.visibility = 'visible';
    obj1Save.style.visibility = 'visible';
}


var hideColorMenuOBJ1 = function() {
    objColor1.style.visibility = 'hidden';
    obj1Save.style.visibility = 'hidden';
    bgColor.style.visibility = 'visible';
    bgSave.style.visibility = 'visible';
}


for (let i = 0; i < bloom2D.length; i++) {
    bloom2D[i].addEventListener('click', hideColorMenuBG, false);
}


for (let i = 0; i < bloom3D.length; i++) {
    bloom3D[i].addEventListener('click', hideColorMenuOBJ1, false);
}







let clickList = []


effectScaleButton.addEventListener('click', function(){
    clickList.push('scale')
    changeDisplay();
    changeBorder();
});

effectBlinkButton.addEventListener('click', function(){
    clickList.push('blink')
    changeDisplay();
    changeBorder();
});

effectLineButton.addEventListener('click', function(){
    clickList.push('line')
    changeDisplay();
    changeBorder();
})


effectBloomButton.addEventListener('click', function(){
    clickList.push('bloom')
    changeDisplay();
    changeBorder();
});

effectGradientButton.addEventListener('click', function(){
    clickList.push('gradient')
    changeDisplay();
    changeBorder();
});







function changeDisplay(){
    if (clickList.slice(-1)[0] == 'scale'){
        shapemenuScale.style.display = 'block'
        shapemenuBlink.style.display  = 'none';
        shapemenuGradient.style.display  = 'none';
        shapemenuBloom.style.display  = 'none';
        shapemenuLine.style.display  = 'none';

    } else if (clickList.slice(-1)[0] == 'blink'){
        shapemenuBlink.style.display  = 'block';
        shapemenuScale.style.display  = 'none';
        shapemenuGradient.style.display  = 'none';
        shapemenuBloom.style.display  = 'none';
        shapemenuLine.style.display  = 'none';

    } else if (clickList.slice(-1)[0] == 'line'){
        shapemenuLine.style.display  = 'block';
        shapemenuGradient.style.display = 'none';
        shapemenuScale.style.display  = 'none';
        shapemenuBlink.style.display  = 'none';
        shapemenuBloom.style.display  = 'none';

    } else if (clickList.slice(-1)[0] == 'bloom'){
        shapemenuBloom.style.display  = 'block';
        shapemenuGradient.style.display = 'none';
        shapemenuScale.style.display  = 'none';
        shapemenuBlink.style.display  = 'none';
        shapemenuLine.style.display  = 'none';

    } else if (clickList.slice(-1)[0] == 'gradient'){
        shapemenuGradient.style.display  = 'block';
        shapemenuScale.style.display  = 'none';
        shapemenuBlink.style.display  = 'none';
        shapemenuBloom.style.display  = 'none';
        shapemenuLine.style.display  = 'none';
        
    }
}



function changeBorder(){
    if (clickList.slice(-1)[0] == 'scale'){
        effectScaleButton.style.border = '3px solid black';
        effectBlinkButton.style.border = 'none';
        effectGradientButton.style.border = 'none';
        effectBloomButton.style.border = 'none';
        effectLineButton.style.border = 'none';

    } else if (clickList.slice(-1)[0] == 'blink'){
        effectBlinkButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none';
        effectGradientButton.style.border = 'none';
        effectBloomButton.style.border = 'none'
        effectLineButton.style.border = 'none';

    } else if (clickList.slice(-1)[0] == 'line'){
        effectLineButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none'
        effectGradientButton.style.border = 'none'
        effectBlinkButton.style.border = 'none'
        effectBloomButton.style.border = 'none'

    } else if (clickList.slice(-1)[0] == 'bloom'){
        effectBloomButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none';
        effectGradientButton.style.border = 'none';
        effectBlinkButton.style.border = 'none';
        effectLineButton.style.border = 'none';

    } else if (clickList.slice(-1)[0] == 'gradient'){
        effectGradientButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none';
        effectBloomButton.style.border = 'none';
        effectBlinkButton.style.border = 'none';
        effectLineButton.style.border = 'none';

    }
}