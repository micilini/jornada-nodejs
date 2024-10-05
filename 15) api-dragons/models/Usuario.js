const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem_usuario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    whatsapp_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Usuario;