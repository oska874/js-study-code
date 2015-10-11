var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var sub = bin.slice(2);
var dup = new Buffer(bin.length);
 
sub[0] = 0x65;
console.log(bin); // => <Buffer 68 65 6c 6c 6f>

bin.copy(dup);
dup[0] = 0x48;
console.log(bin); // => <Buffer 68 65 6c 6c 6f>
console.log(dup); // => <Buffer 48 65 65 6c 6f>

var str = bin.toString('utf-8');
console.log(str);
