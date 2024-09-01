const express = require('express');
const app = express();
const port = 3000;

// Middleware de autenticação
const authUser = function(req, res, next) {
    req.authUser = false; // Simula que o usuário não está autenticado

    if (req.authUser) {
        console.log('Usuário Autenticado');
        next(); // Usuário autenticado, continua para a próxima função
    } else {
        console.log('Usuário não Autenticado');
        res.send('Usuário não Autenticado'); // Responde ao cliente
    }
}

// Rota para a página inicial
app.get('/home', (req, res) => {
    res.send('Página Inicial');
});

// Rota para a página de sobre
app.get('/sobre', (req, res) => {
    res.send('Página de Sobre');
});

// Rota para a página de contato
app.get('/contato', (req, res) => {
    res.send('Página de Contato');
});

// Rota para a página de dashboard com middleware de autenticação
app.get('/dashboard', authUser, (req, res) => {
    res.send('Página de Dashboard');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});
