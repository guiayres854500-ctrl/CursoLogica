/*
Primitivos (imutáveis) - number, string, boolean, undefined, null, symbol (ES6) e bigint (ES11) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
let a = 'A';
let b = a; // Cópia
console.log(a, b); // A A

a = 'Outra coisa';
console.log(a, b); // Outra coisa A

let c = [1, 2, 3];
let d = c; // Referência
console.log(c, d); // [1, 2, 3] [1, 2, 3]

c.push(4);
console.log(c, d); // [1, 2, 3, 4] [1, 2, 3, 4]

d.pop();
console.log(c, d); // [1, 2, 3] [1, 2, 3]

let e = b; // Cópia
console.log(b, e); // A A
c.push = 'Outra coisa';
console.log(c, d); // [1, 2, 3] [1, 2, 3]