const conta = function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        acumulador += numero;
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);


const conta2 = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, ...numeros);
};
conta2('+', 1, 20, 30, 40, 50);
