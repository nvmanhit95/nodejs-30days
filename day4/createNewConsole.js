var ws = require('fs');

const {Console} = require('console');
const output = ws.createWriteStream('./resources/stdout.log');
const errOutput = ws.createWriteStream('./resources/stderr.log');

// Custom simple print
const print = new Console(output, errOutput);

const roll = 83947;
print.log('roll: %d', roll);
print.log('This will be stored in a file');
print.error('This will be stored in a file err');
