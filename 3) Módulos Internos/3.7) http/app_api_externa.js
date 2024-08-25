const http = require('http');
const https = require('https');

// Função para fazer a requisição HTTP para a API
const fetchUsers = () => {
    return new Promise((resolve, reject) => {
        https.get('https://jsonplaceholder.typicode.com/users', (response) => {
            let data = '';

            // Receber dados do corpo da resposta
            response.on('data', chunk => {
                data += chunk;
            });

            // Quando a resposta estiver completa, resolver a Promise
            response.on('end', () => {
                try {
                    const users = JSON.parse(data);
                    resolve(users);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
};

// Função principal para iniciar o servidor
const startServer = () => {
    const server = http.createServer(async (req, res) => {
        if (req.url === '/fetch-users' && req.method === 'GET') {
            try {
                const users = await fetchUsers();
                console.log('Nomes dos usuários:');
                users.forEach(user => {
                    console.log(user.name);
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('Nomes dos usuários foram exibidos no console.');
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Erro ao buscar usuários.');
            }
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Rota não encontrada!');
        }
    });

    server.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
};

startServer();
