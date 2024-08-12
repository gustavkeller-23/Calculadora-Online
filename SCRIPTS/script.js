
const display = document.getElementById("Insert");
const lastResult = document.getElementById("lastResults");


const signalMais = document.getElementById("plus");
const signalMenos = document.getElementById("menos");
const signalMultiplicador = document.getElementById("multiply");
const signalDivisor = document.getElementById("divisor");


var number1 = 0;
var number2 = 0;
var sinal = '!';


function numero(number){
    if(number1 == '0'){
        number1 = number;
        display.innerHTML = number1;
    }else{
        number1 = number1+number;
        display.innerHTML = number1;
    }
}

function operador(op){
    switch(sinal){
        case '!':
            sinal = op;
            changeSymbolDisplay(sinal);
            number2 = number1;
            console.log(number2);
            number1 = 0;
            break;
        case '+':
            sinal = op;
            changeSymbolDisplay(sinal);
            number2 = parseInt(number2) + parseInt(number1);
            number1 = 0;
            if (sinal === '='){
                lastResult.innerHTML = number2;
                reset();
            }
            break;
        case '-':
            sinal = op;
            changeSymbolDisplay(sinal);
            number2 = parseInt(number2) - parseInt(number1);
            number1 = 0;
            if (sinal === '='){
                lastResult.innerHTML = number2;
                reset();
            }
            break;
        case '*':
            sinal = op;
            changeSymbolDisplay(sinal);
            number2 = parseInt(number2) * parseInt(number1);
            number1 = 0;
            if (sinal === '='){
                lastResult.innerHTML = number2;
                reset();
            }
            break;
        case '/':
            sinal = op;
            changeSymbolDisplay(sinal);
            number2 = parseInt(number2) / parseInt(number1);
            number1 = 0;
            if (sinal === '='){
                lastResult.innerHTML = number2;
                reset();
            }
            break;
    }
}


function changeSymbolDisplay(sinal){
    switch(sinal){
        case '+':
            signalMais.style.color = "#000000";
            signalMenos.style.color = "#5e5e5e";
            signalMultiplicador.style.color = "#5e5e5e";
            signalDivisor.style.color = "#5e5e5e";
            break;
        case '-':
            signalMais.style.color = "#5e5e5e";
            signalMenos.style.color = "#000000";
            signalMultiplicador.style.color = "#5e5e5e";
            signalDivisor.style.color = "#5e5e5e";
            break;
        case '*':
            signalMais.style.color = "#5e5e5e";
            signalMenos.style.color = "#5e5e5e";
            signalMultiplicador.style.color = "#000000";
            signalDivisor.style.color = "#5e5e5e";
            break;
        case '/':
            signalMais.style.color = "#5e5e5e";
            signalMenos.style.color = "#5e5e5e";
            signalMultiplicador.style.color = "#5e5e5e";
            signalDivisor.style.color = "#000000";
            break;
    }
}


function reset(){
    number1 = 0;
    number2 = 0;
    sinal = '!';

    signalMais.style.color = "#5e5e5e";
    signalMenos.style.color = "#5e5e5e";
    signalMultiplicador.style.color = "#5e5e5e";
    signalDivisor.style.color = "#5e5e5e";

    display.innerHTML = number1;
}