const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Tela Principal!');
});

app.get('/contato', (req, res) => {
    res.send('Tela de Contato');
});

app.get('/sobre', (req, res) => {
    res.send('Tela de Sobre');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});