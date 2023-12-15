"use strict";
/*

JavaScript não tem uma POO 100% implementada, mas tem alguns conceitos.
O Prototype é muito parecido com o conceito de p.ex: uma classe.Todo objeto tem um prototype.
O prototype é um objeto que contém propriedades que são herdadas pelo objeto.

 */
// Criando um Prototype pela função construtora.
class Stark {
    constructor(name, yearOld, lastName) {
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
Stark.prototype.sayGoodbye = function () {
    console.log('Goodbye');
    return 'Goodbye';
};
ned.sayGoodbye(); // -> TS -> Calling the method that was added to the Prototype.
var sansa = new Stark('Sansa', 13, 'Castanho');
sansa.introduce();
sansa.sayGoodbye();
String.prototype.apagar = function () {
    return '';
};
var oi = 'Oi';
console.log(oi.apagar()); // calling the method.
