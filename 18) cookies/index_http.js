const http = require('http');

// Função para analisar cookies recebidos
function parseCookies(request) {
    const list = {};
    const cookieHeader = request.headers.cookie;
    if (cookieHeader) {
        cookieHeader.split(';').forEach(cookie => {
            let [name, ...rest] = cookie.split('=');
            name = name?.trim();
            const value = rest.join('=').trim();
            if (name && value) {
                list[name] = decodeURIComponent(value);
            }
        });
    }
    return list;
}

// Função para criar cookies no cabeçalho da resposta
function setCookie(name, value, options = {}) {
    let cookie = `${name}=${encodeURIComponent(value)}`;
    if (options.maxAge) {
        cookie += `; Max-Age=${options.maxAge}`;
    }
    if (options.httpOnly) {
        cookie += '; HttpOnly';
    }
    return cookie;
}

const server = http.createServer((req, res) => {
    // Analisando cookies da requisição
    const cookies = parseCookies(req);

    if (req.url === '/set-cookie') {
        // Definindo um cookie chamado 'meuCookie' com o valor 'valorDoCookie' que expira em 1 dia (86400 segundos)
        res.setHeader('Set-Cookie', setCookie('meuCookie', 'valorDoCookie', { maxAge: 86400, httpOnly: true }));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Cookie foi definido com sucesso!');
    } else if (req.url === '/get-cookie') {
        // Lendo o cookie 'meuCookie'
        const meuCookie = cookies['meuCookie'];
        if (meuCookie) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`O valor do cookie 'meuCookie' é: ${meuCookie}`);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Cookie não encontrado');
        }
    } else if (req.url === '/clear-cookie') {
        // Removendo o cookie 'meuCookie' (setando com valor vazio e expiração passada)
        res.setHeader('Set-Cookie', setCookie('meuCookie', '', { maxAge: -1 }));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Cookie foi removido com sucesso!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});