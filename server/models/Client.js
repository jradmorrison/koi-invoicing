const { model, Schema} = require('mongoose');

const clientSchema = new Schema({
  businessID: String,
  name: String,
  phone: String,
  email: String,
  password: String,
  contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }],
})

module.exports = model('Client', clientSchema);