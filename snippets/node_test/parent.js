var child_process = require('child_process');

/* parent.js */
var child = child_process.spawn('node', [ 'child.js' ],{stdio:[0,1,2]});
console.log("abcabcabcabc");

console.log("000");

/*
var t1=0;
while( t1++ < 100)
{
    console.log("010");
}
*/
setTimeout(function(){child.kill('SIGTERM');},2000);
console.log("zzz");
