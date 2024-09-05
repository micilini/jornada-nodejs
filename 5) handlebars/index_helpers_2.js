const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configurando o Handlebars e criando helpers personalizados
app.engine('handlebars', exphbs.engine({
  defaultLayout: false,
  helpers: {
    ifCond: function (v1, operator, v2, options) {
      switch (operator) {
        case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        default:
          return options.inverse(this);
      }
    },
    unlessCond: function (v1, operator, v2, options) {
      switch (operator) {
        case '==':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '===':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '<=':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>=':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '!=':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '!==':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
        default:
          return options.inverse(this);
      }
    }
  }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Rota principal
app.get('/', (req, res) => {
  const rank = 128;
  res.render('home_helpers_2', { rank: rank });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});