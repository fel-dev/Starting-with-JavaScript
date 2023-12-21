"use strict";
// Poucas propriedades no objeto, por na mesma linha
(function() {
  var escopoLocal: string, 
      escopoGlobal: string, 
      foo: string;
    
    escopoLocal = "foo";
    escopoLocal.split("");
    console.log(escopoLocal);    // quebra de linha -- trocou de assunto

    //  fix this in TS, you should declare obj as an object with properties fu, to, and tofu, all of which are of type string. Here's how you can do it:
    var obj: { fu: string, to: string, tofu: string } = {
      fu: "bar",
      to: "fu",
      tofu: "dido"
    }; // quebra de linha -- trocou de assunto

    var array: number[] = [
      1, 
      2,
      3
    ];// quebra de linha final separando o array do final do objeto

})();

/* 
Poucas propriedades no objeto, por na mesma linha. Mas se for muitas propriedades, colocar uma por linha.
Quando usar varias propriedades, colocar uma por linha, e colocar a virgula no final da linha.
no final da linha, colocar a virgula, ou ponto e virgula, e não esquecer de apagar o espaço em branco.

1. esse espaço em branco, pode gerar um erro, quando for fazer um merge, pois o git vai entender que foi alterado o arquivo.
2. esse espaço em branco, pode gerar um erro, quando for fazer uma versonalização do arquivo, vai gerar conflito na hora você
querer saber a diferença entre um e outro.
3. isso vale também para os arrays.
  - mas a abertura do array, pode ser na mesma linha, e o fechamento do array, pode ser numa linha separada.
4. quando mudar de assunto nos arrays, dar uma quebra de linha, para ficar mais legivel.

*/
