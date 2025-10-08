// String, Number, Undefined, Null, Boolean, Symbol 
const nome = 'Luiz'; // string literal
const nome1 = "Luiz"; // string literal
const nome2 = `Luiz`; //template string ou template literal

const num1 = 10; // number literal
const num2 = 10.52; // ponto flutuante

let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória
// "undefined" significa que a variável foi declarada, mas não inicializada
// "null" é quando você deliberadamente quer zerar o valor de uma variável
const aprovado = true; // Boolean - true ou false (lógico)

console.log(typeof null, null); // em JS, o tipo de null é um "bug" da linguagem, que persiste por questões históricas
