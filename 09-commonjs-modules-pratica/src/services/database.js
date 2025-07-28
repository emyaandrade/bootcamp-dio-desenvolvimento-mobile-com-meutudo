//Imagine que esse módulo do node.js (arquivo) é responsável por cuidar do banco de dados

// export default
exports.connectToDatabase = async (dataName) => {
    console.log ("Se conectando ao banco: " + dataName);
}

exports.disconnectDatabase = async () => {
    // lógica
    console.log("Desconectando.");
}