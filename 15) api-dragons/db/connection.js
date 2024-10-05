require('dotenv').config(); // Carrega as variáveis do .env

const { Sequelize } = require('sequelize');// Carrega a biblioteca do Sequelize

//Realiza as configurações do Sequelize com as variáveis de ambiente (.env)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

module.exports = sequelize;

