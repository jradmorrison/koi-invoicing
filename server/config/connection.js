const mongoose = require('mongoose');

const MONGODB =
  'mongodb+srv://Admin:4ZPDkjqy5r9ivpEG@koidb.1avsswf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB)

module.exports = mongoose.connection;