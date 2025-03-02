//Revisão de Aula
/*
let itenlista = document.getElementsByClassName('lista')
console.log(itenlista);

itenlista[0].classe.remove('vermelho');
itenlista[0].classe.add('azul');*/

//atividade 2
//para os elementos com classe lista, selecione todos eles, remova a classe vermelho e adicione a classe azul.
//remova a classe vermelho do primeiro
//adicionar a classe azul no primeiro

let ListadeItens = document.getElementsByClassName('lista')
console.log(ListadeItens);

ListadeItens[0].classList.remove('vermelho');
ListadeItens[0].classList.add('azul');

// para selecionar os elementos com id
// getElementById
//resgata um elemento pelo id e retorna um único elemento

let itemId = document.getElementById('primeiroItem')
console.log(itemId)
itemId.innerHTML = '<strong>item alterado pelo id<strong>'
console.log(itemId.innerHTML
)
console.log(itemId.innerText)

