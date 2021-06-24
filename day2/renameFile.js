var fs = require('fs');

fs.rename('./resources/writeFIle.txt', './resources/newWriteFIle.txt', (err) => {
  if (err) {
    throw err;
  }
  console.log("File renamed successfully");
});
console.log("This method is Asynchronous");
