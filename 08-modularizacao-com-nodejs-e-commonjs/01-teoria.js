// Qual o problema?
// códigos tendem a ganhar corpo muito rápido, conforme seu código vai evoluindo, você tende a criar mais camadas, usar ferramentas de terceiros, bibliotecas, frameworks, e isso vai adicionando complexidade, tornando o código um monstrinho
// é normal ter muitas pessoas editando o mesmo código


// Por que modularizar?
// porque o código vai se tornando complexo. Pense na sua casa, cada cômodo acomoda seus itens (talheres na cozinha, papel higienico no banheiro), ai imagine que você tirou tudo e colocou em um cômodo só. Fica muito difícil encontrar as coisas, certo? No seu código também, quando você deixa tudo em um documento só você perde produtividade porque fica complexo encontrar as coisas na hora de fazer manutenção.
// código vai se tornando complexo
// difícil de dar manutenção
// difícil de fazer mudanças
// Solução: ao invés de ter um código longo com tudo, é melhor dividir esse código em módulos.
// Ou seja, ao invés de deixar tudo em um código só, você terá outros códigos cada um com a sua função, e o código "principal" apenas com uma referência aos outros códigos menores. 


// imagine uma aplicação que vai gerenciar um carrinho de compras de um e-commerce:
// no código principal você terá algumas informações do carrinho de compras. Nos códigos (módulos) a parte você pode ter as ações do carrinho de compras, por exemplo: adicionar um item, remover um item, alterar um item, atualizar um item. As ações ficam num módulo a parte, e no código principal você só vai fazer o controle geral. 
// você também pode ter um módulo a parte só para lidar com a wish-list do usuário.
// imagine se fosse todas essas informações (carrinho, ações do carrinho e wish-list) em um código só. Na hora de fazer manutenção seria caótico, difícil de encontrar as coisas...


// Como fazer essa divisão (modularização)?
// Tipos de módulos: CommonJS / ESM


// CommonJS
// é o jeito padrão que vem no Node.js
// utiliza uma sintaxe mais simples com as palavras-chave require para carregar os módulos e module.exports para exportar funcionalidades
const elem = require('module');
module.exports = {};


// ESM
// é o método mais moderno
// os módulos ESM introduzem uma sintaxe unificada com as palavras-chave import e export alinhada com padrões de outras linguagens modernas
import {elem} from './module.js';
export const elem = {};


// Diferenças entre CommonJs e ESM:

// CommonJS:
// síncrono por padrão (tudo acontece ao mesmo tempo)
// uso principal em Servidor (Node.js), mas também pode ser suportado nos navegadores
// sintaxe: "require" e "module.exports"
// carregamento dinâmico

// ESM:
// assíncrono por padrão (uma coisa pode esperar a outra para acontecer. Ex: posso utilizar ele só quando ele for chamado)
// suportado nativamente em navegadores
// sintaxe: "import" e "export"
// carregamento estático (análise estática)


// para boa parte das aplicações de API vamos utilizar o modelo do ESM, mas não descarte aprender o CommonJS porque ele ainda está presente em muitos projetos