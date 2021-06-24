var fs = require('fs');

fs.readFile('./resources/content.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log("Content: " + data);
});
