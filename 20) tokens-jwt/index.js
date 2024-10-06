const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { generateAccessToken, generateRefreshToken } = require('./manageTokens');
const tokenMiddleware = require('./tokenMiddleware');

// Middleware para interpretar o body de requisições POST
app.use(express.urlencoded({ extended: true })); // Para dados de formulário (application/x-www-form-urlencoded)
app.use(express.json()); // Para dados em formato JSON

// Definindo o diretório de arquivos estáticos (HTML)
app.use(express.static(path.join(__dirname, 'views')));

// Configuração da sessão
app.use(session({
    secret: 'seu-segredo-aqui', // Deve ser uma string segura
    resave: false,              // Não salvar a sessão se nada foi modificado
    saveUninitialized: true,    // Salvar uma sessão nova, mesmo sem modificações
    cookie: {
        secure: false, // Apenas para HTTPS, se for true, não funcionará no localhost
        maxAge: 60000 // 1 minuto (60000 ms)
    }
}));

//Configuração do cookie-parser
app.use(cookieParser());

// Rota para a página home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota para a página de dashboard
app.get('/dashboard', tokenMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Rota para realizar o login
app.post('/loginUser', (req, res) => {
    //Verifica de forma direta se o usuário e senha estão corretos
    if (req.body.email === 'admin@admin.com' && req.body.password === 'admin') {
        //Gera os tokens de acesso e refresh
        const accessToken = generateAccessToken(1, 60); // expira em 1 minuto
        const refreshToken = generateRefreshToken(1);// expira em 30 dias

        //Salva o accessToken na sessão do usuário
        req.session.accessToken = accessToken;

        //Salva o RefreshToken em um cookie
        res.cookie('refreshToken', refreshToken, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // expira em 30 dias
            path: '/',
            secure: true, // apenas HTTPS
            httpOnly: true, // acessível apenas via HTTP
            sameSite: 'None' // ajuste conforme necessário
        });

        //Se estiver tudo OK, devemos redirecionar o usuário para /dashboard
        res.redirect('/dashboard');
    } else {
        //Se estiver errado, devemos retornar um erro 401, com uma mensagem com um link para voltar para a tela de /login
        res.status(401).send('Usuário ou senha inválidos. <a href="/login">Voltar</a>');
    }
});

// Servidor rodando na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});