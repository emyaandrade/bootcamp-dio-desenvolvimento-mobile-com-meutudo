// nesse código vão ficar todas as funções que lidam com produto:


async function getFullName(codeId, productName){
    // return codeId + "---" + productName;
    console.log ("product: " + codeId + "--" + productName);
}

module.exports = {
    getFullName,
}