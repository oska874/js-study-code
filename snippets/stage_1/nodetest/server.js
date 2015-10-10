var htp = require("http");
var url = require("url");

function start(route, handler)
{
    var onr= function onRequest(request,response)
    {
        var pathname = url.parse(request.url).pathname;
        var postdata = "";

        route(pathname, handler,response,request);

        console.log("receive request");
        
    }
    htp.createServer(onr).listen(8889);
    console.log("server started");
}

exports.start = start;
