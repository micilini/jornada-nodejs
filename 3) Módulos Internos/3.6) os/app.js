/* Aplicação de Testes (app.js) */

const os = require('os');

//platform
console.log('Plataforma Atual:', os.platform()); // Exibe a plataforma do sistema (ex: win32, linux, darwin)

//arch
console.log('Arquitetura:', os.arch()); // Exibe a arquitetura do processador (ex: x64, arm64)

//totalmem
console.log('Memória total (bytes):', os.totalmem()); // Retorna a quantidade total de memória do sistema

//freemem
console.log('Memória livre (bytes):', os.freemem()); // Retorna a quantidade de memória livre no sistema

//cpu
console.log('Informações da CPU:', os.cpus()); // Retorna um array com informações sobre os núcleos da CPU

//userInfo
console.log('Usuário atual:', os.userInfo()); // Retorna informações sobre o usuário atual

//tmpdir
console.log('Diretório temporário:', os.tmpdir()); // Retorna o diretório temporário do sistema

