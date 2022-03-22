<h1 align="center">to.do</h1>

<h4 align="center">
  
[Descrição](#desc)  |  [Funcionalidades](#func)  |  [Rodando localmente](#local)

<br>

<h2 id="desc">
💻 Sobre o Projeto
</h2>

<p align="justify">
O to.do é uma pequena aplicação onde o seu principal objetivo é organizar uma série de tasks. 
É o primeiro desafio do treinamento Ignite, tendo como objetivo implementar algumas funcionalidades para treinar a manipulação de estados no React, 
a partir de um template clonado. Essas funcionalidades foram criadas no arquivo "src/components/TaskList.tsx". <br><br>
  <a href="https://www.notion.so/Desafio-01-Conceitos-do-React-51e4099a6e2f4d4bae94f9fe75bb769d">Link do Desafio</a>
</p>

<br>

<h2 id="func">⚔ Funcionalidades Implementadas</h2>

- Adicionar uma nova task no estado de `tasks`, com os campos `id` que deve ser gerado de forma aleatória, `title` que deve ser um texto e `isComplete` que deve iniciar como false.
- Alterar o status de `isComplete` para uma task com um ID específico que é recebido por parâmetro.
- Receber um ID por parâmetro e remover a task que contém esse ID do estado.

<br>

<h2 id="local">
⚛ Rodando Aplicação Localmente
</h2>

> **⚠ Atenção !** <br> Antes de prosseguir com o passo a passo abaixo você precisa ter instalado em sua máquina o gerenciador de pacote [Yarn](https://classic.yarnpkg.com/en/docs/install) e o [Git](https://git-scm.com).

<br>

> 📝 Clonando o repositório e entrando no diretório criado.

```shell
git clone https://github.com/Brendler17/to-do.git && cd to-do
```

> 📝 Baixando / Instalando dependências.

```shell
yarn
```

> 📝 Rodando Aplicação

```shell
yarn dev
```

> Pronto 🎉 se tudo ocorreu conforme o esperado 😁 a aplicação estará
> rodando na porta 8080. Basta acessar o endereço no navegador
> http://localhost:8080 e você verá a aplicação funcionando.
