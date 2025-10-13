let VarA = 'A'; // B
let VarB = 'B'; // C
let VarC = 'C'; // A

/*
const VarATemp = VarA;
VarA = VarB;
VarB = VarC;
VarC = VarATemp;
*/

[VarA, VarB, VarC] = [VarB, VarC, VarA];

console.log(VarA, VarB, VarC);