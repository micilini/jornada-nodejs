const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Definindo um cabeçalho personalizado
    res.setHeader('X-Custom-Header', 'Este é um cabeçalho personalizado');

    // Definindo um cabeçalho padrão
    res.setHeader('Content-Type', 'text/plain');

    // Enviando a resposta
    res.send('Olá, mundo! Esta é uma resposta simples com cabeçalhos personalizados.');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});
