function sayHi (name: string) {
    console.log(globalThis);     // globalThis é o escopo global do Node
    console.log("Hi, " + name);
}

// invocação tradicional
sayHi("Mary"); 

// usando call -- null é o escopo (this) da função  -- "Mary" é o parâmetro da função
sayHi.call(null, "Mary");

sayHi.apply(null, ["Mary"]); // usando apply -- null é o escopo (this) da função  -- array é o parâmetro da função

