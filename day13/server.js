const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();

// Database config
const url = 'mongodb://localhost:27017';
const dbName = 'demo';
const client = new MongoClient(url);

app.get('/', function (req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  return res.redirect('/public/index.html');
}).listen(3000);
console.log("Server listening at : 3000");

app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}))

var getHash = (pass, phone) => {

  let hmac = crypto.createHmac('sha512', phone);

  //passing the data to be hashed
  let data = hmac.update(pass);
  //Creating the hmac in the required format
  let gen_hmac = data.digest('hex');
  //Printing the output on the console
  console.log("hmac : " + gen_hmac);
  return gen_hmac;
}

const insertUser = function (db, data, cb) {
  const collection = db.collection('documents');
  collection.insertOne(data, (err, collection) => {
    if (err) throw err;
    console.log("Record inserted successfully");
    console.log(collection);
    cb(collection);
  });
}

// Sign-up function starts here. . .
app.post('/sign_up', function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let pass = req.body.password;
  let phone = req.body.phone;
  let password = getHash(pass, phone);

  let data = {
    "name": name,
    "email": email,
    "password": password,
    "phone": phone
  }

  client.connect(function (err) {
    if (err) {
      throw err;
    }
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    insertUser(db, data, function () {
      client.close();
    })
  });

  console.log("DATA is " + JSON.stringify(data));
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  return res.redirect('/public/success.html');
});
