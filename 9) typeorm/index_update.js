const connectDB = require('./src/db/connection'); 
const Usuarios = require('./src/entity/Usuarios'); 

(async () => {
  try {
    const connection = await connectDB();
    const usuarioRepository = connection.getRepository(Usuarios);

    // Atualizar o usuário com id = 1
    await usuarioRepository.update(1, { nome: 'Novo Nome' });
    
    console.log('Usuário atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }
})();