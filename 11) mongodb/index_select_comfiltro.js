const mongoClient = require('./db/connectionMongoDB');

async function findWithFilter() {
    const db = mongoClient.db('meuBanco');
    const collection = db.collection('minhaCollection');
  
    // Buscando documentos onde cidade = 'São Paulo'
    const documents = await collection.find({ cidade: 'São Paulo' }).toArray();
    console.log('Documentos filtrados por cidade:', documents);

    //Fecha a conexão:
    await mongoClient.close();
}

findWithFilter();