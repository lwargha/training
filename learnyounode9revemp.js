var http = require('http');
var myMap = require('./myMap');

var arr = process.argv.slice(2);
myMap(arr, function (el, done) {
    http.get(el, function (response) {
        response.setEncoding('utf8');
        var body = ''
        response.on('data', function (chunk) {
            body += chunk;
        })
        response.on('end', function () {
            done(null, body);
        })
    }).on('error', function (err) {
        console.log('there is an ' + err);
    })
  
}, function (err, result) {
    console.log(result.join('\n'));
})