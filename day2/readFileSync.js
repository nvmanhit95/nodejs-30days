var fs = require('fs');
var fileName = './resources/message.txt';
var content = fs.readFileSync(fileName);
console.log("Content: ", content);
