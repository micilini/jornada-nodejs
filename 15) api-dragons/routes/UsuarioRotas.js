const router = require('express').Router();

//Importa o Helper capaz de tratar imagens
const { imageUpload } = require('../helpers/uploadImage');

//Importa os controladores que serão usados
const UsuarioController = require('../controllers/UsuarioController');

router.post('/registrar', imageUpload.single("imagem"), UsuarioController.registrar);
router.post('/login', UsuarioController.login);
router.get('/authUser', UsuarioController.authUser);
router.post('/refreshToken', UsuarioController.refreshToken);
router.post('/logout', UsuarioController.logout);

module.exports = router;