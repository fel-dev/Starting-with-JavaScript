

# Starting with JavaScript

## 1. Install Node.js

- Testar se o node está instalado no terminal, com o comando:

    node -v

## 2. Install TypeScript

`tsconfig.json`

```javascript
{
	"compilerOptions": {
		"target": "ES6"
	}
}
```

`ctrl` + `shift` + `b` -> tsc: build

> **NOTA**: Se tiver problemas com a [Política de Execução](https://docs.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1) do PowerShell, siga os passos abaixo:

### Configurando a Política de Execução no PowerShell
O comando utilizado no PowerShell foi o seguinte:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
`Set-ExecutionPolicy`: Este _cmdlet_ é empregado para configurar a política de execução de scripts no PowerShell.

`RemoteSigned`: Esta opção permite a execução de scripts locais, mas requer que scripts baixados da internet sejam assinados digitalmente por um editor confiável.

`-Scope CurrentUser`: Define a política de execução para o usuário atual.

Após a execução do comando, o PowerShell apresentará opções para confirmar a alteração na política de execução:

[S] Sim: Confirma a alteração na política de execução, **somente para seção atual**.

[A] Sim para Todos: Confirma a alteração **para todas as seções futuras sem a necessidade de perguntar novamente**.

[N] Não: Recusa a alteração na política de execução.

[T] Não para Todos: Recusa a alteração para todas as seções futuras sem a necessidade de perguntar novamente.

[U] Suspender: Suspende a execução do comando para permitir uma decisão posterior.

[?] Ajuda: Fornece informações adicionais sobre a alteração na política de execução.

Essas opções oferecem a flexibilidade de confirmar ou recusar a alteração imediatamente, aplicar essa decisão para todas as futuras solicitações sem perguntar novamente, ou suspender temporariamente a decisão.

Sobre a Política de Execução
A política de execução no PowerShell visa proteger o sistema contra a execução de scripts não confiáveis, minimizando riscos de segurança. A escolha de RemoteSigned oferece um equilíbrio entre flexibilidade e segurança, exigindo assinaturas digitais apenas para scripts baixados da internet.

Lembre-se sempre de compreender as implicações de alterar a política de execução para garantir a segurança do sistema.
---