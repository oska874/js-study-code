var child_process = require('child_process');

/* parent.js */
var child = child_process.spawn('node', [ 'test0.js' ], {
            stdio: [ 0, 1, 2, 'ipc' ]
    });
 
child.on('message', function (msg) {
    console.log(msg);
    console.log(msg.hello);
});
 
child.send({ hello: 'hello' });
 
/* child.js */
process.on('message', function (msg) {
    msg.hello = msg.hello.toUpperCase();
    process.send(msg);
    console.log(msg.hello);
});
