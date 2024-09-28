const PessoaService = require('../services/PessoaService');

const getHome = async (req, res) => {
  try {
    // Buscar todas as pessoas
    const pessoas = await PessoaService.listarPessoas();
    // Extrair os dataValues de cada instância
    const listaPessoas = pessoas.map(pessoa => pessoa.dataValues);
    console.log(listaPessoas);
    res.render('home', { pessoas: listaPessoas });
  } catch (error) {
    res.status(500).send('Erro ao carregar pessoas');
  }
};

const postPessoa = async (req, res) => {
  const { nome, sobrenome } = req.body;
  try {
    // Salvar pessoa
    await PessoaService.criarPessoa(nome, sobrenome);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Erro ao salvar pessoa');
  }
};

module.exports = { getHome, postPessoa };