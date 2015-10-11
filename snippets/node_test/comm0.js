var child_process = require('child_process');

/* parent.js */
var child = child_process.spawn('node', [ 'test0.js' ]);/*,{
            stdio: [ 0, 1, 2, 'ipc' ]});*/
 
/* child.js */
process.on('SIGTERM', function () {
    console.log("killed");
    process.exit(0);
});

var t=Date.now();
while(1)
{
    console.log("222");
    while( Date.now() - t < 1000)
    {
    }
    t=Date.now();
}

//child.kill('SIGTERM');
