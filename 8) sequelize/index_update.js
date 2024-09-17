const { Sequelize, DataTypes } = require('sequelize');

const connection = require('./db/connection'); // Ajuste o caminho conforme necessário
const Usuarios = require('./models/Usuarios'); // Ajuste o caminho conforme necessário

//Cria as tabelas no banco de dados caso não existam...
connection.sync().then(() => {
    console.log('Tabelas Criadas com Sucesso!');
}).catch((error) => {
    console.error('Erro ao criar as Tabelas:', error);
});

//Define uma função para atualizar um usuário
async function atualizarUsuario() {
    try {
        // Busca um usuário pelo ID
        const usuario = await Usuarios.findByPk(1);

        if (usuario) {
            // Atualiza o nome do usuário
            usuario.nome = 'João da Silva Neto Costa';
            await usuario.save();

            console.log('Usuário atualizado com sucesso:', usuario.toJSON());
        } else {
            console.error('Usuário não encontrado!');
        }
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
    }
}

// Chame a função para realizar a atualização
atualizarUsuario();

//Define um afunção para atualizar um usuário cujo o id seja 2 e o nome seja 'Maria'
async function atualizarUsuarioComFiltro() {
    try {
        // Atualiza o nome do usuário com ID 2
        const [rowsUpdated, [usuario]] = await Usuarios.update({
            nome: 'Maria da Silva',//valores que serão atualizados
        }, {
            where: {//Filtro para atualização
                id: 2,
                nome: 'Maria'
            },
            returning: true//Retorna os dados que foram atualizados
        });

        if (rowsUpdated > 0) {
            console.log('Usuário atualizado com sucesso:', usuario.toJSON());
        } else {
            console.error('Usuário não encontrado!');
        }
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
    }
}

// Chame a função para realizar a atualização com filtro
atualizarUsuarioComFiltro();