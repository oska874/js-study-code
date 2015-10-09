function route(pathname, handler,response)
{
    if (typeof handler[pathname] === 'function'){
        handler[pathname](response);
    }
    else {
        console.log("1111About to route a request for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
