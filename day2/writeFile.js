var fs = require('fs');

var content = 'This is content of file';
fs.writeFile('./resources/writeFIle.txt', content, (err, data) => {
  if (err) {
    throw err;
  }
  console.log("It\'s saved");
});
