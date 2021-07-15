// Working with Path

const path = require('path')

var pathObj = path.parse(__filename);

console.log(pathObj);

// Working with OS

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log("Total Memory " + totalMem);
console.log("Free Memory: " + freeMem); 

// Emitting Events

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// register a listener with an arrow function + args for it
logger.on('messageLogged', (arg) => {
    console.log('listener called', arg);
});

logger.log('message');
