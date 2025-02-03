//REVISÃO

let nota 1 = Number(prompt('digite a primeira nota (entre 0 e 100)'))
let nota 2 = Number(prompt('digite a segunda nota (entre 0 e 100)'))
let nota 3 = Number(prompt('digite a terceira nota (entre 0 e 100)'))

let media = (nota1 *1 + nota2 *1 + nota3 *2) / (1 + 1 + 2)

if(media >= 60 ){
    window.alert(`aprovado sua media é'${media}`)
}
else{
    window.alert(`reprovado sua media é'${media}`)
}



//atividade13

let a = 50
let b = 32
let soma = a + b

//1° pergunta
let resposta
let acertos = 0
if(soma == soma){
    acertos+=1
    window.alert('Parabens, acertou! A soma ${a} + ${b} = ${soma}')
}

else{
    window.alert('que pena, errou! A soma'+a + ' + ' + b + ' = ' + soma)
}




//depois de resolver a primeira pergunta vamos mostrar a quantidade de acertos.



