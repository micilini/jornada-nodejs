const { EntitySchema } = require('typeorm');

const Usuarios = new EntitySchema({
  name: 'Usuarios',
  tableName: 'usuarios',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    nome: {
      type: String,
      length: 100,
    },
    email: {
      type: String,
      length: 100,
    },
    senha: {
      type: String,
      length: 255,
    },
    data_criacao: {
      type: 'datetime',
    },
  },
});

module.exports = Usuarios;
