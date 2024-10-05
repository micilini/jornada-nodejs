const express = require('express');
const cors = require('cors'); // Importar o pacote cors
const app = express();

// Ativar o CORS para todas as rotas
app.use(cors());

// Definir a rota que retorna a lista de nomes em JSON
app.get('/nomes', (req, res) => {
    const nomes = [
        { id: 1, nome: 'Ana' },
        { id: 2, nome: 'Carlos' },
        { id: 3, nome: 'Fernanda' },
        { id: 4, nome: 'João' }
    ];
    res.json(nomes); // Envia a lista de nomes como JSON
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});