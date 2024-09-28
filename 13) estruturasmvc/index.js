require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const mainRoutes = require('./routes/mainRoutes');
const { sequelize } = require('./config/connectionDB');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para tratar formulários
app.use(express.urlencoded({ extended: true }));

//Troca a pasta views por view
app.set('views', path.join(__dirname, 'view'));

// Configurar Handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: false // Desativa o uso de layouts padrão
}));
app.set('view engine', 'handlebars');

// Rotas
app.use('/', mainRoutes);

// Testar conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados!');

    // Sincroniza o modelo com o banco de dados
    return sequelize.sync();  // Isso cria as tabelas se elas não existirem
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch(err => console.log('Erro ao conectar ao banco de dados: ', err));