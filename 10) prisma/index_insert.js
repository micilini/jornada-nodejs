const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const novoUsuario = await prisma.usuario.create({
    data: {
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      senha: 'senhaMuitoSegura',
      data_criacao: new Date('2023-09-21T10:00:00Z'),  // Definindo a data (é opcional, pois devido as configurações do banco, ele foi setado para adicionar automaticamente)
    },
  });

  console.log('Usuário criado:', novoUsuario);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
