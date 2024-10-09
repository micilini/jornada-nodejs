const chai = require('chai');
const { expect } = chai;
const Usuario = require('../models/Usuario');

describe('Teste do Banco de Dados', () => {
    before(async () => {
        await Usuario.sync({ force: true }); // Limpa e cria a tabela
    });

    it('Deve inserir um usuário no banco de dados', async () => {
        const usuario = await Usuario.create({ nome: 'Teste DB' });
        expect(usuario).to.have.property('id');
        expect(usuario).to.have.property('nome', 'Teste DB');

        const usuarios = await Usuario.findAll();
        expect(usuarios).to.have.lengthOf(1);
        expect(usuarios[0].dataValues.nome).to.equal('Teste DB');
    });

    it('Deve buscar todos os usuários no banco de dados', async () => {
        const usuarios = await Usuario.findAll();
        expect(usuarios).to.be.an('array').that.is.not.empty;
    });
});