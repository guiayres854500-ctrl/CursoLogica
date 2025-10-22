/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> Vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi() {
//     return 'Oi';
// }
// 
// let vaiExecutar = 'Joãozinho';
// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true); // Retorna Luiz Otávio por ser o primeiro valor verdadeiro

//const corUsuario = 'Vermelho';
//const corPadrao = corUsuario || 'Preto';
//
//console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = 'false';
const e = NaN;

console.log(a || b || 'Joãozinho' || c || d || e);