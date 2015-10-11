var child_process = require('child_process');
var util = require('util');
 
function copy(source, target, callback) {
    child_process.exec(
        util.format('cp %s %s', source, target), callback);
}
 
copy('./abc', './def', function (err) {
    console.log("copy abc to def ",err);
});

