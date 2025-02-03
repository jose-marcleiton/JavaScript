//Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000). Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

let clientes = 5
let faturamentoLojaA = 0
let faturamentoLojaB = 54000

for (let i = 1; i <= clientes; i++) {
    console.log('cliente ' + i)
    let compra = Number(prompt(`Digite o valor da compra do cliente n° ${i}`))
    faturamentoLojaA += compra 

}
if (faturamentoLojaA > faturamentoLojaB) {
    console.log(`O faturamento da loja A foi superior ao faturamento da loja B. O faturamento da loja A foi de R$ ${faturamentoLojaA} e o faturamento da loja B foi de R$ ${faturamentoLojaB}.`)
}
else if (faturamentoLojaA < faturamentoLojaB) {
    console.log(`O faturamento da loja A foi inferior ao faturamento da loja B. O faturamento da loja A foi de R$ ${faturamentoLojaA} e o faturamento da loja B foi de R$ ${faturamentoLojaB}.`)
}
else {
    console.log(`O faturamento da loja A foi igual ao faturamento da loja B. O faturamento da loja A foi de R$ ${faturamentoLojaA} e o faturamento da loja B foi de R$ ${faturamentoLojaB}.`)
}
