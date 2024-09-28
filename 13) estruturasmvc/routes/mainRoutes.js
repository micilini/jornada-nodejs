const express = require('express');

const router = express.Router();
const { getHome, postPessoa } = require('../controller/mainController');

router.get('/', getHome);
router.post('/add', postPessoa);

module.exports = router;
