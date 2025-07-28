// constante para armazenar informações sobre onde está o aplicativo, por ex:
const devArea = {
    version: "01ab",
    production: true,
};

//constante para saber quem está consumindo a aplicação em que estamos trabalhando.
const client = {
    device: 'web',
};

//método para exportar informações do arquivo. (coloco isso para "jogar" ele para fora desse arquivo.), no caso, exportei a constante devArea
// quando tenho apenas uma informação, posso exportar assim sem as chaves:
//module.exports = devArea;

//metodo para exportar mais de uma informação
module.exports = {
    devArea,
    client,
};