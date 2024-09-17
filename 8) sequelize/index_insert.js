const { Sequelize, DataTypes } = require('sequelize');

const connection = require('./db/connection'); // Ajuste o caminho conforme necessário
const Usuarios = require('./models/Usuarios'); // Ajuste o caminho conforme necessário

//Cria as tabelas no banco de dados caso não existam...
connection.sync().then(() => {
    console.log('Tabelas Criadas com Sucesso!');
}).catch((error) => {
    console.error('Erro ao criar as Tabelas:', error);
});

//Define uma função de inserção de usuário
async function inserirUsuario() {
    try {
        // Dados a serem inseridos
        const novoUsuario = await Usuarios.create({
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            senha: 'senhaSegura123'
        });

        console.log('Usuário inserido com sucesso:', novoUsuario.toJSON());
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
    }
}

// Chame a função para realizar o INSERT
inserirUsuario();