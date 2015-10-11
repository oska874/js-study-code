var http=require('http');
var url=require('url');

http.createServer(function (request, response) {
        var tmp = request.url; // => "/foo/bar?a=b"
        var res = url.parse(tmp);
        console.log(res);
}).listen(8012);
