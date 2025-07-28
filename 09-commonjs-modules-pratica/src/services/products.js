// nesse código vão ficar todas as funções que lidam com produto:
const productType = {
    version: "digital",
    tax: "x1"
}

async function getFullName(codeId, productName){
    // return codeId + "---" + productName;
    console.log ("product: " + codeId + "--" + productName);
    await doBreakLine();
}

//função para adicionar uma quebra de linha.
//não preciso exportar essa função, porque ela "só faz sentido" dentro da função getFullName. Ou seja, ela só tem uma função interna nesse arquivo, então não precisa ser exportada.
// hidden function é uma função que fica escondida para quem está de fora desse arquivo.
async function doBreakLine(){
    console.log("\n");
}

async function getProductLabel(productName) {
    console.log("Product name: " + productName);
}

module.exports = {
    getFullName, //primeira função que criei aqui em products.js e exportei para main.js
    getProductLabel, //segunda função que criei aqui em products.js e exportei para main.js
    productType
}