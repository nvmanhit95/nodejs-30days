var crypto = require('crypto');

var algorithm = 'aes-256-ctr';
var password = 'Nodejs';

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

var text = "Nodejs for all web developer language";

var encrypted = encrypt(text);
console.log('encrypted', encrypted);
var decrypted = decrypt(encrypted);
console.log('decrypted', decrypted);
