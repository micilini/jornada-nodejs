const express = require('express');
const app = express();
const port = 3000;

// Middleware para validar se o parâmetro id é numérico
const validateNumericId = (req, res, next) => {
    const id = req.params.id;

    if (/^\d+$/.test(id)) {
        // ID é numérico, continue para o próximo middleware ou manipulador
        next();
    } else {
        // ID não é numérico, retorna um erro 400 (Bad Request)
        res.status(400).send('ID deve ser um valor numérico.');
    }
};

// Rota com parâmetro obrigatório e validação numérica
app.get('/usuario/:id', validateNumericId, (req, res) => {
    const id = req.params.id;
    res.send(`ID do Usuário: ${id}`);
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});