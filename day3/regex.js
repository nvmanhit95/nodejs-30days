var fs = require('fs');

var fileName = './resources/content.txt';

var str = fs.readFileSync(fileName).toString();
var pattern = /data/gim;
var myArray = str.match( pattern );
var len = myArray.length;
console.log("Occurrences of pattern in the string is : " + len);