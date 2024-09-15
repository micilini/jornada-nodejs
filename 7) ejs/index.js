const express = require('express');
const app = express();
const port = 3000;

//Configuração da pasta de arquivos estáticos
app.use(express.static('public'));

//Configuração do Template Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', './views');

// Rota principal
app.get('/', (req, res) => {
    //Variaveis que serão enviadas a nossa View:
    const nome = "Micilini Roll";
    const rank = 128;
    const isAtivo = true;
    const dinheiro = 12.98;
    const numerosDaSorte = [23, 98, 87, 76];
    const informacoesAdicionais = {
      site: 'https://micilini.com',
      isHttps: true
    }
  
    //Passamos todos os parâmetros para a nossa view como segundo parâmetro dentro de uma estrutura de chave e valor:
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