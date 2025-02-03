//function somar(a,b)

//let escolha = confirm('Deseja parar o loop?')

//let texto = prompt('Digite um texto')

//let retornoAlert = alert(texto)

//let retornoConsole = console.log(texto)

/*function somar(a,b){
   return a + b;
}
let resultado = somar(5,3)
console.log(resultado)

function subtrair(a,b){
    return a - b;
}


function multiplicar(a,b){
    return a * b;
}


function dividir(a,b){
    return a / b;
}
*/

function calculadora(){
    let numero1 = Number(prompt('Insira o primeiro numero: '))
    let numero2 = Number(prompt('Insira o segundo numero: '))
    let operacao = Number(prompt('Escolha a operacao a ser executada: \n 1 - ADICAO 2 - SUBTRACAO 3 - MULTIPLICACAO 4 - DIVISAO '))

    if(operacao === 1){
        return numero1 + numero2;
    }else if(operacao === 2){
        return numero1 - numero2;
    }else if(operacao === 3){
        return numero1 * numero2;
    }else if(operacao === 4 && n