var htp = require("http");
var onr= function onRequest(request,response)
{
	console.log("receive request");
}
htp.createServer(onr).listen(8099);
