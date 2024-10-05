//Importa as funções necessárias para gerar os tokens JWT
const { verifyRefreshToken } = require('../helpers/manageTokens');

//Middleware para verificar se o token de atualização é válido
async function authMiddleware(req, res, next) {
    // Pega o refreshToken dos cookies
    const refreshToken = req.cookies.refreshToken;
    console.log('RefreshToken:', refreshToken);

    if (!refreshToken) {
        return res.status(401).json({ mensagem: 'RefreshToken não fornecido!' });
    }

    try {
        // Verifica se o refreshToken é válido
        const decoded = verifyRefreshToken(refreshToken);

        if(!decoded){
            return res.status(403).json({ mensagem: 'RefreshToken inválido ou expirado!' });
        }

        // Chama o próximo middleware ou controlador
        next();
    } catch (error) {
        return res.status(403).json({ mensagem: 'RefreshToken inválido ou expirado!' });
    }

}

module.exports = authMiddleware;
