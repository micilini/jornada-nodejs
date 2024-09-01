const express = require('express');
const { param, validationResult } = require('express-validator');
const app = express();
const port = 3000;

// Rota com validação usando express-validator
app.get('/usuario/:id',
    param('id').isInt().withMessage('ID deve ser um número inteiro'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        res.send(`ID do Usuário: ${id}`);
    }
);

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});