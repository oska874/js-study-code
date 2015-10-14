var buf = new Buffer(100);
var i;

for(i=0;i<buf.length;i++)
	buf[i] = i;

var bufT = buf.slice(10,20);
console.log(buf);
console.log(bufT);
console.log("______");

var buf = new Buffer('test');
var json = JSON.stringify(buf);

console.log(json);
// '{"type":"Buffer","data":[116,101,115,116]}'

var copy = JSON.parse(json, function(key, value) {
    return value && value.type === 'Buffer' ? new Buffer(value.data) : value;
  });

console.log(copy);
// <Buffer 74 65 73 74>


buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97; // 97 is ASCII a
}
aa = buf.toString('ascii'); // outputs: abcdefghijklmnopqrstuvwxyz
console.log(aa);
aa = buf.toString('ascii',0,5); // outputs: abcde
console.log(aa);
aa = buf.toString('utf8',0,5); // outputs: abcde
console.log(aa);
aa = buf.toString(undefined,0,5); // encoding defaults to 'utf8', outputs abcde
console.log(aa);

var b1=new Buffer(3), b2=new Buffer(3);
for(i = 0;i<3;i++) {
	b1[i]=i;
	b2[i]=3-i;
}
console.log(b1.compare(b2));
