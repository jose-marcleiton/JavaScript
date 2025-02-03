//alert('ola mundo')

//console.log('ola mundo')

let x = 10
x = 100
console.log(x)

// eu não posso redeclarar o let


var y = 20
var y = 'minha senha'
console.log(y)

//posso redeclarar o var



const pi = 3.14
console.log('pi')     
//pi = 'minha senha'

let nome = 'joao'
let idade = 20
let email = 'oZrGz@example.com'
const DataNascimento = '10/10/2011'

console.log(nome)
console.log(idade)
console.log(email)
console.log(DataNascimento)

let peso = Number(prompt('qual o seu peso'))
let altura = Number(prompt('qual a sua altura'))

let imc = peso / (altura) ** 2

if(isNaN(peso , altura)){
     alert('Exemplo: peso 72 e altura 1.65, não utilize virgula')
}

else if(imc < 18.5){
     alert('Abaixo do peso, parabêns!')
}

else if(imc < 25){
     alert('Peso normal, continue assim.')
}

else if(imc > 30){

    alert('Acima do peso, corre pro nutricionista!')
}

else{
     alert('Tente novamente')
}