const connectDB = require('./src/db/connection'); // Certifique-se de que a conexão está correta
const Usuarios = require('./src/entity/Usuarios'); // Importando a entidade

(async () => {
  try {
    const connection = await connectDB(); // Conecta ao banco de dados

    // Obter o repositório da entidade Usuarios
    const usuarioRepository = connection.getRepository(Usuarios);

    // Criar um novo usuário
    const novoUsuario = usuarioRepository.create({
      nome: 'Nome do Usuário',
      email: 'email@exemplo.com',
      senha: 'senhaSegura',
      data_criacao: new Date(), // data atual
    });

    // Salvar o novo usuário no banco de dados
    await usuarioRepository.save(novoUsuario);

    console.log('Usuário inserido com sucesso!', novoUsuario);
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
  }
})();
