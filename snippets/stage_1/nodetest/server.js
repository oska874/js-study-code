var htp = require("http");
var url = require("url");

function start(route, handler)
{
    var onr= function onRequest(request,response)
    {
        var pathname = url.parse(request.url).pathname;

        route(pathname, handler,response);

        console.log("receive request");
        /*response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.write("Request for " + pathname + " received.");
        response.end();*/
    }
    htp.createServer(onr).listen(8099);
    console.log("server started");
}

exports.start = start;
