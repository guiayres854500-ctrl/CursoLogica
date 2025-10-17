function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel); // undefined

// A função saudacao não retorna nenhum valor, 
// por isso a variável 'variavel' recebe 'undefined'.

function soma(x,y) {
    const resultado = x + y;
    return resultado;
}

soma(2, 2); 
console.log(soma(2, 2)); // 4

const resultado = soma();
console.log(resultado); // NaN
// A função soma espera dois argumentos, 
// mas nenhum foi fornecido, resultando em NaN (Not a Number).

function soma1(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
const resultado1 = soma1();
console.log(resultado1); // 2
// A função soma1 utiliza valores padrão para x e y, 
// então quando chamada sem argumentos, retorna 2.
console.log('------------------')

const raiz = function(n) {
    return n ** 0.5;
};
console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
// A função raiz calcula a raiz quadrada do número fornecido.

const raiz2 = n => n ** 0.5;
console.log(raiz2(25)); // 5
console.log(raiz2(36)); // 6
// A função raiz2 é uma versão simplificada da função raiz, 
// utilizando a sintaxe de arrow function.