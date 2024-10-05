const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configura o middleware para lidar com dados de formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para upload de um único arquivo
app.post('/uploadSingle', (req, res) => {
    let formData = [];
    
    req.on('data', chunk => {
        formData.push(chunk); // Armazena os dados binários recebidos
    });

    req.on('end', () => {
        const formDataBuffer = Buffer.concat(formData); // Concatena os dados em um único buffer
        const boundary = '--' + req.headers['content-type'].split('boundary=')[1];
        const boundaryBuffer = Buffer.from(boundary);

        // Encontrando as partes do arquivo no formData
        const boundaryIndex = formDataBuffer.indexOf(boundaryBuffer);
        const nextBoundaryIndex = formDataBuffer.indexOf(boundaryBuffer, boundaryIndex + boundaryBuffer.length);
        const filePart = formDataBuffer.slice(boundaryIndex + boundaryBuffer.length, nextBoundaryIndex);
        
        // Extração do cabeçalho do arquivo (nome e tipo)
        const fileHeaderEndIndex = filePart.indexOf('\r\n\r\n');
        const header = filePart.slice(0, fileHeaderEndIndex).toString('utf8');
        const contentDisposition = header.match(/filename="(.+?)"/); // Captura o nome original do arquivo
        
        if (!contentDisposition || !contentDisposition[1]) {
            return res.status(400).send('Nenhum arquivo foi enviado.');
        }

        // Extrair o nome do arquivo e sua extensão
        const originalFilename = contentDisposition[1];
        const fileExt = path.extname(originalFilename); // Captura a extensão do arquivo
        
        const filename = Date.now() + fileExt; // Definindo o nome do arquivo com a extensão original
        const filePath = path.join(__dirname, 'files', filename);

        // Extração do conteúdo binário do arquivo
        const fileData = filePart.slice(fileHeaderEndIndex + 4); // Pula os cabeçalhos e pega o conteúdo binário

        // Salvando o arquivo binário corretamente
        fs.writeFile(filePath, fileData, (err) => {
            if (err) return res.status(500).send('Erro ao salvar o arquivo');
            res.send(`Upload do arquivo ${originalFilename} feito com sucesso`);
        });
    });
});

// Rota para upload de múltiplos arquivos
app.post('/uploadMultiple', (req, res) => {
    let formData = [];

    req.on('data', chunk => {
        formData.push(chunk); // Armazena os dados binários recebidos
    });

    req.on('end', () => {
        const formDataBuffer = Buffer.concat(formData); // Concatena todos os chunks recebidos
        const boundary = '--' + req.headers['content-type'].split('boundary=')[1];
        const boundaryBuffer = Buffer.from(boundary);
        const boundaryEndBuffer = Buffer.from(boundary + '--');

        let fileStartIndex = 0;
        let uploadedFiles = []; // Armazena os nomes dos arquivos enviados

        while (true) {
            const boundaryIndex = formDataBuffer.indexOf(boundaryBuffer, fileStartIndex);
            const nextBoundaryIndex = formDataBuffer.indexOf(boundaryBuffer, boundaryIndex + boundaryBuffer.length);

            // Se não houver mais boundaries, termine o loop
            if (nextBoundaryIndex === -1 || boundaryIndex === -1) {
                break;
            }

            const filePart = formDataBuffer.slice(boundaryIndex + boundaryBuffer.length, nextBoundaryIndex);
            
            // Extração do cabeçalho do arquivo
            const fileHeaderEndIndex = filePart.indexOf('\r\n\r\n');
            const header = filePart.slice(0, fileHeaderEndIndex).toString('utf8');
            const contentDisposition = header.match(/filename="(.+?)"/);
            
            if (!contentDisposition || !contentDisposition[1]) {
                fileStartIndex = nextBoundaryIndex;
                continue; // Se não houver arquivo, vai para a próxima parte
            }

            const originalFilename = contentDisposition[1];
            const fileExt = path.extname(originalFilename); // Captura a extensão original do arquivo
            const filename = Date.now() + '_' + originalFilename; // Cria um nome único com a extensão original
            const filePath = path.join(__dirname, 'files', filename);

            // Extração do conteúdo binário do arquivo
            const fileData = filePart.slice(fileHeaderEndIndex + 4, filePart.length - 2); // Pula o cabeçalho e captura o conteúdo do arquivo

            // Salvando o arquivo
            fs.writeFileSync(filePath, fileData);
            uploadedFiles.push(filename); // Armazena o nome do arquivo salvo

            // Avança para o próximo boundary
            fileStartIndex = nextBoundaryIndex;
        }

        // Retorna os arquivos que foram salvos
        if (uploadedFiles.length > 0) {
            res.send(`Upload dos seguintes arquivos feito com sucesso: ${uploadedFiles.join(', ')}`);
        } else {
            res.status(400).send('Nenhum arquivo foi enviado.');
        }
    });
});

// Cria a pasta files se não existir
if (!fs.existsSync(path.join(__dirname, 'files'))) {
    fs.mkdirSync(path.join(__dirname, 'files'));
}

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
