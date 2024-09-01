const express = require('express');
const app = express();
const port = 3000;

// Importar os roteadores
const usuariosRouter = require('./routes/usuarios');
const homeRouter = require('./routes/home');
const sobreRouter = require('./routes/sobre');
const contatoRouter = require('./routes/contato');

// Usar os roteadores
app.use('/usuarios', usuariosRouter);
app.use('/home', homeRouter);
app.use('/sobre', sobreRouter);
app.use('/contato', contatoRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
