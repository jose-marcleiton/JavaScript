
let div = document.getElementById("retangulo");

function mudarCor(cor){
    div.style.backgroundColor = cor

}

//foi criado a função

function LigarLampada(){
    let lampada = document.getElementById("lampada")
    lampada.src = "ligada.png"
}
//selecionar o elemento que vai execultar a função ligar lampada ao evento.
let botaoLigar = document.getElementById("botaoLigar")


//foi criado uma ef de desligar lampada
function DesligarLampada(){
    let lampada = document.getElementById("lampada")
    lampada.src = "desligada.png"
}

//adicionar o escultador de eventos que vai execultar a funcao ligar lampada

botaoLigar.addEventListener('mouseover', LigarLampada)

//adicionar o escultado de eventos para desligar a lampada

botaoLigar.addEventListener('click', ()=>{
    let lampada = document.getElementById("lampada")
    lampada.src = "desligada.png"
})
