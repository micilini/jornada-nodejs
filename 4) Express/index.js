const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Meu Primeiro Servidor com Express =D');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});