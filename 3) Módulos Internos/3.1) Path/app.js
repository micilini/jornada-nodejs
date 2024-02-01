/* Aplicação de Testes (app.js) */

const path = require('path');

//extname
const ext = path.extname('meu-arquivo.xtr');
console.log('A extensão é: ' + ext);//o retorno será 'A extensão é: .xtr'

//dirname
const directory = path.dirname('/meu/caminho/eu.txt');
console.log('O caminho é: ' + directory);//o retorno será 'O caminho é: /meu/caminho'

//normalize
const normalizedPath = path.normalize('/meu/caminho/../eu.txt');
console.log('O caminho normalizado: ' + normalizedPath);//o retorno será 'O caminho é: \meu\eu.txt'

//isAbsolute
const isAbsolute = path.isAbsolute('/meu/caminho/eu.txt');
console.log('O caminho absoluto? ' + isAbsolute);//o retorno será 'true'

//relative
const relativePath = path.relative('/caminho/para', '/caminho/para/arquivo.txt');
console.log('O caminho relativo: ' + relativePath);//o retorno será 'arquivo.txt'

//sep
console.log('Separador do Sistema: ' + path.sep);//o retorno será de acordo com o sistema em uso

//delimiter
console.log('Delimitador do Sistema: ' + path.delimiter);//o retorno será de acordo com o sistema em uso

//basename (sem ext)
const fileName = path.basename('/minha/pasta/file.txt');
console.log('Nome do Arquivo é: ' + fileName);//o retorno será 'file.txt'

//basename (com ext)
const fileNameExt = path.basename('/minha/pasta/file.txt', '.txt');
console.log('Nome do Arquivo é: ' + fileNameExt);//o retorno será 'file'

//resolve
const absolutePath = path.resolve('meu', 'caminho', 'arquivo.txt');
console.log('Caminho é: ' + absolutePath);//o retorno será '..../meu/caminho/arquivo.txt'

//join
const fullPath = path.join('/meu', 'caminho', 'eu.txt');
console.log('Caminho é: ' + fullPath);//o retorno será '\meu\caminho\eu.txt