**Idioma:** [<img width="25" alt="EN" src="https://github.com/user-attachments/assets/d70b720f-0cee-4cf7-b6ca-9446f352f6ea" />](README.md) <img width="11" alt="Image" src="https://github.com/user-attachments/assets/e4d334ba-8693-48b4-9f9c-47c423b5e9c9" /> [<img width="25" alt="BR" src="https://github.com/user-attachments/assets/c13fc723-432f-4815-82b8-59f9e9baf37d" />](README-pt-BR.md)

---
### Sobre a extensão:
Esta é uma extensão de navegador para o canal `sale-suggestions` do servidor do Transformice no Discord Web. Ela exibe os itens separados por categorias, permite visualizar os itens mais votados e ordená-los por votos, nome ou ID, além de incluir uma barra de busca para encontrar itens pelo nome e um botão para ser redirecionado diretamente para a mensagem correspondente.

A extensão também indica se você já votou em um item e permite votar ou remover o voto diretamente pela interface. Os itens que aparecem no Weekly Sale Vote Results ficam destacados.

Além disso, é possível alterar o idioma entre EN, BR e ES e escolher entre os temas escuro, claro ou automático, que utiliza como base o tema atual do Discord.

https://github.com/user-attachments/assets/df8eb0ca-0118-4cc2-b325-cb1c51a77c05

---
### Sobre as permissões:
**webRequest:** permite que o `background.js` acompanhe as requisições feitas pelo Discord e capture alguns campos específicos do cabeçalho. Esses dados são necessários para realizar requisições via `fetch`, como buscar mensagens e adicionar ou remover reações nas mensagens.

**storage:** fornece um armazenamento local da extensão no computador do usuário. É utilizado para salvar preferências e configurações da extensão e também para compartilhar os campos do cabeçalho capturados pelo `background.js` com o `content.js`.

---
### Como adicionar a extensão no Chrome e Edge:
https://github.com/user-attachments/assets/3e18e7c2-61eb-4549-b2fb-e130e48f69e3

---
### Como adicionar a extensão no Firefox:
#### • Versão assinada:
A versão `.xpi` disponibilizada neste projeto possui uma assinatura válida da Mozilla e pode ser instalada normalmente no Firefox, sem a necessidade de utilizar o modo de depuração ou o Firefox Developer Edition.

Baixe o arquivo `DiscordSale-Firefox.xpi` e abra-o com o Firefox. O navegador exibirá a confirmação para adicionar a extensão.

https://github.com/user-attachments/assets/74846307-576e-4c0d-8dee-522d965d51f7

---
A versão disponível no código-fonte não possui uma assinatura da Mozilla. Por isso, ela não pode ser instalada normalmente em versões convencionais do Firefox.

#### • Firefox Developer Edition

Uma alternativa é utilizar o [Firefox Developer Edition](https://www.firefox.com/pt-BR/channel/desktop/developer/). Nele, é possível desativar a exigência de assinatura para instalar a extensão manualmente.

1. Abra o Firefox Developer Edition.
2. Na barra de endereço, acesse `about:config`.
3. Pesquise pelo seguinte parâmetro e altere o valor para `false`:

```text
xpinstall.signatures.required = false
```

4. Reinicie o navegador.

Depois disso, será possível instalar a extensão normalmente, sem a necessidade de utilizar o modo de depuração.

https://github.com/user-attachments/assets/2ca08de9-2bcb-4c64-a13d-dbbeef33bd25
