const express = require('express');
const app = express();
const port = 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota principal que envia uma página HTML com um link para o CSS
app.get('/', (req, res) => {
    // HTML inline que chama o arquivo home.css
    const html = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meu Primeiro Servidor com Express</title>
            <link rel="stylesheet" href="/home.css">
        </head>
        <body>
            <h1>Bem-vindo ao Meu Primeiro Servidor com Express =D</h1>
            <p>Este é um exemplo de como usar arquivos estáticos com Express.</p>
        </body>
        </html>
    `;
    
    // Envia o HTML como resposta
    res.send(html);
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});
