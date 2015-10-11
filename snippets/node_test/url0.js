//                        href
//-----------------------------------------------------------------
//                        host              path
//                    --------------- ----------------------------
//http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
//-----    ---------   --------   ---- -------- ------------- -----
//protocol     auth     hostname  port pathname     search     hash
//                                               ------------
//                                                  query


var url = require('url');

var res = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
console.info(res);

res = url.format({
        protocol: 'http:',
        host: 'www.example.com',
        pathname: '/p/a/t/h',
        search: 'query_=string_'
});
console.log(res);

//query string
var querystring = require("querystring");
var res1 = querystring.parse(url.parse(res).query);
console.log(res1);
var res2 = querystring.stringify(res1);
console.log(res2);
