let num1 = 9.5;
let num2 = Math.floor(num1); // Arredonda para baixo
console.log(num2);

let num3 = Math.ceil(num1); // Arredonda para cima
console.log(num3);

let num4 = Math.round(num1); // Arredonda para o mais próximo
console.log(num4);  

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -5, 0)); // Retorna o maior número
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -5, 0)); // Retorna o menor número 
console.log(Math.random()); // Retorna um número aleatório entre 0 e 1

const aleatorio = (Math.random() * (10 - 5) + 5); // Número aleatório entre 5 e 10

console.log(Math.pow(2, 10)); // 2 elevado a 10 
console.log(2 ** 10); // 2 elevado a 10 (ES2016)

let num5 = 9;
console.log(num1 ** (1/2)); // Raiz quadrada de num1 

console.log(100 / 0); // Infinity
console.log(typeof Infinity);
console.log(100 / 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001); 
// Número muito grande, porém ainda calculável pelo JS