// Importa os módulos http e fs
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
    // Define o caminho do arquivo index.html
    const filePath = path.join(__dirname, 'index.html');

    // Lê o arquivo index.html
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500; // Erro interno do servidor
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro ao ler o arquivo');
            return;
        }

        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/html'); // Tipo de conteúdo HTML
        res.end(data); // Envia o conteúdo do arquivo para o cliente
    });
});

// Inicia o servidor
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});