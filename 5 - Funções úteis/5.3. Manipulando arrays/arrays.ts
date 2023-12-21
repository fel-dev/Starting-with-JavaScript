var array: string[] = "Ned, Jon, Robb, Bran, Rickon".split(", ");

console.log(array.toString()); // Ned,Jon,Robb,Bran,Rickon
console.log(array.join(" | ")); // Ned | Jon | Robb | Bran | Rickon

// new elements can be added to the end of an array by using the push method
array.push("Sansa");

console.log(array); // [ 'Ned', 'Jon', 'Robb', 'Bran', 'Rickon', 'Sansa' ]

