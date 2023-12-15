// numbers
let number1: number = 10;
let number2: number = 10.5;

// strings
let string1: string = "Hello World";
let string3: string = 'Hello World';

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// arrays
let array1: any[] = [1, "two", true];

// objects (key-value pairs) in the same spaces in ts
let object1: object = { key1: "value1", key2: "value2" };

let person = {
    name: "John",
    lastname: "Snow",
    age: 25
};

// Dinamically typed in JS (don't nessesary to declare the type), but in TS we can do it
let _yy: any = 15;
_yy = "Hello";

// Another values
let z: undefined; // inside is a undefined value
let _person: null; // inside is a null value -- null represent: don't exist any person in this letiable

