"use strict";
var array = "Ned, Jon, Robb, Bran, Rickon".split(", ");
console.log(array.toString()); // Ned,Jon,Robb,Bran,Rickon
console.log(array.join(" | ")); // Ned | Jon | Robb | Bran | Rickon
array.push("Sansa"); // ["Ned", "Jon", "Robb", "Bran", "Rickon", "Sansa"]
// Add a new element to the beginning of an array
array.unshift("Catelyn");
console.log(array); // [ 'Catelyn', 'Ned', 'Jon', 'Robb', 'Bran', 'Rickon', 'Sansa' ]
