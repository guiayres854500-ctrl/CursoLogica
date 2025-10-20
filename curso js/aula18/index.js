
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa1); // { nome: 'Luiz', sobrenome: 'Otávio', idade: 25 }
const pessoa2 = criaPessoa('Maria', 'Oliveira', 30);
const pessoa3 = criaPessoa('João', 'Silva', 20);
const pessoa4 = criaPessoa('Ana', 'Souza', 28);
const pessoa5 = criaPessoa('Pedro', 'Almeida', 35);

console.log(pessoa2, pessoa3, pessoa4, pessoa5);