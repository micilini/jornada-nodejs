const express = require('express');
const session = require('express-session');

const app = express();

// Configurar o express-session
app.use(session({
    secret: 'segredo-super-seguro',  // Chave usada para assinar o cookie da sessão
    resave: false,                   // Evita salvar a sessão se nada mudou
    saveUninitialized: true,         // Salva sessões que ainda não foram inicializadas
    cookie: { maxAge: 3600000 }      // Tempo de expiração do cookie (1 hora)
}));

// Rota para criar uma sessão
app.get('/criar', (req, res) => {
    req.session.sessionId = '12345'; // Criar ou definir o ID da sessão
    req.session.nome = 'Usuário Sessão'; // Adicionar outros dados à sessão
    res.send('Sessão criada com sucesso!');
});

// Rota para ler os dados da sessão
app.get('/ler', (req, res) => {
    if (req.session.sessionId) {
        res.send(`Sessão ativa: ID = ${req.session.sessionId}, Nome = ${req.session.nome}`);
    } else {
        res.status(404).send('Nenhuma sessão ativa.');
    }
});

// Rota para editar a sessão
app.get('/editar', (req, res) => {
    if (req.session.sessionId) {
        req.session.nome = 'Usuário Editado'; // Editar um dado na sessão
        res.send('Sessão editada com sucesso!');
    } else {
        res.status(404).send('Nenhuma sessão para editar.');
    }
});

// Rota para remover a sessão
app.get('/remover', (req, res) => {
    if (req.session.sessionId) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Erro ao remover a sessão.');
            }
            res.send('Sessão removida com sucesso!');
        });
    } else {
        res.status(404).send('Nenhuma sessão para remover.');
    }
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});