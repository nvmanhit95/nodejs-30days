var crypto = require('crypto');
var fs = require('fs');

var algorithm = 'sha256';

var hash = crypto.createHash(algorithm);

var filename = './resources/data.txt';
var fileData = fs.ReadStream(filename);

fileData.on('data', function (data) {
  hash.update(data);
});

fileData.on('end', function () {
  var genHash = hash.digest("hex");
  console.log('Hash generated using ' + algorithm + ' \nHashed output is: ' + genHash);
  fs.writeFileSync(filename, genHash);
})