"use strict";
// Object-Oriented Programming
;
var obj = {
    name: "John",
    lastName: "Doe",
    age: 30,
    city: "Texas",
    presentation: introduction // A função é executada apenas para realizar alguma ação ou efeito colateral, mas não retorna um valor específico.
};
function introduction() {
    console.log("Hello, my name is " + this.name + " " + this.lastName + " and I'm " + this.age + " years old.");
}
;
console.log(obj.lastName);
obj.presentation();
