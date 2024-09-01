const express = require('express');
const app = express();
const port = 3000;

// Defina o código HTML como uma string
const htmlContent = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #ccc 1px solid;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 24px;
        }
        .main {
            padding: 20px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Bem-vindo ao Meu Site</h1>
        </div>
    </header>
    <div class="main container">
        <h2>Conteúdo da Página</h2>
        <p>Este é um exemplo de conteúdo HTML retornado diretamente pelo servidor.</p>
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(htmlContent); // Envia o HTML diretamente na resposta
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});
