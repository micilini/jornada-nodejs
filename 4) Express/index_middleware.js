const express = require('express');
const app = express();
const port = 3000;

const authUser = function(req, res, next) {
    req.authUser = false;

    if(req.authUser){
        console.log('Usuário Autenticado');
        next();
    }else{
        console.log('Usuário não Autenticado');
        res.send('Usuário não Autenticado');
    }
}

app.use(authUser);

app.get('/home', (req, res) => {
    res.send('Página Inicial');
});

app.get('/sobre', (req, res) => {
    res.send('Página de Sobre');
});

app.get('/contato', (req, res) => {
    res.send('Página de Contato');
});

app.get('/dashboard', (req, res) => {
    res.send('Página de Dashboard');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
});