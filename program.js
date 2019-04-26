// Learnyounode1


// console.log('HELLO WORLD');

// Learnyounode2
// var total = 0;
// for (let i = 2; i < process.argv.length; i++) { 
//     total += parseInt(process.argv[i]);
// }
// console.log(total);

// Learnyounode3

var fs = require('fs');
// console.log(fs);
var path = process.argv[2];
// console.log(path);
var file = fs.readFileSync(path, 'UTF-8');
// console.log(file);
var string = file.toString();
// console.log(string);
var count = 0;
for (let i = 0; i < string.length; i++) { 
    if (string[i] == '\n') { 
        count++;
    }
}
console.log(count);