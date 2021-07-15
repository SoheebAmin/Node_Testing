const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listerner
emitter.on('messageLogged', function(){
    console.log('listener called');
});


// raised an event
emitter.emit('messageLogged');

