/* Aplicação de Testes (app.js) */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//question
readline.question('Me diga o seu nome ', (answer) => {
    console.log(`Olá, ${answer}!`);
    readline.close();//Fecha a interface de leitura/gravação
});

//prompt

readline.setPrompt('Digite um número de 1 a 10... ');// Define um prompt personalizado

readline.prompt();// Exibe o prompt, dando espaço para que o usuário digite o número no console

readline.on('line', (input) => {//'line' aguarda que o usuário digite algum valor e aperte ENTER para enviar

    const number = parseFloat(input);//Faz o parse do valor digitado pelo usuário para um valor númerico de ponto flutuante

    if (isNaN(number) || number < 1 || number > 10) {//Verifica se o número é válido, e se ele esta entre 1 a 10
        console.log('Isso não é um número válido. Tente novamente.');
        readline.prompt();//Exibe novamente o prompt até que o usuário digite um número válido
    }else{
        console.log(`Você digitou o número: ${number}`);
        readline.close();//Fecha o prompt
    }

});

readline.on('close', () => {// Evento 'close' é emitido quando a interface é fechada
    console.log('Encerrando a leitura.');
});




