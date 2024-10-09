const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const app = express();

// Conectar ao banco de dados
const sequelize = require('./db/connection');
sequelize.sync().then(() => console.log('Banco conectado'));

// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar handlebars como engine de views
app.engine('handlebars', exphbs.engine({
  defaultLayout: false
}));
app.set('view engine', 'handlebars');

// Configurar pasta pública
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', require('./routes/homeRoutes'));
app.use('/', require('./routes/saveRoutes'));

// Iniciar o servidor
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })  // force: false evita que as tabelas sejam recriadas
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

  module.exports = app; // Exportar app para testes