var array: string[] = "Ned, Jon, Robb, Bran, Rickon".split(", ");

console.log(array.toString()); // Ned,Jon,Robb,Bran,Rickon
console.log(array.join(" | ")); // Ned | Jon | Robb | Bran | Rickon

array.push("Sansa"); // ["Ned", "Jon", "Robb", "Bran", "Rickon", "Sansa"]

array.unshift("Catelyn");

console.log(array); 

// remove the last element

array.pop(); // ["Ned", "Jon", "Robb", "Bran", "Rickon"]

console.log(array); 