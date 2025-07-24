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

//multiple exports: Você pode exportar mais de uma função