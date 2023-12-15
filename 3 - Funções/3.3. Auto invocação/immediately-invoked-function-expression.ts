// creating a Scope, call this (IIFE) Immediately Invoked Function Expression
// create a anonymous function and call it immediately
(function () {
    var a: string = "essa variavel esta inside desse escopo";
    console.log(a);
    
})();

var a: string = "essa variavel esta outside do escopo";
console.log(a);

/**************************************************
 Usada no Angular ou Jquerry e mt mais 
https://app.algaworks.com/aulas/1265/auto-invocacao
***************************************************/

console.log("--------------------------------------------------");
console.log("Everytime you want to isolate a scope/variable, use IIFE");

