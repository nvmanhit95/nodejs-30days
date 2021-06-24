var fs = require('fs');

fs.renameSync('./resources/writeFIleSync.txt', './resources/newWriteFIleSync.txt');
console.log("This method is Synchronous");
