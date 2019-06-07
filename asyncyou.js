//Asyncyou 1 
// var http = require('http');
// var async = require('async');
// var fs = require('fs');

// function readAndPrint() {
//     async.waterfall([
//             function (cb) {
//                 fs.readFile(process.argv[2], 'utf8', function (err, data) {
//                     cb(null, data);
//                 })
//             },
//             function (url, print) {
//                 http.get(url, function (response) {
//                     response.setEncoding('utf8');
//                     var body = '';
//                     response.on('data', function (chunk) {
//                         body += chunk;
//                     })
//                     response.on('end', function () {
//                         print(null, body);
//                     })
//                 }).on('error', function (err) {
//                     print(err);
//                 })
//             }
//         ],
//         function print(err, body) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(body);
//         })
// }
// module.exports = readAndPrint;

//Assyncyou 2 

// var http = require('http');
// var asyncLib = require('async');

// function readAndPrint() {
//     asyncLib.series({
//         requestOne:    function (print) {
//                 http.get(process.argv[2], function (response) {
//                     response.setEncoding('utf8');
//                     var body = '';
//                     response.on('data', function (chunk) {
//                         body += chunk;
//                     })
//                     response.on('end', function () {
//                         print(null, body);
//                     })
//                 })
//             },
//         requestTwo:    function (print) {
//                 http.get(process.argv[3], function (response) {
//                     response.setEncoding('utf8');
//                     var body = '';
//                     response.on('data', function (chunk) {
//                         body += chunk;
//                     })
//                     response.on('end', function () {
//                         print(null, body);
//                     })
//                 })
//             },
//     },
//         function (err, body) {
//             if (err) {
//                 console.log(err);
//             }
//             else { 
//                 console.log(body);
//             }
//         })

// }

// module.exports = readAndPrint;

//Assyncyou 3
// var http = require('http');
// var asyncLib = require('async');

// function readAndPrintErrors() {
//     asyncLib.each([process.argv[2], process.argv[3]], function (url, done) {
//         http.get(url, function (response) {
//             response.on('data', function (chunk) {});
//             response.on('end', function () {done(null);});
//         }).on('error', function (err) {
//            done(err);
//         });
//     }, function (err) {
//         if (err) console.error(err);
//     });
// }

// module.exports = readAndPrintErrors;

//Assyncyou 4
// var http = require('http');
// var asyncLib = require('async');

// function readAndPrintResults() {
//     asyncLib.map([process.argv[2], process.argv[3]], function (url, done) {
//         http.get(url, function (response) {
//             response.setEncoding('utf8');
//             var body = '';
//             response.on('data', function (chunk) {
//                 body += chunk;
//             });
//             response.on('end', function () {
//                 done(null, body);
//             });
//         }).on('error', function (err) {
//             done(err);
//         });
//     }, function (err, responses) {
//         if (err) console.error(err);
//         console.log(responses)
//     });
// }

// module.exports = readAndPrintResults;

//Assyncyou 5

var http = require('http');
var asyncLib = require('async');
var obj = {
    host: process.argv[2],
    port: process.argv[3],
    path: '/users/create',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
}
function receiveAndSend() {
    asyncLib.times(5, function (n, next) {
        var body = JSON.stringify({
            user_id: n + 1
        });
        http.request(obj, (response) => {
            next(null, '');
        }).end(body);

    }, function (err, users) {
        obj.path = '/users';
        obj.method = 'GET';
        http.get(obj, function (response) {
            response.setEncoding('utf8');
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {
                console.log(body);
            });
        })
    });

}

module.exports = receiveAndSend;

//Assyncyou 6
// var http = require('http');
// var asyncLib = require('async');
// var array = ['one', 'two', 'three'];
// var url = require('url'); 
// var objUrl = url.parse(process.argv[2]);
// function receiveAndSend() {
//     asyncLib.reduce(array, 0, function (memo, item, callback) {
//         objUrl.query = {number: item};
//         http.get(url.format(objUrl), function (response) {
//             response.setEncoding('utf8');
//             var body = '';
//             response.on('data', function (chunk) {
//                body += chunk;
//             });
//             response.on('end', function () {
//                 callback(null, memo + Number(body));
//             });
//         })
//     }, function (err, result) {
//         console.log(result);
//     })
// }

// module.exports = receiveAndSend;


//Assyncyou 7
// var http = require('http');
// var asyncLib = require('async');

// function receiveAndSend() {
//     var body = '';
//     var count = 0;
//     asyncLib.whilst(function () {
//         return !body.trim().includes('meerkat')
//     }, function (cb) {
//         http.get(process.argv[2], function (response) {
//             response.setEncoding('utf8');
//             response.on('data', function (chunk) {
//                 body += chunk;
//             });
//             response.on('end', function () {
//                 count++;
//                 cb(null, count);
//             });
//         });
//     }, function (err, n) {
//         console.log(n);
//     })
// }

// module.exports = receiveAndSend;