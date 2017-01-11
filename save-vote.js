const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:8081/meteor';

function insertDocument (avenger, vote, db, callback) {
  db.collection('avengers').insertOne({
    name: avenger.name,
    rate: vote,
    createdAt: new Date()
  }, function (err, res) {
    callback();
  })
}

function saveVote (vote, avenger) {
  MongoClient.connect(url, function(err, db) {
    insertDocument(avenger, vote, db, function() {
        db.close();
    });
  });
}

module.exports = saveVote;
