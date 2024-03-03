const inpCal = document.getElementById('inpCal');
const consol = document.getElementById('consol');

inpCal.addEventListener('input', () => {
    inpCal.value = inpCal.value.replace(/[^0-9\+\-\%\/\(\)]/, '');
})
function deletAll(){
    inpCal.value = ''
    consol.textContent = ''
}
function prosent(){
    inpCal.value += '%'
}
function scb1(){
    inpCal.value += '('
}
function scb2(){
    inpCal.value += ')'
}
function star(){
    inpCal.value += '*'
}
function minus(){
    inpCal.value += '-'
}
function plus(){
    inpCal.value += '+'
}
function slech(){
    inpCal.value += '/'
}
function tochka(){
    inpCal.value += '.'
}

function seven(){
    inpCal.value += 7;
}
function eight(){
    inpCal.value += 8;
}
function nine(){
    inpCal.value += 9;
}
function six(){
    inpCal.value += 6;
}
function five(){
    inpCal.value += 5;
}
function four(){
    inpCal.value += 4;
}
function three(){
    inpCal.value += 3;
}
function two(){
    inpCal.value += 2;
}
function one(){
    inpCal.value += 1;
}
function zero(){
    inpCal.value += 0;
}
function twoZero(){
    inpCal.value += '00';
}
function deleteLastElem(){
    inpCal.value = inpCal.value.slice(0, inpCal.value.length - 1);
}

function result(){
    const check = inpCal.value[inpCal.value.length - 1];
    if(inpCal.value == ''){
        alert('Введите пожалуйсто число');
    }
    else if(check == '+' || check == '-' || check == '/' || check == '*' || check == '('){
        inpCal.value = inpCal.value.slice(0, inpCal.value.length - 1);
        consol.textContent = eval(inpCal.value).toFixed(1);
    }
    else{
        consol.textContent = eval(inpCal.value).toFixed(1);
    }
}


