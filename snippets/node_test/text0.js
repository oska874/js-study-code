var iconv = require('iconv-lite');
var fs=require('fs');
var cstr='极度疯狂拉得时间了放假的来访来电可时间';
 
function readGBKText(pathname) {
    var bin = fs.readFileSync(pathname);
    return iconv.decode(bin, 'gbk');
}

console.log(readGBKText("./abc"));
