const http = require('http');
const querystring = require('querystring');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (req.method === 'POST') {
        let body = '';

        // Receber os dados do corpo da requisição
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            // Analisar o corpo da requisição usando querystring
            const parsedBody = querystring.parse(body);

            const nome = parsedBody.nome;
            const sobrenome = parsedBody.sobrenome;

            if (nome && sobrenome) {
                res.statusCode = 200;
                res.end(`Olá, ${nome} ${sobrenome}! Bem-vindo ao servidor!`);
            } else {
                res.statusCode = 400;
                res.end('Nome e sobrenome são necessários!');
            }
        });

    } else {
        res.statusCode = 405;
        res.end('Método não permitido. Só aceitamos métodos do tipo POST.');
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});