// 이펙트 버튼 요소
const effectScaleButton = document.getElementById('effectScale');
const effectBlinkButton = document.getElementById('effectBlink');

const effectBloomButton = document.getElementById('effectBloom');
const effectGradientButton = document.getElementById('effectGradient');

// 보여지는 메뉴
const wholeMenu = document.getElementsByClassName('customMenu')[0];
const shapemenuScale = document.getElementById('shapeMenu-Scale');
const shapemenuBlink = document.getElementById('shapeMenu-Blink');
const shapemenuBloom = document.getElementById('shapeMenu-Bloom');
const shapemenuGradient = document.getElementById('shapeMenu-Gradient');



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
    } else if (clickList.slice(-1)[0] == 'blink'){
        shapemenuBlink.style.display  = 'block';
        shapemenuScale.style.display  = 'none';
        shapemenuGradient.style.display  = 'none';
        shapemenuBloom.style.display  = 'none';
    } else if (clickList.slice(-1)[0] == 'bloom'){
        shapemenuBloom.style.display  = 'block';
        shapemenuGradient.style.display = 'none';
        shapemenuScale.style.display  = 'none';
        shapemenuBlink.style.display  = 'none';
    } else if (clickList.slice(-1)[0] == 'gradient'){
        shapemenuGradient.style.display  = 'block';
        shapemenuScale.style.display  = 'none';
        shapemenuBlink.style.display  = 'none';
        shapemenuBloom.style.display  = 'none';
    }
}



function changeBorder(){
    if (clickList.slice(-1)[0] == 'scale'){
        effectScaleButton.style.border = '3px solid black';
        effectBlinkButton.style.border = 'none'
        effectGradientButton.style.border = 'none';
        effectBloomButton.style.border = 'none'

    } else if (clickList.slice(-1)[0] == 'blink'){
        effectBlinkButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none'
        effectGradientButton.style.border = 'none';
        effectBloomButton.style.border = 'none'

    } else if (clickList.slice(-1)[0] == 'bloom'){
        effectBloomButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none'
        effectGradientButton.style.border = 'none'
        effectBlinkButton.style.border = 'none'

    } else if (clickList.slice(-1)[0] == 'gradient'){
        effectGradientButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none'
        effectBloomButton.style.border = 'none'
        effectBlinkButton.style.border = 'none'

    }
}