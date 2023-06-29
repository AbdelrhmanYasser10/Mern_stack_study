/*var os = require("os");
const path = require("path");


console.log(`host name = ${os.hostname()}`);
console.log(`free memory = ${os.freemem()}`);

var new_path = path.join(__dirname, "abc.js");

console.log(new_path);
*/
//File systems
const file = require("fs");
//Read File
//Sync
/*
var message = file.readFileSync("message.txt");
console.log(message.toString());
*/
//Async
file.readFile("message.txt", function(err, info) {
    if (err) {
        console.log("error occured");
    } else {
        console.log(info.toString());
    }
});

file.writeFile("./new_file.txt", "another file", function(err) {
    if (err) {
        console.log("error occured");
    }
});

//Write File