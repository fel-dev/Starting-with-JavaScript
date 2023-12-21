var x: number = 456e5; //45600000
var y: number = 456e-6; //0.000456

var z: number = 0.99999999999999999; // 1

var a: number = 0xFFF; // 4095

var b: number = 0o7777; // 4095
console.log(b.toString(16));

// exponencial

console.log(x.toExponential(1)); // arredondar para 1 casa decimal

