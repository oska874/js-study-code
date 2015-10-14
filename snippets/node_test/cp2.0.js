//child and parent process sen message to each other:
//this send message to child
var cp = require('child_process');

var n = cp.fork(__dirname + '/cp2.1.js');

n.on('message', function(m) {
	console.log('PARENT got message:', m);
});

n.send({ hello: 'world' });
