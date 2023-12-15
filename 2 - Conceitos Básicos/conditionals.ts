// if (boolean expression) {execute a statement if the boolean expression is true}

// let test: boolean = true;
// const test: boolean = x === 15;

let x: number = 17; // change this value to see the result (less than 18, equal to 18, greater than 18)
let _y: string = "the code did not executed";

if (x > 18) {
    // Code here will only run if is is true
    _y = "adult";
} 
else if (x === 18) {
    _y = "just turned 18";
}
else {
    _y = "child";
}
console.log(_y);

// to run this code, type in terminal: tsc conditionals.ts && node conditionals.js


// switch (expression) { case value1: statement1; break; case value2: statement2; break; default: statement3; break; }

switch (x) {
    case 18: _y = "eighteen";
    break;
    case 19: _y = "nineteen";
    break;
    default: _y = "I don't know"; break;
}
console.log(_y);
