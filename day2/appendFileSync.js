var fs = require('fs');

var content = 'This data will be appended at the end of the file.';
fs.appendFileSync('./resources/writeFIle.txt', content);
console.log('File appended successfully');
