/*-- Crie um formulário que tenha os campos nome, email e telefone -->
    <!-- Esse formulário terá por ojetivo cadastrar os usuários em uma lista usuários -->

    -- let usuarios = [
     {nome: 'nomeUsuario1', email: 'emailUsuario1', telefone: 'telefoneUsuario1'},
     {nome: 'nomeUsuario2', email: 'emailUsuario2', telefone: 'telefoneUsuario2'}] -->

    <!-- a função validarCampos irá verificar se todos os campos foram preenchidos e retornar true ou false -->
<!-- a função cadastrarUsuario irá adicionar um novo usuário na lista caso todos os campos sejam preenchidos -->

    -- usuarios.push({objeto}) -->

    */

let formulário = document.querySelector('form');

let btnEnviar = document.querySelector('#btnEnviar');
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');

function validarCampos() {
    if ((nome.value).length >0 && (email.value).length > 0 && (telefone.value).length ==14){
        console.log('Campos preenchidos');
        return true;
    } 
    else{
        console.log('Campos não preenchidos');
        return false;
    }
}

function cadastrarUsuario() {
    if(validarCampos()){
        let usuario = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value
        }
        usuario.push(Novousuario);
        alert('Usuário cadastrado com sucesso');
    }
    else{
        alert('Preencha todos os campos');        
    }
}

formulario.addEventListener('submit', function(event)
{
   evento.preventDefault()
   
});
