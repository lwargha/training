//promise it wont hurt 1 
// function setTime() { 
//     setTimeout(() => {
//         console.log('TIMED OUT!');
//     }, 300);
// }
// module.exports = setTime;

//promise it wont hurt 2 
// var promise = new Promise(function (fulfill, reject) {
//     setTimeout(() => {
//         fulfill('FULFILLED!');
//     }, 300);
// })

// promise.then((string) => {
//     console.log(string);
// });

//promsieitwonthurt 3

// var promise = new Promise(function (fulfill, reject) {
//     setTimeout(() => {
//         reject(new Error('REJECTED!'));
//     }, 300);
// })

// promise.then(null, onReject);

// function onReject(error) {
//     console.log(error.message);
// }

//promsieitwonthurt 4

// var promise = new Promise(function (fulfill, reject) {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRED'));
// })

// promise.then((yes) => {
//         if (yes) console.log(yes);
//     },
//     (no) => {
//         if (no) console.log(no.message);
//     }
// );

//promiseitwonthurt5

// var promise = new Promise(function (fulfill, reject) { 
//     fulfill('PROMISE VALUE');
// })
// promise.then(console.log);
// console.log('MAIN PROGRAM');

//promiseitwonthurt6

// var promise = Promise.reject(new Error('SECRET VALUE'));
// var promise2 = Promise.resolve('it worked');
// var promise3 = new Promise(function (fulfill, reject) {
//     reject(new Error('problem'));
// });
// promise3.catch(function (err) {
//     console.log(err.message);
// })

//promiseitwonthurt7

// first()
// .then(function (value) {
//     return second(value);
// }).then(console.log);


//promiseitwonthurt8

// function attachTitle(string) {
//     return 'DR. ' + string;
// }

// var promise = new Promise(function (fulfill, reject) {
//         fulfill('MANHATTAN');
//     })
//     .then(attachTitle)
//     .then(console.log);

//promiseitwonthurt9
// var file = process.argv[2];

// function parsePromised(JSONFile) {
//     return new Promise(function (fulfill, reject) {
//         try {
//             var parsedJSON = JSON.parse(JSONFile);
//             fulfill(parsedJSON);
//         } catch (e) {
//             reject (e.message);
//         }
//     }) 

// }

// parsePromised(file)
// .then(console.log)
// .catch(console.log);

//promiseitwonthurt10

// function alwaysThrows() {
//     throw 'OH NOES';
// }

// function iterate(arg) {
//     console.log(arg);
//     return arg + 1;
// }

// Promise.resolve(1)
//     .then(iterate)
//     .then(iterate)
//     .then(iterate)
//     .then(iterate)
//     .then(iterate)
//     .then(alwaysThrows)
//     .then(iterate)
//     .then(iterate)
//     .then(iterate)
//     .then(iterate)
//     .then(iterate)
//     .catch(console.log);

//promiseitwonthurt11

// var counter = 0;

// function all(promise1, promise2) {
//     var result = [];
//     return new Promise(function (fulfill, reject) {
//         promise1.then(function (val) {
//             counter++;
//             result[0] = val;
//             if (counter >= 2) {
//                 fulfill(result);
//             }
//         })
//         promise2.then(function (val) {
//             counter++;
//             result[1] = val;
//             if (counter >= 2) {
//                 fulfill(result);
//             }
//         })

//     })

// }

// all(getPromise1(), getPromise2())
//     .then(console.log)

//promiseitwonthurt12

// var qio = require('q-io/http');
// qio.read("http://localhost:1337").then(function(json) { 
//     console.log(JSON.parse(json));
// })

//promiseitwonthurt13

// var qio = require('q-io/http');
// var url1 = "http://localhost:7000";
// var url2 = "http://localhost:7001";

// qio.read(url1).then(function (string) { 
//   var id = string.toString();
//     qio.read(url2 + "/" + id).then(function(json) { 
//         console.log(JSON.parse(json));
//     })
// })
