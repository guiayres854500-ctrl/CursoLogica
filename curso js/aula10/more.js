/*
Incremento = ++
Decremento = --
Pós-fixado = primeiro retorna o valor e depois incrementa/decrementa
Pré-fixado = primeiro incrementa/decrementa e depois retorna o valor
*/

let contador = 1;
contador++; // 2
contador++; // 3
++contador; // 4
++contador; // 5
console.log(contador++); // 5
console.log(contador); // 6
console.log(++contador); // 7
console.log(--contador); // 6
const passo = 2;
contador += passo; // contador = contador + passo
contador += passo; 
contador += passo; 
console.log(contador); // 12
contador -= passo; // contador = contador - passo
console.log(contador); // 10
contador *= passo; // contador = contador * passo
console.log(contador); // 20
contador /= passo; // contador = contador / passo
console.log(contador); // 10

//NaN - Not a Number, parseInt (inteiro), parseFloat (decimais), Number()
const num1 = 10;
const num2 = "Luiz";
const num3 = parseInt("2.25"); //retorna um número inteiro
const num4 = parseFloat("2.25"); //retorna um número float
console.log(num1 * num2);
console.log(num1 * num3);
console.log(num4);
console.log(typeof num3);