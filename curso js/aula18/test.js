const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
console.log(array); // [ 'Luiz', 2, 3, 4 ]

// Mesmo sendo uma constante, o conteúdo do array pode ser modificado.
// O array em si não pode ser reatribuído, mas seus elementos podem ser alterados.
array = 'Outra coisa'; // Isso causará um erro.