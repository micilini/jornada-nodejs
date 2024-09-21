const connectDB = require('./src/db/connection'); 
const Usuarios = require('./src/entity/Usuarios'); 

(async () => {
  try {
    const connection = await connectDB();
    const usuarioRepository = connection.getRepository(Usuarios);

    const usuarioEspecifico = await usuarioRepository.findOne({
      where: { email: 'email@exemplo.com' },
    });
    console.log('Usuário específico:', usuarioEspecifico);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
  }
})();