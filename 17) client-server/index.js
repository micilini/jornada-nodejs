const express = require('express');
const path = require('path');
const app = express();

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor na porta 3001
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
