const display = document.querySelector('.visor');
const containerBotao = document.querySelector('.btn-container');

let valorAnterior = '0';
let valorAtual = '0';
let resultado = 0;
let operador = '';

function render(){
    display.innerText = valorAtual;
}

function clearState(){
    valorAnterior = '0';
    valorAtual = '0';
    resultado = 0;
    operador = '';
    render();
}

function backspace(){
    const tam = valorAtual.length;

    if (tam === 1){
        valorAtual='0'
    }
    else{
        valorAtual = valorAtual.substr(0, valorAtual.length - 1);
    }
    
    render();
}

function calcular(valor1, valor2, operador) {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    switch (operador) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case 'X':
            return valor1 * valor2;
        case '÷':
            return valor1 / valor2;   
    }
}

containerBotao.addEventListener('click', function(event) {
    const button = event.target;
    if(button.tagName === "BUTTON"){
        switch(button.innerText) {
            case '+':
                
                if (operador ===''){
                    
                    valorAnterior = valorAtual;
                    resultado = parseInt(valorAnterior);
                }
                else{
                    resultado = calcular(valorAnterior, valorAtual, operador)
                    valorAnterior = resultado
                }
                valorAtual='0';
                operador = '+';
                render();
            break;
            case '-':
                if (operador ===''){
                    valorAnterior = valorAtual;
                    resultado = parseInt(valorAnterior);
                }
                else{
                    resultado = calcular(valorAnterior, valorAtual, operador)
                    valorAnterior = resultado
                }
                valorAtual='0';
                operador = '-';
                render();
            break;
            case 'X':
                if (operador ===''){
                    valorAnterior = valorAtual;
                    resultado = parseInt(valorAnterior);
                }
                else{
                    resultado = calcular(valorAnterior, valorAtual, operador)
                    valorAnterior = resultado
                }
                valorAtual='0';
                operador = 'X';
                render();
            break;
            case '÷':
                if (operador ===''){
                    valorAnterior = valorAtual;
                    resultado = parseInt(valorAnterior);
                }
                else{
                    resultado = calcular(valorAnterior, valorAtual, operador)
                    valorAnterior = resultado
                }
                valorAtual='0';
                operador = '÷';
                render();
            break;
            case 'C':
                clearState();
            break;
            case '←':
                backspace();
            break;
            case '=':
                if (operador === ''){
                    resultado = valorAtual;
                }
                else{
                    resultado = calcular(valorAnterior, valorAtual, operador);
                    console.log(resultado)
                }
                valorAtual= resultado;
                operador = '';
                render();
            break;
            default:
                if (valorAtual === '0'){
                    valorAtual = button.innerText;
                } else{
                    valorAtual += button.innerText;
                }
                render(); 
        }
    }

});