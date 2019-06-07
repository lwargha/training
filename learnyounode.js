// Learnyounode1

//  console.log('HELLO WORLD');

// Learnyounode2
// var total = 0;
// for (let i = 2; i < process.argv.length; i++) { 
//     total += parseInt(process.argv[i]);
// }
// console.log(total);

// Learnyounode3

// var fs = require('fs');
// // console.log(fs);
// var path = process.argv[2];
// // console.log(path);
// var file = fs.readFileSync(path, 'UTF-8');
// // console.log(file);
// var string = file.toString();
// // console.log(string);
// var count = 0;
// for (let i = 0; i < string.length; i++) { 
//     if (string[i] == '\n') { 
//         count++;
//     }
// }
// console.log(count);;

//learnyounode4
// var fs = require('fs');
// var path = process.argv[2];
// var totalLines = 0;

// function getTotalLines(callback) {
//     fs.readFile(path, 'utf8', function readFile(err, file) {
//         if (err) {
//             callback(err);
//         } else {
//             for (let i = 0; i < file.length; i++) {
//                 if (file[i] == '\n') {
//                     totalLines++;
//                 }
//             }
//             callback();
//         }
//     });

// }

// function printResult(err) {
//     if (!err) {
//         console.log(totalLines);
//     } else {
//         console.log(err)
//     }
// }

// getTotalLines(printResult);

//learnyounode5

// var fs = require('fs');
// var path = process.argv[2];
// var extention = "." + process.argv[3];
// var list = "";

// function printItems(err, file) {
//     if (err) {
//         callback(err);
//     } else {
//         for (let i = 0; i < file.length; i++) {
//             if (file[i].includes(extention.toString())) { 
//               console.log(file[i])
//             }
//         }
//     }
// }

// function getFileList() {
//     fs.readdir(path, 'utf8', printItems);
// }
// getFileList();

//learnyounode 6

// var fs = require('fs');
// var files = [];
// function importFile (path, extention, callback) { 
//     fs.readdir(path, 'utf8', function (err, file) { 
//         if (err) {
//             callback(err);
//         } else {
//             for (let i = 0; i < file.length; i++) {
//                 if (file[i].includes(('.' + extention.toString()))) { 
//                     files.push(file[i]);
//                 }
//             }
//             callback(err, files);
//         }
//     })
// }

// module.exports = importFile;

// learnyounode 7
// var http = require('http');

// function getAndWrite(path) { 

//     http.get(path, function (response) { 
//         response.setEncoding('utf8');
//         response.on('data', function (chunk) { 
//            console.log(chunk);
//         });

//     });

// }

// module.exports = getAndWrite;

//learnyounode 8

// var http = require('http');
// function collectAndWrite(path) {
//     let body = '';
//     http.get(path, function (response) {
//         response.setEncoding('utf8');
//         response.on('data', function (chunk) {
//             body += chunk;
//         })
//         response.on('end', function () {
//             console.log(body.length);
//             console.log(body);
//         })
//     }).on('error', function(err) { 
//         console.log('there is an ' + err);
//     })

// }

// module.exports = collectAndWrite;

//learnyounode 9

// var http = require('http');

// function collectAndWrite(paths) {
//     let body = ['', '', ''];
//     let responseEnd = [false, false, false];
//     for (let i = 0; i < paths.length; i++) {

//         http.get(paths[i], function (response) {
//             response.setEncoding('utf8');
//             response.on('data', function (chunk) {
//                 body[i] += chunk;
//             })
//             response.on('end', function () {
//                 responseEnd[i] = true;
//                 if (responseEnd[0] && responseEnd[1] && responseEnd[2]) {
//                    console.log(body.join('\n'));

//                 }
//             })
//         }).on('error', function (err) {
//             console.log('there is an ' + err);
//         })
//     }

// }

// module.exports = collectAndWrite;


// //learnyounode 10

// var net = require('net');
// function createServer(port) {
//     var server = net.createServer(function (socket) {
//         var date = new Date();
//         var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + String(date.getMonth() + 1);
//         date = date.getFullYear() + "-" + month + "-" + date.getDate() + " " 
//         + date.getHours() + ":" + date.getMinutes()  + "\n";
//         socket.write(date.toString());
//         socket.end();
//     });
//     server.listen(port);
// }

// module.exports = createServer;



//learnyounode 11
// var http = require('http');
// var fs = require('fs');
// function createServer(port, fileLocation) {
//   var server =  http.createServer(function(req, res) { 
//         var file = fs.createReadStream(fileLocation);
//         file.pipe(res);  
//     });
//     server.listen(port);
// }

// module.exports = createServer;

//learnyounode 12
// var http = require('http');
// var map = require('through2-map')
// function createServer(port) {
//     var server = http.createServer(function (req, res) { 
//         if (!req.method == 'POST') {
//          } else {
//             req.pipe(map(function (chunk) {
//                 return chunk.toString().toUpperCase();
//               })).pipe(res)
//          }
//     })
//     server.listen(port);
// }

// module.exports = createServer;

//learnyounode 13


var http = require('http');
var url = require('url')
module.exports = function createServer(port) {
    var server = http.createServer(function (req, res) {
        var urlObj = url.parse(req.url, true);
        var query = urlObj.query.iso;
        var dateObj = new Date(query);
        var sendObj = {};
        if (req.method === 'GET') {
            if (urlObj.pathname.includes('/parsetime')) { 
                 sendObj = {
                    "hour": dateObj.getHours(),
                    "minute": dateObj.getMinutes(),
                    "second": dateObj.getSeconds()
                }
            } else
                sendObj = {"unixtime": Math.floor(dateObj)};
                
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(sendObj));
            res.end();
        } 
    })
    server.listen(port);
}

