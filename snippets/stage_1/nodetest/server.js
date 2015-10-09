var htp = require("http");
var url = require("url");

function start(route, handler)
{
    var onr= function onRequest(request,response,postData)
    {
        var pathname = url.parse(request.url).pathname;
        var postdata = "";

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            console.log("data call");
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        request.addListener("end", function() {
            console.log("end called");
            route( pathname,handler, response, postData);
        });
/*
        route(pathname, handler,response);

        console.log("receive request");
        */
        /*response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.write("Request for " + pathname + " received.");
        response.end();*/
    }
    htp.createServer(onr).listen(8099);
    console.log("server started");
}

exports.start = start;
