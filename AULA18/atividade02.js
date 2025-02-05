// uma turma tem 6 alunos
// cada aluno tem 3 notas
// todas essas informações devem ser armazenadas em um array
//  a primeira informação de cada aluno deve ser o nome, seguido pelas notas
// 

// você deverá calcular a média de cada aluno e adicionar como o 5º elemento do array
// ao final você deverá calcular a média geral da turma e exibir o resultado no console


     let alunos = [
    ['joao', 10, 8, 9],
    ['maria', 9, 7, 8],
    ['pedro', 8, 6, 7],
    ['ana', 7, 5, 6],
    ['carlos', 6, 4, 5],
    ['joana', 5, 3, 4]
]


for (let i = 0; i < alunos.length; i++){
    somaNotaGeral = 0
    for (let j = 1; j < alunos[i].length; j++){
        somaNotaGeral += alunos[i][j]
    }
    alunos[i].push(somaNotaGeral / 3)
}
