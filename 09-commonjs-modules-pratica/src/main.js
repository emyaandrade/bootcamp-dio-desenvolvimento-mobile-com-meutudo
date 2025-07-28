// imagine que está fazendo uma aplicação para uma loja e na hora de imprimir precisa exibir o código do produto e o nome do produto

// armazenei a exportação na contante chamada p
// para usar basta colocar 'product.' e qual função (exportada do arquivo products.js) quero chamar
const product = require("./services/products");

const { getFullName, productType } = require("./services/products");

//criei uma constante para 'requerer' (chamar, solicitar) o arquivo que exportei em 'config.js'
const config = require("./services/config");

//criei uma variável para 'requerer' a informação do arquivo database.js que guardei do jeito export default
const database = require("./services/database");

async function main() {
    console.log("informação de uma função do arquivo products.js")
    console.log("Carrinho de compras: ");
    getFullName("1", "teclado"); // para usar a função que importei sem armazenar em uma variável (usei destructuring)
    console.log(productType); //função que importei sem armazenar em uma variável (usei destructuring)
    product.getFullName("408", "mousepad");
    // product.getFullName("937", "teclado");
    // product.getFullName("028", "ring light");
    product.getProductLabel("mouse rosa");

    console.log("Informação de uma constante exportada do arquivo config.js:");
    console.log(config.devArea.version);
    console.log(`O projeto está em andamento: ${config.devArea.production}`);
    console.log(config.client)

    console.log("Informação da constante do arquivo products.js");
    // console.log(product.productType.version);
    // console.log(`Método usado: ${product.productType.version}`);

    console.log("Informação do arquivo database.js, onde usei export default.")
    database.connectToDatabase("meu banco");
};

main();