var fs = require('fs');

fs.unlink('./resources/newWriteFIle.txt', (err) => {
  if (err) {
    throw err;
  }
  console.log("File deleted successfully");
});
