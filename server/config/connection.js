// import mongoose
const mongoose = require('mongoose');
require('dotenv').config();
// mongo cloud db 
const MONGODB = process.env.MONGODB;
// connect to db
mongoose.connect(MONGODB);

// export connection
module.exports = mongoose.connection;