var http = require('http');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('Service working');
  response.end('Service Working Success');
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log('Error occured: ', error);
  }

  console.log('Service is listening on ' + host + ':' + port);
});
