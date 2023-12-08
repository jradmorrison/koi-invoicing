// import mongoose
const mongoose = require('mongoose');

// mongo cloud db 
const MONGODB = 'mongodb+srv://Admin:4ZPDkjqy5r9ivpEG@koidb.1avsswf.mongodb.net/?retryWrites=true&w=majority';

// connect to db
mongoose.connect(MONGODB)

// export connection
module.exports = mongoose.connection;