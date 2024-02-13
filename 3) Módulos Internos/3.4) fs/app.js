/* Aplicação de Testes (app.js) */

const fs = require('fs');

//readfile
fs.readFile('meu-arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ocorreu um erro durante a abertura do arquivo: ' + err);
        return;
    }
    console.log('Conteúdo do Arquivo: ' + data);
});

//readfile (json)
const nomeArquivo = 'dados.json';

fs.readFile(nomeArquivo, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    try {
        const arrayDeDados = JSON.parse(data);
        console.log('Array obtido do arquivo JSON:', arrayDeDados);
    } catch (error) {
        console.error('Erro ao analisar o JSON:', error);
    }
});

//readFileSync
try {
    const conteudo = fs.readFileSync('meu-arquivo.txt', 'utf8');
    console.log('Conteúdo do arquivo:', conteudo);
} catch (error) {
    console.error('Erro ao ler o arquivo:', error);
}

//readFileSync (JSON)
try {
    const conteudoJSON = fs.readFileSync('dados.json', 'utf8');
    const objetoDeDados = JSON.parse(conteudoJSON);
    console.log('Objeto obtido do arquivo JSON:', objetoDeDados);
} catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
}

//writeFile
fs.writeFile('novo-arquivo.txt', 'Conteúdo que será salvo dentro do arquivo', 'utf8', (err) => {
    if (err) {
        console.error('Ocorreu um erro na escrita: ' + err);
        return;
    }
    console.log('Arquivo foi escrito com sucesso.');
});

//writeFileSync
try {
    const dadosParaEscrever = 'Este é um exemplo de conteúdo para o arquivo.';
    fs.writeFileSync('novo-arquivo.txt', dadosParaEscrever, 'utf8');
    console.log('Conteúdo foi escrito no arquivo com sucesso.');
} catch (error) {
    console.error('Erro ao escrever no arquivo:', error);
}

//mkdir
fs.mkdir('minha-pasta', (err) => {
    if (err) {
        console.error('Erro ao criar um diretório: ' + err);
        return;
    }
    console.log('Diretório criado com sucesso.');
});

//readdir
fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Erro ao ler diretório' + err);
        return;
    }
    console.log('Arquivos no diretório atual:', files);
});

//unlink
fs.unlink('meu-arquivo.txt', (err) => {
    if (err) {
        console.error('Erro durante a remoção do arquivo: ' + err);
        return;
    }
    console.log('Arquivo removido com sucesso.');
});

//rmdir
const diretorio = 'minha-pasta';

fs.rmdir(diretorio, {
    recursive: true
}, (err) => {
    if (err) {
        console.error('Erro ao remover o diretório:', err);
    } else {
        console.log('Diretório removido com sucesso.');
    }
});

//rename
fs.rename('novo-arquivo.txt', 'novo-novo-arquivo.txt', (err) => {
    if (err) {
        console.error('Erro durante o processo: ' + err);
        return;
    }
    console.log('Arquivo renomeado com sucesso.');
});

//stat
fs.stat('novo-novo-arquivo.txt', (err, stats) => {
    if (err) {
        console.error('Erro durante o processo: ' + err);
        return;
    }
    console.log('Estatísticas do arquivo: ', stats);
});

//copy
fs.copyFile('origem.txt', 'destino.txt', (err) => {
    if (err) {
        console.error('Erro durante o processo: ' + err);
        return;
    }
    console.log('Arquivo copiado com sucesso.');
});

//watcher
const watcher = fs.watch('novo-novo-arquivo.txt');

watcher.on('change', (event, filename) => {
    console.log(`O arquivo ${filename} foi alterado.`);
});

//existsSync
const caminhoArquivo = 'caminho/do/seu/arquivo.txt';
const caminhoDiretorio = 'caminho/do/seu/diretorio';

// Verificando a existência de um arquivo de forma síncrona
if (fs.existsSync(caminhoArquivo)) {
    console.log('O arquivo existe.');
} else {
    console.log('O arquivo não existe.');
}

// Verificando a existência de um diretório de forma síncrona
if (fs.existsSync(caminhoDiretorio)) {
    console.log('O diretório existe.');
} else {
    console.log('O diretório não existe.');
}

//access
const caminhoArquivo2 = 'caminho/do/seu/arquivo.txt';
const caminhoDiretorio2 = 'caminho/do/seu/diretorio';

// Verificando a existência de um arquivo de forma assíncrona
fs.access(caminhoArquivo2)
    .then(() => {
        console.log('O arquivo existe.');
    })
    .catch((err) => {
        console.log('O arquivo não existe.');
    });

// Verificando a existência de um diretório de forma assíncrona
fs.access(caminhoDiretorio2)
    .then(() => {
        console.log('O diretório existe.');
    })
    .catch((err) => {
        console.log('O diretório não existe.');
    });