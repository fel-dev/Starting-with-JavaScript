var array: string[] = "Ned, Jon, Robb, Bran, Rickon".split(", ");

console.log(array.toString()); // Ned,Jon,Robb,Bran,Rickon
console.log(array.join(" | ")); // Ned | Jon | Robb | Bran | Rickon

array.push("Sansa"); // ["Ned", "Jon", "Robb", "Bran", "Rickon", "Sansa"]

array.unshift("Catelyn");

console.log(array); 

var element: string | undefined = array.pop(); 

element = array.shift();

console.log(element); // Catelyn
console.log(array); // ["Ned", "Jon", "Robb", "Bran", "Rickon"]

array[1] = "Jon Snow"; // ["Ned", "Jon Snow", "Robb", "Bran", "Rickon"]
console.log(array);

// array removing elements, with slice
var slice: string[] = array.slice(3); // ["Bran", "Rickon"]
console.log(slice); // ["Bran", "Rickon"]

