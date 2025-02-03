function saudacao(nome, turno) {
    if (turno === 'manha') {
        console.log(`Bom dia, ${nome}`);

    }else if(turno === 'tarde'){
        console.log(`Boa tarde, ${nome}`);

    }else if(turno === 'noite'){
        console.log(`Boa noite, ${nome}`);

    }else{
        console.log('Insira uma opcao válida');
        
    }

}

saudacao('Marcleiton')