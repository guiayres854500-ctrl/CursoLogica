/*
Primitivos (imutáveis) - number, string, boolean, undefined, null, symbol (ES6) e bigint (ES11) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Luiz',
    sobrenome: "Otávio",
};
const b = {...a}; // Cópia por referência

a.nome = 'João';
console.log(a); // { nome: 'João', sobrenome: 'Otávio' }
console.log(b); // { nome: 'Luiz', sobrenome: 'Otávio' }