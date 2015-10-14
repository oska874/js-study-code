//send message to parent process

var process = require("process");
process.on('message', function(m) {
	console.log('CHILD got message:', m);
	process.send({ haha: 'test' });
});

process.send({ foo: 'bar' });