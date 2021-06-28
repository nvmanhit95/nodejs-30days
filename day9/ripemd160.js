var crypto = require('crypto');

var hash = crypto.createHash('ripemd160');

data = hash.update('nodejs', 'utf-8');

genHash = data.digest("hex");
console.log("Hash: " + genHash);
