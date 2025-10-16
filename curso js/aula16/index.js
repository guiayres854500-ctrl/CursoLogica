// Aula 16 - Arrays em JavaScript

//            0123
const nome = 'Luiz';

//               0       1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[1]); // Maria
console.log(alunos[0]); // Luiz
console.log(alunos[2]); // João
console.log(alunos[3]); // undefined

alunos[3] = 'Fabio';   // Adiciona Fabio na posição 4
console.log(alunos);
alunos[alunos.length] = 'Luana'; // Adiciona Luana na última posição
console.log(alunos);
alunos.push('Otávio'); // Adiciona Otávio na última posição
console.log(alunos);

alunos.unshift('Luiza'); // Adiciona Luiza no início do array
console.log(alunos);