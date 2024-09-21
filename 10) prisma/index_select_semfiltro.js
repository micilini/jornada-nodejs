const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function selectAll() {
  const usuarios = await prisma.usuario.findMany();
  console.log('Todos os usuários:', usuarios);
}

selectAll()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });