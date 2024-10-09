const axios = require('axios');
const Usuario = require('../models/Usuario');

class HomeController {
  async home(req, res) {
    try {
      // Chamando a API JSONPlaceholder para buscar usuários
      const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
      // Extraindo os nomes dos usuários da API
      const nomesApi = apiResponse.data.map(user => user.name);

      // Buscando nomes do banco de dados
      const usuariosDb = await Usuario.findAll();
      // Extraindo apenas os nomes do banco de dados
      const nomesDb = usuariosDb.map(usuario => usuario.dataValues.nome);

      res.render('index', { nomesApi, nomesDb });
    } catch (error) {
      console.error('Erro ao carregar dados da API:', error);
      res.status(500).send('Erro ao carregar dados');
    }
  }
}

module.exports = new HomeController();