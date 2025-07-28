// Anotações referentes a aula prática que está na pasta 09-commonjs-modules-pratica


// por padrão o Node.js já considera cada arquivo "jogado" na pasta como um módulo a parte
// basicamente ele comporta como se cada arquivo fosse uma caixinha
// é como se o main fosse um cômodo da casa e outros arquivos fossem os outros cômodos, e eu posso criar uma conexão entre eles

// dentro da pasta 09, criei o arquivo main, e o arquivo products. Originalmente eles não conversam entre si, como faço para que conversem entre si?
// dentro do arquivo products (arquivo que deve ser exportado para se comunicar com meu arquivo main), eu coloco: 
// module.exports = {
//    nomeDaFunção
// };
// dentro do arquivo main, eu crio uma constante que vai receber o caminho até o arquivo products:
// const nomeAleatorioQueEuEscolher = require("./services/products");
// ou seja, dentro dessa const está todo o conteúdo que é exportado do arquivo products

// para o Node.js todo arquivo JavaScript é um module 

//Multiple Exports: Você pode exportar mais de uma função.
// Você não precisa necessariamente exportar apenas funções, pode exportar valores de constantes, variáveis, etc. Posso exportar qualquer coisa que venha de outro arquivo.

// Export Consts: Você pode exportar também valores de constantes.

// Hidden Members: no mesmo arquivo eu posso exportar funçoes e constantes, não preciso separar cada um em um arquivo.
// existem situações em que talvez faça sentido exportar uma parte e deixar algo sem exportar. Geralmente são funções que só fazem sentido dentro do arquivo em que estão (funções para tratamentos internos).
// ou seja, posso ter uma função que eu propositalmente não exportei.

/* Lembre-se:
 - cada arquivo para o Node.js é considerado um módulo.
 - você deve escolher de maneira sabia quais informações exportar ou não.
 - de dentro de um mesmo arquivo você pode exportar qualquer coisa (função, variável, constante) e você também pode escolher o que não será exportado (porque as vezes aquilo que não será exportado só faz sentido dentro daquele contexto daquele arquivo).
 - fica a seu critério escolher entre usar o jeito 'export default' ou 'module.exports = {}'
*/

//Export Default: quando quero que as informações de um arquivo sejam exportadas por padrão.
// nesse caso, ao invés de criar a função usando 'async function' eu crio a função usando 'exports.nomeDaFuncao = (parametroDaFuncao) => {} '

// Destructuring: é uma maneira diferente de importar as coisas, é uma maneira de desestruturação.
// Ao invés de armazenar em uma constante tudo o que foi exportado do arquivo, como por exemplo: ' const products = require("./services/products"); '  
//você pode salvar o nome das funções que você deseja usar, exemplo ' const {getFullName, productType} = require("./services/products"); '

// Export Default Async: por padrão, para tornar o export default assíncrono, a palavra chave async não vai no começo, o jeito certo de usar é: ' exports.nomeDaFuncao = async (nomeDoParametro) => { //bloco de código a ser executado}; '


/* Onde utilizo módulos no node.js?
  - carrinhos de e-commerce
  - biblioteca para gerenciar strings
  - Em projetos com javascript você acaba utilizando mais o CommonJS
  - 
*/