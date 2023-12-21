"use strict";
var array = "Ned, Jon, Robb, Bran, Rickon".split(", ");
console.log(array.toString()); // Ned,Jon,Robb,Bran,Rickon
console.log(array.join(" | ")); // Ned | Jon | Robb | Bran | Rickon
array.push("Sansa"); // ["Ned", "Jon", "Robb", "Bran", "Rickon", "Sansa"]
array.unshift("Catelyn");
console.log(array);
var element = array.pop();
element = array.shift();
console.log(element); // Catelyn
console.log(array); // ["Ned", "Jon", "Robb", "Bran", "Rickon"]
array[1] = "Jon Snow"; // ["Ned", "Jon Snow", "Robb", "Bran", "Rickon"]
console.log(array);
var slice = array.slice(3, 4); // ["Bran"]
console.log(slice);
var splice = array.splice(1, 1, "Arya", "Sansa");
console.log(splice); // ["Jon Snow"] altera o array original
console.log(array); // ["Ned", "Arya", "Sansa", "Robb", "Bran", "Rickon"] 
array.splice(3, 1); // Removing element Robb, index 3, 1 element
console.log(array); // ["Ned", "Arya", "Sansa", "Bran", "Rickon"]
// join two arrays in one with concate method
array = array.concat(splice); // concat returns a new array, it does not alter the original array. need to assign it to a variable
console.log(array); // ["Ned", "Arya", "Sansa", "Bran", "Rickon", "Jon Snow"]
