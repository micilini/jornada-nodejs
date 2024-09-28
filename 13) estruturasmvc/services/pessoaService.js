const Pessoa = require('../model/Pessoa');

const listarPessoas = async () => {
  return await Pessoa.findAll();
};

const criarPessoa = async (nome, sobrenome) => {
  return await Pessoa.create({ nome, sobrenome });
};

module.exports = { listarPessoas, criarPessoa };