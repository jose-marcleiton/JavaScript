
let div = document.getElementById("retangulo");
function mudarCor(cor){
    div.style.backgroundColor = cor;
}


<form id="calculadora">
        <label for="nomeUser">nome</label>
        <input type="text" id="nomeUser"></label>
        <br>
        <label for="num1">numero 1</label>
        <input type="number" id="num1">
        <br>
        <label for="num2">numero 2</label>
        <input type="number" id="num2">
        <br>
        <button id="btnSomar">somar</button>
        <button id="btnSubtrair">subtrair</button>
    </form>
<!-- para praticar o uso de eventos em formularios crie um formulario que recebe o nome do usuario e dois campos de input numericos. 
     Crie dois botoes: somar e subtrair.
     Cada botão executará uma função que irá receber os valores dos inputs e executar a operação matemática correspondente, mostrando o resultado no alert --></input>