//Primeiro entenda como funcionam os navegadores:

//Todo navegador tem dois "motores", o motor01 é o Rendering Engine e o motor02 é o JavaScript Engine
//Rendering Engine é responsável por: pegar todo o html e css que o dev digita e estruturar a parte visual, ele desenha a parte visual na tela.
//JavaScript Engine foi criado originalmente para criar interatividade nessas telas, para fazer ações (abrir menu, animações, etc).
//todo navegador tem uma camada que é especialista em lidar (interpretar) o javascript

//internet explorer: 
//motor01 = Trident (é quem desenha a parte visual na tela)
//motor02 = Chakra (é responsável por interpretar e compilar o JavaScript)

//firefox:
//motor01 = Gecko
//motor02 = *Monkey

//chrome:
//motor01 = Webkit
//motor02 = v8

//safari:
//motor01 = Webkit
//motor02 = JavaScriptCore


//O Ryan Dahl basicamente pegou uma das camadas que criam a interface do usuário, ou seja, pegou a camada do motor02.
//ele escolheu o v8, e integrou com a libuv
//a libuv é quem conversa com o sistema operacional, ela fica lendo o javascript do v8
//a libuv é escrita em linguagem de máquina e entende o sistema operacional.
//basicamente, você escreve em JavaScript, o v8 entende, se comunica com o libuv que traduz para linguagem de máquina.