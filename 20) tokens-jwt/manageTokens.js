const jwt = require('jsonwebtoken');

// Definir segredos para assinar os tokens JWT
const ACCESS_SECRET = 'myaccesstok';
const REFRESH_SECRET = 'myrefreshtok';

// Função para gerar AccessToken
function generateAccessToken(userID, expiresIn) {
    const accessTokenPayload = {
        user_id: userID,
        exp: Math.floor(Date.now() / 1000) + expiresIn // Expiração em segundos
    };

    // Gera e retorna o AccessToken
    return jwt.sign(accessTokenPayload, ACCESS_SECRET, { algorithm: 'HS256' });
}

// Função para gerar RefreshToken
function generateRefreshToken(userID) {
    const expirationTime = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60); // 30 dias

    const refreshTokenPayload = {
        user_id: userID,
        exp: expirationTime
    };

    // Gera e retorna o RefreshToken
    return jwt.sign(refreshTokenPayload, REFRESH_SECRET, { algorithm: 'HS256' });
}

//Função para verificar se o AccessToken é válido
function verifyAccessToken(accessToken) {
    try {
        return jwt.verify(accessToken, ACCESS_SECRET, { algorithm: 'HS256' });
    } catch (error) {
        return null;
    }
}

//Função para verificar se o RefreshToken é válido
function verifyRefreshToken(refreshToken) {
    try {
        return jwt.verify(refreshToken, REFRESH_SECRET, { algorithm: 'HS256' });
    } catch (error) {
        console.log('Token verification error:', error.message); // Adicione este log
        return null;
    }
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
};

