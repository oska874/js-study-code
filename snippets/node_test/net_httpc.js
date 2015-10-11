var http=require("http");

var options = {
    hostname: '127.0.0.1',
    port: 8012,
    path: '',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
 
var request = http.request(options, function (response) {});
 
request.write('Hello World');
request.end();
