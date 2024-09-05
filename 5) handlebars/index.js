const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine({
  defaultLayout: false
}));
app.set('view engine', 'handlebars');

//Configuração da pasta de arquivos estáticos

app.use(express.static('public'));

app.get('/', (req, res) => {
  const nome = "Micilini Roll";
  const rank = 128;
  const isAtivo = true;
  const dinheiro = 12.98;
  const numerosDaSorte = [23, 98, 87, 76];
  const informacoesAdicionais = {
    site: 'https://micilini.com',
    isHttps: true
  }

  res.render('home', {
    nome: nome,
    rank: rank,
    isAtivo: isAtivo,
    dinheiro: dinheiro,
    numerosDaSorte: numerosDaSorte,
    informacoesAdicionais: informacoesAdicionais
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});