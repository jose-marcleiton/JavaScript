//let cor = prompt('digite a cor da etiqueta do produto: \n Verde \n Amarelo \n Azul \n Vermelho')


//while(true){
    //cor = prompt('voce digitou uma cor inválida, digite novamente: \n Verde \n Amarelo \n Azul \n Vermelho')
//}

// conteudo For

//let num = 1
//while(num <= 3){
  //  console.log(num)
    //num++
//}
//console.log
//for{let 1 = 1; 1 <= 3; 1++){
   // console.log(1)}

 //  console.log('for')

  // let numUsuario = Number(prompt('digite um numero para finalizar o loop'))
  // let qtdnumero = 0
  // let somaNumeros = 0

  // for(let i = 0; i <= numUsuario; i++){
  //  console.log(i)
 //   qtdnumero +=1
  //  somaNumeros += i
    
  // }

   console.log('for')

   let N = Number(prompt('quantidade de alunos'))
   let somaNotas = 0
   let mediaNotas = 0

   for(let i = 0; i <= N; i++){
    let nota = Number(prompt('digite a nota do aluno' + i))
    console.log('nota do aluno' + i + ' ' + nota)
    somaNotas +=nota
    
   }
   mediaNotas = somaNotas / N
   console.log(`A media das notas ' eh ${mediaNotas}` )
