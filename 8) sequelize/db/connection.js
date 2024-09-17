const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', '', {
    host: 'localhost',//Pode ser 127.0.0.1 ou qualquer outro IP Externo
    dialect: 'mysql'//Pode ser mysql, postgres, sqlite, mariadb ou mssql
});

/*try{
    sequelize.authenticate();//Testar a conexão com o banco de dados
    console.log('Conexão estabelecida com sucesso.');
}catch(error){
    console.error('Não foi possível conectar ao banco de dados:', error);
}*///Não vamos precisa disso, pois a comunicação será feita pelo método SYNC do Sequelize

module.exports = sequelize;