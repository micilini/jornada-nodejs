const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configurando o Handlebars e criando um helper personalizado
app.engine('handlebars', exphbs.engine({
  defaultLayout: false,
  helpers: {
    formatCurrency: function(value) {
      return `$${value.toFixed(2)}`;  // Formata o valor como moeda
    }
  }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Rota principal
app.get('/', (req, res) => {
  const dinheiro = 12.98;

  res.render('home_helpers', {
    dinheiro: dinheiro
  });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
