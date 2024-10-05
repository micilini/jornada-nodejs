const express = require('express');
const cors = require('cors');
const sequelize = require('./db/connection'); // Importa a conexão do Sequelize
const cookieParser = require('cookie-parser'); // Importa o cookie-parser

//Inicializa o express
const app = express();

//Configurações da resposta em JSON
app.use(express.json());

//Configurações do Parser de Coookies
app.use(cookieParser());

//Configuração do CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));//Soluciona os erros de CORS na tentativa de acessarem a API estando no mesmo domínio

//Configuração e importação dos arquivos de rotas
app.use('/', require('./routes/GeralRotas'));
app.use('/usuarios', require('./routes/UsuarioRotas'));
app.use('/dragao', require('./routes/DragaoRotas'));

// Sincroniza o Sequelize com o banco de dados (cria as tabelas caso não existam)
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    
    // Configuração da porta do servidor
    app.listen(3333, () => {
        console.log('Servidor rodando em http://localhost:3333');
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });