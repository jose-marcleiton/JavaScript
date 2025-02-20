let numeros = [1,2,3,4,5]

let somaNumeros = numeros.reduce((soma,num)=>{
    return soma + num
})

console.log(somaNumeros)
console.log(numeros)


// ATIVIDADE DA AULA
// 
//  para o array de vendas do CleitinhoEletro do ano de 2024, exiba o total vendido nos 12 meses. Utilize reduce para isso.
// total2024

// let novaVariável = arrayReferencia.reduce((acumulador, itemArray) => {
// aplicação da função de callback e retorno do valor calculado   
//})

let vendas = [ 20000, 30000, 10000, 15000, 25000, 50000, 40000, 30000, 20000, 10000, 15000, 25000]
let total2024 = vendas.reduce((acumulador,itemArray)=>{
    return acumulador + itemArray
})
console.log(total2024)




