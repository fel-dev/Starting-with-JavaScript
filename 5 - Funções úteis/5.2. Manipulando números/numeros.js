"use strict";
var x = 4.56e7; //45600000
var y = 456e-6; //0.000456
var z = 0.99999999999999999; // 1
var a = 0xFFF; // 4095
var b = 0o7777; // 4095
console.log(b.toString(16));
console.log(x.toExponential()); // 4.56e+7
console.log(y.toFixed(2)); // 0.00 (dinheiro) mais proximo de 0 do que de 1 -- arredondamento para baixo
