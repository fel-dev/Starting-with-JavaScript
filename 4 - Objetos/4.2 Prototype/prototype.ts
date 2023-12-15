/* 

JavaScript não tem uma POO 100% implementada, mas tem alguns conceitos.
O Prototype é muito parecido com o conceito de p.ex: uma classe.Todo objeto tem um prototype.
O prototype é um objeto que contém propriedades que são herdadas pelo objeto.

 */

// Criando um Prototype pela função construtora.
class Stark {
    name: string;
    yearOld: number;
    hairColor: string;
    lastName: string;

    constructor(name: string, yearOld: number, lastName:string) {
        this.name = name;
        this.yearOld = yearOld;
        this.hairColor = lastName;
        this.lastName = 'Stark';
    }
    introduce() {
        console.log(`Hello, I am ${this.name} ${this.lastName}.`);        
    }
}

var ned = new Stark('Ned', 40, 'Preto');
ned.introduce();

// ned.darTchau = function() { console.log('Tchau'); }

// Stark.prototype.sayGoodbye = function() { console.log('Goodbye'); } // JS -> Adding a method to the Prototype. Very useful for adding things to objects that already exist.

interface Stark { // -> TS -> Adding a method to the Prototype. First, we need to declare the interface.
    sayGoodbye(): string;
}

Stark.prototype.sayGoodbye = function() { // -> TS -> Adding a method to the Prototype. Then, we can add the method.
    console.log('Goodbye');
    return 'Goodbye';
}

ned.sayGoodbye(); // -> TS -> Calling the method that was added to the Prototype.



var sansa = new Stark('Sansa', 13, 'Castanho');
sansa.introduce();
sansa.sayGoodbye(); 

// Exemplo de Adicionar um método ao Prototype em JavaScript.
// var oi:string = 'Oi';
// String.prototype.apagar = function() {
//     return '';
// }
// console.log(oi.apagar());

// Exemplo de Adicionar um método ao Prototype em TypeScript.
interface String { // fisrt, we need to declare the interface.
    apagar(): string;
}
String.prototype.apagar = function() { // then, we can add the method.
    return '';
}
var oi:string = 'Oi';
console.log(oi.apagar()); // calling the method.