# Traduções de documentação

Este repositório serve para manter e traduzir projetos de Node.js para facilitar
a vida dos programadores brasileiros.

### Instalação

Este projeto necessita de um plugin para o Python chamado `mkdocs`, ele somente
é necessário caso você queira gerar a documentação e visualizar em seu
computador, caso queira fazer apenas pequenas correções e enviar um pull request
não é necessário instalar

```shell
sudo pip install mkdocs
```

Para saber mais sobre a sintaxe utilizada na documentação acesse
[este link](http://www.mkdocs.org/user-guide/writing-your-docs/).

### Comandos úteis

* `npm run build` constrói todo o HTML de todos os projetos nesta pasta, caso
queira gerar o HTML de apenas um projeto passe o nome da pasta como argumento:
`npm run build -- exemplo`.
* `npm run server -- projeto` inicia um servidor web que irá disponibilizar a
pasta com o HTML do projeto para acesso via navegador. Após executar o comando
acesse a URL http://localhost:8080 para verificar o HTML.

### Como contribuir

Caso queira iniciar a tradução de um projeto ainda não existente, basta usar a
pasta `exemplo` como template e criar uma nova pasta no root deste projeto com
o nome do módulo que está sendo traduzido. Caso queira ajudar em uma
documentação já existente utilize as issues para verificar se o que você deseja
traduzir já não esteja em andamento.

Qualquer nome de pasta pode ser utilizado menos a `public` que é reservada para
que o servidor possa servir a documentação publicamente.

### Licença ISC

```
Copyright (c) 2015,  NodeBR <nodebr@nodebr.org>

Permission to use, copy, modify, and distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

```
