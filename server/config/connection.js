// import mongoose
const mongoose = require('mongoose');
require('dotenv').config();
// mongo cloud db 
const MONGODB_URI = process.env.MONGODB_URI;
// connect to db
mongoose.connect(process.env.MONGODB_URI);

// export connection
module.exports = mongoose.connection;