const mongoClient = require('./db/connectionMongoDB');

async function updateByName() {
  const db = mongoClient.db('meuBanco');
  const collection = db.collection('minhaCollection');
  
  // Atualizando o documento onde nome = 'João'
  const updateResult = await collection.updateOne(
    { nome: 'João' },           // Filtro
    { $set: { cidade: 'Rio de Janeiro' } }  // Atualização
  );
  console.log('Documento atualizado com base no nome:', updateResult);

  // Fechando a conexão
  await mongoClient.close();
}

updateByName();