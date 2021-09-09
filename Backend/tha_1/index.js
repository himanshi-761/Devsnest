var fs = require("fs");
fs.mkdirSync("tha_1");
fs.writeFileSync("tha_1/input.txt", "I love instagram");
fs.appendFileSync("tha_1/input.txt", "I am learning Node.js");

var obj = new test();
console.log(obj.print());