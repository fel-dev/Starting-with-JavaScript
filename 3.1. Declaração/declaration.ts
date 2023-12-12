// Hoisting - Move declaration to top -- Only works with "function" declaration
// faz o hoisting da variável, mas não da atribuição com a função
sayHi("Joana D'Arc")

// Traditional function
function sayHi(name) {
    console.log("Hi " + name);
}

sayHi("Mary");

// Anonymous function
var sayHello = function (name) {
    console.log("Hello " + name);
};

sayHello("Sebastian");

// Constructor function (new) - Not recommended
var sayBay = new Function("name", "console.log('Bye ' + name);");

sayBay("John");

// Arrow function
var sayGoodMorning = (name) => {
    console.log("Good morning " + name);
};

sayGoodMorning("Clara");