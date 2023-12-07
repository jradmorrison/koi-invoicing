const { model, Schema} = require('mongoose');

const businessSchema = new Schema({
  name: String,
  email: String,
  password: String,
  companyLogo: String,
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }],
  clients: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
  createdAt: String,
})

module.exports = model('Business', businessSchema);