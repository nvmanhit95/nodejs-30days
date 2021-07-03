const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'demo';
const client = new MongoClient(url);

const insertDocuments = function (db, cb) {
  const collection = db.collection('documents');
  const data = [
    {a: 1}, {a: 2}, {a: 3}
  ];
  collection.insertMany(data, function (err, result) {
    if (err) {
      throw err
    }
    console.log('Inserted 3 documents into the collection');
    console.log(result);
    cb(result);
  })
}

client.connect(function (err) {
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  insertDocuments(db, function () {
    client.close();
  })
});
