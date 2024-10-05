const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Seja bem vindo a API de Dragões 🐉. Consulte a documentação para aprender a utilizar a API ️‍🔥');
});

module.exports = router;