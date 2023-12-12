/* Loops is a code that runs over and over again until a condition is met.
There 4 types of loops in TypeScript: for, for/in, while, do/while*/

/* While loop

It will execute the code block while starting from the top of the loop until the condition is met.

while (condition) {code block to be executed}

*/

let loopX: number = 0;

console.log("\n'While' - First it test the condition, then it executes the code block");
while (loopX > 1) {
    console.log("loopX is " + loopX);
    loopX = loopX + 1;    
};

/* Do/While loop 

It will execute the code block while starting from the bottom of the loop until the condition is met.

do {code block to be executed} while (condition)

*/

console.log("\n'Do/while' - First it executes the code block, then it test the condition\nNOTE:It will always execute the code block at least once");
do {
    console.log("loopX is " + loopX);
    loopX = loopX + 1;
}
while (loopX > 1);

/* For loop 

It will execute the code block while starting from the top of the loop until the condition is met.

"FOR" requires 3 statements separated by semicolon:
1. Initialization statement
2. Condition statement
3. Increment statement

for (initialization statement; condition statement; increment statement) {code block to be executed}

*/

console.log("\n'For' - First it test the condition, then it executes the code block");
for (let loop: number = 0; loop < 10; loop = loop + 1) {
    console.log("loop is " + loop);
}


/* For/In loop

It will execute the code block while starting from the top of the loop until the condition is met.

It is used to loop through the properties of an object.

for (variable in object) {code block to be executed}

*/

console.log("\n\n'For/In' - First it test the condition, then it executes the code block for each property in the object\n");
let obj = {
    name: "Felipe",
    age: 33,
    city: "Rio de Janeiro"
};

for (let prop: string in obj) {
    // console.log(prop); // keys
    // console.log(obj[prop]); // values of the keys
    // console.log(obj[prop] + " is the value of the key " + prop);   
    console.log(prop + " = " + obj[prop]);
}

