"use strict";
// Boas práticas: Evitar o Hoisting
(function() {
  escopo = 'local';
  console.log(escopo);


  
  var escopo: string;
})();

/* 
O hoisting é um comportamento do JavaScript em que as declarações de variáveis e funções são movidas para o topo do escopo em tempo de compilação. 
Embora o hoisting seja uma característica do JavaScript, é considerado uma prática ruim e pode levar a comportamentos inesperados e difíceis de depurar.

Para evitar o hoisting e escrever um código mais legível e previsível, é recomendado seguir as seguintes boas práticas:

1. Declare todas as variáveis no início do escopo: É uma boa prática declarar todas as variáveis no início do escopo em que serão usadas. Isso torna o 
código mais fácil de entender e evita problemas relacionados ao hoisting.

2. Utilize o modo estrito (strict mode): O modo estrito do JavaScript (strict mode) é uma funcionalidade que permite escrever código JavaScript mais 
seguro e restrito. Ao habilitar o modo estrito, o JavaScript é executado em um ambiente mais restrito, onde algumas práticas ruins, como o hoisting, 
são proibidas. Para habilitar o modo estrito, adicione a seguinte linha no início do seu arquivo JavaScript ou TypeScript:

"use strict";

Ao utilizar o modo estrito, o JavaScript irá lançar erros para práticas ruins, como o uso de variáveis não declaradas e atribuições a propriedades 
somente leitura.

3. Utilize o TypeScript: O TypeScript é um superset do JavaScript que adiciona recursos de tipagem estática ao JavaScript. O TypeScript é compilado para 
JavaScript antes de ser executado, o que permite que o compilador faça otimizações e verifique erros em tempo de compilação. O TypeScript também ajuda 
a evitar problemas relacionados ao hoisting, pois as declarações de variáveis e funções são movidas para o topo do escopo durante o processo de 
compilação.

Seguindo essas boas práticas, você pode evitar problemas relacionados ao hoisting e escrever um código mais legível, previsível e seguro.
*/