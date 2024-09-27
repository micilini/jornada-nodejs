const mongoClient = require('./db/connectionMongoDB');

async function removeByName() {
  const db = mongoClient.db('meuBanco');
  const collection = db.collection('minhaCollection');
  
  // Removendo o documento onde nome = 'João'
  const deleteResult = await collection.deleteOne({ nome: 'João' });
  console.log('Documento removido com base no nome:', deleteResult);

  // Fechando a conexão
  await mongoClient.close();
}

removeByName();