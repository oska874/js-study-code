var fs = require("fs");
var src = "./tsrc";
var dst = "./tdst";
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);
 
rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {
        rs.pause();
    }
});
 
rs.on('end', function () {
    ws.end();
});
 
ws.on('drain', function () {
    rs.resume();
});

dst = "./dst2";
var ws1 = fs.createWriteStream(dst);
var rs1 = fs.createReadStream(src).pipe(ws1);
