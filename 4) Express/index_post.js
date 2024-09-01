const express = require('express');
const app = express();
const port = 3000;

//Middlewares para tratar as respostas de requisições POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/dados', (req, res) => {
    console.log(req.body);
    res.send('Dados recebidos com sucesso!');
    console.log('Nome: ' + req.body.nome);
    console.log('Idade: ' + req.body.sobrenome);
});

app.get('/', (req, res) => {
    res.send('Meu Primeiro Servidor com Express =D');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});