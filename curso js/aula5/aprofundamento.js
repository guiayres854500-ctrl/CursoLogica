let nome; // Declarou a variável
nome = 'João'; // Iniciou a viariável
console.log(nome); 
console.log(nome, 'comeu um pastel de queijo');
nome = 'Otávio'; // A partir deste momento, a variável 'nome' passará a possuir outro valor
console.log(nome);
console.log(nome, 'comeu um pastel de queijo');

/* Não podemos criar variáveis com palavras reservadas
"let" é uma palavra reservada pela linguagem js*/

//let if; //SyntaxError: Unexpected token 'if'

// Variáveis precisam ter nome significativos
let nomeCliente = 'João';
console.log(nomeCliente);
// Facilita a identificação da variável em códigos maiores

// Não pode começar o nome de uma variável com um número
//let 1nome; // SyntaxError: Invalid or unexpected token

// Não podem conter espaços ou traços
//let nome-Cliente; // SyntaxError: Identifier 'nome' has already been declared

// Utilizamos (por convenção) camelCase
let nomeCompletoDoCliente = 'Luiz Otávio';
console.log(nomeCompletoDoCliente);

// Variáveis são Case-sensitive, o que significa que o maíusculo ou minusculo em uma letra faz diferença
let nomeCliente1 = 'Luis';
let nomecliente1 = 'Otávio';

console.log(nomeCliente1,',', nomecliente1);

// Não podemos redeclarar variáveis com 'let'
// Não utilize 'var', utilize 'let'