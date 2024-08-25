const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    // Analisa a URL e obtém os parâmetros de consulta
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;

    // Define o tipo de conteúdo como texto plano
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Gera a mensagem de resposta com base nos parâmetros
    let responseText = '';

    if (queryParams.nome && queryParams.idade) {
        responseText = `Olá, ${queryParams.nome}!\nVocê tem ${queryParams.idade} anos.\nBem-vindo ao nosso servidor!`;
    } else if (queryParams.nome) {
        responseText = `Olá, ${queryParams.nome}!\nPor favor, forneça sua idade para uma mensagem completa.`;
    } else if (queryParams.idade) {
        responseText = `Olá!\nVocê tem ${queryParams.idade} anos.\nPor favor, forneça seu nome para uma mensagem completa.`;
    } else {
        responseText = 'Olá!\nPor favor, forneça os parâmetros "nome" e "idade" na URL para uma mensagem personalizada.';
    }

    // Envia a resposta
    res.end(responseText);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
