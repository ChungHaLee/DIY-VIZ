// 이펙트 버튼 요소
const effectScaleButton = document.getElementById('effectScale');
const effectBlinkButton = document.getElementById('effectBlink');


// 보여지는 메뉴
const wholeMenu = document.getElementsByClassName('customMenu')[0]
const shapemenuScale = document.getElementById('shapeMenu-Scale')
const shapemenuBlink = document.getElementById('shapeMenu-Blink')


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








function changeDisplay(){
    if (clickList.slice(-1)[0] == 'scale'){
        shapemenuScale.style.display = 'block'
        shapemenuBlink.style.display  = 'none';
    } else if (clickList.slice(-1)[0] == 'blink'){
        shapemenuBlink.style.display  = 'block';
        shapemenuScale.style.display  = 'none';
    }
}



function changeBorder(){
    if (clickList.slice(-1)[0] == 'scale'){
        effectScaleButton.style.border = '3px solid black';
        effectBlinkButton.style.border = 'none'

    } else if (clickList.slice(-1)[0] == 'blink'){
        effectBlinkButton.style.border = '3px solid black';
        effectScaleButton.style.border = 'none'

    }
}