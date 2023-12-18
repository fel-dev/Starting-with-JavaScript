Em TypeScript, você pode criar um protótipo adicionando métodos a uma interface existente e, em seguida, implementando esses métodos. Aqui está um exemplo passo a passo:

 1. Declare a interface para o tipo que você deseja estender. Se você estiver estendendo um tipo existente, como `String`, você não precisa redeclarar todos os métodos existentes, apenas os novos que você está adicionando.

2. Adicione a declaração do método à interface.

3. Implemente o método no protótipo do tipo.

Aqui está um exemplo de como você pode adicionar um método `reverter` ao protótipo `String`:

```typescript
// Passo 1: Declare a interface
interface String {
    reverter(): string;
}

// Passo 2: Adicione a declaração do método*
String.prototype.reverter = function() {
    return this.split('').reverse().join('');
}

// Passo 3: Use o método
let s: string = "Olá, mundo!";
console.log(s.reverter());  // "!odnum ,álO"
```



**NOTA** *: `this.split('').reverse().join('')` pega a string original, divide-a em caracteres individuais, inverte a ordem desses caracteres e, em seguida, junta-os novamente em uma string. O resultado é a string original invertida.