var fs = require('fs');

var content = 'This is content of file';
fs.writeFileSync('./resources/writeFIleSync.txt', content);
console.log('File written successfully')
