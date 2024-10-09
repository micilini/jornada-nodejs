const express = require('express');
const router = express.Router();
const saveController = require('../controllers/saveController');

router.post('/save', saveController.save);

module.exports = router;