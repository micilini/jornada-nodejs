const Dragao = require('../models/Dragoes');

class DragaoController {
    //Função para retornar todos os dragoes
    static async retornaTodos(req, res) {
        try {
            const dragoes = await Dragao.findAll();
            return res.status(200).json(dragoes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    //Função para criar um dragao
    static async criar(req, res) {
        try {
            const { nome, peso, idade, cor, existe, imagens } = req.body;

            //Validar para ver se todos os campos vieram
            if (!nome || !peso || !idade || !cor || !existe) {
                return res.status(400).json({ error: 'Os campos nome, peso, idade, cor e existe são obrigatórios!' });
            }

            //Faz a validação de imagens
            let images = [];

            if (req.files) {
                images = req.files.map(file => file.filename);
            }

            //Criar um dragao
            const dragao = await Dragao.create({
                nome_dragao: nome,
                peso_dragao: peso,
                idade_dragao: idade,
                cor_dragao: cor,
                imagens_dragao: images,
                existe_dragao: existe,
            });
            return res.status(201).json(dragao);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    //Função para retornar um dragao por :id
    static async retornaPorId(req, res) {
        try {
            const { id } = req.params;
            const dragao = await Dragao.findByPk(id);
            if (!dragao) {
                return res.status(404).json({ error: 'Dragão não encontrado!' });
            }
            return res.status(200).json(dragao);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    //Função para atualizar um dragao por :id
    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, peso, idade, cor, existe, imagens } = req.body;

            //Validar para ver se todos os campos vieram
            if (!nome || !peso || !idade || !cor || !existe) {
                return res.status(400).json({ error: 'Os campos nome, peso, idade, cor e existe são obrigatórios!' });
            }

            //Faz a validação de imagens
            let images = [];

            if (req.files) {
                images = req.files.map(file => file.filename);
            }

            //Atualizar um dragao
            const dragao = await Dragao.findByPk(id);
            if (!dragao) {
                return res.status(404).json({ error: 'Dragão não encontrado!' });
            }
            await dragao.update({
                nome_dragao: nome,
                peso_dragao: peso,
                idade_dragao: idade,
                cor_dragao: cor,
                imagens_dragao: images,
                existe_dragao: existe,
            });
            return res.status(200).json(dragao);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    //Função para deletar um dragao por :id
    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const dragao = await Dragao.findByPk(id);
            if (!dragao) {
                return res.status(404).json({ error: 'Dragão não encontrado!' });
            }
            await dragao.destroy();
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = DragaoController;