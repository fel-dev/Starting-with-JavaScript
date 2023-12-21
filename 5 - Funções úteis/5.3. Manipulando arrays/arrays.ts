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

var slice: string[] = array.slice(3, 4); // ["Bran"]
console.log(slice); // 


// Splice method changes the original array. Allow to add and remove elements too.
// primeiro argumento é o índice do array onde começar a alteração
// segundo argumento é o número de elementos a serem removidos
// terceiro argumento é o elemento a ser adicionado no lugar dos removidos
var splice: string[] = array.splice(1, 1, "Arya", "Sansa"); 
console.log(splice); // ["Jon Snow"] altera o array original
console.log(array); // ["Ned", "Arya", "Sansa", "Robb", "Bran", "Rickon"] 



