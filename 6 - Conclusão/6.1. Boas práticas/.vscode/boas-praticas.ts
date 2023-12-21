"use strict";
// melhorando a legibilidade do código quando se usa o var, várias vezes
(function() {
  var escopoLocal: string, 
      escopoGlobal: string, 
      foo: string;
      
})();

/* 
When we declaring multiple variables of the same type, you can use commas to separate them 
instead of repeating the type keyword. This practice improves code readability by reducing redundancy 
and making the code more concise.

This can make the code easier to read and maintain, especially when there are many variables 
to declare.

Mais:
  - Evitar usar o var, pois ele não tem escopo de bloco, apenas de função
  - Usar o let e const, pois eles tem escopo de bloco
  - Usar o const sempre que possível, pois ele não pode ser alterado
  - Usar o let quando for necessário alterar o valor da variável
*/