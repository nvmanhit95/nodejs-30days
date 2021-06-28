var crypto = require('crypto');
var fs = require('fs');

var algorithm = 'sha256';

var hmac = crypto.createHmac(algorithm, 'mySecretKey');

data = hmac.update('nodejs');
//Creating the hmac in the required format
genHmac= data.digest('hex');
//Printing the output on the console
console.log("hmac : " + genHmac);