const { generateAccessToken, verifyAccessToken, verifyRefreshToken } = require('./manageTokens');

// Middleware de validação de token
const tokenMiddleware = (req, res, next) => {
    const accessToken = req.session.accessToken; // Obtém o accessToken da sessão
    const refreshToken = req.cookies.refreshToken; // Obtém o refreshToken do cookie

    // Verifica o Access Token
    if (verifyAccessToken(accessToken) !== null) {
        return next(); // Se o Access Token for válido, segue com a requisição
    }

    // Verifica o Refresh Token caso o Access Token seja inválido ou ausente
    if (verifyRefreshToken(refreshToken) !== null) {
        //Gera um novo AccessToken e o registra no objeto de sessão
        req.session.accessToken = generateAccessToken(1, 60); // expira em 1 minuto
        return next(); // Se o Refresh Token for válido, segue com a requisição
    }

    //Limpa a sessão e o cookie
    req.session.destroy();
    res.clearCookie('refreshToken');

    // Caso nenhum dos tokens seja válido, redireciona para a página de login
    res.redirect('/login');
};

module.exports = tokenMiddleware;