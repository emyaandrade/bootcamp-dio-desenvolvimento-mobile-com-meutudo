// imagine que está fazendo uma aplicação para uma loja e na hora de imprimir precisa exibir o código do produto e o nome do produto

const p = require("./services/products");


async function main() {
    console.log("Carrinho de compras \n");
    p.getFullName("408", "mousepad");
    p.getFullName("937", "teclado");
    p.getFullName("028", "ring light");
};

main();