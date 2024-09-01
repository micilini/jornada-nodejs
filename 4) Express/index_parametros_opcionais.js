const express = require('express');
const app = express();
const port = 3000;

// Rota com parâmetro opcional
app.get('/usuario/:id?', (req, res) => {
    const id = req.params.id;

    if (id) {
        res.send(`ID do Usuário: ${id}`);
    } else {
        res.send('ID do Usuário não fornecido');
    }
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});