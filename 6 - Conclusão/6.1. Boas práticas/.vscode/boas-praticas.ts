// evitar colocar variável no scopo global, pois pode gerar conflito de nomes e dificultar a identificação de erros.

var escopo: string = 'global';

// Em vez disso, pode-se usar uma função auto executável para limitar o escopo da variável:
(function() {
    var escopo: string = 'local';
})();

/* 
Um bom motivo para evitar o uso de variáveis globais é que elas ficam acessíveis em todo o código. 
Isso pode levar a problemas de legibilidade, manutenção e reutilização do código. Quando uma variável 
é declarada como global, ela pode ser modificada e acessada por qualquer parte do programa, o que pode 
levar a efeitos colaterais indesejados e dificultar a identificação de erros.

Além disso, o uso excessivo de variáveis globais pode levar a conflitos de nomes, especialmente em 
projetos maiores com várias partes do código. Isso ocorre porque qualquer parte do código pode acessar e 
modificar a variável global, o que pode levar a erros difíceis de depurar.

Em vez disso, é uma prática recomendada limitar o escopo das variáveis ao mínimo necessário. Isso pode 
ser feito usando técnicas como encapsulamento, onde as variáveis são declaradas dentro de funções ou 
classes, tornando-as acessíveis apenas dentro desses blocos de código específicos. Isso ajuda a evitar 
colisões de nomes e torna o código mais modular e fácil de entender.

Por exemplo, em vez de declarar a variável como global, você pode declará-la dentro de uma função ou 
classe, limitando seu escopo apenas a esse contexto específico:

function minhaFuncao() {
  var variable = 'local';
  // Resto do código...
}

Dessa forma, a variável variable só estará acessível dentro da função minhaFuncao(), evitando possíveis 
problemas causados pelo escopo global.
*/