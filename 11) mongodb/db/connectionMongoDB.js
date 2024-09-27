const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB!');
  } catch (e) {
    console.log('Erro ao conectar ao MongoDB!', e);
  }
  finally {
    //await client.close();
    //console.log('Conexão fechada com o MongoDB!');
  }
}

run();

module.exports = client;