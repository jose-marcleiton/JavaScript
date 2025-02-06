//Atividade 1

// crie um objeto chamado conta bancaria. Esse objeto deverá ter as seguintes propriedade: 
// titular, 
// tipo (conta corrente ou poupanca),
// saldo(valor disponível na conta), 
// limite(valor disponível para emprestimos), 
// debito (booleano associado ao debito )

// mostre no console as informações da conta no seguinte formato:
// `A conta do ${titular} tem o saldo de ${saldo} e o limite de crédio para emprestimos de ${limite}`


//Atividade 2
// crie 3 métodos: sacar, depositar e consultarSaldo. 
// O metodo sacar recebe um valor como parâmetro e verifica se o saldo da conta bancária é suficiente para realizar o saque.
// O metodo depositar recebe um valor como parâmetro e adiciona o valor ao saldo da conta.
// O metodo consultarSaldo mostra o saldo atual da conta e se há debito.


let contaBancaria = {
    titular: 'Jose',
    tipo: 'conta corrente',
    saldo: 2000,
    limiteParaEmprestimos: 1000,
    debito: true

}
/* console.log(`A conta do ${contaBancaria.titular} tem o saldo de ${contaBancaria.saldo} e o limite de crédio para emprestimos de ${contaBancaria.limiteParaEmprestimos}`) */


contaBancaria.Sacar = function (valor) {
    if (contaBancaria.saldo >= valor) {
        console.log(`Saque realizado com sucesso, seu saldo atual e de ${contaBancaria.saldo -= valor}`)
    } else {
        console.log('Saldo insuficiente')
    }
}

contaBancaria.Depositar = function (valor) {
    contaBancaria.saldo += valor
    console.log(`Deposito realizado com sucesso, seu saldo atual e de ${contaBancaria.saldo}`)
}

contaBancaria.ConsultarSaldo = function () {
    if (contaBancaria.debito) {
        console.log(`Seu saldo atual e de ${contaBancaria.saldo} com debito`)
    } else {
        console.log(`Seu saldo atual e de ${contaBancaria.saldo} sem debito`)                   
    
    }
}


contaBancaria.Sacar(1000)
contaBancaria.Depositar(1000)
contaBancaria.ConsultarSaldo()