const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Apenas tenta conectar ao banco de dados
  await prisma.$connect();
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
}

main()
  .catch(e => {
    console.error('Erro ao conectar ao banco de dados:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Conexão com o banco de dados encerrada.');
  });