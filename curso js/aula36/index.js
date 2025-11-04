// For in -> lê os indices ou chaves do objeto
//
const pessoa = {
    nome: 'Luiz',
    sobreNome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};

//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
//};