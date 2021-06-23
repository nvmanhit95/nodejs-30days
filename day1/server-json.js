var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
  console.log("Port Number : 3000");
  res.writeHead(200, {'Content-Type': 'application/json'});
  let responseJson = {
    status: 200,
    message: 'successful',
    result: ['Sunday', 'Monday', 'Tuesday'],
    code: 2000,
  };
  console.log('Service running');
  res.end(JSON.stringify(responseJson));
}).listen(3000);
