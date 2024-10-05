const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Usuario = require('./Usuario'); // Relacionamento com o model Usuario

const Dragao = sequelize.define('Dragao', {
    id_dragao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_dragao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso_dragao: {
        type: DataTypes.FLOAT, // Alterado de NUMBER para FLOAT
        allowNull: false
    },
    idade_dragao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cor_dragao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagens_dragao: {
        type: DataTypes.TEXT, // Armazenar array como JSON
        allowNull: false,
        get() {
            const value = this.getDataValue('imagens_dragao');
            return value ? JSON.parse(value) : [];
        },
        set(value) {
            this.setDataValue('imagens_dragao', JSON.stringify(value));
        }
    },
    existe_dragao: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true
});

// Relacionamento: Dragão pertence a um Usuário
Dragao.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Dragao;