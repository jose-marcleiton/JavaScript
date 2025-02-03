let peso = Number(prompt('Digite seu peso'))
let altura = Number(prompt('Digite sua altura'))

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