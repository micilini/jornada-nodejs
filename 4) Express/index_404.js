const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Meu Primeiro Servidor com Express =D');
});

//Sempre use este middleware por último:
app.use(function(req, res, next) {
    res.status(404).send('Desculpe, não conseguimos encontrar essa página.');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});