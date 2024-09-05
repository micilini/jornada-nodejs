const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

//Configuração do HandleBars
app.engine('handlebars', exphbs.engine({
  defaultLayout: false, // Desativa o uso de layouts
  partialsDir: ["views/partials"], //Define o diretório onde os arquivos do partials serão levados
}));

app.set('view engine', 'handlebars');

// Rota principal
app.get('/', (req, res) => {
  //Variaveis que serão enviadas a nossa View:
  const nome = "Micilini Roll";
  const site = "https://micilini.com/";

  //Passamos todos os parâmetros para a nossa view como segundo parâmetro dentro de uma estrutura de chave e valor:
  res.render('home_partials', {
    nome: nome,
    site: site
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});