const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configura o storage do Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Define a pasta onde os arquivos serão salvos
        cb(null, 'files/');
    },
    filename: (req, file, cb) => {
        // Extrai a extensão original do arquivo
        const ext = path.extname(file.originalname);
        // Gera o novo nome do arquivo com base no timestamp
        const filename = Date.now() + ext;
        // Retorna o nome final
        cb(null, filename);
    }
});

// Passa o storage configurado para o Multer
const upload = multer({ storage: storage });

// Serve o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/uploadSingle', upload.single('singleFile'), (req, res) => {
    // O arquivo está disponível em req.file
    console.log(req.file);
    res.send('Upload feito com sucesso!');
});

app.post('/uploadMultiple', upload.array('multipleFiles', 10), (req, res) => {
    // Os arquivos estão disponíveis em req.files
    console.log(req.files);
    res.send('Upload de múltiplos arquivos feito com sucesso!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});