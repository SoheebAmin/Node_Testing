const path = require('path')

var pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log("Total Memory " + totalMem);
console.log("Free Memory: " + freeMem); 

const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listerner
emitter.on('messageLogged', function(){
    console.log('listener called');
});


// raised an event
emitter.emit('messageLogged');

