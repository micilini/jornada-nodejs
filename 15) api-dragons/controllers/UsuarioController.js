const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

//Importa as funções necessárias para gerar os tokens JWT
const { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } = require('../helpers/manageTokens');

class UsuarioController {
    //Função para registrar novos usuários
    static async registrar(req, res) {
        try {
            const { nome, email, senha, imagem, whatsapp } = req.body;

            //Valida se todos os campos acima (que são obrigatórios) vieram na requisição, caso não, retorna um erro
            if (!nome || !email || !senha || !whatsapp) {
                return res.status(422).json({ mensagem: 'Os campos nome, email, senha e whatsapp são obrigatórios!' });
            }

            //Validação de imagens
            let image = null;

            if (req.file) {
                image = req.file.filename;//O middleware que configura o upload da imagem (declarado no arquivo de rotas) salva a imagem no req.file.filename
            }

            // Verifica se o email já existe no banco de dados
            const emailExiste = await UsuarioController.#verificarEmailExistente(email);
            if (emailExiste) {
                return res.status(409).json({ mensagem: 'Este email já está registrado!' });
            }

            //Fortifica a senha usando SALT + BCRYPT
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(senha, salt);

            //Salva o usuário no banco de dados

            const usuario = await Usuario.create({
                nome_usuario: nome,
                email_usuario: email,
                senha_usuario: passwordHash,
                imagem_usuario: image,
                whatsapp_usuario: whatsapp
            });

            return res.status(201).json(usuario);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    // Função privada para verificar se o email já existe (a # indica ao JS que é privada)
    static async #verificarEmailExistente(email) {
        const usuario = await Usuario.findOne({ where: { email_usuario: email } });
        return usuario !== null; // Retorna true se o email já estiver registrado
    }
    //Função de login
    static async login(req, res) {
        try {
            const { email, senha } = req.body;

            //Valida se todos os campos acima (que são obrigatórios) vieram na requisição, caso não, retorna um erro
            if (!email || !senha) {
                return res.status(422).json({ mensagem: 'Os campos email e senha são obrigatórios!' });
            }

            //Verifica se o email existe no banco de dados
            const usuario = await Usuario.findOne({ where: { email_usuario: email } });
            if (!usuario) {
                return res.status(401).json({ mensagem: 'Email ou senha incorretos!' });
            }

            //Verifica se a senha está correta
            const senhaCorreta = await bcrypt.compare(senha, usuario.senha_usuario);
            if (!senhaCorreta) {
                return res.status(401).json({ mensagem: 'Email ou senha incorretos!' });
            }

            //Gera os tokens JWT
            const accessToken = generateAccessToken(usuario.id_usuario, 60 * 15); // 15 minutos
            const refreshToken = generateRefreshToken(usuario.id_usuario);

            //Salva o RefreshToken em um cookie
            res.cookie('refreshToken', refreshToken, {
                expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // expira em 30 dias
                path: '/',
                secure: true, // apenas HTTPS
                httpOnly: true, // acessível apenas via HTTP
                sameSite: 'None' // ajuste conforme necessário
            });

            //Retorna somente o AccessToken
            return res.status(200).json({ accessToken });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    //Função de autenticação do usuário
    static async authUser(req, res) {
        try {
            //Pega o token de autorização da requisição
            const authHeader = req.headers['authorization'];//Não se esqueça de enviar no Header da Requisição o Authorization com o valor 'Bearer + AccessToken'
            const accessToken = authHeader && authHeader.split(' ')[1];

            //Verifica se o token é válido
            const user = verifyAccessToken(accessToken);
            if (!user) {
                return res.status(401).json({ mensagem: 'Token inválido!' });
            }

            //Retorna os dados do usuário
            const usuario = await Usuario.findByPk(user.user_id, { attributes: { exclude: ['senha_usuario'] } });
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    //Função para atualizar o AccessToken por meio do refreshToken
    static async refreshToken(req, res) {
        try {
            //Pega o RefreshToken do cookie
            const refreshToken = req.cookies.refreshToken;
            console.log(refreshToken);

            //Verifica se o RefreshToken é válido
            const user = verifyRefreshToken(refreshToken);
            console.log(user);
            if (!user) {
                return res.status(401).json({ mensagem: 'Token inválido!' });
            }

            //Gera um novo AccessToken
            const accessToken = generateAccessToken(user.user_id, 60 * 15); // 15 minutos

            //Retorna os dados do usuário
            const usuario = await Usuario.findByPk(user.user_id, { attributes: { exclude: ['senha_usuario'] } });
            return res.status(200).json({ accessToken, usuario });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message });
        }
    }
    //Função para fazer logout
    static async logout(req, res) {
        try {
            //Limpa o cookie do refreshToken
            res.clearCookie('refreshToken');

            return res.status(200).json({ mensagem: 'Logout realizado com sucesso!' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UsuarioController;