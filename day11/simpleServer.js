var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/signup', function (req, res) {
  var name = req.query.name;
  var email = req.query.email;
  var password = req.query.password;
  console.log(name, email, password);
  res.send('In signup module');
})

app.get('/signin', function (req, res) {
  var name = req.query.name;
  var email = req.query.email;
  var password = req.query.password;
  console.log(name, email, password);
  res.send('In signed in module');
})

app.get('/signin/dashboard', function (req, res) {
  res.send('This is demo route for user who signed in and now reaches their dashboard');
})

app.listen(3000, function () {
  console.log('Server is listening at 3000');
});
