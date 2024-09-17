const { DataTypes } = require('sequelize');

const connection = require('../db/connection');

const Usuarios = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Usuarios;