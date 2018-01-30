var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('error', (err) => {
    console.error('有错误');
    console.log('some error occurs');
});
emitter.emit('error'); 
