const mongoClient = require('./db/connectionMongoDB');
const { ObjectId } = require('mongodb');

async function updateById() {
  const db = mongoClient.db('meuBanco');
  const collection = db.collection('minhaCollection');
  
  // O _id do documento a ser atualizado
  const documentId = '65145e8c5f4cfc43568b7e36'; // Substitua pelo ObjectId real

  // Atualizando o documento onde _id é igual ao especificado
  const updateResult = await collection.updateOne(
    { _id: new ObjectId(documentId) },  // Filtro com ObjectId
    { $set: { idade: 35 } }             // Atualização
  );
  console.log('Documento atualizado com base no _id:', updateResult);

  // Fechando a conexão
  await mongoClient.close();
}

updateById();