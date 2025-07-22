//o package.json é o arquivo coração de um projeto Node. É ele que indica que o conteúdo da pasta é um projeto Node,ou seja, ele que indica que é um conjunto de pacotes ou um grande pacote node.js
//dentro dele ficam todas as configurações do seu projeto. 

//o meu package.json é sempre feito nesse formato objeto JSON, ou seja, uma chave, e um valor
//o que significa cada uma das informações iniciais do meu package.json:
//{
//"name": "bootcamp-dio-meutudo",  É o nome do seu projeto, nome principal, ou nome do projeto Node.js, esse é o nome que você vai usar quando for publicar, ou quando for fazer o deploy
//"version": "1.0.0", É justamente para você controlar a versão. você pode alterar para controlar a versão do seu projeto. O name, a version e a description podem sempre ser alterados, não muda em nada o projeto que você está fazendo, servem mais para você como dev se localizar.
//"description": "- Bootcamp iniciado no dia 21/07/2025", É a descrição do seu projeto. Sempre pode ser alterada. É comum essas informações serem padronizadas em inglês. Name, version e description são valores INFORMATIVOS. Estão ali para você e as pessoas que trabalham nesse projeto poderem se localizar.
// "main": "index.js", A propriedade main fala quem é o arquivo principal, o arquivo porta de entrada do projeto, para quando for rodar testes ou for rodar o arquivo como um todo, quem é o meu arquivo principal, qual arquivo tem que ser executado primeiro.
//  "scripts": { "test": "echo \"Error: no test specified\" && exit 1" }, aqui é onde conseguimos criar os scripts para fazer algumas pequenas automações. Aqui dentro eu posso criar uma série de outros scripts
//como eu faço para chamar esse script no meu terminal? Digitando: npm run test (test porque é o nome que está definido ali no script)
//Os scripts são basicamente pequenas automações que podemos fazer no nosso terminal
//"keywords": [], São as palavras chave. Basicamente servem para você organizar. Sua empresa terá vários projetos node, e para você organizar e facilitar na hora da busca, você pode colocar termos de pesquisa. Serve para catalogar. Dentro do keywords não tem regra, basta apenas colocar, por exemplo "keywords": ["project", "minha primeira API"], e você pode colocar palavras duplas, espaço, etc. Ali dentro você pode colocar vários termos que serão os termos de pesquisa, são palavras que facilitam na hora de encontrar o projeto quando você der um localizar. Não interfere em nada no seu código.
// "author": "emilly-andrade", O author é o dono do projeto. Não interfere em nada no seu código, eu usei "emilly-andrade" mas poderia ser "Emilly Andrade"
//  "license": "ISC", Na camada de licença é onde você informa qual é o tipo de licença do seu projeto (se ele é open source, se ele está dentro de alguma cláusula), porque as vezes você publica seu projeto e alguém pode querer copiar e vender.
//por padrão os projetos de Node vêm com a licença ISC. 
// O que é a licença ISC? É a licença de software livre. Basicamente diz que é um software livre. 
// Como sei qual tipo de licença colocar ali? Cada empresa tem o seu tipo de licença. Se estiver apenas estudando, pode deixar a ISC mesmo.
// é comum ver a licença MIT: ela permite que o software seja tratado sem restrições para o uso, modificação e distribuição.
//}