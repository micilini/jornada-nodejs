const router = require('express').Router();

//Importa o Helper capaz de tratar imagens
const { imageUpload } = require('../helpers/uploadImage');

//Importa os middlewares que serão usados
const authMiddleware = require('../middleware/authMiddleware');

//Importa os controladores que serão usados
const DragaoController = require('../controllers/DragaoController');

// Aplica o middleware para todas as rotas dentro de /dragao
router.use(authMiddleware);

//Restante das rotas de /dragao
router.post('/criar', imageUpload.array('imagens'), DragaoController.criar);
router.get('/retornaTodos', DragaoController.retornaTodos);
router.get('/retornaPorId/:id', DragaoController.retornaPorId);
router.put('/atualizar/:id', imageUpload.array('imagens'), DragaoController.atualizar);
router.delete('/deletar/:id', DragaoController.deletar);

module.exports = router;