// import mongoose
const { model, Schema} = require('mongoose');

// service schema
const serviceSchema = new Schema({
  businessID: String,
  cost: String,
  title: String,
  description: String,
})

// export service schema
module.exports = model('Service', serviceSchema);