const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function selectByEmail(email) {
  const usuario = await prisma.usuario.findMany({
    where: {
      email: email,
    },
  });
  console.log('Usuário encontrado:', usuario);
}

selectByEmail('email@example.com')  // Substitua pelo email desejado
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
