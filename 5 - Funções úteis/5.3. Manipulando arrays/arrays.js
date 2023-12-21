"use strict";
var array = "Ned, Jon, Robb, Bran, Rickon".split(", ");
console.log(array.toString()); // Ned,Jon,Robb,Bran,Rickon
console.log(array.join(" | ")); // Ned | Jon | Robb | Bran | Rickon
array.push("Sansa"); // ["Ned", "Jon", "Robb", "Bran", "Rickon", "Sansa"]
array.unshift("Catelyn");
console.log(array);
var element = array.pop();
// remove the first element
element = array.shift();
console.log(element); // Catelyn
console.log(array); // ["Ned", "Jon", "Robb", "Bran", "Rickon"]
