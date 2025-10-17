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
alunos.unshift('Fábio'); // Adiciona Fábio no início do array
console.log(alunos);

alunos.pop(); // Remove o último elemento do array
console.log(alunos);
const removido = alunos.pop(); // Remove o último elemento do array e armazena na variável removido
console.log(removido);
console.log(alunos);

delete alunos[1]; // Remove o elemento na posição 1, mas deixa um "buraco" (undefined)
console.log(alunos);
console.log(alunos[1]); // undefined
console.log(alunos.slice(0, 3)); // Mostra os elementos do índice 0 ao 2

console.log(typeof alunos); // object
console.log(alunos instanceof Array); // true