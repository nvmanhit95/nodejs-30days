var crypto = require('crypto');

var hash = crypto.createHash('sha256');

data = hash.update('nodejs', 'utf-8');

genHash = data.digest("hex");
console.log("Hash: " + genHash);
