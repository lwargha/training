// var collectAndWrite = require('./program.js');
// var paths = [process.argv[2], process.argv[3], process.argv[4]];

// collectAndWrite(paths);

// var createServer = require('./program.js');
// var port = process.argv[2];
// // var path = process.argv[3];

// createServer(port);


var createServer = require('./program.js');
var port = process.argv[2];
// var path = process.argv[3];

createServer(port);
