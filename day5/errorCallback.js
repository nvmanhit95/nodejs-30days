const fs = require('fs');
function nsCallback(err, data) {
  if (err) {
    console.log('Error: ', err);
    return;
  }
  console.log(data);
}

fs.readFile('./resources/content.txt', nsCallback);
fs.readFile('file_not_exists', nsCallback);
