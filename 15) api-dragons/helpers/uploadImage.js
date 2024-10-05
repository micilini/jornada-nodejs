const multer = require('multer');
const path = require('path');

//Destino para onde as imagens serão salvas
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = "files";//Pasta onde as imagens serão salvas
        cb(null, path.resolve(__dirname, '..', folder));//Caminho para a pasta, exemplo: /home/usuario/Documentos/Projeto/files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));//Nome do arquivo, exemplo: 123456789.jpg
    }
});

const imageUpload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },//Tamanho máximo do arquivo em bytes
    fileFilter: function (req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){//Extensões permitidas
            return cb(new Error('Por favor, envie apenas imagens!'));
        }
    cb(undefined, true);
    }
});//Nome do campo que será enviado no formulário

module.exports = { imageUpload };