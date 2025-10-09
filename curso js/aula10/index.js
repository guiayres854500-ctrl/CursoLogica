/** 
* Aritméticos
* + Adição / Concatenação
* - Subtração
* * Multiplicação
* / Divisão
* ** Potenciação
* % Resto da divisão
* ++ Incremento
* -- Decremento
* Precedência: (), **, *, /, %, +, -
*/ 
const num1 = 2; 
const num2 = 10; 
const num3 = 5; 
const num4 = '5'; 
console.log(num1 + num2); // 12 
console.log(num1 + num4); // '25' 
console.log(num2 - num1); // 8 
console.log(num1 * num2); // 20 
console.log(num2 / num1); // 5 
console.log(num1 ** num2); // 1024 
console.log(num2 % num1); // 0 
console.log(num1 + num2 * num3); // 52
console.log((num1 + num2) * num3); // 60
