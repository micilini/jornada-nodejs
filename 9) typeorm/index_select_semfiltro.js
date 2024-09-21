const connectDB = require('./src/db/connection'); 
const Usuarios = require('./src/entity/Usuarios'); 

(async () => {
  try {
    const connection = await connectDB();
    const usuarioRepository = connection.getRepository(Usuarios);

    const todosUsuarios = await usuarioRepository.find();
    console.log('Todos os usuários:', todosUsuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
})();