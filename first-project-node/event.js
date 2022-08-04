//usar EVENTOS (criando)
const { EventEmitter } = require('events');
const ev = new EventEmitter();

ev.on('saySomething', () => {
    console.log('Eu ouvi você');
});  //tem que ter antes de disparar evento

ev.emit('saySomething'); //disparar evento
ev.emit('saySomething'); 