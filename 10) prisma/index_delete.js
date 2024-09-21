const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteById(id) {
  const usuarioDeletado = await prisma.usuario.delete({
    where: {
      id: id,  // Deleta o usuário com o ID específico
    },
  });

  console.log('Usuário deletado:', usuarioDeletado);
}

deleteById(1)  // Substitua pelo ID desejado
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
