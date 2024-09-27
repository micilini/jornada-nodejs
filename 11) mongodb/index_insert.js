const mongoClient = require('./db/connectionMongoDB');

async function createDatabaseAndCollection() {
  try {
    // Conectando ao MongoDB
    await mongoClient.connect();

    // Criando ou acessando o banco de dados (nome do banco de dados: 'meuBanco')
    const db = mongoClient.db('meuBanco');

    // Criando ou acessando a collection (nome da collection: 'minhaCollection')
    const collection = db.collection('minhaCollection');

    // Inserindo um documento
    const result = await collection.insertOne({
      nome: 'João',
      idade: 30,
      cidade: 'São Paulo'
    });

    console.log('Documento inserido com sucesso!', result);
  } catch (error) {
    console.log('Erro ao criar banco de dados ou inserir documento:', error);
  } finally {
    // Fechar a conexão com o MongoDB
    await mongoClient.close();
    console.log('Conexão fechada com o MongoDB!');
  }
}

createDatabaseAndCollection();