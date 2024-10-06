const http = require('http');

// Simulação de um armazenamento de sessões em memória
let session = null;  // Inicialmente, nenhuma sessão

// Função para manipular as requisições e rotas
const server = http.createServer((req, res) => {
    if (req.url === '/criar' && req.method === 'GET') {
        // Criar sessão mockada
        session = { id: 1, nome: 'Usuário Sessão', status: 'Ativo' };
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Sessão criada com sucesso!');
    } else if (req.url === '/ler' && req.method === 'GET') {
        // Ler sessão mockada
        if (session) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(session));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Nenhuma sessão encontrada.');
        }
    } else if (req.url === '/editar' && req.method === 'GET') {
        // Editar sessão mockada
        if (session) {
            session.nome = 'Usuário Editado';  // Alterar um campo da sessão
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Sessão editada com sucesso!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Nenhuma sessão para editar.');
        }
    } else if (req.url === '/remover' && req.method === 'GET') {
        // Remover sessão mockada
        if (session) {
            session = null;  // Zerar a sessão
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Sessão removida com sucesso!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Nenhuma sessão para remover.');
        }
    } else {
        // Rota não encontrada
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota não encontrada.');
    }
});

// Iniciar o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});