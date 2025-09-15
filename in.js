const botonNumero = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;

botonNumero.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    });
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    });
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDispley();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDispley();
});

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDispley();
}

function actualizarDispley(){
    result.value = opeActual;
}

function selectOperacion(op){
    if(opeActual === '')return;
    if(opeAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;    
        case 'x':
            calculo = anterior * actual;
            break;   
         case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    } 
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

clear();