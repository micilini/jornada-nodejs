const Usuario = require('../models/Usuario');

class SaveController {
  async save(req, res) {
    const { nome } = req.body;

    if (!nome) {
      return res.redirect('/');
    }

    try {
      await Usuario.create({ nome });
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Erro ao salvar nome');
    }
  }
}

module.exports = new SaveController();