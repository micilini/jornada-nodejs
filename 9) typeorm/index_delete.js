const connectDB = require('./src/db/connection'); 
const Usuarios = require('./src/entity/Usuarios'); 

(async () => {
  try {
    const connection = await connectDB();
    const usuarioRepository = connection.getRepository(Usuarios);

    // Deletar o usuário com id = 1
    await usuarioRepository.delete(1);
    
    console.log('Usuário deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
})();
