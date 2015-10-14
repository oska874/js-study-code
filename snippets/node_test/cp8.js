var exec = require('child_process').exec,
    child;

child = exec('cat *.js  | wc -l',
	function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	},
	{ encoding: 'utf8',
	  timeout: 0,
	  maxBuffer: 200*1024,
	  killSignal: 'SIGTERM',
	  cwd: null,
	  env: null });