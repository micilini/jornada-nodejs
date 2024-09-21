require('reflect-metadata'); // Importa o reflect-metadata, necessário para o TypeORM
const { createConnection } = require('typeorm'); // Importa a função createConnection do TypeORM
const fs = require('fs'); // Módulo para manipulação de arquivos
const path = require('path'); // Módulo para trabalhar com caminhos de arquivos

// Função para conectar ao banco de dados
const connectDB = async () => {
  try {
    // Caminho para o diretório das entidades
    const entitiesPath = path.join(__dirname, '../entity');

    // Lê todos os arquivos no diretório de entidades e importa apenas os arquivos .js
    const entities = fs.readdirSync(entitiesPath)
      .filter(file => file.endsWith('.js')) // Filtra apenas arquivos .js
      .map(file => require(path.join(entitiesPath, file))); // Importa cada entidade

    const connection = await createConnection({
      type: 'mysql', // Tipo do banco de dados
      host: 'localhost', // Endereço do banco de dados (poderia ser 127.0.0.1, ou qualquer IP ou URL)
      port: 3306, // Porta do banco de dados
      username: 'root', // Seu usuário MySQL
      password: '....', // Sua senha MySQL
      database: 'nodejs', // Seu banco de dados MySQL
      entities: entities, // Passa as entidades importadas
      synchronize: true, // Cria automaticamente as tabelas no banco de dados
    });

    console.log('Conectado ao banco de dados');
    return connection;
  } catch (error) {
    console.log('Erro ao conectar ao banco de dados: ', error);
    throw error;
  }
};

module.exports = connectDB;
