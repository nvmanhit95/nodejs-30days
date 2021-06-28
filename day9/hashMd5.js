var crypto = require('crypto');

var hash = crypto.createHash('md5');

data = hash.update('nodejs', 'utf-8');

genHash = data.digest("hex");
console.log("hash: " + genHash);
