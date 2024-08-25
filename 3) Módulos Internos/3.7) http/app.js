/* Aplicação de Testes (app.js) */

const http = require('http');//Importamos o módulo HTTP

const port = 3000;//Definimos a porta que será utilizada, por exemplo: http://localhost:3000

const server = http.createServer((req, res) => {//Criamos um servidor HTTP
    //req -> Requisição
    //res -> Resposta

    res.write('Meu Primeiro Servidor com a Micilini.com');//Escrevemos uma resposta de volta ao navegador do usuário
    res.end();//Finalizamos a resposta, pois se não fizermos isso, a requisição ficará em loop (carregando eternamente)
});

server.listen(port, () => {//Iniciamos o servidor na porta definida
    console.log(`Servidor rodando em http://localhost:${port}`);//Exibimos uma mensagem no console informando que o servidor está rodando. Essa parte não é mostrada ao usuário
});