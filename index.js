function delet(){
    let a = document.getElementById('inpCal');
    let b = document.getElementById('console');
    a.value = ''
    b.textContent = ''
}
function prosent(){
    let a = document.getElementById('inpCal');
    a.value += '%'
}
function scb1(){
    let a = document.getElementById('inpCal');
    a.value += '('
}
function scb2(){
    let a = document.getElementById('inpCal');
    a.value += ')'
}
function star(){
    let a = document.getElementById('inpCal');
    a.value += '*'
}
function minus(){
    let a = document.getElementById('inpCal');
    a.value += '-'
}
function plus(){
    let a = document.getElementById('inpCal');
    a.value += '+'
}
function slech(){
    let a = document.getElementById('inpCal');
    a.value += '/'
}
function tochka(){
    let a = document.getElementById('inpCal');
    a.value += '.'
}

function seven(){
    let a = document.getElementById('inpCal');
    a.value += 7;
}
function eight(){
    let a = document.getElementById('inpCal');
    a.value += 8;
}
function nine(){
    let a = document.getElementById('inpCal');
    a.value += 9;
}
function six(){
    let a = document.getElementById('inpCal');
    a.value += 6;
}
function five(){
    let a = document.getElementById('inpCal');
    a.value += 5;
}
function four(){
    let a = document.getElementById('inpCal');
    a.value += 4;
}
function three(){
    let a = document.getElementById('inpCal');
    a.value += 3;
}
function two(){
    let a = document.getElementById('inpCal');
    a.value += 2;
}
function one(){
    let a = document.getElementById('inpCal');
    a.value += 1;
}
function zero(){
    let a = document.getElementById('inpCal');
    a.value += 0;
}
function twoZero(){
    let a = document.getElementById('inpCal');
    a.value += '00';
}


function result(){
    let a = document.getElementById('inpCal').value;
    let ch = /\d/;
    if(a.match(ch) == null){
        alert('Введите пожалуйста число');
    }else{
        a.value = eval(a).toFixed(1);
    }   
}





// function gg(){
//     let a = document.getElementById('inp-cal').value;
//     console.log(eval(a))
// }