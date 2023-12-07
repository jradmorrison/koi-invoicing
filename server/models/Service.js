const { model, Schema} = require('mongoose');

const serviceSchema = new Schema({
  businessID: String,
  cost: String,
  title: String,
  description: String,
})

module.exports = model('Service', serviceSchema);