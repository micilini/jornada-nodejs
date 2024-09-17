const connection = require('./db/connection');
const usuarios = require('./models/Usuarios');

connection.sync().then(() => {
    console.log('Tabelas Criadas com Sucesso!');
}).catch((error) => {
    console.error('Erro ao criar as Tabelas:', error);
});

console.log('Servidor Iniciado com Sucesso!');
