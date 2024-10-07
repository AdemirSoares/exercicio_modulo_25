// const alunos = [
//     { nome: 'Arthur', nota: 6 },
//     { nome: 'Rebeca', nota: 10 },
//     { nome: 'Yanara', nota: 8 },
//     { nome: 'Tayane', nota: 5 },
//     { nome: 'Ademar', nota: 4 },
//     { nome: 'Tereza', nota: 3 },
//     { nome: 'Adelino', nota: 9 },
//     { nome: 'Ademir', nota: 10 },
//     { nome: 'Batista', nota: 3 },
//     { nome: 'Helena', nota: 9 }
// ];

// const consultaAlunosAprovados = (alunos) =>
//     alunos.filter(aluno => aluno.nota >= 6);

// const alunosAprovados = consultaAlunosAprovados(alunos);    

// console.log(alunosAprovados);

// Array de objetos com os alunos e suas notas
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 6 },
    { nome: 'Pedro', nota: 4 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Usando a função e exibindo o resultado
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);