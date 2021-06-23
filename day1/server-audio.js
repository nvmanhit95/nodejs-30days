var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log("Port Number : 3000");
  res.writeHead(200, {'Content-Type': 'audio/mp3'});
  fs.exists('./resources/horse.ogv', (exists) => {
    if (exists) {
      var rstream = fs.createReadStream('./resources/horse.ogv');
      rstream.pipe(res);
    } else {
      res.end('It is error 404');
    }
  })
}).listen(3000);
