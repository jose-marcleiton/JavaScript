// a empresa cletinhoEletro tem no seu estoque alguns produtos que podem entrar para BlackFraude e deseja-se criar um programa que crie a lista de produtos com desconto de 10%

let produtos = [
    {nome:'teclado', preco: 150, quantidade: 15, cor: 'preto', marca: 'logitech'},
    {nome:'mouse', preco: 50, quantidade: 20, cor: 'preto', marca: 'logitech'},
    {nome:'monitor', preco: 500, quantidade: 10, cor: 'branco', marca: 'lg'},
    {nome:'celular', preco: 1500, quantidade: 5, cor: 'prata', marca: 'samsung'}
]

let produtosBlackFraude = produtos.map((objetos)=>{
    let desconto = {
        preco: objetos.preco*0.9,
        quantidade: objetos.quantidade,
        cor: objetos.cor,
        marca: objetos.marca
    }
    return desconto
})
console.log(produtosBlackFraude)


// utilizando o metodo map, crie um arrow function que retorne um novo array com os produtos com desconto de 10%