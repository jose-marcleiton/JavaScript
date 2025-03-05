/*
Para praticar o uso de eventos em formularios, crie um formulario que recebe o nome do usuario e dois campos de input numericos. 
  Crie dois botoes: somar e subtrair.
  Cada botão executará uma função que irá receber os valores dos inputs e executar a operação matemática correspondente, mostrando o resultado no alert
*/

//selecionar os elementos
//tags dos elementos do html
let nome = document.getElementById('nomeUser')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

//criar a função
let btnSomar = document.getElementById('btnSomar')

let formulario = document.getElementById('calculadora')

function somar(){
    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)

    alert(numero1 + numero2)
}

//função subtrair sera execultada no evento escultador de elementos

btnSomar.addEventListener('click',somar)
btnSubtrair.addEventListener('click',()=>{
    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)

    alert(numero1 - numero2)
})

//formulario prevent default ativo para nao apagar as informações dos campos digitados
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
})