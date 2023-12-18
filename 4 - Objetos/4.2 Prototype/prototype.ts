/* 
JavaScript não tem uma POO 100% implementada, mas tem alguns conceitos.
O Prototype é muito parecido com o conceito de p.ex: uma classe.Todo objeto tem um prototype.
O prototype é um objeto que contém propriedades que são herdadas pelo objeto.

Se eu tenho um objeto, e tento acessar uma propriedade que não existe nele, o JS vai procurar no prototype desse objeto.
Fontes:
https://app.algaworks.com/aulas/1268/prototype
https://app.algaworks.com/aulas/1439/construindo-sua-primeira-classe
 */

// Criando um Prototype pela função construtora.
class Stark {
    name: string;
    yearOld: number;
    hairColor: string;
    lastName: string;

    constructor(name: string, yearOld: number, lastName:string) { // constructor is te start point of the class. It's used to initialize the class only. 
        this.name = name;
        this.yearOld = yearOld;
        this.hairColor = lastName;
        this.lastName = 'Stark';
    }
    introduce() {
        console.log(`Hello, I am ${this.name} ${this.lastName}.`);        
    }
}

var ned: Stark = new Stark('Ned', 40, 'Preto');
ned.introduce();

// ned.darTchau = function() { console.log('Tchau'); } // JavaScript
// Stark.prototype.sayGoodbye = function() { console.log('Goodbye'); } // In JS (it's easy) -> Adding a method to the Prototype. Very useful for adding things to objects that already exist.

interface Stark { // In TS (it's hard) -> Adding a method to the Prototype. First, we need to declare the interface.
    sayGoodbye(): string;
}

Stark.prototype.sayGoodbye = function() { // also, in TS -> Then we can add the method.
    console.log('Goodbye');
    return 'Goodbye';
}

ned.sayGoodbye(); // For last, in TS -> Call the method.

// new example
var sansa: Stark = new Stark('Sansa', 13, 'Castanho');
sansa.introduce();
sansa.sayGoodbye(); 

// Exemplo de Adicionar um método ao Prototype em TypeScript.
interface String { // fisrt, we need to declare the interface.
    apagar(): string;
}
String.prototype.apagar = function() { // then, we can add the method.
    return '';
}
var oi:string = 'Oi';
console.log(oi.apagar()); // calling the method.



// ---------------------------------------------------------------------------------
// Exemplo de Adicionar um método ao Prototype em JavaScript.
// var oi:string = 'Oi';
// String.prototype.apagar = function() {
//     return '';
// }
// console.log(oi.apagar());