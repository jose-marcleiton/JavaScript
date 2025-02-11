
let numeros = [1,2,3,4,5]
function dobrar(numero){
    console.log(numero * 2)
}
numeros.forEach(dobrar)


// uma loja tem um estoque de 10 produtos. Os preços estão em um array de 10 posicoes
// com o método forEach mostre no console:
//  o preço original, o preço com desconto de 10% para pagamentos a vista e o preço com adicional da maquineta (para parcelamentos) de 15% a mais.

let precosProdutos = [ 150, 280, 50, 100, 200, 300, 400, 500, 600, 700]
precosProdutos.forEach(function(precosProdutos){
console.log(`Preço original:${precosProdutos}`)
console.log(`Preço com desconto de 10% avista:${precosProdutos*0.1}`)
console.log(`Preço com adicional da maquineta de 15%:${precosProdutos*0.15}`)
})
