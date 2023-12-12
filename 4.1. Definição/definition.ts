// Object-Oriented Programming

// var obj = {property: value};

interface Person {
    name: string;
    lastName: string;
    age: number;
    city: string;
    presentation: () => void; // Em outras palavras, a função é executada apenas para realizar alguma ação ou efeito colateral, mas não retorna um valor específico.
};

var obj: Person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    city: "Texas",
    presentation: introduction
};

function introduction(this: Person) {
    console.log("Hello, my name is " + this.name + " " + this.lastName + " and I'm " + this.age + " years old.");
};

console.log(obj.lastName);

obj.presentation();
