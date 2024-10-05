const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Middleware para interpretar cookies
app.use(cookieParser());

// Rota para definir um cookie
app.get('/set-cookie', (req, res) => {
    // Define um cookie chamado 'meuCookie' com o valor 'valorDoCookie' que expira em 1 dia
    res.cookie('meuCookie', 'valorDoCookie', { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
    res.send('Cookie foi definido com sucesso!');
});

// Rota para ler o cookie
app.get('/get-cookie', (req, res) => {
    // Lê o cookie 'meuCookie' do cliente
    const meuCookie = req.cookies.meuCookie;
    if (meuCookie) {
        res.send(`O valor do cookie 'meuCookie' é: ${meuCookie}`);
    } else {
        res.send('Cookie não encontrado');
    }
});

// Rota para remover o cookie
app.get('/clear-cookie', (req, res) => {
    // Remove o cookie 'meuCookie'
    res.clearCookie('meuCookie');
    res.send('Cookie foi removido com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});