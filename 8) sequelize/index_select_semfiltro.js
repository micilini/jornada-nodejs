const { Sequelize, DataTypes } = require('sequelize');

const connection = require('./db/connection'); // Ajuste o caminho conforme necessário
const Usuarios = require('./models/Usuarios'); // Ajuste o caminho conforme necessário

//Cria as tabelas no banco de dados caso não existam...
connection.sync().then(() => {
    console.log('Tabelas Criadas com Sucesso!');
}).catch((error) => {
    console.error('Erro ao criar as Tabelas:', error);
});

//Define uma função para buscar usuários (sem filtro de WHERE)
async function buscarUsuarios() {
    try {
        // Busca todos os usuários
        const usuarios = await Usuarios.findAll();

        console.log('Usuários encontrados:', usuarios.map(usuario => usuario.toJSON()));
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

// Chame a função para realizar a busca
buscarUsuarios();
