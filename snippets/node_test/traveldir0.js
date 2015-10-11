var fs=require('fs');
var path=require('path');

function travel(dir, callback) 
{
    fs.readdirSync(dir).forEach(function (file) {
        var path='';
        var pathname = global.path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

travel('.',console.log);
