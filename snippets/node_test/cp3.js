//child process and socket: not ok...

var child = require('child_process').fork('cp3.1.js');
// Open up the server object and send the handle.
var server = require('net').createServer();
server.on('connection', function (socket) {
	socket.end('handled by parent');
});
server.listen(1338, function() {
	child.send('server', server);
});