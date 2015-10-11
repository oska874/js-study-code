var http = require('http');
 

http.createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        var str1 = body.toString();
        console.log(str1);
        response.writeHead(200, { 'Content-Type': 'text-plain' });
        response.end(body);//why not write to browser?
    });

}).listen(8012);
