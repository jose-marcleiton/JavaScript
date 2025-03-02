//DOM - Document Object Model - É representação DO HTML no JS como Objeto.


//selecionar os elementos pelas TAGS
//Resgata todos os elementos com a tag passada e adiciona em um htmlCollection (array/lista)

//getElementsByTagName
let itemLista = document.getElementsByTagName('li')
console.log(itemLista)

itemLista[0].style.color = 'yellow'
//propriedade para manipular o conteudo de texto innerText

itemLista[0].innerText = 'fui alterado'

//selecionar o segundo paragrafo

/*let segundoParagrafo = document.getElementsByTagName('p')
console.log(segundoParagrafo)
segundoParagrafo[1].innerText = prompt('Digite um texto para o segundo paragrafo')*/

//selecionar os elementos pelas TAGS
//seleciona os elemento por classe e retorna um HTMLCollection

//getElementsByClassName

let itemClasseDestaque = document.getElementsByClassName('destaque')
console.log(itemClasseDestaque)

//metodos para a propriedade classList

console.log(itemClasseDestaque[0].classList)

//metodos para adicionar uma classe

itemClasseDestaque[0].classList.add('muitoEspecial')
console.log(itemClasseDestaque[0])

//metodos para remover uma classe
itemClasseDestaque[0].classList.remove('classe3')
console.log(itemClasseDestaque[0])
