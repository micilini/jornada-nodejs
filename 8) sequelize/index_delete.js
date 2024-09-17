const { Sequelize, DataTypes } = require('sequelize');

const connection = require('./db/connection'); // Ajuste o caminho conforme necessário
const Usuarios = require('./models/Usuarios'); // Ajuste o caminho conforme necessário

//Cria as tabelas no banco de dados caso não existam...
connection.sync().then(() => {
    console.log('Tabelas Criadas com Sucesso!');
}).catch((error) => {
    console.error('Erro ao criar as Tabelas:', error);
});

//Define uma função para deletar um usuário
async function deletarUsuario() {
    try {
        // Busca um usuário pelo ID
        const usuario = await Usuarios.findByPk(1);

        if (usuario) {
            // Deleta o usuário
            await usuario.destroy();

            console.log('Usuário deletado com sucesso!');
        } else {
            console.error('Usuário não encontrado!');
        }
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
    }
}

// Chame a função para realizar a exclusão
deletarUsuario();

//Define uma função para deletar um usuário cujo o id seja 2 e o nome seja 'Maria'
async function deletarUsuarioComFiltro() {
    try {
        // Deleta o usuário com ID 2 e nome 'Maria'
        const rowsDeleted = await Usuarios.destroy({
            where: {//Filtro para exclusão
                id: 2,
                nome: 'Maria'
            }
        });

        if (rowsDeleted > 0) {
            console.log('Usuário deletado com sucesso!');
        } else {
            console.error('Usuário não encontrado!');
        }
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
    }
}

// Chame a função para realizar a exclusão com filtro
deletarUsuarioComFiltro();