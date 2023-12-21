var x: number = 456e5; //45600000
var y: number = 456e-6; //0.000456

// JS precision is 15-16 digits. Beyound called overflow or underflow

var z: number = 0.99999999999999999; // underflow
console.log(z); // 1
