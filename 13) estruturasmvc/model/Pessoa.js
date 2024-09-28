const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connectionDB');

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Pessoa;