const usuarioRepository = require('./repositories/usuarioRepository');

// Função para criar um usuário
async function createUser() {
  const newUser = {
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    senha: 'senhaSegura123',
    data_criacao: new Date(),
  };
  
  const createdUser = await usuarioRepository.create(newUser);
  console.log('Usuário criado:', createdUser);
}

// Função para buscar todos os usuários
async function getAllUsers() {
  const users = await usuarioRepository.findAll();
  console.log('Todos os usuários:', users);
}

// Função para buscar usuário por ID
async function getUserById(id) {
  const user = await usuarioRepository.findById(id);
  if (user) {
    console.log('Usuário encontrado:', user);
  } else {
    console.log('Usuário não encontrado.');
  }
}

// Função para atualizar um usuário por ID
async function updateUser(id) {
  const updatedData = {
    nome: 'João Atualizado',
    email: 'joao.atualizado@example.com',
  };

  const updatedUser = await usuarioRepository.update(id, updatedData);
  console.log('Usuário atualizado:', updatedUser);
}

// Função para deletar um usuário por ID
async function deleteUser(id) {
  const deletedUser = await usuarioRepository.delete(id);
  console.log('Usuário deletado:', deletedUser);
}

// Chamando as funções para testar
async function main() {
  await createUser();          // Cria um novo usuário
  await getAllUsers();         // Busca todos os usuários
  await getUserById(1);        // Busca um usuário pelo ID
  await updateUser(1);         // Atualiza um usuário pelo ID
  await deleteUser(1);         // Deleta um usuário pelo ID
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    // Encerra a conexão com o Prisma chamando o método disconnect do repositório
    await usuarioRepository.disconnect();
  });
