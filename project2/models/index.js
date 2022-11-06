const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_CONNECT;
db.orders = require('./orders.js')(mongoose);
db.customers = require('./customers.js')(mongoose);

module.exports = db;
