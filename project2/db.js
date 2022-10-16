// Encapsulates the database object
// A feeble attempt to create a "Singleton" object in JavaScript

const mongoClient = require('mongodb').MongoClient;


let _db;  // "Private" variable to hold the database object

// Connect to the database object
const connect = callback => {
  if (_db) {
    return callback(null, _db);
  }
  mongoClient.connect(process.env.DB_CONNECT)
    .then(client => {
      _db = client.db("orderDB");
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};

// Get the database object
const getDb = () => {
  if (!_db) {
    throw Error('Database not connected.');
  }
  return _db;
};

module.exports = {
  connect,
  getDb
};