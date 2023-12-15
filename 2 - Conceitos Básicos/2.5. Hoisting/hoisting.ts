console.log("\n\n2.5. Hoisting ");
console.log(" ----------------------------- ");
console.log("Explanation: ");
console.log("Hoisting is JavaScript's default behavior of moving declarations to the top.");
console.log("It is recommended to always declare variables at the top of their scope (the top of global code and the top of function code) to avoid bugs.");
console.log("Because variable declarations (and declarations in general) are processed before any code is executed.");
console.log("Knowning this, will help in the future, helping you understand why this example will return 'undefined':\n");
console.log("\n\nhttps://app.algaworks.com/aulas/1262/hoisting\n\n");

console.log(x);

var x = 5;

console.log(x);




