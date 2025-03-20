//email
let email = document.getElementById('email')

//mensagem
let mensagem = document.getElementById('texto')


//formulario para retira o evento pre definido
let formulario = document.querySelectorAll('form')[0]

//botão para adicionar o evento enviar do formulario

let btn = document.getElementById('btnEnviar')

//antes de mostrar uma mensagem no alert , verifique se existe uma mensagem no campo mensagem

function verificarMensagem(){
    let texto = mensagem.value

    if(texto.length > 0){
        console.log('existe uma mensagem')
        return true
}
    else{
        console.log('não existe uma mensagem')
        return false
    }
}

function EnviarFormulario(){
    let temMensagem = 

    //se a mensagem for completa, limpe os campos

    //so deixa o conteudo do campo mensagem vazio
    mensagem.value = ""
    email.value = ""
    
    verificarMensagem()

    if(temMensagem){
        alert('Mensagem enviada com sucesso')
    }
    else{
        alert('Digite uma mensagem')
    }

}
btn.addEventListener('click', EnviarFormulario)

//remoção do evento pre definido, evitando que os campos do formulario seja excluido

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
})