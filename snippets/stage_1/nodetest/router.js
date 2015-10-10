function route(pathname, handler,response,request)
{
    if (typeof handler[pathname] === 'function'){
        handler[pathname](response,request);
    }
    else {
        console.log("About to route a request for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
