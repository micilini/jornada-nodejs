const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates_html');//Importa a pasta que contém todos os templates em HTML.

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);//Envia o arquivo index.html para o cliente.
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});