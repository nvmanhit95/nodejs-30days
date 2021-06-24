var fs = require('fs');

var content = 'This data will be appended at the end of the file.';
fs.appendFile('./resources/writeFIle.txt', content, (err) => {
  if (err) {
    throw err;
  }
  console.log("The append content was appended successfully");
});
