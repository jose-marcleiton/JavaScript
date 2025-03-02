//seleção de section

let section = document.getElementsByTagName('section')
let primeiraSection = section[0]

primeiraSection.innerHTML = '<h1>Titulo filho da primeira section</h1>'

primeiraSection.innerHTML += '<p>paragrafo filho da primeira section</p>'

//CRIAÇÃO DE UM ELEMENTO

let titulo = document.createElement('h1')
//adicionar o conteudo
titulo.innerText = 'Titulo criado pela Criação de Elemento'
//adicionar o elemento filho ao pai
primeiraSection.appendChild(titulo)

//COMO CRIAR UM ELEMENTO DIRETAMENTO NO BODY DO HTML

letNovoBody = document.getElementsByTagName('body')[0]

let h5novoarquivo = document.createElement('h5')
h5novoarquivo.innerText = 'Titulo criado diretamente no body'
letNovoBody.appendChild(h5novoarquivo)

//TODO ELEMENTO CRIADO NO METODO CREAT ELEMENT SERA CRIADO SEMPRE APOS O ULTIMO ELEMENTO DO HTML

//Para o elemento de id listaDetarefas, peça ao usuario que digite 5 tarefas.Adicione elas a um array e depois transforme cada um dos elementos do array em um item de lista <li> e adicione ao elemento pai de id listaDetarefas.

//ciar um array vazio para receber as tarefas
//pedir ao usuario due difite uma tarefa e asiconar ao array(repetir 5x)
//selecionar o elemento pai
//criar um elemento filho, adicionar texto, adicionar o filho ao pai(repetir 5x)
let ol = document.getElementById('listaDeTarefas')

let tarefas = []

for (let i = 0; i < 5; i++) {
tarefas[i] = document.createElement('li')
tarefas[i].innerText = prompt('Escreva a ${i} tarefa')
ol.appendChild(tarefa[i])
}
 







