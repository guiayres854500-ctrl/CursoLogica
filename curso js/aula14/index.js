// IEEE 754-2008
// Números são representados internamente em binário (base 2)
// Precisão de 15 dígitos
// Operações matemáticas podem gerar resultados inesperados
let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2); // '12.5', converte num1 para string e concatena
console.log(typeof num1);
console.log(num1.toString(2)); // '1', converte num1 para binário
console.log(num2.toFixed(1)); // '2.5', limita num2 a 1 casa decimal
console.log(Number.isInteger(num1)); // true, verifica se num1 é um inteiro
console.log(Number.isInteger(num2)); // false, verifica se num2 é um inteiro 
let temp = num1 * 'Olá'; // NaN, operação inválida
console.log(temp);
console.log(Number.isNaN(temp)); // true, verifica se temp é NaN

let num3 = 0.7;
let num4 = 0.1;
// Problema de precisão
console.log(num3 + num4); // 0.799999...

num3 += num4; // 0.8
console.log(num3);
num3 += num4; // 0.9
console.log(num3);
num3 += num4; // 1.0
console.log(num3);
console.log(num3.toFixed(2)); // '1.00', limita num3 a 2 casas decimais
console.log(Number.isInteger(num3)); // false, verifica se num3 é um inteiro
console.log(num3); // 1
// Solução para o problema de precisão
num3 = parseFloat(num3.toFixed(2)); // Converte num3 para float com 2 casas decimais
console.log(num3);
console.log(Number.isInteger(num3)); // true, verifica se num3 é um inteiro