/*Faça um programa que leia um número inteiro positivo n e calcule a soma dos n
primeiros números naturais.*/

//informe o numero n = soma de 0 ate n

let n = Number(prompt('digite um numero inteiro natural positivo'))
let soma = 0

//2vars
//laço de repetição 

for(let i = 0; i <= n; i++){
    console.log(i)
    soma += i
}