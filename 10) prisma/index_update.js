const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateById(id, novosDados) {
  const usuarioAtualizado = await prisma.usuario.update({
    where: {
      id: id,  // Atualiza o usuário com o ID específico
    },
    data: novosDados,  // Os novos dados que deseja atualizar
  });

  console.log('Usuário atualizado:', usuarioAtualizado);
}

updateById(1, { nome: 'João Atualizado', email: 'novoemail@example.com' })  // Substitua por ID e dados desejados
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
