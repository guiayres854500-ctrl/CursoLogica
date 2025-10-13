//               01234567
let umaString = "Um texto";

console.log(umaString[3]); // t
console.log(umaString.charAt(3)); // O mesmo resultado

console.log(umaString.charAt(20)); // Retorna vazio

console.log(umaString.concat(" em", " um", " lindo", " dia.")); // Concatena strings
console.log(umaString + " em um lindo dia."); // Mesma coisa

console.log(umaString.indexOf("texto")); // Retorna a posição inicial da palavra
console.log(umaString.lastIndexOf("t")); // Retorna a última posição da letra
console.log(umaString.indexOf("o", 3)); // A partir da posição 3, qual a posição do "o"

console.log(umaString.match(/[a-z]/g)); // Retorna um array com todas as letras minúsculas
console.log(umaString.search(/x/)); // Retorna a posição do "x"

console.log(umaString.replace("Um", "Outra")); // Substitui a palavra "Um" por "Outra"

let outraString = "O rato roeu a roupa do rei de Roma.";
console.log(outraString.replace(/r/g, "#")); // Substitui todas as letras "r" por "#"

console.log(outraString.length); // Retorna o tamanho da string
console.log(outraString.slice(2, 6)); // Retorna a string do índice 2 ao 6 (sem incluir o 6)
console.log(outraString.slice(-5)); // Retorna os últimos 5 caracteres
console.log(outraString.slice(-5, -1)); // Retorna do -5 ao -1 (sem incluir o -1)

console.log(outraString.split(" ")); // Transforma a string em um array, usando o espaço como separador
console.log(outraString.split("r")); // Transforma a string em um array, usando a letra "r" como separador
console.log(outraString.split(" ", 3)); // Transforma a string em um array, usando o espaço como separador, limitando a 3 elementos
console.log(outraString.split(" ", 2)); // Transforma a string em um array, usando o espaço como separador, limitando a 2 elementos

console.log(outraString.toUpperCase()); // Transforma a string em maiúsculas
console.log(outraString.toLowerCase()); // Transforma a string em minúsculas