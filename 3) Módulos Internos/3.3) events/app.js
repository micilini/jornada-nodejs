/* Aplicação de Testes (app.js) */

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();//Instancia a classe Event Emitter

eventEmitter.on('runner', () => {
    console.log('Você já viu o filme do Blade Runner 2044?');
});

console.log('Eu sempre quis te fazer uma pergunta...');

eventEmitter.emit('runner');

console.log('Eu já assisti, e é muuuito legal!!!');