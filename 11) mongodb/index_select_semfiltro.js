const mongoClient = require('./db/connectionMongoDB');

async function findAllDocuments() {
    const db = mongoClient.db('meuBanco');
    const collection = db.collection('minhaCollection');
  
    // Buscando todos os documentos
    const documents = await collection.find({}).toArray();
    console.log('Todos os documentos:', documents);

    //Fecha a conexão:
    await mongoClient.close();
}

findAllDocuments();