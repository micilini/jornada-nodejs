const http = require('http');

const port = 3000;

// Funções para lidar com cada rota
const handleHome = (res) => {
    res.statusCode = 200;
    res.end('Bem-vindo à página inicial!');
};

const handleSobre = (res) => {
    res.statusCode = 200;
    res.end('Esta é a página sobre nós.');
};

const handleContato = (res) => {
    res.statusCode = 200;
    res.end('Entre em contato conosco através desta página.');
};

const handleNotFound = (res) => {
    res.statusCode = 404;
    res.end('Página não encontrada!');
};

// Função para tratar a requisição
const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (req.url) {
        case '/':
            handleHome(res);
            break;
        case '/sobre':
            handleSobre(res);
            break;
        case '/contato':
            handleContato(res);
            break;
        default:
            handleNotFound(res);
            break;
    }
};

// Criar o servidor HTTP
const server = http.createServer(requestHandler);

// Escutar na porta 3000
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
