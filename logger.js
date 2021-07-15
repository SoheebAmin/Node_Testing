const EventEmitter = require('events');

var url =  'https://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        console.log('printing: ' + message);
    
    // raise an event and pass data about the event that happened
    this.emit('messageLogged', {id: 1, url: 'url'});
    }
}


module.exports = Logger;



