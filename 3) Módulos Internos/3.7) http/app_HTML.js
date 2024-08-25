/* Aplicação de Testes (app_HTML.js) */

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');//Definimos o tipo de conteúdo que será exibido no navegador do usuário, nesse caso, HTML!

    res.write('<h1>Meu Primeiro Servidor com a Micilini.com</h1>');//Agora podemos escrever HTML no navegador do usuário =)
    res.write('<p>Estamos aprendendo a criar servidores HTTP com Node.js!</p>');//Podemos usar o Write quantas vezes quisermos =)

    res.end();
});

server.listen(port, () => {//Iniciamos o servidor na porta definida
    console.log(`Servidor rodando em http://localhost:${port}`);
});