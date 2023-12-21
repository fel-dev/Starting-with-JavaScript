"use strict";
// Usar aspas duplas para strings
(function() {
  var escopoLocal: string, 
      escopoGlobal: string, 
      foo: string;
      
    escopoLocal = "foo";

    var obj = {
      fu: "bar"
    };
})();

/* 
Usar sempre strings com aspas duplas é uma convenção comum em muitas linguagens de programação, 
incluindo TypeScript. Isso ajuda a manter a consistência no código e facilita a leitura e compreensão 
do mesmo. Além disso, as aspas duplas são mais amplamente suportadas em ferramentas e bibliotecas, 
o que pode evitar problemas de compatibilidade. Ademais mesmo o JS não tendo char, mas em outras linguagens, 
as aspas simples pode ser interpretadas como estiver colocando um caractere, e não uma string. Então o ideal
é manter essa padronização entre as linguagens. Outra coisa é que no Json, só é aceito aspas duplas, então... 
alguns compiladores podem dar erro se não estiver usando aspas duplas. Melhor prevenir do que remediar. Manter
a consistência no código é muito importante.

*/