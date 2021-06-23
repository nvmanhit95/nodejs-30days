var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log("Port Number : 3000");
  res.writeHead(200, {'Content-Type': 'application/pdf'});

  fs.readFile('./resources/sample.pdf', (error, data) => {
    if (error)
      res.json({status: 'error', msg: error});
    else {
      res.write(data);
      res.end();
    }
  })
}).listen(3000);
