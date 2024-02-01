/* Aplicação de Testes (app.js) */

//Observação: Quando rodar esta applicação faça isso passando um argumento: [node app.js nome=micilini]

console.log('Todos os Argumentos da Aplicação');
console.log(process.argv);//Retorna todos os argumentos da aplicação

const argsPassed = process.argv.slice(2);//Retorna os argumentos que nós passamos
console.log(argsPassed);

const nome = argsPassed[0].split("=")[1];
console.log('Olá ' + nome);//o retorno será 'Olá Micilini'

//env
console.log(process.env.NODE_ENV); // Exemplo de acesso à variável de ambiente NODE_ENV

//cwd
console.log(process.cwd());// Retorna o diretório da aplicação atual

//pid
console.log(process.pid);// Retorna o ID do NodeJS em execução

//exit
process.exit(0); // Finaliza o processo com código de saída 0

//on
process.on('exit', (code) => {
    console.log(`Processo encerrado com código de saída: ${code}`);
});

//stdin
process.stdin.setEncoding('utf8');//Configura o charset do texto

console.log('Digite algo e pressione Enter:');//Diz ao usuário digitar algo no console

process.stdin.on('data', (dados) => {//Espera o usuário digitar, e assim que receber o input executa o bloco abaixo
  console.log(`Você digitou: ${dados.trim()}`);
  process.stdin.pause();//Pausa a entrada dos dados digitados pelo usuário
});

//stdout
process.stdout.write('Isso é uma mensagem na saída padrão.\n');

//stderr
process.stderr.write('Isso é uma mensagem de erro na saída padrão de erro.\n');



