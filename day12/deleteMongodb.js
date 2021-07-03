const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'demo';

MongoClient.connect(url, function (err, client) {
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  insertDocuments(db, function () {
    deleteDocument(db, function () {
      client.close();
    })
  });
})

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

const deleteDocument = (db, cb) => {
  const collection = db.collection('documents');
  collection.deleteOne({a: 3}, (err, result) => {
    console.log('Removed the document');
    cb(result);
  })
}
  